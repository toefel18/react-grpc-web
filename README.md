# Using gRPC-web from a react app 

Sample project showing how to use grpc-web to access a gRPC service from
a browser application written in react. 

Built with Java 11, but 1.8 should also be supported, change `sourceCompatiblity` in the build.gradle to 1.8

Requirements: docker

## Quickstart

1. Open the project in your favourite IDE 
     * run `./gradlew idea` or `./gradlew eclipse` to configure your IDE to detect the generated code directories.
     
1. Build the service: `./gradlew build` on Linux/Mac

1. Run `ServerMain.java` to start the gRPC server (port 53000) (run it in IDE) 
   
1. Run `ClientMain.java` to test some calls using the generated gRPC client (run it in IDE) 

1. Run `./start-envoy.sh` to start the grpc-web proxy (port 8080)

1. Start the react app

       cd react-web-app
       npm i
       npm start

## Details on how to generate grpc-web client

The quickstart above works because I committed the generated files in
directory `/react-web-app/src/grpc/**`. If you change the service definition
in your .proto, then you need to follow the steps below! 

#### Clone grpc-web and compile protobuf

Clone [github.com/grpc/grpc-web](https://github.com/grpc/grpc-web) this project first.
Then I followed these steps that compile protoc and then builds and 
installs the `protoc-gen-grpc-web` plugin that we need in the next step.

    git clone git@github.com:grpc/grpc-web.git
    cd grpc-web
    sudo apt autoconf g++ libtool
    ./scripts/init_submodules.sh
    pushd third_party/grpc/third_party/protobuf
    ./autogen.sh && ./configure && make -j8 && sudo make install
    popd
    sudo make install-plugin

protoc and protoc-gen-grpc-web are now available on your system.

#### Generate grpc javascript client 

From the root of this repository we can run the following command to 
generate a javascript gRPC client that we can use in the browser. 
the sources are written to `react-web-app/src/grpc` so our react app
can import them.

 ```
 protoc -I. -Ibuild/extracted-include-protos/main \
    src/main/proto/reservation_service.proto \
    --js_out=import_style=commonjs:react-web-app/src/grpc \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:react-web-app/src/grpc
 ```
    
Then open the generated files and add `/* eslint-disable */` 
Otherwise you will see a lot of errors with `proto` not defined and 'COMPILED' not defined.

TODO this should be automated as well.

#### Running Envoy with grpc-web filter

Envoy is still required as a gateway proxy for grpc-web to a gRPC service. It also 
takes care of CORS. The script start-envoy.sh starts envoy on port 8080. Envoy will 
be run using docker with the `--network=host` option. This means it is reachable at 
`http://localhost:8080` 

    ./start-envoy.sh
    
#### Run the gRPC server

Run `ServerMain.java` to start the gRPC service
Run `ClientMain.java` to load some test data into the server via its gRPC API.

#### Start the react web application

    cd react-web-app
    npm i
    npm start
    
Now open [http://localhost:3000](http://localhost:3000) and click the button to see it in action :)