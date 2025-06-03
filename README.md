# Node.js Hello World App

A simple Node.js application to test CI/CD using Jenkins and Docker.

## Setup

1. Clone the repository.
2. Build the Docker image:

docker build -t nodeapp .

3. Run the container:

docker run -p 3000:3000 nodeapp

## CI/CD Pipeline

The Jenkins pipeline:
- Pulls code from GitHub
- Builds a Docker image
- Pushes it to Docker Hub
- Deploys to a remote EC2 instance
