# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD ["node", "./dist/main.js"]