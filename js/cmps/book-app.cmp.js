import { bookService } from '../services/book-service.js'

import bookFilter from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookEdit from './book-edit.cmp.js'
import bookList from './book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        

    </section>
    `,
    data(){
        return { 
           
        }
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