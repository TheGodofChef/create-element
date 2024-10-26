import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		dts({
			include: ['./**/*.ts'],
			exclude: ['./vite.config.ts'],
		}),
	],
	build: {
		minify: false,
		outDir: '.dist',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'vitePlugnis',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['shelljs', 'lodash-es'],
		},
	},
})
