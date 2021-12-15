FROM wordpress:5.8.1-fpm-alpine

RUN mkdir -p /var/www/html

RUN apk --no-cache add shadow && usermod -u 1000 www-data

RUN chmod -R 775 wp-content
