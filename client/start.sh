#!/bin/bash
set -e

if [ "$APP_ENV" = "production" ] || [ "$APP_ENV" = "staging" ] ; then
  yarn add serve
  serve -s build -l 80
else
  echo "We're in dev mode"

  echo "Installing dev Dependencies"
  
  echo "Starting dev server"
  yarn start
fi