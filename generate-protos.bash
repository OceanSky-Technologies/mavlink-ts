#/bin/bash

set -e

ROOT_DIR=$(git rev-parse --show-toplevel)

OUT_DIR="$ROOT_DIR/protobuf-gen"
MAVSDK_PROTOS_FOLDER="$ROOT_DIR/MAVSDK-Proto/protos"

if [ -d "$OUT_DIR" ]; then
    echo "Cleaning output folder $OUT_DIR"
    rm -r "$OUT_DIR"
    mkdir -p "$OUT_DIR"
else
    echo "Creating output folder $OUT_DIR"
    mkdir -p "$OUT_DIR"
fi

PROTOS=$(find ${MAVSDK_PROTOS_FOLDER} -iname "*.proto" -type f)
echo "Generating $(echo "$PROTOS" | wc -l) messages..."

npx protoc \
    -I$MAVSDK_PROTOS_FOLDER \
    --ts_out=$OUT_DIR\
    --ts_opt=ts_nocheck \
    --ts_opt=eslint_disable \
    $(find ${MAVSDK_PROTOS_FOLDER} -iname "*.proto" -type f)

echo "Finished!"
exit 1
