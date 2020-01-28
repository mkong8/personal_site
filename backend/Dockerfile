FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
COPY . /code/
CMD bash -c "python manage.py migrate && python manage.py loaddata socialmediafixtures && python manage.py runserver 0.0.0.0:8000"