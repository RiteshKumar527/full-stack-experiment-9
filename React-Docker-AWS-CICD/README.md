# React-Docker-AWS-CICD - Sample Project

This archive contains three folders corresponding to the tasks requested:

1) 1_Dockerize_React_App - a small React app with a multi-stage Dockerfile (build with Node, serve with Nginx).
2) 2_GitHub_Actions_CICD - a sample React app and a GitHub Actions workflow that runs tests and builds on push to main.
3) 3_AWS_FullStack_Deployment - minimal full-stack example (React frontend + Express backend) and Dockerfiles, plus README with deployment guidance.

How to use:
- Unzip the archive.
- Follow README.md files and run Docker build commands, or push to GitHub to test GitHub Actions.

Example Docker build & run for the first project:
  cd 1_Dockerize_React_App
  docker build -t react-dockerized .
  docker run -p 80:80 react-dockerized

If you want any tweaks (extra tests, CI deploy to a specific provider, production nginx config, or Terraform for infra), tell me which and I'll update the files.
