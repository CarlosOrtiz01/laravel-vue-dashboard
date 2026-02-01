import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/ecommerce'
 */
export const ecommerce = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ecommerce.url(options),
    method: 'get',
})

ecommerce.definition = {
    methods: ["get","head"],
    url: '/ecommerce',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/ecommerce'
 */
ecommerce.url = (options?: RouteQueryOptions) => {
    return ecommerce.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/ecommerce'
 */
ecommerce.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ecommerce.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/ecommerce'
 */
ecommerce.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ecommerce.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/calendar'
 */
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/calendar'
 */
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/calendar'
 */
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/calendar'
 */
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/form-elements'
 */
export const formElements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: formElements.url(options),
    method: 'get',
})

formElements.definition = {
    methods: ["get","head"],
    url: '/form-elements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/form-elements'
 */
formElements.url = (options?: RouteQueryOptions) => {
    return formElements.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/form-elements'
 */
formElements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: formElements.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/form-elements'
 */
formElements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: formElements.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/basic-tables'
 */
export const basicTables = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: basicTables.url(options),
    method: 'get',
})

basicTables.definition = {
    methods: ["get","head"],
    url: '/basic-tables',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/basic-tables'
 */
basicTables.url = (options?: RouteQueryOptions) => {
    return basicTables.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/basic-tables'
 */
basicTables.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: basicTables.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/basic-tables'
 */
basicTables.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: basicTables.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/line-chart'
 */
export const lineChart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lineChart.url(options),
    method: 'get',
})

lineChart.definition = {
    methods: ["get","head"],
    url: '/line-chart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/line-chart'
 */
lineChart.url = (options?: RouteQueryOptions) => {
    return lineChart.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/line-chart'
 */
lineChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lineChart.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/line-chart'
 */
lineChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lineChart.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/bar-chart'
 */
export const barChart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: barChart.url(options),
    method: 'get',
})

barChart.definition = {
    methods: ["get","head"],
    url: '/bar-chart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/bar-chart'
 */
barChart.url = (options?: RouteQueryOptions) => {
    return barChart.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/bar-chart'
 */
barChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: barChart.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/bar-chart'
 */
barChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: barChart.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/alerts'
 */
export const alerts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alerts.url(options),
    method: 'get',
})

alerts.definition = {
    methods: ["get","head"],
    url: '/alerts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/alerts'
 */
alerts.url = (options?: RouteQueryOptions) => {
    return alerts.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/alerts'
 */
alerts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: alerts.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/alerts'
 */
alerts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: alerts.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/avatars'
 */
export const avatars = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: avatars.url(options),
    method: 'get',
})

avatars.definition = {
    methods: ["get","head"],
    url: '/avatars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/avatars'
 */
avatars.url = (options?: RouteQueryOptions) => {
    return avatars.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/avatars'
 */
avatars.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: avatars.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/avatars'
 */
avatars.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: avatars.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/badge'
 */
export const badge = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: badge.url(options),
    method: 'get',
})

badge.definition = {
    methods: ["get","head"],
    url: '/badge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/badge'
 */
badge.url = (options?: RouteQueryOptions) => {
    return badge.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/badge'
 */
badge.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: badge.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/badge'
 */
badge.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: badge.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/buttons'
 */
export const buttons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buttons.url(options),
    method: 'get',
})

buttons.definition = {
    methods: ["get","head"],
    url: '/buttons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/buttons'
 */
buttons.url = (options?: RouteQueryOptions) => {
    return buttons.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/buttons'
 */
buttons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buttons.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/buttons'
 */
buttons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: buttons.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/images'
 */
export const images = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: images.url(options),
    method: 'get',
})

images.definition = {
    methods: ["get","head"],
    url: '/images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/images'
 */
images.url = (options?: RouteQueryOptions) => {
    return images.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/images'
 */
images.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: images.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/images'
 */
images.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: images.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/videos'
 */
export const videos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videos.url(options),
    method: 'get',
})

videos.definition = {
    methods: ["get","head"],
    url: '/videos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/videos'
 */
videos.url = (options?: RouteQueryOptions) => {
    return videos.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/videos'
 */
videos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videos.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/videos'
 */
videos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: videos.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/blank'
 */
export const blank = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blank.url(options),
    method: 'get',
})

blank.definition = {
    methods: ["get","head"],
    url: '/blank',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/blank'
 */
blank.url = (options?: RouteQueryOptions) => {
    return blank.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/blank'
 */
blank.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blank.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/blank'
 */
blank.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blank.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/error-404'
 */
export const error404 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: error404.url(options),
    method: 'get',
})

error404.definition = {
    methods: ["get","head"],
    url: '/error-404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/error-404'
 */
error404.url = (options?: RouteQueryOptions) => {
    return error404.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/error-404'
 */
error404.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: error404.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/error-404'
 */
error404.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: error404.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signin'
 */
export const signin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signin.url(options),
    method: 'get',
})

signin.definition = {
    methods: ["get","head"],
    url: '/signin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signin'
 */
signin.url = (options?: RouteQueryOptions) => {
    return signin.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signin'
 */
signin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signin.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signin'
 */
signin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: signin.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signup'
 */
export const signup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signup.url(options),
    method: 'get',
})

signup.definition = {
    methods: ["get","head"],
    url: '/signup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signup'
 */
signup.url = (options?: RouteQueryOptions) => {
    return signup.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signup'
 */
signup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signup.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/signup'
 */
signup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: signup.url(options),
    method: 'head',
})