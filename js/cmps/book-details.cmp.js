export default {
  props: ['book'],
  template: `
        <section class="book-details">
          <h3>{{ book.title }}</h3>

          <h3>
            <span>{{ book.listPrice.amount }} </span>
            <span>{{book.listPrice.currencyCode }} </span>
          </h3>

          <img class="book-img" :src ="book.thumbnail" />
          <button @click="$emit('close')">x</button>
        </section>
    `,
  methods: {

  },
  computed: {
  }
}