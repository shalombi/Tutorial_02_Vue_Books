import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books"> 
                    <book-preview :book ="book"/>
                    <button @click="onRemove(book.id)">x</button>

                </li>
            </ul>
        </section>
    `,
    methods: {
        onRemove(bookId) {
            this.$emit('remove', bookId)
        }
    },
    components: {
        bookPreview
    }
}