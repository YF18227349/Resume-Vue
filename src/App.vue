<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  
}
a {
  text-decoration: none;
}
 html::-webkit-scrollbar {
     width: 0 !important;
   }
   html::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
</style>
