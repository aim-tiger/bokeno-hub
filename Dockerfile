# Use an official Node.js runtime as a parent image
FROM node:20.9.0

# Set environment variables to optimize the container
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Bun package manager
RUN curl https://bun.sh/install | bash

# Update PATH to include Bun
ENV PATH="/root/.bun/bin:${PATH}"

# Install project dependencies
RUN bun install --production

# Copy the rest of the project files
COPY . .

# Build the project (if needed, depending on the project setup)
# RUN bun build src/main.ts

# Expose the port the app runs on (adjust this if necessary)
EXPOSE 3001

# Command to run the app
CMD ["bun", "run", "src/main.ts"]
