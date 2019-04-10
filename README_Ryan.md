# Chat System By Ryan

## Chat System

Server (localhost:3000)
Client A (localhost: 4001)
Client B (localhost: 5001)

## Open Chat
1. npm run bootrap
2. npm run build-server
3. create a new process and exec `npm run build-clientA`
4. create a new process and exec `npm run build-clientB`
5. create Redis server with port of 6380

You can open the following link to see the features that finished.

clientA: http://{localhost}:4001/
clientB: http://{localhost}:5001/
server available services: http://{localhost}:3000/available

## Docker compose
You can also run this project by using docker compose
1. git pull this project
2. run `docker-compose up -d`
3. then visit above link, and this chat is working.

## work done
1. chat system by using koa-socket and its UI part
2. integrate Bonjour feature
3. ioredis
4. integrate docker

## work remaining
1. testing