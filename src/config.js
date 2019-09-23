import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('sidebar', () => SystemJS.import('@apps/sidebar'), isActive.sidebar)
singleSpa.registerApplication('header', () => SystemJS.import('@apps/header'), isActive.header)
singleSpa.registerApplication('clients', () => SystemJS.import('@apps/clients'), isActive.clients)

singleSpa.start()
