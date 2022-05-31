new Vue({
    el: "#app",
    components: {
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide
    },
    data: function () {
        return {
            category: '',
            images: [{
                index: 1,
                src: "./assets/servicos/1.jpg",
                category: "web"
            },
            {
                index: 2,
                src: "./assets/servicos/2.jpg",
                category: "web"
            },
            {
                index: 3,
                src: "./assets/servicos/3.jpg",
                category: "email"
            },
            {
                index: 4,
                src: "./assets/servicos/4.jpg",
                category: "apps"

            },
            {
                index: 5,
                src: "./assets/servicos/5.jpg",
                category: "graficos"
            },
            {
                index: 6,
                src: "./assets/servicos/6.jpg",
                category: "email"
            },
            {
                index: 7,
                src: "./assets/servicos/7.jpg",
                category: "apps"
            },
            {
                index: 8,
                src: "./assets/servicos/8.jpg",
                category: "graficos"
            },
            {
                index: 9,
                src: "./assets/servicos/9.jpg",
                category: "web"
            },
            ],
            empresas: [
                { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
                { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
                { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
                { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
                { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
                { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
            ],
            cpf: '',
            message: '',

        }
    },

    // var cep = "22.000-000";
    // var cepFormatado = false;
    //this.cpf.indexOf('.')==2 && this.cpf.indexOf("-") == 6
    // if(cep.indexOf(".") == 2 && cep.indexOf("-") == 6){
    // cepFormatado = true;}
    computed: {

        filterByCategory() {
            return this.images.filter((image) => !image.category.indexOf(this.category));
        },
    }
})