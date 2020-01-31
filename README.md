# personal_site

Frontend (ReactJS):
-------------------
#### Local:
- npm start
#### Production:
- npm build

Backend (Python):
-----------------
#### Local:
- python manage.py runserver (inside api directory)
#### Database:
- python manage.py dumpdata <fixture name>
- python manage.py loaddata <fixture name>

Docker:
-------
#### Postgres:
- docker pull postgres (pull image from dockerhub)
- /bin/run-postgres (default superuser is postgres)
- docker exec -it <CONTAINER NAME> /bin/bash
- psql -U postgres
    
#### API:
- cd backend
- docker build .
- /bin/run-api

#### Debug:
- docker logs <CONTAINER ID>

#### Docker-Compose:
- docker-compose up -d --build

Kubernetes (run locally on Minikube):
-------------------------------------
#### Setup
- kubectl create -f postgres-deployment.yml
- kubectl create -f postgres-service.yml
- kubectl create -f api-deployment.yml
- kubectl create -f api-service.yml
- minikube list
#### Debug
- kubectl get pods
- kubectl logs <POD NAME> 
