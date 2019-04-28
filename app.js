const vm =  new Vue({
  el: '#app',
  data: {
    menssagem: 'funasaciona',
    produtos: []
  },

  filters: {
    formataPreco(valor) {
      console.log(valor)
      return valor.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})
    }
  },

  methods: {
      async apiProdtuos() {
        const getApi = await fetch('./api/produtos.json');
        const apiJson = await getApi.json()
        this.produtos = apiJson
        return console.log(apiJson)
      },

  },

  created() {
    this.apiProdtuos()
  
  },
})