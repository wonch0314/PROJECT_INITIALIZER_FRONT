# 1. React 빌드 단계
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 2. Nginx 단계 (정적 파일만 포함)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf



# docker build -t chanchan0314/my-front .
# docker login -u chanchan0314
# password 입력

# docker push chanchan0314/my-front

# docker run -d -p 5173:80 --network my-network --name my-front chanchan0314/my-front