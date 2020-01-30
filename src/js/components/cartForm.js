import Axios from "axios";


if(document.querySelector("#v-cart-item")) {
    let productForm = new Vue({
        el: "#v-cart-item",
        delimiters: ["${", "}"],
        data() {
            return {
                cart: null,
                subTotal:{},
            }
        },

        created() {
            this.getCart();
        },
    
        methods: {

            assign(sub, item) {
                
                this.subTotal[item] = sub
            },

            subtotal(item){
                let sub = item.quantity * item.price
                this.assign(sub, item.id)
               return (sub)
            },

            total(cart) {
                return Object.keys(this.subTotal).map(item => this.subTotal[item]).reduce((acc, curr) => acc + curr)
            },

            getCart() {
                Axios.get("/cart.js")
                    .then( response => {
                        console.log(response);
                        this.cart = response.data;
                    })
                    .catch( error => {
                        new Noty({
                            type: 'error',
                            timeout: 3000,
                            layout: 'topLeft',
                            text: 'Algo deu errado =(, favor tentar novamente'
                        }).show();
                    })

            },
    
            addToCart() {
                /*let newId = this.form.id = document.getElementsByClassName("product-single__variants").id.value
                newId
                Axios.post("/cart/add.js", this.form)
                    .then(function(response){
                        new Noty({
                            type: 'success',
                            timeout: 3000,
                            layout: 'topLeft',
                            text: 'Produto adicionado ao carrinho =)'
                        }).show();
    
                    })
                    .catch(function(error){
                        console.log(error)
                        new Noty({
                            type: 'error',
                            timeout: 3000,
                            layout: 'topLeft',
                            text: 'Algo deu errado =(, favor tentar novamente'
                        }).show();
                    })*/
    
            }
        }
    
    });
}