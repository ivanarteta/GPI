#/bin/bash


cd webview-master

export PATH=$PATH:/home/alumno/Escritorio/GPI/sonar-scanner-3.3.0.1492-linux/bin
sonar-scanner -Dsonar.projectKey=webview-android2 -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle/wrapper

cd ..

cd easybuggy-master

export PATH=$PATH:/home/alumno/Escritorio/GPI/sonar-scanner-3.3.0.1492-linux/bin
mvn sonar:sonar \
  -Dsonar.projectKey=easybuggy3 \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=603b028384b55eb11a6e390a6740917f6421b464