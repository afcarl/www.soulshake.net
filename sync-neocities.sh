#!/bin/bash

for f in $(ls src); do
    echo "Uploading: src/$f as $f"
    docker run --rm -ti \
        -e NEOCITIES_USER \
        -e NEOCITIES_PASS \
        -v `pwd`/src:/src \
        soulshake/neocities \
        upload "/src/$f" "$f"
done
