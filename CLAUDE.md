# Capivora

App web de **finanças pessoais** com módulos opcionais. Anteriormente chamado PhoneLedger.
Repositório: https://github.com/Jamelops/Capivora

---

## Stack (V1)

- React + Vite 8 + TypeScript
- Tailwind CSS (via `@tailwindcss/postcss` — NÃO usar `@tailwindcss/vite`)
- React Router
- React Hook Form + Zod
- Supabase (auth + banco)
- TanStack Query
- Recharts
- Lucide React

### Configuração Tailwind
```js
// postcss.config.js
{ plugins: { "@tailwindcss/postcss": {} } }
```
```css
/* src/index.css */
@import "tailwindcss";
```

---

## Produto

**Posicionamento:** SaaS modular de finanças pessoais, com módulos opcionais desativáveis por usuário.

**Módulos opcionais** (configurados em `src/constants/app-config.ts`):
- `modules.iphone` — compras via Xianyu → ACBuy → CoinPal → USDT (Bybit)
- `modules.sales` — vendas, recebimentos, devedores, cobranças

Sidebar, router e dashboard já respeitam módulos opcionais — rotas e menus são ocultados conforme permissão do usuário.

---

## Banco (Supabase)

Tabelas: `profiles`, `categories`, `payment_methods`, `transactions`, `iphone_purchases`

- RLS por usuário em todas as tabelas
- Autenticação via e-mail e senha

---

## Estrutura do projeto

```
src/
├── app/              # Configuração geral (router, providers)
├── assets/
│   └── branding/     # capivora-icon-transparent.png, capivora-logo-transparent.png
├── components/       # Componentes reutilizáveis
│   ├── PageIntro
│   ├── StatCard
│   ├── SectionCard
│   ├── PrimaryButton
│   ├── SecondaryButton
│   ├── TextInput
│   ├── SelectField
│   └── TextAreaField
├── constants/
│   ├── app-config.ts  # modules.iphone, modules.sales
│   ├── nav-items.ts
│   └── routes.ts
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── finances/
│   └── iphone-purchases/
└── lib/              # Utilitários e clientes (supabase, queryClient)
```

---

## Páginas principais

| Página | Status |
|---|---|
| Dashboard | Visual pronto |
| Finanças | Visual pronto |
| Compras de iPhone | Visual pronto (módulo opcional) |
| Nova compra | Visual pronto + react-hook-form + zod + cálculo dinâmico |
| Sales | Visual pronto (módulo opcional) |

---

## Identidade visual

- Tema: **escuro premium**
- Cor principal: **verde esmeralda**
- Logo: símbolo abstrato de capivara com seta de crescimento e forma circular (letra C)
- Favicon: aplicada
- Próximos usos da marca: sidebar, app layout, páginas de autenticação

---

## Pendências (próximos passos)

1. **Conectar CTAs e botões reais** — interface visualmente pronta, falta ligar as ações
2. **Máscara nos inputs da "Nova compra"** — campos numéricos com formatação em tempo real, textuais só letras
3. **Controle real de permissão por módulo** — ocultar rotas/menus conforme acesso do usuário
4. **Base demo/mock oficial** — dados coerentes e separados para prints, vídeos e apresentações comerciais
5. **Renomear `package.json`** — nome técnico ainda está como `"phoneledger"`, atualizar para `"capivora"`

---

## Regras para o Claude Code

- Analisar **uma pasta ou arquivo por vez** para economizar tokens
- Não reescrever componentes reutilizáveis sem confirmar antes
- Módulos opcionais NUNCA devem ser hardcoded — sempre respeitar `app-config.ts`
- Manter o padrão visual escuro/esmeralda em qualquer novo componente
- Antes de criar arquivo novo, verificar se já existe componente reutilizável aplicável

---

## Vault do Obsidian
Caminho: C:\Users\Arthur\Documents\JamesVault

Ao analisar qualquer parte do projeto, salvar a nota correspondente em:
C:\Users\Arthur\Documents\JamesVault\Capivora\[nome-da-nota].md
```

Depois, no Claude Code, é só pedir assim:
```
Leia src/components/ e salva uma nota em 
C:\Users\Arthur\Documents\JamesVault\Capivora\Componentes.md