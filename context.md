# Contexto e Arquitetura

## Visão Geral

Assistente virtual para o **Cartório 2º Ofício de Várzea Grande/MT** que atende usuários no WhatsApp com um menu completo de serviços cartorários: Registro Civil, Tabelionato de Notas, Pessoa Jurídica, Títulos e Documentos, Protesto, Custas, Horário, Endereço e atendimento humano.

---

## MVP (versão atual)

### O que é
Um PWA (Progressive Web App) que simula um chatbot completo de cartório. O usuário navega por menus interativos com botões clicáveis ou pode digitar livremente — o sistema identifica a intenção por palavras-chave.

### Stack
| Camada | Tecnologia |
|--------|-----------|
| Frontend | HTML5 + CSS3 + JavaScript (Vanilla) |
| PWA | Manifest JSON + Service Worker |
| Ícones | PNG 192x192 e 512x512 |

### Arquitetura MVP

```
index.html          → Chat com header, footer e área de mensagens
style.css           → Estilo WhatsApp Web + botões de opção interativos
app.js              → Máquina de estados: menus aninhados + busca por keywords
manifest.json       → PWA instalável
service-worker.js   → Cache offline
```

**Recursos do MVP:**
- 9 opções no menu principal com submenus aninhados
- Botões clicáveis para navegação
- Busca inteligente por palavras-chave (ex: "quero casar" → Casamento)
- Suporte a "voltar" via histórico de navegação
- Botão de enviar documentação e agendamento
- Encaminhamento para atendente humano com coleta de dados

### Limitações do MVP
- Sem integração real com WhatsApp
- Simulação no frontend (sem backend)
- Sem persistência de histórico
- Sem autenticação

---

## Produto Final

### Stack prevista
| Camada | Tecnologia |
|--------|-----------|
| Frontend | React / Next.js PWA |
| Backend | Node.js + Express ou Python FastAPI |
| WhatsApp | whatsapp-web.js (ou WhatsApp Business API) |
| Banco de Dados | PostgreSQL ou MongoDB |
| Cache | Redis |
| Fila | Bull / RabbitMQ |
| Deploy | Docker + VPS / AWS / Railway |
| Monitoramento | Sentry + Grafana |

### Arquitetura do Produto Final

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   WhatsApp   │────▶│   Agente     │────▶│   Backend    │
│   (usuário)  │◀────│  (node)      │◀────│  (API)       │
└──────────────┘     └──────┬───────┘     └──────┬───────┘
                            │                     │
                     ┌──────▼───────┐      ┌──────▼───────┐
                     │   Fila de    │      │   Banco de   │
                     │  Mensagens   │      │    Dados     │
                     └──────────────┘      └──────────────┘
```

**Componentes:**
1. **Conector WhatsApp** — whatsapp-web.js, mantém sessão, escuta/envia mensagens
2. **Backend API** — Processa mensagens, executa máquina de estados, gerencia histórico
3. **Banco de Dados** — Conversas, configurações, logs
4. **Fila** — Alta concorrência sem perda de mensagens
5. **Painel Web (PWA)** — Dashboard em tempo real com WebSocket

### Fluxo completo
1. Usuário envia mensagem no WhatsApp
2. whatsapp-web.js recebe o evento
3. Mensagem é publicada na fila
4. Backend processa: identifica estado atual, aplica regras, gera resposta
5. Resposta é enviada de volta via whatsapp-web.js
6. Conversa armazenada no banco de dados
7. Painel web exibe em tempo real

### Fluxo de estados (MVP)
```
main
├── civil
│   ├── civil_nascimento → docs / prazo / custas / faq
│   ├── civil_casamento → habilitação → docs / prazo / custas / agendar
│   │                   └─ casamento civil / conversão / 2ª via / inteiro teor / averbações
│   ├── civil_obito → docs / prazo / custas
│   ├── civil_segunda_via → nascimento / casamento / óbito / inteiro teor / digital
│   ├── civil_inteiro_teor
│   ├── civil_averbacoes
│   ├── civil_paternidade
│   ├── civil_alteracao_nome
│   └── civil_traslado
├── notas
│   ├── notas_escrituras → 16 tipos + Documentos / Custas / Prazo / Enviar Doc / Agendar
│   ├── notas_procuracao → 8 tipos
│   ├── notas_reconhecimento → 5 tipos
│   ├── notas_autenticacao → 4 tipos
│   ├── notas_ata → uso / docs / prazo / custas / agendar
│   ├── notas_testamento → público / revogação / certidão / informações
│   ├── notas_apostilamento → 4 tipos
│   └── notas_certidoes
├── juridicas → 12 tipos
├── titulos → 11 tipos
├── protesto → 10 tipos
├── custas → tabela / pagamento / pix / cartão / dinheiro / orçamento
├── horario
├── endereco → localização / como chegar / telefones / email / site
└── atendente → formulário → confirmação
```

### Busca inteligente (keywords)
Usuário digita texto livre → sistema busca em ~40 padrões regex para identificar intenção. Ex:
- "quero casar" → civil_casamento
- "perdi minha certidão" → civil_segunda_via
- "vender imóvel" → notas_escrituras_compra_venda
- "cancelar protesto" → protesto

### Possíveis evoluções futuras
- Integração com LLM (ChatGPT, Claude) para respostas contextuais
- Agendamento de mensagens
- Respostas personalizadas por contato
- Dashboard com métricas
- Multi-idioma
