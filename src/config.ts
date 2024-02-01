// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Percama ITB | Persatuan Catur Mahasiswa ITB";
export const SITE_DESCRIPTION =
  "Selamat datang di website Percama ITB! Kami adalah Persatuan Catur Mahasiswa ITB yang berdiri sejak tahun 1976";
export const TWITTER_HANDLE = "@PercamaITB";
export const MY_NAME = "Percama ITB";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
