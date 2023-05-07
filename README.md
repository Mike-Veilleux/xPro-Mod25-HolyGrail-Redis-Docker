# Holy Grail with Redis on Docker

The vintage "Holy Grail" web layout with retrofitted Dockerized Redis Database

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

This repo contains a Redis/Docker project for my MIT Full Stack development course.

<img src="https://github.com/Mike-Veilleux/xPro_mod25_HolyGrail_Redis_Docker/blob/main/images/Holygrail_Redis_Docker.png">

## Description

A classic web layout app created with Node, React, HTML, CSS, SuperAgent, Redis on Docker container.

This exercise is focusing on the following aspects:

- Run Redis on docker
- Use Redis as a database on the backend
- Serve HTML page containing React components from Node backend (static server)
- Express routing implementation

## Install Node server

Clone or download this repo, go to the **root** folder and run the following commands from a terminal window:

Install dependencies

```
npm install
```

Run project

```
npm run dev
```

## Install Redis container

From the Docker desktop app, build and run the Redis database with the following terminal command

```
docker run --name mike-redis -p 6379:6379 -d redis:4.0.1
```

## Licensing

This project is under MIT license.
