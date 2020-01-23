### STAGE 1: Build ###
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app /usr/share/nginx/html
COPY dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]

# docker build -t migutak/serviceproviders .
# 