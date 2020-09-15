<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/item1">Item1</router-link>
    <router-link to="/about/item2" style="margin-left: 30px;">Item2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'About'
}
</script>
