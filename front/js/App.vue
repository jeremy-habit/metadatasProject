<template>
  <div id="app">
    <form action="localhost:4000/upload" method="post">
      <input type="file" name="file" id="file">
    </form>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
