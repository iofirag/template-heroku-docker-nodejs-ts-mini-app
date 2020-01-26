// Development / vpn
change script in Dockerfile to 'start:dev:hotreload' | 'start:dev:hotreload-debug' | 'start:dev:hotreload-debug-wait'
change environment ('env_file' key) in docker-compose.yml to development ('dev.env')
run:
$ docker-compose down
$ docker-compose build
$ docker-compose up




// Production
change script in Dockerfile to 'start'
change environment ('env_file' key) in docker-compose.yml to production ('prod.env')
run:
$ heroku container:push web -a docker-nodejs-app-oa
$ heroku container:release web -a docker-nodejs-app-oa
$ heroku open -a docker-nodejs-app-oa


* Features: *
docker
  nodemon
    hot-reload
  inspector
    breakpoint
    breakpoint-wait
  ts-node