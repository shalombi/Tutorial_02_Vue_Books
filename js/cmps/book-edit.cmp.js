import { bookService } from "../services/book-service.js"

export default {
    template: `
        <section class="book-edit">
            <h3>book edit</h3>
            {{ book }}
            <form @submit.prevent="save">
                <input 
                type="text"
                v-model="book.title"
                />

                <input 
                type="number"
                v-model="book.listPrice.amount"
                />

                <select v-model="book.listPrice.currencyCode" > 
                   <option value="ILS">ILS</option> 
                   <option value="USD">USD</option> 
                   <option value="EUR">EUR</option>
                </select>

                <button>save</button>

            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        async save() {
            const book = await  bookService.save(this.book)
            this.$emit('save', book)
            this.book = bookService.getEmptyBook()

        }
    }
}