export default {
    template: `
        <section class="book-filter">

            <input 
            v-model="filterBy.title"
            @input="filter()"
            type="text"
            placeholder="Search.."
            />

            <input 
            v-model="filterBy.minPrice"
            @input="filter()"
            type="number"
            placeholder="min price"
            />

            <input 
            v-model="filterBy.maxPrice"
            @input="filter()"
            type="number"
            placeholder="max price"
            />

        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0,
                maxPrice: Infinity,

            }
        }
    },
    methods: {
        filter() {
            console.log("filter from filter cmp")
            this.$emit('filter', this.filterBy)
        }
    }
}