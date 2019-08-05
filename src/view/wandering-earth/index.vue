<template>
  <my-chart style="width: 100%;height:800px;margin: 0 auto" :options="option"></my-chart>
</template>

<script>
  /* eslint-disable no-console */
  import myChart from '@/components/charts/my-chart'
  import earth from '@/assets/image/large-screen/earth.jpg'
  import bathymetry from '@/assets/image/large-screen/bathymetry_4k.jpg'
  import night from '@/assets/image/large-screen/night.jpg'
  import starfield from '@/assets/image/large-screen/starfield.jpg'
  import clouds from '@/assets/image/large-screen/clouds.png'

  export default {
    name: 'index',
    components: {
      myChart
    },
    data() {
      return {
        option: {
          backgroundColor: '#000',
          globe: {
            baseTexture: earth,
            heightTexture: bathymetry,
            displacementScale: 0.1,
            shading: 'lambert',
            environment: starfield,
            light: {
              ambient: {
                intensity: 0.1
              },
              main: {
                intensity: 1.5
              }
            },

            layers: [
              {
                type: 'blend',
                blendTo: 'emission',
                texture: night
              },
              {
                type: 'overlay',
                texture: clouds,
                shading: 'lambert',
                distance: 5
              }
            ]
          },
          series: []
        }
      }
    },
    methods: {
      initValue() {
        this.$axios.get('/amap/environmental/api/home/air/7day').then(res => {
          // console.log(res.data)
        })
      }
    },
    mounted() {
      this.initValue()
    }
  }
</script>

<style lang="less" scoped>

</style>
