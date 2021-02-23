| [![5G-VICTORI logo](doc/images/5g-victori-logo.png)](https://www.5g-victori-project.eu/) | This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 857201. The European Commission assumes no responsibility for any content of this repository. | [![Acknowledgement: This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 857201.](doc/images/eu-flag.jpg)](https://ec.europa.eu/programmes/horizon2020/en) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


# Manifest Transformer

Manipulates URLs in manifest files of adaptive bitrate streams.

## What is this?

The Manifest Transformer service is part of the [platform](../../../5gv-platform) for media caching on trains. It replaces hostnames of URLs in manifest of adaptive bitrate video streams by the hostname of the media cache on the train. During precaching, requests for manifest files are forwarded to the Manifest Transformer by the Online Cache. The Manifest Transformer downloads the manifest from the upstream location and tranforms it before passig the result to the Online Cache, where it will be cached.

## How does it work?

Provides a HTTP API which the Cache can redirect requests for manifest files to. Example call:

```bash
$ curl http://localhost:3004?url=https://www.example.com/manifest.m3u8
```

The Manifest Transformer downloads the respective document and applies a regular expression, which modifies the manifest so that all segment URLs point to the Offline Cache on the train (see: [`app.service.ts`](src/app.service.ts)). The result is send as a response to the callee.

## Technologie used

- [Nest.js](https://nestjs.com/)

## Install, build, run

**Note:** _Typically you would use the `up.sh` script from the [Platform](../../../5gv-platform) project to install, build and run this service as part of a composite of docker services. Read on if you intend to run the service directly on your host system._

**Prerequestits**: Following software needs to be installed on your host machine in order to execute the subsequent steps.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

First, `git clone` this project and change into its root directory. Than run the following command to install its dependencies:

```bash
$ npm install
```

You can than run the service in three different modes.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

With following command you can build a [docker image](https://www.docker.com) for this service. But again, typically you use the startup script `up.sh` of the [Platform](../../../5gv-platform) project to do the job.

```bash
$ DOCKER_BUILDKIT=1 docker build --ssh gitlab="$HOME/.ssh/<<your_private_key_name>>" -t manifest-transformer:latest .
```

Replace `<<your_private_key_name>>` by the name of the private key used to authenticate at the repository.
