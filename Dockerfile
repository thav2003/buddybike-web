# Stage: Development Environment
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy all source code to the working directory
COPY . .

# Expose the port that Next.js runs on (3000 by default)
EXPOSE 3000

# Set environment variable to development
ENV NODE_ENV=development

# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]
