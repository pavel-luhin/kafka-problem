FROM node:13

WORKDIR /app/

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8210

CMD ["npm", "start"]