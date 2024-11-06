<template>
  <div class="starship-list">
    <h1>Список космических кораблей</h1>
    <!-- Поле для поиска -->
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearchInput"
      placeholder="Поиск корабля..."
      class="search-bar"
    />
    <!-- Список кораблей -->
    <ul class="ship-list">
      <li v-for="ship in starships" :key="ship.name">
        <router-link
          :to="`/starship/${ship.url.split('/').slice(-2, -1)[0]}`"
          >{{ ship.name }}</router-link
        >
      </li>
    </ul>
    <!-- Пагинация -->
    <div class="pagination">
      <button @click="fetchPreviousPage" :disabled="!previous">Назад</button>
      <button @click="fetchNextPage" :disabled="!next">Вперед</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const starships = ref([]);
const searchQuery = ref("");
const next = ref<string | null>(null);
const previous = ref<string | null>(null);

// Функция для поиска кораблей
async function fetchStarships(
  url = `https://swapi.dev/api/starships/?search=${searchQuery.value}`
) {
  try {
    const response = await axios.get(url);
    starships.value = response.data.results;
    next.value = response.data.next;
    previous.value = response.data.previous;
  } catch (error) {
    console.error("Ошибка при получении данных о кораблях:", error);
  }
}

// Обработчик ввода в поле поиска
function onSearchInput() {
  fetchStarships(); // Перезапускаем поиск при каждом вводе
}

function fetchNextPage() {
  if (next.value) {
    fetchStarships(next.value);
  }
}

function fetchPreviousPage() {
  if (previous.value) {
    fetchStarships(previous.value);
  }
}

onMounted(() => {
  fetchStarships();
});
</script>

<style scoped lang="scss">
.starship-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;

  .search-bar {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .ship-list {
    list-style: none;
    padding: 0;

    li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
}
</style>
