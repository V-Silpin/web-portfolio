/// <reference types="vite/client" />

// Uppercase extension isn't covered by vite/client's default declarations
declare module '*.JPG' {
  const src: string;
  export default src;
}
