ARG NODE_IMAGE="node:14"
ARG NGINX_IMAGE="nginx:1.17-alpine"

FROM ${NODE_IMAGE} AS build

WORKDIR /usr/src/chat

COPY package.json package-lock.json ./
RUN npm i

ARG NEXT_PUBLIC_WS_API=""
COPY . .
RUN npm run build && npm run export

FROM ${NGINX_IMAGE}

COPY --from=build /usr/src/chat/out /usr/share/nginx/html
