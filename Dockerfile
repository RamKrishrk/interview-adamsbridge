FROM node:18-alpine
WORKDIR /var/www/html
COPY package*.json ./
RUN npm install --verbose
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
