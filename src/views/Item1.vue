<template>
  <div class="item1">
    <h3>{{name + '---' + age}}</h3>
    姓名：<input type="text" v-model="uname" /><br>
    年龄：<input type="number" v-model="uage" /><br>
    <input type="button" value="跳到item2" @click="goItem2"/><br>
    <img src="../assets/1.jpg" />
  </div>
</template>

<script>
  export default {
    name: 'Item1',
    props: ['name','age'],
    data() {
      return {
        uname: '',
        uage: ''
      }
    },
    methods: {
      goItem2() {
        // this.$router.push('/about/item2')
        // this.$router.push({'path': '/about/item2'})
        this.$router.push({'name': 'Item2', params: {name1: this.uname, age1: this.uage}})
        // this.$router.push({'path': '/about/item2', query: {name: 'jerry', age: 24}})
        // this.$router.go(1)//前进一步
        // this.$router.go(-1)//后退一步
      }
    }
  }
</script>

<style scoped>
</style>
