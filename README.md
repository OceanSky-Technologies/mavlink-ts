# mavlink-ts

MAVLINK Typescript interface.

## Usage

To use this interface clone the repository and initialize the [MAVSDK-Proto](https://github.com/mavlink/MAVSDK-Proto) submodule:

```bash
git clone git@github.com:OceanSky-Technologies/mavlink-js.git
git submodule update --init --recursive
```

Use [nvm](https://github.com/nvm-sh/nvm) to install the latest `node` LTS version:

```bash
nvm use --lts
```

Also install [pnpm](https://pnpm.io/installation) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
Then run

```bash
pnpm install
```

Generate new Typescript interface files with protobuf using

```bash
pnpm generate # the generated files are found in `protobuf-gen`
```

Afterwards use the interface defined in the `src` folder.

To run unit tests use

```bash
pnpm test
```

and for linting run

```bash
pnpm lint
pnpm format-check
pnpm depcheck
```

The workspace can be cleaned using

```bash
pnpm clean
```

## Protobuf generation

This project is using [protobuf-ts](https://github.com/timostamm/protobuf-ts/tree/main) to generate the protobuf Typescript interface incl. gRPC bindings using [grpcweb-transport](https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md#grpc-web-transport). This is not a perfect gRPC protocol implementation but the only one that works in a browser as of today. It then needs a proxy server to convert gRPC-web to gRPC.

The code generation happens statically when running `pnpm build` because this removes the need for dynamic code generation when loading the library which increases startup time of the end-user application.
