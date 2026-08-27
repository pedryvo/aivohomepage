# Rádio Doces Memórias 📻🔥

Landing page oficial da **Rádio Doces Memórias** — "A Casa da Jovem Guarda & do Iê-Iê-Iê". Uma web rádio 100% dedicada ao maior movimento jovem e musical dos anos 1960 no Brasil: Roberto Carlos, Erasmo Carlos, Wanderléa, Renato e Seus Blue Caps, The Fevers, Os Incríveis, Golden Boys, Ronnie Von, Jerry Adriani e todos os grandes nomes da TV Record e dos bailes da época.

---

## 📻 Funcionalidades Principais

- **Player de Áudio Ao Vivo Integrado:**
  - Player principal com disco de vinil temático da Jovem Guarda, equalizador de frequências e VU meter.
  - Player flutuante (dock) para escutar sem interrupções durante toda a navegação.
  - Controle de volume com slider e botão de mudo.
  - Indicador de transmissão "AO VIVO" e contagem de ouvintes.
  - Identificação dinâmica do programa da Jovem Guarda que está no ar.
- **Configuração Simples de Streaming:**
  - Arquivo central de configuração em `lib/radio-config.ts` onde basta alterar a constante `STREAM_URL` com o endereço do streaming.
- **Pilares da Jovem Guarda:**
  - O Trio de Ouro (Roberto, Erasmo e Wanderléa), Conjuntos dos Bailes (The Fevers, Blue Caps, Os Incríveis), Ídolos e Musas (Ronnie Von, Jerry Adriani, Martinha, Vanusa) e Duplas Históricas (Leno & Lílian, Os Vips, Deny & Dino).
- **Grade 24 Horas:**
  - Programação temática ininterrupta com destaque automático para o programa atual.
- **Peça Seu Clássico da Jovem Guarda:**
  - Formulário para pedidos musicais e dedicatórias com envio rápido.
- **Página de Contato & Canal Oficial:**
  - Atendimento e contato exclusivo via e-mail: **pedryvo@gmail.com** com botão de cópia rápida.
- **Design Vintage-Moderno:**
  - Estética refinada com visual de vinil, botões clássicos, tipografia elegante e responsividade total.

---

## 🛠️ Como Configurar o Endereço de Streaming

Para definir ou atualizar a URL da transmissão ao vivo:

1. Abra o arquivo [`lib/radio-config.ts`](./lib/radio-config.ts).
2. Modifique a constante `STREAM_URL`:
   ```typescript
   export const STREAM_URL = "https://seu-servidor-de-streaming.com/jovem-guarda.mp3";
   ```
3. Salve o arquivo. O player de áudio atualizará automaticamente!

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

© 2026 Rádio Doces Memórias • *"É uma brasa, mora!"*
