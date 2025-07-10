FROM node:22-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Nginx 설치 추가
# RUN apt-get update && apt-get install -y nginx

# Nginx 설정 파일 복사
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Entrypoint: Nginx & Uvicorn 동시에 구동
CMD ["npm", "run", "preview"]

# docker build -t my-front .
# docker run -d -p 5173:5173 my-front --name my-front