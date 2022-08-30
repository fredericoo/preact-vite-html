import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import * as path from 'path';
import { ssrNoJsPlugin } from '@asyarb/vite-plugin-ssr-nojs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), ssrNoJsPlugin({
    // An absolute path to a file that renders your app in a server-side
    // context (e.g. ReactDOMServer.renderToStaticMarkup)
    // @ts-ignore node stuff
    renderModulePath: path.resolve(__dirname, 'src/entry-server.tsx'),
    
    // An absolute path to the output directory of your vite builds.
    // @ts-ignore node stuff
    viteOutputPath: path.resolve(__dirname, 'dist'),

    routes: ['/'],
    htmlInjectionString: '<!--ssr-html-->',
  }),]
})
