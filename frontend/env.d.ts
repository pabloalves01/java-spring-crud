/// <reference types="vite/client" />

// Tipagem do import.meta.env (variáveis com prefixo VITE_ no .env)
interface ImportMetaEnv {
    readonly VITE_API_URL?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
  