# Rádio Doces Memórias 📻✨

Landing page oficial da **Rádio Doces Memórias** — "A Trilha Sonora da Sua Vida". Uma web rádio dedicada a resgatar os grandes sucessos do passado: flashbacks inesquecíveis (anos 60, 70, 80 e 90), o melhor da MPB de raiz, Bossa Nova, boleros e baladas românticas.

---

## 📻 Funcionalidades Principais

- **Player de Áudio Ao Vivo Integrado:**
  - Player principal no topo com disco de vinil animado, equalizador de frequências e VU meter.
  - Player flutuante (dock) que acompanha a rolagem da página para ouvir sem interrupções.
  - Controle de volume com slider e botão de mudo.
  - Indicador de transmissão "AO VIVO" em tempo real e contagem de ouvintes.
  - Identificação dinâmica do programa em exibição com base no horário atual.
- **Configuração Simples de Streaming:**
  - Arquivo central de configuração em `lib/radio-config.ts` onde basta alterar a constante `STREAM_URL` com o endereço do streaming.
- **Curadoria Sonora & Gêneros:**
  - Seções temáticas: Flashback Internacional, Panteão da MPB, Baladas & Boleros e Temas de Cinema & Novelas.
- **Grade de Programação 24 Horas:**
  - Programação diária completa com destaque automático para a atração que está no ar.
- **Peça Sua Música & Dedicatórias:**
  - Formulário interativo para pedidos de músicas e homenagens via e-mail.
- **Página de Contato & Canal Oficial:**
  - Atendimento e contato exclusivo via e-mail: **pedryvo@gmail.com** com botão de cópia com 1 clique e envio rápido.
- **Design Vintage-Moderno:**
  - Estética luxuosa e nostálgica em tons de âmbar, dourado e vinil escuro, com tipografia refinada e responsividade total.

---

## 🛠️ Como Configurar o Endereço de Streaming

Para definir ou atualizar a URL da transmissão ao vivo da rádio:

1. Abra o arquivo [`lib/radio-config.ts`](./lib/radio-config.ts).
2. Modifique a constante `STREAM_URL`:
   ```typescript
   export const STREAM_URL = "https://seu-servidor-de-streaming.com/live.mp3";
   ```
3. Salve o arquivo. Todas as páginas e players da rádio serão atualizados automaticamente!

---

## 🚀 Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedryvo/aivohomepage.git
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   npx next dev
   ```

4. **Acesse no navegador:**
   [http://localhost:3000](http://localhost:3000)

---

## 📬 Contato

- **E-mail oficial:** [pedryvo@gmail.com](mailto:pedryvo@gmail.com)

---

© 2026 Rádio Doces Memórias. Todos os direitos reservados.
