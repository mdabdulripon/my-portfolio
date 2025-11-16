pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                    # Run build via Docker CLI (no docker agent plugin needed).
                    export DOCKER_HOST=tcp://jenkins-docker:2376
                    docker version
                    docker run --rm \
                      -e CI=true \
                      -v "$PWD":/workspace \
                      -w /workspace \
                      node:18-alpine sh -c "
                        ls -la
                        node --version
                        npm --version
                        npm ci
                        npm run build
                        ls -la
                      "
                '''
            }
        }
    }
}
