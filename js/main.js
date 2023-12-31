const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import bookApp from './views/book-app.cmp.js'
import homePage from './views/home-page.cmp.js'
import bookDetails from './views/book-details.cmp.js'
import bookEdit from './cmps/book-edit.cmp.js'

const options = {
    template: `
        <section>
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        appFooter,
    }
}

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/book',
            component: bookApp
        },
        {
            path: '/book/:id',
            component: bookDetails
        },
        {
            path: '/book/edit/:id?',
            component: bookEdit
        },
        // {
        //     path: '/about',
        //     component: aboutPage
        // },
    ]
}
const app = createApp(options)
const router = createRouter(routerOptions)

app.use(router)
app.mount('#app')

// const app = createApp(options)

// app.mount('#app')/