<template>
  <div class="starship-detail">
    <h1>Информация о корабле</h1>
    <div v-if="loading">Загрузка информации...</div>
    <div v-else-if="starship">
      <p><strong>Название:</strong> {{ starship.name }}</p>
      <p><strong>Модель:</strong> {{ starship.model }}</p>
      <p><strong>Класс:</strong> {{ starship.starship_class }}</p>
      <p><strong>Производитель:</strong> {{ starship.manufacturer }}</p>
      <!-- Добавьте здесь больше полей по мере необходимости -->
    </div>
    <div v-else>
      <p>Корабль не найден.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const starship = ref(null);
const loading = ref(true);

async function fetchStarship() {
  loading.value = true;
  const id = route.params.id;
  try {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
    starship.value = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о корабле:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchStarship();
});
</script>

<style scoped lang="scss">
.starship-detail {
  max-width: 600px;
  margin: auto;
  padding: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
