import { bookService } from '../services/book-service.js'

import bookFilter from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookEdit from './book-edit.cmp.js'
import bookList from './book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-edit @save="save"/>
        <book-details @close="select('')" v-if="selected" :book="selected"/>

        <book-list 
        :books="books"
         @remove="remove"
         @select = "select"
         v-if="!selected"
         />



    </section>
    `,
    data() {
        return {
            books: bookService.query(),
            selected: null
        }
    },
    created() {
        // console.log(bookService.query())
        // this.books = bookService.query()
    },
    methods: {
        remove(bookId) {
            console.log('bookId:', bookId)
            bookService.remove(bookId)
            this.books = this.books.filter(b => b.id !== bookId)
        },
        save(book) {
            this.books.push(book)
        },
        select(book) {
            console.log(book)
            this.selected = book
        }
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