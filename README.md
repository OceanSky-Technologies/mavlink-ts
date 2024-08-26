# mavlink-js

MAVLINK javascript interface.

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

Generate new Javascript interface files with protobuf using

```bash
pnpm build # the generated files are found in `protobuf-gen`
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

This project is using [grpc-node](https://github.com/grpc/grpc-node/tree/master) to generate the protobuf Javascript interface incl. gRPC bindings using [grpc-js](https://www.npmjs.com/package/@grpc/grpc-js).
The code generation happens statically when running `pnpm build` because this removes the need for dynamic code generation when loading the library which increases startup time of the end-user application.
