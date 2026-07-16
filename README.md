# Portfólio - Tarcizio Pereira Neto

Portfólio profissional bilíngue com experiência, projetos selecionados, currículo em português e inglês e canais de contato.

**Site:** [portif-liome.vercel.app](https://portif-liome.vercel.app/)

## Destaques

- Conteúdo em português e inglês com preferência persistida no navegador.
- Experiência profissional em formato de linha do tempo.
- Projetos com detalhes técnicos, demonstração e código-fonte.
- Currículos ATS-friendly em PT-BR e inglês.
- Tema claro/escuro, navegação por teclado e command menu.
- Formulário de contato integrado ao Web3Forms.

## Projetos apresentados

- **Portal Animes V2:** PWA social com React 19, AniList GraphQL, Firebase, TanStack Query e testes automatizados.
- **Voxel Terrain Engine:** experimento de computação gráfica com Three.js, WebGL e InstancedMesh.
- **Monitor de Ocupação IoT:** protótipo acadêmico com ESP32 e sensores ultrassônicos.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion e React Hook Form.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Validação de produção:

```bash
npm run lint
npm run build
```

Os currículos são gerados com ReportLab:

```bash
python scripts/generate_resumes.py
```

Os arquivos finais ficam em `output/pdf/` e são copiados para `public/` para download no site.

## Estrutura de conteúdo

- `lib/data.ts`: links, experiências, projetos e stack.
- `lib/i18n/pt.ts`: conteúdo em português.
- `lib/i18n/en.ts`: conteúdo em inglês.
- `docs/linkedin-content.md`: textos revisados para o LinkedIn.
- `scripts/generate_resumes.py`: fonte reproduzível dos currículos.

## Licença

Conteúdo pessoal e imagens reservados ao autor. O código pode ser consultado como referência de portfólio.
