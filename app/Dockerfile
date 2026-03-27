# Start with a base image (Node.js 18)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files from your computer to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Tell Docker which port the app uses
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application
CMD ["npm", "start"]