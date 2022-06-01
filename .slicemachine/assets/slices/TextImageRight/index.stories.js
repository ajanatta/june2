import MyComponent from '../../../../slices/TextImageRight';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextImageRight'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"text_image_right","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600932717369-d507b606a25d?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Maximize e-business relationships","spans":[]}],"description":[{"type":"paragraph","text":"Sunt ut Lorem labore fugiat sint. Pariatur proident cillum cupidatat consequat commodo sit amet. Aliquip exercitation id consectetur tempor cupidatat ut Lorem aliqua consequat duis aliquip dolore.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
