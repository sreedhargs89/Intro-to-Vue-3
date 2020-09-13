const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ]
        }
    },
    methods: {
        //Everything in single method, updates the cart --> Add/Remove, Remove only if cart is > 0
        updateCart(status) {
            status == 1 ? (this.cart += 1) : (this.cart > 0 ? this.cart -= 1 : 0);
        },

        addToCart() {
            this.cart = this.cart + 1;
        },

        updateImage(vImage) {
            this.image = vImage;
        },

        removeFromCart() {
            if (this.cart > 0)
                this.cart = this.cart - 1;
        }
    }
})
