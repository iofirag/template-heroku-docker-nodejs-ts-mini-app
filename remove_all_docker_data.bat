REM remove all docker stoped containers
docker container prune

REM stop all docker running containers
docker container stop $(docker container ls -aq)
REM remove all docker stoped containers
docker container rm $(docker container ls -aq)

REM REM remove all docker stoped containers & images
docker system prune --volumes

REM REM remove all docker stoped containers & images
$images = docker images -a -q
foreach ($image in $images) { docker image rm $image -f }