# stage: 1
FROM node:latest as react-build

# Create app directory
WORKDIR /app

COPY . ./

RUN yarn install
RUN yarn build

# stage: 2 — the production environment
FROM nginx:1.25.4-alpine3.18

#RUN mkdir -p /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html 
RUN rm -rf ./*
COPY --from=react-build /app/build .
COPY docker-files/default.conf /etc/nginx/conf.d/default.conf
RUN rm -f /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# To provide a http authentication comment out the next two lines
#COPY conf/default.conf /etc/nginx/conf.d/default.conf
#COPY conf/authnginx/htpasswd /etc/nginx/authnginx/htpasswd
#EXPOSE 80