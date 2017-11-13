FROM python:latest

WORKDIR /usr/src/app
ADD . .
RUN pip install --no-cache-dir cherrypy Pillow
EXPOSE 8080
ENTRYPOINT ["python3", "server.py"]