import { bookService } from "../services/book-service.js"

export default {
  // props: ['book'],
  template: `
        <section class="book-details" v-if="book">
          <h3> Book-Details </h3>
          <h3>{{ book.title }}</h3>

          <h3>
            <span :class="{brown: book.listPrice.amount > 150, green : book.listPrice.amount < 20 }">{{ book.listPrice.amount }} </span>
            <span>{{ book.listPrice.currencyCode }} </span>
          </h3>

          <h3>{{ setLengthBook }}</h3>
          <h3>{{ setVeteranBook }}</h3>
          
          <!-- <pre v-if="book.review">{{ book.review }}</pre> -->
          

          <!-- <h3>sale ? {{ false ? 'is sale':'not sale' }}</h3> -->


          <img class="book-img" :src ="book.thumbnail" />
          <img v-if ="book.listPrice.isOnSale" :src ="imgSale.url"  />
          <!-- <button @click="$emit('close')">x</button> -->

          <form @submit.prevent="saveReview">
            <input type="text" v-model="review.txt" placeholder="review txt" />
            <input type="text" v-model="review.name" placeholder="name" />
            <!-- <select></select> -->

            <!-- <fieldset> -->
              <select v-model="review.rate"  > 
                  <option default>Rate</option> 
                  <option value=1>1</option> 
                  <option value=2>2</option> 
                  <option value=3>3</option>
                  <option value=4>4</option>
                  <option value=5>5</option>
              </select>
          <!-- </fieldset> -->
        
            <button>save review</button>
          </form>
          <hr/>

          <section v-if="book.review">
            <h1>reviews</h1>
            <h3>review :{{ book.review.txt }}</h3>
            <h3>name :{{ book.review.name }}</h3>
            <h3>rate :{{ book.review.rate }}</h3>
            <section>

          <router-link to="/book">Back</router-link>


        </section>
    `,
  data() {
    return {
      imgSale: {
        url: 'https://img.freepik.com/free-vector/red-sale-price-tag-style-banner-design-template_1017-27328.jpg?size=626&ext=jpg'
      },
      book: null,
      review: { txt: '', name: '', rate: '' }
    }
  },

  created() {
    this.loadBook()

  },
  methods: {
    async loadBook() {
      const id = this.$route.params.id
      const book = await bookService.get(id)
      console.log('book:', book)
      this.book = book

      // const isOnSale = this.book?.listPrice?.isOnSale
      // if (isOnSale) this.imgSale?.displayImg = true

    },
    async saveReview() {
      // const reviewTxt = this.review.txt
      // console.log('reviewTxt:', reviewTxt)
      // console.log('review:', this.review)
      let updatedBook = { ...this.book, review: this.review }
      updatedBook = await bookService.save(updatedBook)
      this.book = updatedBook
      this.review = { txt: '', name: '', rate: '' }
    }
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
      const isOnSale = this.book.listPrice.setIsOnSale
      if (isOnSale) return true
      return false
    }

  }

}

