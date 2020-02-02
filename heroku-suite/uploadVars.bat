foreach($line in Get-Content ..\.env) {
    heroku config:set $line
}