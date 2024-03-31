FROM nginx:latest

ADD nginx/default.conf /etc/nginx/conf.d/

COPY *.php /var/www/html/
COPY ../assets /var/www/html/assets
COPY ../pages /var/www/html/pages
