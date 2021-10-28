FROM python:3.6
LABEL maintainer 'Phablo Vilas Boas'

# Encadeando multiplas layers, visto que o comando RUN sempre gera uma nova layer, para não ter este comportamento posso encadear.
RUN useradd www && \
	mkdir /app && \
	mkdir /log && \
	chown www /log

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]

# To create this image on the computer terminal: docker image build -t ex-build-dev .
# To create this a container from this image: sudo docker container run --name python-server -it -v $(pwd):/app -p 10001:8000 ex-build-dev
