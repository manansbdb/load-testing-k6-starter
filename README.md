<p align="center">
  <img src="docs/banner.svg" alt="Load Testing k6 Starter banner" width="100%" />
</p>

<h1 align="center">load-testing-k6-starter</h1>

<p align="center">
  <strong>EN</strong> Example k6 smoke script + threshold notes<br/>
  <strong>PT</strong> Script k6 de smoke + notas de thresholds
</p>

<p align="center">
  <a href="https://github.com/manansbdb/load-testing-k6-starter/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="MIT" /></a>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20PT-3b82f6?style=for-the-badge" alt="EN PT" />
  <img src="https://img.shields.io/badge/topic-k6-7d64ff?style=for-the-badge" alt="k6" />
  <a href="#support--apoio"><img src="https://img.shields.io/badge/donate-BTC-f59e0b?style=for-the-badge" alt="Donate BTC" /></a>
</p>

---

## What it does / Para que serve

| English | Português |
|---------|-----------|
| A starter **k6 smoke script** and threshold guidance for API load testing. | Um **script k6 de smoke** inicial e guia de thresholds para load testing de APIs. |
| Install k6, point the script at your URL, run. | Instala o k6, aponta o script ao teu URL e corre. |

```mermaid
flowchart LR
  A["📜 scripts/smoke.js"] --> B["⚙️ k6 run"]
  B --> C["📈 VUs + checks"]
  C --> D["✅ Pass / ❌ Fail thresholds"]
  style A fill:#7d64ff,stroke:#5b21b6,color:#fff
  style B fill:#0ea5e9,stroke:#0369a1,color:#fff
  style C fill:#f43f5e,stroke:#be123c,color:#fff
  style D fill:#22c55e,stroke:#15803d,color:#fff
```

---

## Install / Instalação

### 1) Clone / Clona

```bash
git clone https://github.com/manansbdb/load-testing-k6-starter.git
cd load-testing-k6-starter
```

### 2) Install k6 / Instala o k6

```bash
# macOS
brew install k6
# Debian/Ubuntu example:
# sudo gpg -k && sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5B34A480F7F9D63
# Or download from https://k6.io/docs/get-started/installation/
```

### 3) Run / Corre

```bash
k6 run scripts/smoke.js
# edit BASE_URL inside the script (or env) to hit your API
```

### Requirements / Requisitos

- `git`
- [k6](https://k6.io/) installed

---

## Quick start / Início rápido

```bash
git clone https://github.com/manansbdb/load-testing-k6-starter.git
cd load-testing-k6-starter
k6 run scripts/smoke.js
```

---

## Contents / Conteúdos

| Path | Purpose / Função |
|------|------------------|
| `scripts/smoke.js` | k6 smoke script |
| `thresholds.md` | SLA/SLO threshold tips |
| `SUPPORT.md` | Donations / Doações |

---

## Project layout / Estrutura

```text
load-testing-k6-starter/
├── docs/banner.svg
├── scripts/smoke.js
├── thresholds.md
├── SUPPORT.md
└── README.md
```

---

## Support / Apoio

Bitcoin donations welcome / Doações em Bitcoin bem-vindas:

```
bc1q0qfnlnxyum9u45stzxe0a7jnhtj4j0usfkqdjw
```

See [SUPPORT.md](./SUPPORT.md).

---

## License / Licença

[MIT](./LICENSE) © 2026 manansbdb
