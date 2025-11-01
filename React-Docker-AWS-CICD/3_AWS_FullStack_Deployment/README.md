# AWS Full Stack Deployment - Notes

This folder contains a minimal full-stack app:
- frontend/  -> React app (multi-stage Dockerfile)
- backend/   -> Node.js + Express API with Dockerfile

Suggested steps to deploy to AWS with load balancing:
1. Build and push Docker images (frontend & backend) to ECR.
2. Create ECS services or use EC2 instances with Docker.
3. For EC2 approach:
   - Launch at least two EC2 instances for the backend (or use an Auto Scaling Group).
   - Install Docker on EC2 and run the backend container on each instance.
   - Put the frontend behind an S3 + CloudFront or serve via nginx container on another EC2.
4. Create an Application Load Balancer (ALB):
   - Target group: backend instances (port 5000).
   - Health checks: /api/message
   - Listener: HTTP/HTTPS -> forward to target group.
5. Configure Security Groups:
   - ALB SG: allow 80/443 from the internet.
   - Backend SG: allow traffic from ALB security group on port 5000.
6. (Optional) Use Route 53 to point a domain to the ALB.
7. Test by accessing the ALB DNS name. The ALB will distribute incoming requests across backend instances.

This README is a short guideline — for production hardened deployments, include HTTPS, monitoring, autoscaling, secrets management, and proper CI/CD.
