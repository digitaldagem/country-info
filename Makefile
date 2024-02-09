CLIENT_IMAGES = $(shell docker images -q country-info-client)
SERVER_IMAGES = $(shell docker images -q country-info-server)

up:
	docker-compose up --build --remove-orphans

down:
ifneq ($(strip $(CLIENT_IMAGES)),$(strip $(SERVER_IMAGES)))
	docker-compose down -v --remove-orphans
	docker rmi $(CLIENT_IMAGES)
	docker rmi $(SERVER_IMAGES)
endif

.PHONY: up down