# BIOS / DOS Minimalist Web Portfolio

Website e portfólio pessoal interativo inspirado visualmente na estética clássica de telas de setup de BIOS e sistemas operacionais de terminal DOS (IBM PC CP437).

O projeto prioriza desempenho, peso extremamente reduzido, acessibilidade semântica com HTML5 puro e estilo retrô fiel sem depender de frameworks pesados.

---

## 🖥️ Demonstração

* **URL Pública:** [phsecchi.github.io](https://phsecchi.github.io)
* **Ambiente de Testes:** Branch `working`

---

## ⚙️ Stack & Tecnologias

* **HTML5:** Estruturação semântica baseada em `<fieldset>`, `<legend>` e containers nativos.
* **CSS3:** Sistema de cores customizado (variáveis CSS), layout em CSS Grid bidimensional e fontes monoespaçadas com estética bitmap.
* **JavaScript (Vanilla):** Carregamento assíncrono modular de componentes de interface e interações da área de transferência (Clipboard API).
* **Sem Frameworks:** Zero dependências externas (sem React, Vue, Tailwind ou bundlers).

---

## 📁 Estrutura do Projeto

```text
.
├── css/
│   └── bios.css          # Estilização central e variáveis de cor
├── js/
│   └── main.js           # Orquestração do carregamento e eventos
├── sections/             # Módulos parciais de HTML
│   ├── system-info.html  # Informações de sistema, portas e stack
│   └── ...
├── index.html            # Estrutura principal da tela de BIOS
└── README.md
```
