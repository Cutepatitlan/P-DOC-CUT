// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Manual de Alumno - CUT',
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
					label: 'Primeros pasos',
					items: [
						{ label: 'Introducción', slug: 'bienvenida/introduccion' },
						{ label: 'Proceso de admisión', slug: 'bienvenida/admision' },
						{ label: 'Tu matricula y credenciales', slug: 'in-built/sorry' },
						{ label: 'El primer inicio de sesión', slug: 'in-built/sorry' },
						{ label: 'Configuración de perfil', slug: 'in-built/sorry' },
					],
				},
				{
					label: 'Conociendo el campus virtual',
					items: [
						{ label: 'El tablero' , slug: 'in-built/sorry' },
						{ label: 'Navegación básica', slug: 'in-built/sorry' },
						{ label: 'cursos', slug: 'in-built/sorry' },
					]
				},
				{
					label: 'Tu vida académica',
					items: [
						{ label: 'Entregar una tarea' , slug: 'in-built/sorry' },
						{ label: 'Participar en un foro', slug: 'in-built/sorry' },
						{ label: 'Realizar un examen', slug: 'in-built/sorry' },
						{ label: 'Recursos adicionales', slug: 'in-built/sorry' },
						{ label: 'Ver calificaciones', slug: 'in-built/sorry' },
					]
				},
				{ 
					label: 'Soporte y ayuda',
					items: [
						{ label: 'Recuperación de contraseña', slug: 'in-built/sorry' },
						{ label: 'Preguntas frecuentes', slug: 'in-built/sorry' },
						{ label: 'Contactar soporte', slug: 'in-built/sorry' },
					]
				}
			],

			/*		
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
			
			],*/
			customCss:  [
				'./src/styles/custom.css',
			],
		}),
	],
});
