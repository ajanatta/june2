<template>
  <section class="section">
    <div>
      <h1>{{ data.title[0].text }}</h1>
      <p>{{ data.description[0].text }}</p>
    </div>
    <div>
      <img :src="data.image.url" :alt="data.image.alt" />
    </div>

    
  </section>
</template>
<script>

export default {
  async asyncData({ $prismic, error }) {
    const { data: { slices } } = await $prismic.api.getByUID('homepage-id', 'homepageuid')
    const data = slices[0].primary;
    if (data) {
      return { data }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>


<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 2em;
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  justify-content: space-around;
}

.section > div {
  flex-basis: 50%;
}

.section > div:last-child {
  text-align: center;
}

@media screen and (min-width: 1023px) {
  .section { 
    flex-direction: row;
    margin-right: 2em;
  }
}

img {
  max-width: 60%;
}
.title {
  margin-bottom: 2em;
}
</style>
