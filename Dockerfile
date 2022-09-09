FROM node:16.16.0
COPY . .
RUN yarn 
RUN yarn build
ENTRYPOINT ["yarn", "run", "dev"]