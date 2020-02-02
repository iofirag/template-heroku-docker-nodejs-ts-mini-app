* Prerequest installed: *
- NodeJS
- Npm
- yarn
- Docker-Desktop

----------------------------------------------

* Features: *
docker
  - nodemon
      hot-reload
  - inspector
      breakpoint
      breakpoint-wait
  - ts-node
  - develop / production environment modes
  
----------------------------------------------

* Environment Vars: *
  base-shared variables in:
    - .env
  override variables in:
    - environment/dev.env
    - environment/prod.env

----------------------------------------------

* Development / vpn *
  change script in docker-compose.override.yml to one of 'dev:hot-reload' | 'dev:hot-reload:debug' | 'dev:hot-reload:debug:wait'
  run:
    $ run-as-develop-mode.bat


* Production *
  run: 
    $ run-as-production-mode.bat


* Production for Heroku *
  https://devcenter.heroku.com/articles/container-registry-and-runtime#getting-started
  download heroku cli
  (by default: Heroku doesnt use docker-compose files at all. 
   so also doesnt use our environment files.
   optional: add "heroku-buildpack-docker-compose" add-on to support docker-compose.yml)
  run:
    $ heroku login
    $ heroku container:login
    $ heroku create <your-heroku-app-name>
      (optional: 
        in your Heroku app:
          Resources > Add-ons
        add "mLab MongoDB" add-on.
        you can view your mongoDB credentials in app vars under:
          settings > Config Vars > MONGODB_URI)
      (optional: 
        add new vars to heroku app
          $ heroku config:set TEST=my-test-var)
    $ heroku container:push web -a <your-heroku-app-name>
    $ heroku container:release web -a <your-heroku-app-name>
    $ heroku open -a <your-heroku-app-name>