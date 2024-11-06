<template>
  <header class="app-header">
    <h1>Галактический интерфейс</h1>
    <nav>
      <router-link to="/">Список кораблей</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.app-header {
  background-color: #282c34;
  padding: 16px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
}

nav a {
  color: #61dafb;
  text-decoration: none;
  margin-left: 16px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
