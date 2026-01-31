#!/bin/bash

# Cores para output
VERDE='\033[0;32m'
AZUL='\033[0;34m'
AMARELO='\033[1;33m'
RESET='\033[0m'

echo -e "${AZUL}🚀 Deploy DR9 AI para GitHub Pages${RESET}"
echo ""

# Verificar se é um repositório git
if [ ! -d ".git" ]; then
    echo -e "${AMARELO}⚠️  Repositório git não encontrado. Criando...${RESET}"
    git init
fi

# Adicionar todos os arquivos
echo -e "${AZUL}📦 Adicionando arquivos...${RESET}"
git add .

# Commit
echo ""
echo -e "${AZUL}💾 Fazendo commit...${RESET}"
read -p "Digite a mensagem do commit: " mensagem
if [ -z "$mensagem" ]; then
    mensagem="Update $(date +%d/%m/%Y)"
fi
git commit -m "$mensagem"

# Push
echo ""
echo -e "${AZUL}☁️  Enviando para GitHub...${RESET}"
git push origin main

echo ""
echo -e "${VERDE}✅ Deploy concluído!${RESET}"
echo -e "${VERDE}🌐 Seu site estará disponível em:${RESET}"
echo -e "${AZUL}   https://SEU_USUARIO.github.io${RESET}"
