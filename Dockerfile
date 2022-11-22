FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY /simple/package*.json ./simple/
COPY /yarn.lock ./

RUN yarn install

# Bundle app source
COPY /simple .

ENV PORT 3000

EXPOSE 3000

CMD [ "yarn", "dev-simple" ]