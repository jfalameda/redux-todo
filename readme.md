# Installation

Node 5.4.1 or above is required.
```
$ npm install
$ npm install babel-cli -g
```

# Running the project

First, compile the assets
```
$ npm run compile
```
then run the server
```
$ babel-node server.js
```

# Installation and running with docker

```
$ docker build -t todo-node .
$ docker run -p 8080:8080 todo-node
```
