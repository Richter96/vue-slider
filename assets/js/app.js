const { createApp } = Vue

createApp({
  data() {
    return {
      titolo: 'SLIDER SHOW',
      idInterval:null,
      activeimage: 0,
      games: [
        {
          image: './assets/img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
          image: './assets/img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
          image: './assets/img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
          image: './assets/img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
          image: './assets/img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
      ]

    }
  },
  
  mounted() {
    this.autoImage()
  },
  methods: {
    nextImage() {
      console.log('cliccato next');
      this.activeimage++
      if (this.activeimage == this.games.length) {
        this.activeimage = 0
      }

    },
    prevImage() {
      this.activeimage--
      console.log('cliccato prev');
      if (this.activeimage < 0) {
        this.activeimage = this.games.length - 1
      }
    },
    autoImage() {
       this.idInterval = setInterval(() => {
        this.nextImage()
      }, 2000);
    },
    stopAuto() {
      clearInterval(this.idInterval)
    }
  },
}).mount('#app')