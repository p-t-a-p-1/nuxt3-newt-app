<script setup lang="ts">
import { ref, computed } from 'vue'
const characters = ref([
  {
    emoji: '🤥',
    text: '嘘がつけない',
  },
  {
    emoji: '🦉',
    text: '夜行性',
  },
  {
    emoji: '🏀',
    text: '運動が好き（特にバスケ）',
  },
  {
    emoji: '🦀',
    text: '運動が好き（特にバスケ）aaa',
  },
])

const currentAge = computed(() => {
  const today = new Date()
  // 今年の誕生日（例：1996/2/25）
  // 月部分は-1する（5月生まれは4）
  const thisYearBirthday = new Date(today.getFullYear(), 1, 25)

  // 2023 - 1996 = 27
  let age = today.getFullYear() - 1996
  if (today < thisYearBirthday) {
    // 今年の誕生日が来ていなければ1引く
    age--
  }

  return age
})
</script>

<template>
  <section class="pb-8">
    <AppTitle label="About" />
    <p class="py-4">{{ currentAge }}歳のフロントエンドエンジニアです！</p>
    <ul class="flex flex-col gap-y-2">
      <li v-for="character in characters" :key="character.text">
        {{ character.emoji }} {{ character.text }}
      </li>
    </ul>
  </section>
</template>
