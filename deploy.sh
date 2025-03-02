#!/bin/bash

# Navigate to the project directory
cd /var/www/html/react-app

# Pull the latest changes
git pull origin main

# Install dependencies and build
npm install
npm run build

# Copy the built files to Apache’s web directory
rsync -av --delete build/ /var/www/html/

# Set correct permissions
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

# Restart Apache (if needed)
sudo systemctl restart apache2
