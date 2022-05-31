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
        }
    },
    computed: {
        filterByCategory() {
            return this.images.filter((image) => !image.category.indexOf(this.category));
        },
    }
})