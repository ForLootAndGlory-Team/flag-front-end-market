import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [react(),
	VitePWA({
		registerType: 'autoUpdate',
		includeAssets: ['favicon.ico'],
		manifest: {
			name: 'ForLootAndGlory',
			short_name: 'FLAG',
			description: 'Game For Loot And Glory',
			theme_color: '#ffffff',
			icons: [
				{
					src: '/images/logo/flag_logo_round.png',
					sizes: '192x192',
					type: 'image/png'
				},
				// Ajoutez d'autres tailles ici
			]
		},
		workbox: {
			globPatterns: ['*/.{js,css,html,ico,png,svg}'],
		},
		devOptions: {
			enabled: true
		}
	}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		// En production, assurez-vous que tous les chemins mènent à index.html
		outDir: 'dist',
		emptyOutDir: true,
	},
});