# Estágio 1: Construir a aplicação Angular
FROM node:21 AS build 
WORKDIR /usr/src/app

# Copie os arquivos de configuração e instale as dependências
COPY package*.json ./
RUN npm install

# Adicione o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Execute o comando de construção
RUN ng build

# Estágio 2: Configurar o servidor Nginx e copiar os arquivos compilados
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/angular-front1 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]






#docker build -t AnguarJWT
#docker run -p 8081:80 AnguarJWT