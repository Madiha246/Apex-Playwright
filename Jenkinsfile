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

            post {
                always {
                    script {
                        if (fileExists('playwright-report/index.html')) {
                            publishHTML(target: [
                                reportName: 'Playwright HTML Report',
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