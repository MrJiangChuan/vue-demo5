<template>
  <div class="item2">
    <h3>query参数：{{$route.query.name + '---' + $route.query.age}}</h3>
    <h3>param参数：{{name1 + '---' + age1}}</h3>
    <img src="../assets/2.jpg" />
  </div>
</template>

<script>
  export default {
    name: 'Item2',
    props: ['name1','age1']
  }
</script>

<style scoped>
</style>
