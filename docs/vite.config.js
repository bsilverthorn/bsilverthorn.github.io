/** @type {import('vite').UserConfig} */
export default {
  ssr: {
    noExternal: [
      "@fortawesome/*",
    ],
  },
}
