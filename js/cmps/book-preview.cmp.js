export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div>
                <h2>{{ book.title }}</h2>
                <h2>
                     <span>   {{ book.listPrice.amount }} </span>
                     
                     <span> {{setCurrencySign (book.listPrice.currencyCode) }} </span>
                        <router-link :to=" '/book/' + book.id ">Details...</router-link> |
                        <!-- <router-link :to="'/car/edit/' + car.id">Edit</router-link> | -->
                     <img class="book-img" :src ="book.thumbnail" />
                </h2>
            </div>

        </section>
    `,
    methods: {
        setCurrencySign(currencyCode) {
            if (currencyCode === 'USD') return '$'
            if (currencyCode === 'EUR') return '€'
            if (currencyCode === 'ILS') return '₪'
        }
    },
    computed: {
    }
}

//  > 500 – Long reading
//  > 200 – Decent Reading
//  < 100 – Light Reading