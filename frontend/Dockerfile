# backend/Dockerfile
FROM node:18

WORKDIR /app

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy backend-kod
COPY . .

# Copy build från frontend (som nu ligger i ../build)
COPY ../dist ./frontend-dist

RUN npm install serve

EXPOSE 8080
CMD ["node", "server.js"]
