<template>
  <div id="ranking">
    <div class="center">
      <h1>Ranking</h1>
      <ul class="tables">
        <li>
          <h2>Planet</h2>
          <ul class="list">
            <li class="no-data" v-if="planet.length === 0">no data</li>
            <li v-for="item in planet" :key="planet.indexOf(item)" @click="focus(item)">
              <span :class="{'name': planet.indexOf(item) < 3}">
                {{planet.indexOf(item)}} {{item.name}}
              </span>
              <span class="dust">{{item.dust}}</span>
            </li>
          </ul>
        </li>
        <li>
          <h2>Planet Owner</h2>
          <ul class="list">
            <li class="no-data" v-if="planet.length === 0">no data</li>
            <li v-for="item in owner" :key="owner.indexOf(item)">
              <span :class="{'name': owner.indexOf(item) < 3}">
                {{owner.indexOf(item)}} {{item.username}}
              </span>
              <span class="dust">{{item.dust}}</span>
            </li>
          </ul>
        </li>
        <li>
          <h2>Builder</h2>
          <ul class="list">
            <li class="no-data" v-if="planet.length === 0">no data</li>
            <li v-for="item in builder" :key="builder.indexOf(item)">
              <span :class="{'name': builder.indexOf(item) < 3}">
                {{builder.indexOf(item)}} {{item.username}}
              </span>
              <span class="dust">{{item.dust}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api'

// const planet = [
//   { name: 'a bus', dust: 341 },
//   { name: 'a bus', dust: 300 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 }
// ]
// const owner = [
//   { name: 'a bus', dust: 341 },
//   { name: 'a bus', dust: 300 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 }
// ]
// const builder = [
//   { name: 'a bus', dust: 341 },
//   { name: 'a bus', dust: 300 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 200 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 },
//   { name: 'a bus', dust: 189 }
// ]

export default {
  name: 'Ranking',
  data () {
    return {
      planet: [],
      owner: [],
      builder: []
    }
  },
  created () {
    api.rank_dashboards().then((res) => {
      const d = res.data
      if (d.errcode) {
        alert(d.errmsg)
      } else {
        this.planet = d.planets
        this.owner = d.owners
        this.builder = d.builders
      }
    })
  },
  methods: {
    focus (item) {
      this.$emit('view', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
#ranking
  width 100%
  height 100%
  position absolute
  top 0
  left 0
  h1
    font-size 50px
    margin 0 0 50px
    text-align center
    color #FFF
  h2
    font-size 32px
    margin 24px 0 40px
    text-align center
.tables
  width 100%
  margin auto
  >li
    width 30%
    margin-left 2.5%
    float left
    background-color #FFF
    border-radius 8px
    height 571px
  .no-data
    opacity 0.5
    text-align center
.center
  position absolute
  top 50%
  left 10%
  width 80%
  transform translate3d(0, -50%, 0)
.list
  margin 48px 40px
  li
    cursor pointer
    line-height 40px
  .name
    font-size 24px
  .dust
    color #B7B7B7
    float right
</style>
