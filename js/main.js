const { createApp } = Vue

import carApp from './cmps/car-app.cmp.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

const options = {
    template: `
        <section>
            <app-header />
            <car-app />
            <app-footer />
        </section>
    `,
    components: {
        carApp,
        appHeader,
        appFooter,
    }
}

const app = createApp(options)

app.mount('#app')
