import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('sidebar', () => SystemJS.import('@apps/sidebar'), isActive.sidebar, { el: "#content"})
singleSpa.registerApplication('header', () => SystemJS.import('@apps/header'), isActive.header)

singleSpa.start()
