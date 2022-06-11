import dotenv from 'dotenv'
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

dotenv.config()

export default defineConfig ({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  outDir: './dist',       // When running `astro build`, path to final static output
  publicDir: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  // build: {
  //   site: process.env.BLOG_URL,           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  //   sitemap: true,         // Generate sitemap (set to "false" to disable)
  // },
  // devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
    // tailwindConfig: './tailwind.config.js'
  // },
  // renderers: [
  //   "@astrojs/renderer-svelte"
  // ],
  // markdownOptions: {
  //   remarkPlugins: [
  //     [import('remark-gfm'), { behavior: 'prepend' }]
  //   ],
  // },
  vite: {
    plugins: [],
  },
  integrations: [
    svelte(),
    sitemap()
  ],
  site: process.env.BLOG_URL,
})
