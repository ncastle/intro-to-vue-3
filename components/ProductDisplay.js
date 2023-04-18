app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img
            :src="image"
            alt="socks"
            :class="{ 'out-of-stock-img': !inStock}"
          />
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p>{{sale}}</p>
          <!-- Can also use v-show to display or hide an element
            using display='none' -->
          <!-- <p v-if="inStock">In Stock</p> -->
          <!-- Don't always need a v-else with a v-if -->
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{shipping}}</p>

          <!-- <p v-show="onSale">On Sale!</p> -->
          <p>{{description}}</p>
          <product-details :details="details"></product-details>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>
          <button
            class="button"
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock}"
          >
            Add to Cart
          </button>
          <button
            class="button"
            @click="removeFromCart"
            :disabled="cart === 0"
            :class="{ disabledButton: cart === 0}"
          >
            Remove from Cart
          </button>
        </div>

        <label aria-label="sock-sizes">Sizes:</label>
        <ul aria-labelledby="sock-sizes">
          <li v-for="size in sizes">{{size}}</li>
        </ul>
      </div>
      <p>
        Check out the
        <a :href="url">Vue Mastery Course</a>
      </p>
    </div>`,
  data() {
    return {
      brand: 'NCastle Dev',
      product: 'Socks',
      description: 'The best socks you will find on the internet',
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3',
      inventory: 7,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 33,
        },
        {
          id: 2234,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
        },
      ],
      sizes: ['tiny timmy', 'regular randle', 'large and in charge larry'],
    };
  },
  methods: {
    addToCart() {
      if (this.inStock && this.inventory > 0) {
        this.cart += 1;
        this.inventory -= 1;
      }
      this.updateInventory();
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
        this.inventory += 1;
      }
      this.updateInventory();
    },
    updateInventory() {
      if (this.inventory > 0) {
        this.inStock = true;
      } else {
        this.inStock = false;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) {
        return ' is on sale!';
      }
      return '';
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '2.99';
    },
  },
});
