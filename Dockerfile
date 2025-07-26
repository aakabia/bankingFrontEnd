

# copy package.json and install deps in working directory
# copy rest of files in working directory 
# Build node application

FROM node:22-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .  
RUN npm run build  



# copy app directory from builder to this image app folder
# gloably install serve
# serve -s refers to using the serve package, a command-line HTTP server, to serve static files with a fallback to index.html
# set port 
# run application from "/app/dist"
FROM node:22-alpine as final
COPY --from=builder /app/ /app/
RUN npm i -g serve
ARG FRONT_END_PORT
EXPOSE ${FRONT_END_PORT}
CMD [ "serve", "-s", "/app/dist"]