FROM node:16.13.2-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN printf "$NOTION_PAGE_ID" >> .env.production
RUN printf "$GOOGLE_MEASUREMENT_ID" >> .env.production
RUN printf "$GOOGLE_SITE_VERIFICATOIN" >> .env.production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]