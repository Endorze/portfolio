# Step 1: Build the React app
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the app
COPY . .

# Expose port 80
EXPOSE 8080

# Start nginx
CMD ["node", "server.js"]