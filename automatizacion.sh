#/bin/bash

cd webview-master
export PATH=$PATH:/home/alumno/Escritorio/GPI/sonar-scanner-3.3.0.1492-linux/bin
sonar-scanner -Dsonar.projectKey=webview -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle/wrapper
chmod a+x gradlew
./gradlew assembleDebug
cp app/build/outputs/apk/debug/app-debug.apk ./..

cd ..

cd easybuggy-master
mvn clean install
