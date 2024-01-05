# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:slim as base
WORKDIR /usr/src/app

LABEL version="5.0.0"
LABEL mainteiner="juanfcv2001@correo.ugr.es"

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "test" ]
