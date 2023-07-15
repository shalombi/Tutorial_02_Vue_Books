import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <!-- <h1>books from book list</h1> -->
            <!-- <pre>{{ books }}</pre> -->
            <ul>
                <li v-for="book in books"> 
                    <book-preview :book ="book"/>
                </li>
            </ul>
            <!-- {{book}} -->
        </section>
    `,
    methods: {

    },
    components: {
        bookPreview
    }
}