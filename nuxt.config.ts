// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: 'Gulbeyaz',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},

	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
			'Moirai One': true,
			Inconsolata: true,
		},
		outputDir: 'assets',
	},
	pinia: {
		storesDirs: ['./stores/**'],
	},
});
