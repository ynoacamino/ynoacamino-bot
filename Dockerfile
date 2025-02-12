###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:lts-alpine As development
WORKDIR /usr/src/app
RUN npm install -g node-gyp && npm cache clean --force
COPY --chown=node:node package*.json ./
RUN npm i
COPY --chown=node:node . .
USER node

###################
# BUILD FOR PRODUCTION
###################
FROM node:lts-alpine As build
WORKDIR /usr/src/app
RUN npm install -g node-gyp && npm cache clean --force
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV=production
RUN npm i --only=production && npm cache clean --force
USER node

###################
# PRODUCTION
###################
FROM node:lts-alpine As production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
USER node

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
