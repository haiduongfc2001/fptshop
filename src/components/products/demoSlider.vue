<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script scoped>
export default {
  name: "demoSlider",
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>

<style scoped>

</style>