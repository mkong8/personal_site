# personal_site

Frontend (ReactJS):
- run local development client: npm start

- build production webpack: npm build

Backend (Python):
- run local development api: python manage.py runserver (inside api directory)

- create fixture from database: python manage.py dumpdata <fixture name>
- load fixtures into database: python manage.py loaddata <fixture name>

Docker:
    Postgres:
    - docker pull postgres (pull image from dockerhub)
    - /bin/run-postgres (default superuser is postgres)
    - docker exec -it <CONTAINER NAME> /bin/bash
    - psql -U postgres

    API:
    - cd backend
    - docker build .
    - /bin/run-api

    Debug:
    - docker logs <CONTAINER ID>

Docker-Compose:
    - docker-compose up -d --build