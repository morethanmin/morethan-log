# Use the node 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and yarn.lock files
COPY package.json yarn.lock* /app/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . /app