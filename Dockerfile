# Use an official Node.js runtime as a parent image
FROM node:20.9.0

# Set environment variables to optimize the container
ENV NODE_ENV production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH "/usr/bin/google-chrome-stable"

# Install necessary dependencies for Puppeteer's Chrome
# These dependencies are required to run Puppeteer/Chrome in a headless environment
RUN apt-get update && \
    apt-get install -y wget gnupg2 ca-certificates apt-transport-https software-properties-common && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install -y google-chrome-stable --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean


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
