# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:slim

LABEL version="5.0.0" \
     mainteiner="juanfcv2001@correo.ugr.es"

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

WORKDIR /app/test

ENTRYPOINT [ "bun", "run", "test" ]
