# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:slim as base
WORKDIR /usr/src/app

LABEL version="5.0.0"
LABEL mainteiner="juanfcv2001@correo.ugr.es"

FROM base AS install
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# run the app
USER bun
WORKDIR /app/test
ENTRYPOINT [ "bun", "run", "test" ]
