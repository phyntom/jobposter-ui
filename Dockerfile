# Use a Node.js image as the base
FROM node:22-alpine

# Create a user with permissions to run the app (non-root for security)
RUN addgroup app && adduser -S -G app app

# Set the user to run the app
USER app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Temporarily switch to root to set permissions
USER root

# Change the ownership of /app directory to the app user
RUN chown -R app:app .

# Switch back to the non-root app user
USER app

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app for production (outputs to `dist` folder)
RUN npm run build

# Switch to a lightweight Node.js server to serve static files
# Serve the static files from the `dist` directory using `serve` package or similar
RUN npm install -g serve

# Expose the port you plan to use
EXPOSE 3000

# Command to serve the app in production mode using `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
