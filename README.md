<h1 align="center">FastReport - Lista de Espera</h1>

<div align="center">
  <img src ="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src ="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src ="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src ="https://img.shields.io/badge/Resend-000000.svg?style=for-the-badge">
  <img src ="https://img.shields.io/badge/Upstash-00E9A3.svg?style=for-the-badge&logo=Upstash&logoColor=black">
</div>

<br>

## Sobre

Este é o site de lista de espera para o FastReport, uma extensão do Chrome desenvolvida pela MedLabz que ajuda médicos a laudar mais rápido com inteligência artificial.

## Tecnologias

- **Next.js 14**: Framework React para desenvolvimento web
- **Tailwind CSS**: Framework CSS para estilização
- **TypeScript**: Linguagem de programação tipada
- **Resend**: Serviço para envio de emails
- **Upstash Redis**: Serviço para limitação de taxa de requisições

## Configuração

Para configurar este projeto, você precisará das seguintes variáveis de ambiente:

- `NOTION_SECRET`: Chave secreta do Notion para armazenamento de dados
- `NOTION_DB`: ID do banco de dados do Notion
- `RESEND_API_KEY`: Chave de API do Resend para envio de emails
- `UPSTASH_REDIS_REST_URL`: URL do Redis da Upstash
- `UPSTASH_REDIS_REST_TOKEN`: Token de autenticação do Redis da Upstash

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm run start
```

## Contato

Para mais informações, entre em contato com a MedLabz:

- Website: [www.medlabz.com.br](https://www.medlabz.com.br)
- Email: [contato@medlabz.com.br](mailto:contato@medlabz.com.br)
- LinkedIn: [MedLabz](https://www.linkedin.com/company/medlabz/)
