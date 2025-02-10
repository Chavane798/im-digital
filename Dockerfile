FROM node:18-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos do projeto
COPY ./ ./

# Instala as dependências
RUN npm install

# Compila o projeto
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]
