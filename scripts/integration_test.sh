#!/bin/bash

docker-compose up -d
sleep 10
docker ps -a
cp .env.test .env
cp node_modules/rebased/service/storage/dynamo.js node_modules/rebased/service/storage/dynamo.js.copy
cp tests/utils/misc/dynamo.js node_modules/rebased/service/storage/

cp node_modules/rebased/service/downstream/ses.js node_modules/rebased/service/downstream/ses.js.copy
cp tests/utils/misc/ses.js node_modules/rebased/service/downstream/

cp node_modules/rebased/schema/downstreamCommand.js node_modules/rebased/schema/downstreamCommand.js.copy
cp ./tests/utils/misc/downstreamCommand.js node_modules/rebased/schema/

JEST_EXIT_CODE=0
jest TZ=utc NODE_ENV=test LOG_LEVEL=DEBUG jest ./tests/unit/**/*.test.ts --setupFiles dotenv/config --runInBand --verbose || JEST_EXIT_CODE=$?

cp node_modules/rebased/service/storage/dynamo.js.copy node_modules/rebased/service/storage/dynamo.js
cp node_modules/rebased/service/downstream/ses.js.copy node_modules/rebased/service/downstream/ses.js
cp node_modules/rebased/schema/downstreamCommand.js.copy node_modules/rebased/schema/downstreamCommand.js

if [ $JEST_EXIT_CODE -ne 0 ]; then
  echo "Tests failed"
  exit $JEST_EXIT_CODE
fi
