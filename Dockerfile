FROM node:22.2.0-alpine


# Copy only the package.json and yarn.lock files
COPY package.json yarn.lock* /app/

# Install dependencies
RUN yarn install

WORKDIR /app