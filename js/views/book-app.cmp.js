import { bookService } from '../services/book-service.js'

import bookFilter from '../cmps/book-filter.cmp.js'
import bookEdit from '../cmps/book-edit.cmp.js'
import bookList from '../cmps/book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <!-- <book-edit @save="save"/> -->
        <book-filter @filter="filter"/>

        <book-list 
        v-if="books"
        :books="booksToShow"
         @remove="remove"
         />

 
         <router-link :to=" '/book/edit' "> <button> Add</button></router-link>


    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: { title: '', minPrice: 0, maxPrice: Infinity }
        }
    },
    created() {
        this.loadBooks()
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

        // save(book) {
        //     this.books.push(book)
        // },

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
        bookEdit,
        bookList,
    }
}