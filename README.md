# Dev Challenge

This is an app to count number of words in a text for a development challenge.

  - URL endpoint, i.e. http://localhost:3000/
  - Minimal purposeful HTML interface 
  - Simple /status page with server uptime, number of queries since last restart
  - Validation mask for reject empty value on text area
  - Docker container compatible (Dockerfile and compose YAML)

### Features!

  - Node.JS v12.6.0 with npm modules: 
    - Express 4.17.1
    - node-input-validator 3.6.4
    - body-parser 1.19.0
  - Docker container 18.9.2

> The source code is 'count.js' with all methods and launcher for Node. It has
a Dockerfile and package.json to define app container. For a quick setup see and
run using 'docker-compose.yml' version 3 to start app container.

All of this project are focused on easy and quick way to create and put app online.

### Installation

Auto-install using Docker 2.0.0.3 with compose:

```sh
$ docker-compose up --build
```

If you prefer to run standalone app and database containering, you shoud use
these commands:

```sh
$ docker run -p 3000:3000 -d edgar/node-web-app
```

Now, open your browser on http://localhost:3000 and cheers!




### Todos

 - Write MORE Tests
 - Increase better HTML and styles on interface

License
----

open!


**Free Software, Hell Yeah!**
