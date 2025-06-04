pipeline {
    agent any
    environment {
        APP_NAME = 'nodeapp'
        IMAGE_NAME = "ram14devops/${APP_NAME}:latest"
        DOCKERHUB_CREDENTIALS = 'dockerhub-credential' // Jenkins credential ID
        SSH_KEY_ID = 'ec2-ssh-key'           // SSH key stored in Jenkins
        EC2_USER = 'ec2-user'                               // ec2 username
        EC2_HOST = '54.167.72.221'                     // EC2 public IP 
        APP_PORT = '3000'                                   // app port
    }
    options {
        timestamps()
        skipStagesAfterUnstable()
    }
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/RamKrishrk/interview-adamsbridge.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}"
                script {
                    docker.build(IMAGE_NAME)
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub...'
                script {
                    docker.withRegistry('', DOCKERHUB_CREDENTIALS) {
                        docker.image(IMAGE_NAME).push()
                    }
                }
            }
        }
        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2...'
                sshagent (credentials: [SSH_KEY_ID]) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                        docker pull ${IMAGE_NAME} && \
                        docker stop ${APP_NAME} || true && \
                        docker rm ${APP_NAME} || true && \
                        docker run -d --name ${APP_NAME} -p 80:${APP_PORT} ${IMAGE_NAME}
                    '
                    """
                }
            }
        }
    }
    post {
        success {
            echo 'CI/CD Pipeline completed successfully.'
        }
        failure {
            echo 'CI/CD Pipeline failed. Please check logs.'
        }
    }
}
