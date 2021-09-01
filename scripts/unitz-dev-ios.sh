#! /bin/bash

PWD=$(pwd)

#force to stop metro
kill -9 $(lsof -t -i:8081)

source ../../../config/ws-scripts/sm/num.sh


# config
yarn config:ios
# yarn install
# yarn nuke:modules

# install
cd ios
# pod install

# build
fastlane firebase
cd ..
# release
