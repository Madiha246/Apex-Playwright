```groovy
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
                checkout scm
                bat 'npm ci'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Shards in Parallel') {
            parallel {
                stage('Shard 1') {
                    steps {
                        withEnv(['SHARD_ID=1']) {
                            bat 'npx playwright test --shard=1/3'
                            stash name: 'shard1', includes: 'blob-report-1/**'
                        }
                    }
                }

                stage('Shard 2') {
                    steps {
                        withEnv(['SHARD_ID=2']) {
                            bat 'npx playwright test --shard=2/3'
                            stash name: 'shard2', includes: 'blob-report-2/**'
                        }
                    }
                }

                stage('Shard 3') {
                    steps {
                        withEnv(['SHARD_ID=3']) {
                            bat 'npx playwright test --shard=3/3'
                            stash name: 'shard3', includes: 'blob-report-3/**'
                        }
                    }
                }
            }
        }

        stage('Merge and Publish Report') {
            steps {
                bat 'if exist all-blob-reports rmdir /s /q all-blob-reports'
                bat 'if exist playwright-report rmdir /s /q playwright-report'

                bat 'mkdir all-blob-reports'
                bat 'mkdir all-blob-reports\\blob-report'

                unstash 'shard1'
                unstash 'shard2'
                unstash 'shard3'

                bat 'copy /Y blob-report-1\\*.zip all-blob-reports\\blob-report\\'
                bat 'copy /Y blob-report-2\\*.zip all-blob-reports\\blob-report\\'
                bat 'copy /Y blob-report-3\\*.zip all-blob-reports\\blob-report\\'

                bat 'npx playwright merge-reports --reporter html all-blob-reports/blob-report'
            }

            post {
                always {
                    script {
                        if (fileExists('playwright-report/index.html')) {
                            publishHTML(target: [
                                reportDir: 'playwright-report',
                                reportFiles: 'index.html',
                                reportName: 'Playwright HTML Report',
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

    post {
        always {
            echo 'Playwright sharded execution completed.'
        }
    }
}
```