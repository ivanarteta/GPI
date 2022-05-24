#/bin/bash


cd webview-master

export PATH=$PATH:/home/alumno/Escritorio/GPI/sonar-scanner-3.3.0.1492-linux/bin
sonar-scanner -Dsonar.projectKey=android -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle/wrapper

cd ..

cd easybuggy-master

export PATH=$PATH:/home/alumno/Escritorio/GPI/sonar-scanner-3.3.0.1492-linux/bin
mvn sonar:sonar \
  -Dsonar.projectKey=wordpress \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=234951cc2a82cea8b40cfc9e070a9895f23f57bb