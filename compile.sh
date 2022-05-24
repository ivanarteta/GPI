#/bin/bash

cd webview-master
chmod a+x gradlew
./gradlew assembleDebug
cp app/build/outputs/apk/debug/app-debug.apk ./..

cd ..

cd easybuggy-master
mvn clean install

