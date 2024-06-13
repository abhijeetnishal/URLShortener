# Used  a lightweight Node.js base image
FROM node:14-alpine

# Setting up  the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on
EXPOSE 5000

# Set environment variables from .env file
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "server.js"]
