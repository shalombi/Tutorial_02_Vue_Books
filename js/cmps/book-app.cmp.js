import { bookService } from '../services/book-service.js'

import bookFilter from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookEdit from './book-edit.cmp.js'
import bookList from './book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-edit @save="save"/>
        <book-filter @filter="filter"/>
        <book-details @close="select('')" v-if="selected" :book="selected"/>

        <book-list 
        :books="booksToShow"
         @remove="remove"
         @select = "select"
         v-if="!selected"
         />



    </section>
    `,
    data() {
        return {
            books: bookService.query(),
            selected: null,
            filterBy: { title: '', minPrice: 0, maxPrice: Infinity }
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
        },
        filter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            const regex = new RegExp(this.filterBy.title, 'i')
            let books = this.books.filter(book => regex.test(book.title))
            books = books.filter(b => b.listPrice.amount > this.filterBy.minPrice)
            books = books.filter(b => b.listPrice.amount < this.filterBy.maxPrice)
            return books
        }
    },
    components: {
        bookFilter,
        bookDetails,
        bookEdit,
        bookList,
    }
}