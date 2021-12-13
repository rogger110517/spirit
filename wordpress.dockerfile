FROM wordpress:5.8.1-fpm-alpine

WORKDIR /var/www/html

COPY ./wordpress .
COPY ./wp-content .

CMD ["chown", "-R", "www-data:www-data", "/var/www/html/wp-content/"]
