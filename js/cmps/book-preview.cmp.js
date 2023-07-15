export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div>
                <h2>{{ book.title }}</h2>
                <h2>
                     <span>   {{ book.listPrice.amount }} </span>
                     <span> {{setCurrencySign (book.listPrice.currencyCode) }} </span>
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