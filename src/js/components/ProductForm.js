if(document.getElementById("page_product_form")) {
    let productForm = new Vue({
        el: "#page_product_form",
        
        data() {
            return {
                form: {
                    id: document.getElementsByClassName("product-single__variants").id.value,
                    quantity: 1
                }
            }
        },
    
        methods: {
    
            addToCart() {
                let newId = this.form.id = document.getElementsByClassName("product-single__variants").id.value
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
                    })
    
            }
        }
    
    });
}