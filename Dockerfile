# base image
FROM node:alpine as build

# set working directory
RUN mkdir - p /deploy/application/payslipgenerator
WORKDIR /deploy/application/payslipgenerator

# add `/deploy/application/payslipgenerator/node_modules/.bin` to $PATH
ENV PATH /deploy/application/payslipgenerator/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /deploy/application/payslipgenerator/package.json
RUN npm install
COPY . /deploy/application/payslipgenerator

RUN npm test

RUN npm run build

FROM nginx:alpine

COPY --from=build /deploy/application/payslipgenerator/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]