FROM node:alpine as build

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /dist /var/www/dist
COPY --from=build nginx.conf /etc/nginx/conf/default.conf
EXPOSE 3000
CMD [ "nginx","-g","daemon off;"]