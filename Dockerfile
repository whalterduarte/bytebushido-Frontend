# Use uma imagem Node.js como base
FROM node:alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app/frontend/bytebushido-Frontend

# Copie o conteúdo do diretório para dentro do contêiner
COPY . .
# Instale as dependências do aplicativo
RUN npm install --only=prod
# Instale o PM2 globalmente
RUN npm install pm2 -g
# Execute o comando de build
RUN npm run build
# Exponha a porta 3000 do contêiner (se necessário)
EXPOSE 3000
# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["pm2-runtime", "npm", "--", "start"]
