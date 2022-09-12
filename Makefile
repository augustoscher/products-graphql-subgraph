.PHONY: help run stop rebuild

.DEFAULT: help
help:
	@echo "make dev"
	@echo "       starts the application"
	@echo "make dev-logs"
	@echo "       starts the application with logs"
	@echo "make stop"
	@echo "       stops the application"
	@echo "make rebuild"
	@echo "       rebuild containers"

test:
	yarn test

install:
	yarn install

dev: stop
	docker-compose up -d
	@echo "Products GraphQL Subgraph running."

dev-logs: stop
	docker-compose up -d && docker-compose logs -f -t
	@echo "Products GraphQL Subgraph running."

stop:
	docker-compose down
	@echo "Products GraphQL Subgraph stoped."

rebuild: stop
	docker-compose up -d --build
