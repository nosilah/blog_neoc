FROM python:3.9.1

RUN apt-get update -y \
    && apt-get install libsasl2-dev python-dev libldap2-dev libssl-dev libsnmp-dev -y

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt