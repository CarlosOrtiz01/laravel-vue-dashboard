# 🚀 Laravel + Vue 3 + TypeScript + Tailwind CSS Dashboard Template

Una plantilla moderna y completa para construir aplicaciones web empresariales con Laravel 12, Vue 3, TypeScript y Tailwind CSS 4. Esta plantilla integra perfectamente el backend Laravel con un frontend Vue moderno usando Wayfinder para el enrutamiento.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz de usuario elegante y responsiva con Tailwind CSS 4
- ⚡ **Vue 3 Composition API**: Código moderno y reactivo con TypeScript
- 🔄 **Wayfinder Integration**: Enrutamiento sincronizado entre Laravel y Vue
- 📊 **Componentes Rich**: Gráficos, tablas, formularios, calendarios y más
- 🎯 **TypeScript**: Type-safe development con soporte completo
- 🎨 **Dark Mode**: Soporte completo para modo oscuro
- 📱 **Responsive**: Diseño adaptativo para todos los dispositivos
- 🛠️ **Developer Experience**: Hot Module Replacement, ESLint, Prettier

## 🛠️ Stack Tecnológico

### Backend
- **Laravel 12.0+** - Framework PHP moderno
- **PHP 8.2+** - Lenguaje de programación
- **Wayfinder 0.1.13+** - Sistema de enrutamiento sincronizado Laravel-Vue
- **Laravel Sanctum 4.3+** - Autenticación API
- **SQLite** - Base de datos (configurable)

### Frontend
- **Vue 3.5.x** - Framework JavaScript progresivo (requiere ^3.5.13, instalado 3.5.27)
- **TypeScript 5.7.3** - Superset tipado de JavaScript
- **Vite 7.0.0+** - Build tool ultra rápido
- **Tailwind CSS 4.0.0+** - Framework CSS utility-first
- **Vue ApexCharts 1.8.0+** - Gráficos interactivos
- **ApexCharts 4.4.0+** - Biblioteca de gráficos
- **Swiper 11.2.1+** - Carousel y sliders
- **Flatpickr 4.6.13+** - Selector de fechas
- **FullCalendar 6.1.15+** - Calendario completo
- **JSVectorMap 1.6.0+** - Mapas vectoriales
- **Axios 1.13.4+** - Cliente HTTP
- **Lucide Vue Next 0.474.0+** - Iconos

### Herramientas de Desarrollo
- **ESLint 9.18.0+** - Linter para JavaScript/TypeScript
- **Prettier 3.4.2+** - Formateador de código
- **Vue DevTools 7.7.0+** - Herramientas de desarrollo Vue
- **Vue TSC 2.2.0+** - TypeScript Compiler para Vue
- **Laravel Vite Plugin 2.0.0+** - Integración Laravel-Vite
- **Vite Plugin Wayfinder 0.1.7+** - Plugin Wayfinder para Vite

## 📁 Estructura del Proyecto

```
streaming-b2b/
├── app/                    # Lógica de aplicación Laravel
│   ├── Http/
│   │   └── Controllers/   # Controladores
│   ├── Models/            # Modelos Eloquent
│   └── Providers/         # Service Providers
│
├── bootstrap/             # Archivos de arranque
│   └── cache/            # Cache de configuración
│
├── config/                # Archivos de configuración
│
├── database/              # Base de datos
│   ├── migrations/        # Migraciones
│   ├── seeders/           # Seeders
│   └── factories/         # Factories
│
├── public/                # Punto de entrada público
│   ├── images/           # Imágenes estáticas
│   └── index.php         # Entry point
│
├── resources/
│   ├── css/
│   │   └── app.css       # Estilos principales
│   ├── js/               # Código fuente Vue/TypeScript
│   │   ├── assets/       # Assets (CSS, imágenes)
│   │   ├── components/   # Componentes Vue
│   │   │   ├── charts/   # Componentes de gráficos
│   │   │   ├── common/   # Componentes comunes
│   │   │   ├── ecommerce/# Componentes ecommerce
│   │   │   ├── forms/    # Componentes de formularios
│   │   │   ├── layout/   # Componentes de layout
│   │   │   ├── profile/  # Componentes de perfil
│   │   │   ├── tables/   # Componentes de tablas
│   │   │   └── ui/       # Componentes UI
│   │   ├── composables/  # Composables Vue
│   │   ├── icons/        # Iconos SVG como componentes
│   │   ├── routes/       # Rutas generadas por Wayfinder
│   │   ├── views/        # Vistas/páginas
│   │   │   ├── Auth/     # Páginas de autenticación
│   │   │   ├── Chart/    # Páginas de gráficos
│   │   │   ├── Errors/   # Páginas de error
│   │   │   ├── Forms/    # Páginas de formularios
│   │   │   ├── Others/   # Otras páginas
│   │   │   ├── Pages/    # Páginas generales
│   │   │   ├── Tables/   # Páginas de tablas
│   │   │   └── UiElements/# Páginas de elementos UI
│   │   ├── wayfinder/    # Tipos y utilidades Wayfinder
│   │   ├── App.vue       # Componente raíz
│   │   ├── main.ts       # Entry point de la aplicación
│   │   └── router.ts     # Sistema de enrutamiento
│   └── views/            # Vistas Blade
│       ├── app.blade.php # Vista principal de la app
│       └── welcome.blade.php
│
├── routes/
│   └── web.php           # Rutas web (definidas para Wayfinder)
│
├── storage/              # Archivos de almacenamiento
│   ├── app/              # Archivos de la aplicación
│   ├── framework/       # Cache y sesiones
│   └── logs/            # Logs
│
├── tests/                # Tests
│   ├── Feature/         # Tests de características
│   └── Unit/            # Tests unitarios
│
├── vendor/               # Dependencias Composer
│
├── .env                  # Variables de entorno
├── composer.json         # Dependencias PHP
├── package.json          # Dependencias Node.js
├── vite.config.js        # Configuración Vite
├── tsconfig.json         # Configuración TypeScript
└── README.md            # Este archivo
```

## 🚀 Instalación

### Requisitos Previos

- **PHP 8.2+** con extensiones: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML
- **Composer** 2.x
- **Node.js** 18+ y npm
- **SQLite** (o MySQL/PostgreSQL)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd template-b2b
   ```

2. **Instalar dependencias PHP**
   ```bash
   composer install
   ```

3. **Configurar el entorno**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configurar la base de datos**
   
   Edita `.env` y configura tu base de datos:
   ```env
   DB_CONNECTION=sqlite
   # O para MySQL/PostgreSQL:
   # DB_CONNECTION=mysql
   # DB_HOST=127.0.0.1
   # DB_PORT=3306
   # DB_DATABASE=your_database
   # DB_USERNAME=your_username
   # DB_PASSWORD=your_password
   ```

5. **Ejecutar migraciones**
   ```bash
   php artisan migrate
   ```

6. **Instalar dependencias Node.js**
   ```bash
   npm install
   ```

7. **Generar rutas de Wayfinder**
   ```bash
   php artisan wayfinder:generate
   ```

## 🎯 Uso

### Desarrollo

Para ejecutar el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

O usar el script de Composer que ejecuta todo:

```bash
composer run dev
```

Esto iniciará:
- Servidor Laravel en `http://localhost:8000`
- Servidor Vite con HMR
- Queue worker
- Laravel Pail (logs)

### Producción

1. **Compilar assets**
   ```bash
   npm run build
   ```

2. **Optimizar Laravel**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. **Servir la aplicación**
   ```bash
   php artisan serve
   ```

## 📚 Uso de Wayfinder

Wayfinder sincroniza las rutas de Laravel con Vue, permitiendo navegación type-safe.

### Definir Rutas en Laravel

```php
// routes/web.php
Route::view('/dashboard', 'app')->name('dashboard');
Route::view('/profile', 'app')->name('profile');
```

### Generar Rutas TypeScript

```bash
php artisan wayfinder:generate
```

### Usar en Vue

```vue
<template>
  <RouterLink :to="routes.dashboard()">Dashboard</RouterLink>
</template>

<script setup lang="ts">
import { routes } from '@/routes'
import RouterLink from '@/components/common/RouterLink.vue'
</script>
```

### Navegación Programática

```typescript
import { navigate } from '@/router'
import { routes } from '@/routes'

// Navegar usando Wayfinder (recomendado)
navigate(routes.dashboard())

// O usando string
navigate('/dashboard')
```

## 🎨 Componentes Principales

### Layout
- `AppSidebar` - Barra lateral colapsable
- `Header` - Encabezado con búsqueda y notificaciones
- `ThemeProvider` - Gestor de tema (claro/oscuro)
- `SidebarProvider` - Gestor de estado del sidebar

### UI Elements
- `Alert` - Alertas y notificaciones
- `Button` - Botones con variantes
- `Badge` - Badges y etiquetas
- `Avatar` - Avatares de usuario
- `Dropdown` - Menús desplegables

### Charts
- `LineChart` - Gráficos de línea
- `BarChart` - Gráficos de barras
- Integración con ApexCharts

### Forms
- Componentes de formulario con validación
- Inputs, selects, checkboxes, radios
- Date pickers con Flatpickr
- File uploads con Dropzone

### Tables
- Tablas responsivas
- Ordenamiento y filtrado
- Paginación

## 🧪 Testing

```bash
# Ejecutar tests
php artisan test

# O con PHPUnit directamente
vendor/bin/phpunit
```

## 📝 Scripts Disponibles

### NPM Scripts

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Preview de build de producción
npm run type-check   # Verificar tipos TypeScript
npm run lint         # Linter y corrección automática
npm run format       # Formatear código con Prettier
```

### Composer Scripts

```bash
composer run dev      # Ejecutar servidor de desarrollo completo
composer run test     # Ejecutar tests
composer run setup    # Setup inicial del proyecto
```

## 🔧 Configuración

### Variables de Entorno Importantes

```env
APP_NAME="Your App Name"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Base de datos
DB_CONNECTION=sqlite

# Vite
VITE_APP_NAME="${APP_NAME}"
```

### TypeScript

La configuración de TypeScript está en:
- `tsconfig.json` - Configuración principal
- `tsconfig.app.json` - Configuración de la aplicación
- `tsconfig.node.json` - Configuración de Node

### Vite

La configuración de Vite está en `vite.config.js`:
- Plugin Laravel Vite
- Plugin Vue
- Plugin Wayfinder
- Alias `@` para `resources/js`

## 📦 Dependencias Principales

### PHP (Composer)

#### Dependencias Principales
- `laravel/framework: ^12.0`
- `laravel/sanctum: ^4.3`
- `laravel/wayfinder: ^0.1.13`
- `laravel/tinker: ^2.10.1`

#### Dependencias de Desarrollo
- `fakerphp/faker: ^1.23`
- `laravel/pail: ^1.2.2`
- `laravel/pint: ^1.24`
- `laravel/sail: ^1.41`
- `mockery/mockery: ^1.6`
- `nunomaduro/collision: ^8.6`
- `phpunit/phpunit: ^11.5.3`

### JavaScript (NPM)

#### Dependencias Principales
- `vue: ^3.5.13` (instalado: 3.5.27)
- `typescript: ~5.7.3`
- `vite: ^7.0.0`
- `tailwindcss: ^4.0.0`
- `vue3-apexcharts: ^1.8.0`
- `apexcharts: ^4.4.0`
- `@fullcalendar/core: ^6.1.15`
- `@fullcalendar/vue3: ^6.1.15`
- `@fullcalendar/daygrid: ^6.1.15`
- `@fullcalendar/interaction: ^6.1.15`
- `@fullcalendar/list: ^6.1.15`
- `@fullcalendar/timegrid: ^6.1.15`
- `swiper: ^11.2.1`
- `flatpickr: ^4.6.13`
- `vue-flatpickr-component: ^11.0.5`
- `jsvectormap: ^1.6.0`
- `vuevectormap: ^2.0.1`
- `axios: ^1.13.4`
- `lucide-vue-next: ^0.474.0`
- `dropzone: ^6.0.0-beta.2`
- `vue-kanban: ^1.8.0`
- `vuedraggable: ^4.1.0`
- `@tailwindcss/forms: ^0.5.10`
- `@tailwindcss/typography: ^0.5.16`

#### Dependencias de Desarrollo
- `@laravel/vite-plugin-wayfinder: ^0.1.7`
- `@tailwindcss/postcss: ^4.0.0`
- `@tailwindcss/vite: ^4.0.0`
- `@vitejs/plugin-vue: ^5.2.4`
- `@vitejs/plugin-vue-jsx: ^4.1.1`
- `@vue/eslint-config-prettier: ^10.1.0`
- `@vue/eslint-config-typescript: ^14.3.0`
- `@vue/tsconfig: ^0.7.0`
- `@tsconfig/node22: ^22.0.0`
- `@types/node: ^22.10.7`
- `laravel-vite-plugin: ^2.0.0`
- `eslint: ^9.18.0`
- `eslint-plugin-vue: ^9.32.0`
- `prettier: ^3.4.2`
- `vue-tsc: ^2.2.0`
- `vite-plugin-vue-devtools: ^7.7.0`
- `postcss: ^8.5.1`
- `sass-embedded: ^1.83.4`
- `concurrently: ^9.0.1`
- `npm-run-all2: ^7.0.2`
- `jiti: ^2.4.2`

## 🎯 Características del Dashboard

- 📊 **Dashboard Ecommerce** - Panel principal con métricas
- 📅 **Calendario** - Calendario interactivo con FullCalendar
- 👤 **Perfil de Usuario** - Gestión de perfil
- 📝 **Formularios** - Componentes de formulario completos
- 📋 **Tablas** - Tablas de datos con funcionalidades avanzadas
- 📈 **Gráficos** - Visualización de datos con ApexCharts
- 🎨 **UI Elements** - Biblioteca completa de componentes
- 🔐 **Autenticación** - Páginas de login y registro

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Laravel](https://laravel.com) - El framework PHP elegante
- [Vue.js](https://vuejs.org) - El framework JavaScript progresivo
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utility-first
- [TailAdmin](https://tailadmin.com) - Template base del dashboard
- [Wayfinder](https://github.com/laravel/wayfinder) - Sistema de enrutamiento Laravel-Vue

## 📞 Soporte

Para soporte, abre un issue en el repositorio o contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Laravel, Vue 3 y TypeScript**
