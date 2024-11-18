# Use the official Node.js image as the base
FROM node:22-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app for production (outputs to `dist` folder)
RUN npm run build

# Install a lightweight static server to serve the built files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the app in production mode using `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
