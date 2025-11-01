# Multi-stage Dockerfile for building and serving a React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
# Optional: copy custom nginx config if needed
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"] 
