# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Build the Vite app
RUN npm run build

# By default, Vite builds to a dist directory
# You can change the outDir in vite.config.js if needed

# Install serve to serve the built folder
# If you have a preferred static server, you can use that instead
RUN npm install -g serve

# Make port 3000 available
EXPOSE 3000

# Run serve to serve the built folder
# Ensure the path here matches the output directory of your Vite build
CMD ["serve", "-s", "dist"]