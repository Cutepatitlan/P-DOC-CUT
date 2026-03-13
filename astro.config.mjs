// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Manual de Alumno - CUTepatitlán',
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
						{ label: 'Tu matricula y credenciales', slug: 'bienvenida/matricula' },
						{ label: 'El primer inicio de sesión', slug: 'bienvenida/inicio-de-sesion' },
						{ label: 'Configuración de perfil', slug: 'bienvenida/configuracion-de-perfil' },
					],
				},
				{
					label: 'Conociendo el campus virtual',
					items: [
						{ label: 'El tablero' , slug: 'campus-virtual/tablero' },
						{ label: 'Navegación básica', slug: 'campus-virtual/navegacion-basica' },
						{ label: 'Estructura de cursos', slug: 'campus-virtual/estructura-de-cursos' },
					]
				},
				{
					label: 'Tu vida académica',
					items: [
						{ label: 'Entregar una tarea' , slug: 'vida-academica/entregar-una-tarea' },
						{ label: 'Participar en un foro', slug: 'vida-academica/participacion-en-foros' },
						{ label: 'Realizar un examen', slug: 'vida-academica/examenes' },
						{ label: 'Recursos adicionales', slug: 'vida-academica/visualizacion-de-recursos' },
						{ label: 'Ver calificaciones', slug: 'vida-academica/ver-calificaciones' },
					]
				},
				{ 
					label: 'Soporte y ayuda',
					items: [
						{ label: 'Recuperación de contraseña', slug: 'in-built/sorry' },
						{ label: 'Preguntas frecuentes', slug: 'soporte-y-ayuda/preguntas-frecuentes' },
						{ label: 'Contactar soporte', slug: 'soporte-y-ayuda/contactar-soporte' },
					]
				}				
			],
			customCss:  [
				'./src/styles/custom.css',
			],
		}),
		icon(),
	],
});
