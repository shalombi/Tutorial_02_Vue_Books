import { bookService } from '../services/book-service.js'

import bookFilter from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookEdit from './book-edit.cmp.js'
import bookList from './book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-list :books="books">
         <!-- <pre>{{ books }}</pre> -->
    </section>
    `,
    data() {
        return {
            books: null
        }
    },
    created() {
        console.log(bookService.query())
        this.books = bookService.query()
    },
    methods: {

    },
    computed: {

    },
    components: {
        bookFilter,
        bookDetails,
        bookEdit,
        bookList,
    }
}