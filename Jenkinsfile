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
stage('Run Shards in Parallel') {
            parallel {
                stage('Shard 1') {
                    steps {
                        script {
                            def result = bat(
                                script: 'npx playwright test --shard=1/3 --reporter=blob',
                                returnStatus: true
                            )
                            if (result != 0) {
                                error('Shard 1 failed')
                            }
                        }
                    }
                    post {
                        always {
                            stash(
                                name: 'blob-shard-1',
                                includes: 'blob-report/**',
                                allowEmpty: true
                            )
                        }
                    }
                }

                stage('Shard 2') {
                    steps {
                        script {
                            def result = bat(
                                script: 'npx playwright test --shard=2/3 --reporter=blob',
                                returnStatus: true
                            )
                            if (result != 0) {
                                error('Shard 2 failed')
                            }
                        }
                    }
                    post {
                        always {
                            stash(
                                name: 'blob-shard-2',
                                includes: 'blob-report/**',
                                allowEmpty: true
                            )
                        }
                    }
                }

                stage('Shard 3') {
                    steps {
                        script {
                            def result = bat(
                                script: 'npx playwright test --shard=3/3 --reporter=blob',
                                returnStatus: true
                            )
                            if (result != 0) {
                                error('Shard 3 failed')
                            }
                        }
                    }
                    post {
                        always {
                            stash(
                                name: 'blob-shard-3',
                                includes: 'blob-report/**',
                                allowEmpty: true
                            )
                        }
                    }
                }
            }
        }

        stage('Merge and Publish Report') {
            steps {
                script {
                    bat 'if not exist all-blob-reports mkdir all-blob-reports'

                    dir('all-blob-reports') {
                        unstash 'blob-shard-1'
                        unstash 'blob-shard-2'
                        unstash 'blob-shard-3'
                    }

                    bat 'npx playwright merge-reports --reporter html all-blob-reports/blob-report'
                }
            }
            post {
                always {
                    script {
                        if (fileExists('playwright-report/index.html')) {
                            publishHTML(target: [
                                reportDir: 'playwright-report',
                                reportFiles: 'index.html',
                                reportName: 'Playwright Sharded HTML Report',
                                alwaysLinkToLastBuild: true,
                                keepAll: true,
                                allowMissing: true
                            ])
                        } else {
                            echo 'HTML report was not generated.'
                        }
                    }
                }
            }
        }
    }