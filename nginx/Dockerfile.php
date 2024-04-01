FROM php:fpm-alpine

COPY *.php /var/www/html/
COPY ../assets /var/www/html/assets
COPY ../pages /var/www/html/pages
