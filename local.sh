# spins up a local dev shell

# yarn install
# yarn dev

docker run -it --name chis-blog-dev --rm -v $(pwd):/app -w /app -p 2565:3000 --env-file .env node:18-alpine /bin/sh
