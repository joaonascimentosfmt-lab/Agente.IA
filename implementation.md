# Plano de Implementação — Sprints

---

## MVP (Sprint único)

**Objetivo:** PWA completo com máquina de estados do chatbot do Cartório 2º Ofício.

### Sprint 1 — Chatbot Interativo

| Atividade | Status |
|-----------|--------|
| Estrutura HTML com header, chat, footer e input | ✅ |
| CSS responsivo estilo WhatsApp Web com botões de opção | ✅ |
| Máquina de estados: menu principal (9 opções) | ✅ |
| Submenus Registro Civil (9 serviços + info) | ✅ |
| Submenus Tabelionato de Notas (8 serviços + subtipos) | ✅ |
| Submenus Pessoas Jurídicas (12 tipos) | ✅ |
| Submenus Títulos e Documentos (11 tipos) | ✅ |
| Submenus Protesto (10 tipos) | ✅ |
| Submenus Custas (6 tipos) | ✅ |
| Telas Horário e Endereço (5 subtipos) | ✅ |
| Fluxo de atendente com formulário e confirmação | ✅ |
| Botão "Voltar" com histórico de navegação | ✅ |
| Busca inteligente por palavras-chave (~40 padrões) | ✅ |
| Botões clicáveis em todos os menus | ✅ |
| Delay de digitação simulado | ✅ |
| Service worker para cache offline | ✅ |
| Manifest.json para instalação PWA | ✅ |
| Ícones placeholder (192x192 e 512x512) | ✅ |
| Testar em navegador desktop e mobile | ⬜ |
| Publicar via GitHub Pages ou Vercel | ⬜ |

**Total estimado:** ~16h

---

## Produto Final

### Sprint 2 — Conector WhatsApp

**Objetivo:** Integrar o chatbot ao WhatsApp real.

| Atividade | Esforço |
|-----------|---------|
| Configurar projeto Node.js com TypeScript | 2h |
| Implementar conexão whatsapp-web.js com QR Code | 4h |
| Escutar evento message e extrair texto + remetente | 2h |
| Implementar máquina de estados no backend | 4h |
| Enviar resposta automática para cada mensagem | 2h |
| Gerenciar sessão persistente | 3h |
| Tratar erros e reconexão automática | 3h |

**Total:** 20h

### Sprint 3 — Backend API

**Objetivo:** API estruturada com controllers, services, middleware.

| Atividade | Esforço |
|-----------|---------|
| Servidor HTTP (Express ou Fastify) | 2h |
| Estrutura controllers / services / repositories | 3h |
| Rotas: health, messages, conversations | 3h |
| Variáveis de ambiente (.env) | 1h |
| Logging (Winston/Pino) | 2h |
| Middleware de erro global | 1h |

**Total:** 12h

### Sprint 4 — Banco de Dados

| Atividade | Esforço |
|-----------|---------|
| Configurar PostgreSQL + migrations | 3h |
| Tabelas: conversations, messages, contacts | 4h |
| Repositórios (Knex ou Prisma) | 4h |
| Salvar mensagens recebidas/enviadas | 2h |
| Rotas GET paginadas | 2h |

**Total:** 15h

### Sprint 5 — Fila e Resiliência

| Atividade | Esforço |
|-----------|---------|
| Redis + Bull | 3h |
| Job de processamento de mensagem | 3h |
| Retry com backoff exponencial | 2h |
| Bull Board (monitoramento) | 2h |

**Total:** 10h

### Sprint 6 — Painel Web (PWA v2)

| Atividade | Esforço |
|-----------|---------|
| Migrar frontend para React + Vite | 6h |
| Login simples (PIN/magic link) | 4h |
| Conexão REST + WebSocket | 4h |
| Histórico de conversas em tempo real | 4h |
| Página de configurações | 3h |
| Notificações push | 3h |
| Responsivo e offline first | 3h |

**Total:** 27h

### Sprint 7 — Qualidade e Produção

| Atividade | Esforço |
|-----------|---------|
| Dockerizar backend + frontend + banco | 4h |
| CI/CD (GitHub Actions) | 3h |
| Testes unitários (Jest) | 6h |
| Testes de integração | 4h |
| Sentry para monitoramento | 2h |
| docker-compose para dev | 2h |
| Deploy em VPS/Railway | 3h |
| Domínio e SSL (Let's Encrypt) | 2h |
| Teste de carga (k6) | 3h |

**Total:** 29h

---

## Resumo de Esforço

| Sprint | Horas |
|--------|-------|
| Sprint 1 — MVP | ~16h |
| Sprint 2 — Conector WhatsApp | 20h |
| Sprint 3 — Backend | 12h |
| Sprint 4 — Banco de Dados | 15h |
| Sprint 5 — Fila | 10h |
| Sprint 6 — Painel Web | 27h |
| Sprint 7 — Qualidade e Produção | 29h |
| **Total** | **~129h** |

---

## Como executar o MVP

```bash
cd "C:\Users\joaof\OneDrive\Documentos\Agente de IA - WhattsApp"

# Sirva com qualquer servidor HTTP estático:
python -m http.server 8000
# ou
npx serve .
```

Abra `http://localhost:8000` no navegador.
