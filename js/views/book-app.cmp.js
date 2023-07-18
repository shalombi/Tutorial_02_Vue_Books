import { bookService } from '../services/book-service.js'

import bookFilter from '../cmps/book-filter.cmp.js'
import bookDetails from '../cmps/book-details.cmp.js'
import bookEdit from '../cmps/book-edit.cmp.js'
import bookList from '../cmps/book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-edit @save="save"/>
        <book-filter @filter="filter"/>
        <book-details @close="select('')" v-if="selected" :book="selected"/>

        <book-list 
        v-if="books"
        :books="booksToShow"
         @remove="remove"
         @select = "select"
         v-if="!selected"
         />
         <!-- <pre>{{books}}</pre> -->


    </section>
    `,
    data() {
        return {
            books: null,
            selected: null,
            filterBy: { title: '', minPrice: 0, maxPrice: Infinity }
        }
    },
    created() {

        // console.log('dd')
        // console.log(bookService.query())
        this.loadBooks()
        // this.books = bookService.query()
    },
    methods: {

        async loadBooks() {
            const booksFromDB = await bookService.query()
            this.books = booksFromDB
        },

        async remove(bookId) {
            console.log('bookId:', bookId)
            await bookService.remove(bookId)
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
            let books = this.books?.filter(book => regex.test(book.title))
            books = books?.filter(b => b.listPrice.amount > this.filterBy.minPrice)
            books = books?.filter(b => b.listPrice.amount < this.filterBy.maxPrice)
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