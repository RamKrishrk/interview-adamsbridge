Node.js Hello World App (CI/CD with Jenkins + Docker + EC2)

This project is a basic Node.js application that demonstrates a complete CI/CD pipeline using Jenkins, Docker, Docker Hub, and AWS EC2.

---

Features

- Minimal Node.js web app that returns "Hello World"
- Dockerized for containerized deployment
- CI/CD pipeline using Jenkins:
  - Pulls source code from GitHub
  - Builds and pushes Docker image to Docker Hub
  - Deploys the app on a remote EC2 instance

---

 Setup Instructions

1. Clone the Repository


git clone https://github.com/RamKrishrk/interview-adamsbridge.git
cd interview-adamsbridge
2. Build Docker Image Locally
docker build -t nodeapp .
3. Run Locally
docker run -d -p 80:3000 nodeapp
Visit the app at: http://localhost:80

--------------------


#####Jenkins Pipeline: How to Run
Prerequisites
Ensure the following tools and configurations are in place:

Jenkins installed with:
1.Docker plugin
2.SSH Agent plugin
3.Docker installed on the Jenkins host

AWS EC2 instance running with:
1.Docker installed
2.Port 80 open in security group
3.Jenkins credentials configured:
4.dockerhub-credential: Docker Hub username/password
5.ec2-ssh-key: SSH private key to access EC2
6.Jenkinsfile Summary
T
he Jenkinsfile automates the following steps:
1.Checkout code from GitHub
2.Build Docker image
3.Push image to Docker Hub
4.SSH into EC2 and:
 4.1.Pull latest image
 4.2.Stop and remove existing container
 4.3.Run new container on port 80

How to Run the Pipeline:
1.In Jenkins, create a Pipeline project
2.Point the pipeline to your GitHub repo
3.Use the included Jenkinsfile
4.Click Build Now
5.Optionally, configure GitHub webhook for automatic builds on git push.

