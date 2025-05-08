// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    root: './',
    base: '/',
    plugins: [
        react(),
        tsconfigPaths(),
        // Copy static assets
        viteStaticCopy({
            targets: [
                { src: 'src/img/*', dest: 'img' },
                { src: 'src/assets/*', dest: 'assets' },
                { src: 'src/assets/icons/*', dest: 'icons' },
            ],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve('src')],
    },
    server: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                sourceMap: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        minify: isProduction,
        sourcemap: true,
        // Code splitting
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
    },
    worker: {
        plugins: [tsconfigPaths()],
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
});
