FROM node:18 as build-stage

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:1.13.0-alpine as production-stage

RUN mkdir /app

COPY --from=build-stage /build/dist/ /app/
ADD ./nginx.conf /etc/nginx/conf.d/default.template

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"