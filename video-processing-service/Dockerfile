# Use an official Node runtime as base image
FROM node:20.6.1

# Set working directory
WORKDIR /usr/src/app

# Install global packages (if needed)
RUN npm install -g ts-node

# Copy package.json and package-lock.json for optimal caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Compile TypeScript code (optional)
# RUN npm run build

# Set environment variables if needed
# ENV SOME_ENV_VAR some_value

# Expose port
EXPOSE 3000

# Run application
CMD ["npm", "run", "start"]
