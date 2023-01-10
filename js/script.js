console.log('JS OK');
console.log('Vue OK', Vue);


const app = Vue.createApp({
    nome: 'carousel',
    data(){
        return {
            pictures: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',    
            ],
            currentIndex: 0,
        }
    }, 
    computed: {
        lastElementIndex() {
            return this.pictures.length - 1;
        }
    }, 
    methods: {
        goTo(target) {
            if (target === 'next') {
                this.currentIndex++;
                if (this.currentIndex === this.pictures.length) {
                    this.currentIndex = 0;
                }

            } else if (target === 'prev'){
                this.currentIndex--;
                if(this.currentIndex < 0){
                    this.currentIndex = this.pictures.length - 1;
                }
            } else {
                this.currentIndex = target;
            }
        }
    }
});

app.mount('#root');