import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id"> 
                    <book-preview :book ="book"/>
                    <button @click="onRemove(book.id)">x</button>
                    <button @click="displayDetails(book)" >Details</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        onRemove(bookId) {
            this.$emit('remove', bookId)
        },
        displayDetails(selected){
            this.$emit('select',selected)
        }
    },
    components: {
        bookPreview
    }
}