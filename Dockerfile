FROM nginx
MAINTAINER AJ Bowen <aj@soulshake.net>

RUN apt-get update && apt-get install -y \
    vim

COPY ./src /data/www
COPY nginx.conf /etc/nginx/nginx.conf

RUN echo "alias ll='ls -lahF'" >> /root/.bashrc
