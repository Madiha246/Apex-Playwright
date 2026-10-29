pipeline {
    agent any

      environment {
        BASE_URL = 'https://aim-hms-demo.web.app/login'
        USERNAME = 'MS'
        PASSWORD = credentials('ms@123')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def status = bat(script: 'npx playwright test"', returnStatus: true)
                    if (status != 0) {
                        echo "Tests failed, but continuing to generate reports..."
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Generating HTML reports...'


            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                 alwaysLinkToLastBuild: true,
                allowMissing: true,
                linkRelative: false
            ])

        
        }
    }
}
