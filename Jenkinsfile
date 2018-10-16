node {
        stage('Checkout') {
            checkout scm
        }

        stage('Image') {
                def customImage = docker.build("ptviet/payslipgenerator:${env.BUILD_ID}")
                customImage.push()
        }

        stage ('Run') {
            docker.image("ptviet/payslipgenerator:${env.BUILD_ID}").run('-p 80:80 --name payslipgenerator')
        }

}