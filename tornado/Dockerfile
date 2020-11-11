FROM python:3.7.9-alpine3.11

# set working directory
WORKDIR /tornado

# install app dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt