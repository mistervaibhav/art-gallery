## Getting Started

First, run the development server:

```bash
npm run dev
```

## generate deploy key

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N "<password>"
```
