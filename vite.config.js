import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/VP4/dist/',
    plugins: [
      handlebars({
        context: {
          titlex: 'Hello, world!',
        },
      }),
    ],
   build:{outDir: 'dist'}
  });




