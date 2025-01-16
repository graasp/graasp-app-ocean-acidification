/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT?: number;
  readonly VITE_VERSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
