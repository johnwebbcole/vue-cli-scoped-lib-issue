<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@jwc/alib1";
import "@jwc/alib1/dist/alib1jwc.css";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
