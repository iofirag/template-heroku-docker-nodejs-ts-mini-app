REM Stop and remove last image build.
docker-compose down
REM Build image again
REM This create our services using the configuration in docker-compose.yml and docker-compose.prod.yml 
REM (but not the dev configuration in docker-compose.override.yml).
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d