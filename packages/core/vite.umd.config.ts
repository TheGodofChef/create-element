import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'dist/umd',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'CreateElement',
			formats: ['umd'],
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'style.css') {
						return 'index.css'
					}
					return assetInfo.name as string
				},
			},
		},
	},
})
