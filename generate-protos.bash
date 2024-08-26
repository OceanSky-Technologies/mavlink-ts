#/bin/bash

set -e

ROOT_DIR=$(git rev-parse --show-toplevel)

OUT_DIR="$ROOT_DIR/protobuf-gen"
MAVSDK_PROTOS_FOLDER="$ROOT_DIR/MAVSDK-Proto/protos"

if [ -d "$OUT_DIR" ]; then
    echo "Cleaning output folder $OUT_DIR"
    rm -rf "$OUT_DIR"
    mkdir -p "$OUT_DIR"
else
    echo "Creating output folder $OUT_DIR"
    mkdir -p "$OUT_DIR"
fi

PROTOS=$(find ${MAVSDK_PROTOS_FOLDER} -iname "*.proto" -type f)
echo "Generating $(find ${MAVSDK_PROTOS_FOLDER} -iname "*.proto" -type f | wc -l) messages..."

npx grpc_tools_node_protoc \
    -I$MAVSDK_PROTOS_FOLDER \
    --js_out=import_style=commonjs,binary:$OUT_DIR\
    --grpc_out=grpc_js:$OUT_DIR \
    $(find ${MAVSDK_PROTOS_FOLDER} -iname "*.proto" -type f)

# Add "eslint-disable"
for file in $(find "$OUT_DIR" -type f -iname "*.js" -or -iname "*.ts") ; do
    printf '/* eslint-disable */\n\n' | cat - "${file}" > temp && mv temp "${file}"

    # fix autocompletion
    printf '\n\n// fix autocompletion\nmodule.exports = exports;\n' >> "${file}"

    # rename from .js to .cjs and adjust all includes of shared files
    sed -i "/require(.*google-protobuf.*\.js/!s/\.js/\.cjs/g" "${file}" # replace all require paths except for google-protobuf itself
    mv "${file}" "${file/.js/.cjs}"
done

echo "Finished!"
exit 0
