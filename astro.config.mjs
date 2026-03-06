// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Manual de usuario - CUT',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
				{ icon: 'comment', label: 'WhatsApp', href: 'https://wa.me/5213789061734' },
				{ icon: 'external', label: 'Website', href: 'https://web.cutepatitlan.com'},
			],
			sidebar: [
				{
					label: 'Moodle',
					items: [
						{ label: 'Introducción', slug: 'moodle/welcome/intro' },
						{ label: 'Primeros pasos', slug: 'moodle/welcome/first-steps' },
						{ label: 'Cómo acceder a Moodle', slug: 'in-built/sorry' },
						{ label: 'Navegación básica', slug: 'in-built/sorry' },
						{ label: 'Participar en foros', slug: 'in-built/sorry' },
						{ label: 'Enviar tareas', slug: 'in-built/sorry' },
						{ label: 'Ver calificaciones', slug: 'in-built/sorry' },
						{ label: 'Recursos adicionales', slug: 'in-built/sorry' },
					],
				},
				{
					label: 'Admisiones',
					items: [
						{ label: 'Introducción', slug: 'admisiones/welcome/intro' },
						{ label: 'Primeros pasos', slug: 'admisiones/welcome/first-steps' },
					]
				},
				{
					label: 'Centro Escolar Integral',
					items: [
						//{ label: 'Introducción', slug: 'CEI/welcome/intro' },
						//{ label: 'Primeros pasos', slug: 'CEI/welcome/first-steps' },
					]
				}
			
			],
			customCss:  [
				'./src/styles/custom.css',
			],
		}),
	],
});
