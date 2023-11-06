<script setup lang="ts">
import { useRoute, useAsyncData, useNuxtApp } from 'nuxt/app'
import type { Note } from '~/types/note'

const route = useRoute()
const { slug } = route.params

const { data } = await useAsyncData(`note-item-${slug}`, async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getFirstContent<Note>({
    appUid: 'note',
    modelUid: 'post',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'content', 'emoji', 'customDate'],
    },
  })
})

const post = data.value
</script>

<template>
  <section v-if="post">
    <div class="text-center">
      <div class="text-6xl">{{ post?.emoji.value }}</div>
      <AppTitle :label="post?.title" class="mt-8" />
      <div class="text-xs text-accent-content">
        {{ dateFormat(post?.customDate) }}
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="mt-8 pt-2" v-html="post?.content"></div>
  </section>
</template>
