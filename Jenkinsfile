pipeline {
    agent any

    parameters {
        string(
            name: 'BASE_URL',
            defaultValue: 'https://aim-hms-demo.web.app/login',
            description: 'Hospital application URL'
        )
        string(
            name: 'USERNAME',
            defaultValue: 'ms',
            description: 'Test username'
        )
    }

    environment {
        PASSWORD = credentials('PASSWORD')
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests and Publish Report') {
            steps {
                script {
                    int status = bat(
                        script: 'npx playwright test',
                        returnStatus: true
                    )

                    if (status != 0) {
                        currentBuild.result = 'FAILURE'
                        echo 'Playwright tests failed.'
                    }
                }
            }

            stage('Run Shards in Parallel') {

            parallel {

                stage('Shard 1') {
                    steps {
                        dir('shard-1') {
                            checkout scm
                            bat 'npm install'

                            script {
                                def result = bat(
                                    script: 'npx playwright test --shard=1/3 --reporter=blob',
                                    returnStatus: true
                                )

                                stash(
                                    name: 'blob-shard-1',
                                    includes: 'blob-report/**',
                                    allowEmpty: true
                                )

                                if (result != 0) {
                                    error('Shard 1 failed')
                                }
                            }
                        }
                    }
                }

                stage('Shard 2') {
                    steps {
                        dir('shard-2') {
                            checkout scm
                            bat 'npm install'

                            script {
                                def result = bat(
                                    script: 'npx playwright test --shard=2/3 --reporter=blob',
                                    returnStatus: true
                                )

                                stash(
                                    name: 'blob-shard-2',
                                    includes: 'blob-report/**',
                                    allowEmpty: true
                                )

                                if (result != 0) {
                                    error('Shard 2 failed')
                                }
                            }
                        }
                    }
                }

                stage('Shard 3') {
                    steps {
                        dir('shard-3') {
                            checkout scm
                            bat 'npm install'

                            script {
                                def result = bat(
                                    script: 'npx playwright test --shard=3/3 --reporter=blob',
                                    returnStatus: true
                                )

                                stash(
                                    name: 'blob-shard-3',
                                    includes: 'blob-report/**',
                                    allowEmpty: true
                                )

                                if (result != 0) {
                                    error('Shard 3 failed')
                                }
                            }
                        }
                    }
                }
            }

            post {
                always {
                    script {
                        bat 'if not exist all-blob-reports mkdir all-blob-reports'

                        dir('all-blob-reports') {
                            unstash 'blob-shard-1'
                            unstash 'blob-shard-2'
                            unstash 'blob-shard-3'
                        }

                        bat 'npx playwright merge-reports --reporter html all-blob-reports/blob-report'

                        if (fileExists('playwright-report/index.html')) {
                            publishHTML(target: [
                                reportName: 'Playwright Sharded HTML Report',
                                reportDir: 'playwright-report',
                                reportFiles: 'index.html',
                                keepAll: true,
                                alwaysLinkToLastBuild: true,
                                allowMissing: true
                            ])
                        } else {
                            echo 'No Playwright HTML report was found.'
                        }
                    }
                }
            }
        }
    }
}