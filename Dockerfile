FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --save-dev @wdio/selenium-standalone-service
RUN npx wdio config -y

CMD ["npm", "run", "test:chrome"]
