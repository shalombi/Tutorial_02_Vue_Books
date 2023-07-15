import { bookService } from "../services/book-service.js"

export default {
    template: `
        <section class="book-edit">
            {{ book }}
            <form @submit.prevent="save">
                <input 
                type="text"
                v-model="book.title"
                />
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
        save() {
            const book = bookService.save(this.book)
            this.$emit('save', book)
        }
    }
}