# Use the base image with Node.js 12
FROM node:12

# Copy the current directory into the Docker image
COPY . /ubahn_search_ui_api

# Set working directory for future use
WORKDIR /ubahn_search_ui_api

# Install the dependencies from package.json
RUN npm install
CMD npm start
