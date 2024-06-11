.PHONY: setup dev run yarn-update

include .env

setup:
	docker build --no-cache . -t morethan-log

dev:
	docker run --env-file .env -it --rm -v $(PWD):/app -p 8001:3000 morethan-log /bin/sh -c "yarn run dev"

run:
	docker run --env-file .env -it --rm -p 3000:3000 -v $(PWD):/app morethan-log /bin/sh -c "rm -f ./public/sitemap.xml && yarn build && yarn run start"

lint:
	docker run --env-file .env -it --rm -v $(PWD):/app morethan-log /bin/sh -c "yarn lint"