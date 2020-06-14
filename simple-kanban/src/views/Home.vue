<template>
  <div class="title">
    <figure class="image">
      <b-carousel
        v-model="carousel"
        :animated="animated"
        :has-drag="drag"
        :autoplay="autoPlay"
        :pause-hover="pauseHover"
        :pause-info="pauseInfo"
        :pause-info-type="pauseType"
        :interval="interval"
        :arrow="arrow"
        :indicator="indicator"
        :repeat="repeat">
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-large is-bold`" :style="`background: linear-gradient(to right, rgba(62, 81, 81, 0.6), rgba(62, 81, 81, 0.3)), url(${carousel.src}) no-repeat fixed center; backgroundOrigin: padding-box; backgroundSize: cover`">
            <div class="hero-body has-text-centered">
              <h1 class="title" :style="`color: ${carousel.color}`">{{carousel.title}}</h1>
              <router-link to="/kanban"><b-button>GO TO KANBAN</b-button></router-link>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </figure>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      carousel: 0,
      animated: 'fade',
      drag: true,
      autoPlay: true,
      pauseHover: true,
      pauseInfo: false,
      repeat: true,
      pauseType: 'is-primary',
      interval: 2000,
      arrow: false,
      indicator: false,
      carousels: [
        { title: 'START WRITING YOUR KANBAN', color: 'black', src: 'https://cdn.pixabay.com/photo/2019/03/14/08/21/stickies-4054379_960_720.jpg' },
        { title: 'CHOOSE YOUR PROFILE', color: 'black', src: 'https://cdn.pixabay.com/photo/2019/03/14/08/21/whiteboard-4054377_960_720.jpg' },
        { title: 'SIMPLE KANBAN', color: 'black', src: 'https://cdn.pixabay.com/photo/2019/03/14/08/21/kanban-4054380_960_720.jpg' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
