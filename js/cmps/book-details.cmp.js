export default {
  props: ['book'],
  template: `
        <section class="book-details">
          <h3>{{ book.title }}</h3>

          <h3>
            <span :class="{brown: book.listPrice.amount > 150, green : book.listPrice.amount < 20 }">{{ book.listPrice.amount }} </span>
            <span>{{ book.listPrice.currencyCode }} </span>
          </h3>

          <h3>{{ setLengthBook }}</h3>
          <h3>{{ setVeteranBook }}</h3>
          <h3>{{ setIsOnSale }}</h3>

<!-- {{imgSale}} -->

          <img class="book-img" :src ="book.thumbnail" />
          <img v-if ="this.imgSale.displayImg" :src ="this.imgSale.url"  />
          <button @click="$emit('close')">x</button>
        </section>
    `,
  data() {
    return {
      imgSale: {
        displayImg: false,
        url: 'https://img.freepik.com/free-vector/red-sale-price-tag-style-banner-design-template_1017-27328.jpg?size=626&ext=jpg'
      },

    }
  },

  created() {
    const isOnSale = this.book.listPrice.isOnSale
    if (isOnSale) this.imgSale.displayImg = true
  },
  methods: {

  },
  computed: {

    setLengthBook() {
      const { pageCount } = this.book
      if (pageCount > 500) return 'Long reading'
      if (pageCount > 200) return 'Decent Reading'
      if (pageCount > 100) return 'Light Reading'
      else if (pageCount > 0 && pageCount <= 100) return 'Less than 100 pages'
      else return ''
    },

    setVeteranBook() {
      const currentYear = new Date().getFullYear()
      if (currentYear - this.book.publishedDate > 10) return 'Veteran Book'
      else if (currentYear - this.book.publishedDate < 1) return 'New'
    },

    setIsOnSale() {
      // const isOnSale = this.book.listPrice.setIsOnSale
      // if (isOnSale) this.imgSale.displayImg = true
    }

  }

}

