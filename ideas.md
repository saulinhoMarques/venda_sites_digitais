# Design Ideas - Saulo Marques | Venda de Sites Digitais

## Contexto
Site de vendas de serviços digitais (sites, landing pages, templates) para pequenos negócios. Objetivo: converter visitantes em clientes através de uma página persuasiva e clara, com planos bem definidos e formulário de briefing.

---

## Abordagem Escolhida: Modern Professional + Growth Mindset

### Design Movement
**Minimalismo Corporativo com Toque Dinâmico** - Inspirado em startups de tech que vendem SaaS e serviços digitais (Stripe, Vercel, Framer). Foco em clareza, confiança e ação.

### Core Principles
1. **Clareza Radical**: Cada seção tem um propósito único e mensagem cristalina. Sem poluição visual.
2. **Hierarquia de Ação**: CTA (Call-to-Action) bem definidos em cada seção, guiando o visitante naturalmente.
3. **Confiança através da Simplicidade**: Design limpo transmite profissionalismo e competência.
4. **Movimento Sutil**: Animações suaves que reforçam a interação, sem distrair.

### Color Philosophy
- **Primário**: Azul profundo (`#0066CC` ou similar) - transmite confiança, tecnologia e profissionalismo
- **Secundário**: Verde suave (`#10B981`) - para CTAs positivas (ação, crescimento)
- **Neutros**: Cinza claro para backgrounds, cinza escuro para texto
- **Acentos**: Laranja suave para destaques secundários

**Reasoning**: Paleta corporativa que inspira confiança em clientes B2B/B2C. Verde para ações positivas (contratar, enviar briefing). Azul como âncora de marca.

### Layout Paradigm
- **Hero Section**: Assimétrico com imagem/ilustração à direita, texto persuasivo à esquerda
- **Planos**: Grid 3 colunas com card central destacado (Profissional como principal)
- **Exemplos de Modelos**: Carousel horizontal com imagens dos templates
- **Briefing**: Seção com formulário em 2 colunas (esquerda: descrição, direita: campos)
- **FAQ**: Accordion com perguntas/respostas
- **Footer**: Contato + redes sociais

### Signature Elements
1. **Cards com Sombra Suave**: Todos os cards (planos, modelos) com sombra delicada e hover effect que eleva
2. **Dividers Customizados**: Separadores entre seções com gradiente sutil
3. **Badges de Destaque**: "Mais Popular", "Recomendado" nos planos

### Interaction Philosophy
- **Hover States**: Cards crescem levemente (scale 1.02), sombra aumenta
- **Button Feedback**: Botões mudam cor e escala ao clicar (scale 0.98)
- **Scroll Reveal**: Seções aparecem com fade-in suave conforme scroll
- **Form Validation**: Feedback visual em tempo real (ícones, cores)

### Animation
- **Entrance**: Fade-in + slide-up (200ms ease-out) para seções ao scroll
- **Hover**: Scale 1.02 com sombra aumentada (150ms ease-out) para cards
- **Button Press**: Scale 0.98 (100ms ease-out) para feedback tátil
- **Transitions**: Todas as transições entre 150-250ms, nunca acima de 300ms
- **Stagger**: Itens em listas (planos, modelos) entram com 50ms de delay entre eles

### Typography System
- **Display/Headlines**: Font weight 700, size 2.5rem-3rem (Playfair Display ou similar serif elegante)
- **Subheadings**: Font weight 600, size 1.5rem-2rem
- **Body**: Font weight 400, size 1rem (Inter ou similar sans-serif)
- **Small Text**: Font weight 400, size 0.875rem

**Hierarchy**: Headlines em serif elegante para destaque, body em sans-serif limpo para leitura.

---

## Estrutura de Páginas

1. **Home (/)**: Landing page principal com hero, planos, modelos, briefing, FAQ
2. **404**: Página de erro customizada

---

## Decisões Implementadas
- ✅ Paleta: Azul profundo + Verde + Cinzas neutros
- ✅ Layout: Assimétrico, moderno, orientado a ação
- ✅ Tipografia: Serif para headlines, sans-serif para body
- ✅ Animações: Suaves, rápidas, orientadas a feedback
- ✅ Componentes: Cards com sombra, badges, dividers customizados
