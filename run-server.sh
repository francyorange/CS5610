#!/bin/bash

# Docker run "mongo" and forward port 27017 to 27017
# specify container name "mongo" and do not start a second one if one exists by name

docker run --name mongo -d -p 27017:27017 mongo

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR/kanbas-node-server-app

npm install

npm install -g nodemon
nodemon index.js
