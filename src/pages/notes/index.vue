<script setup lang="ts">
import { useAsyncData, useNuxtApp } from 'nuxt/app'
import type { Note } from '~/types/note'

const { data } = await useAsyncData('note-list', async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getContents<Note>({
    appUid: 'note',
    modelUid: 'post',
    query: {
      select: ['_id', 'title', 'slug', 'content', 'emoji', 'customDate'],
    },
  })
})

const posts = data.value?.items
console.log(posts)
</script>

<template>
  <AppTitle label="Notes" />
  <ul
    v-if="!!posts && posts.length"
    class="grid grid-cols-2 gap-4 md:grid-cols-4"
  >
    <li v-for="post in posts" :key="post._id">
      <nuxt-link
        :to="`/notes/${post.slug}`"
        class="card card-compact shadow-xl bg-primary-content btn h-auto px-0"
      >
        <div class="card-body aspect-1 w-full">
          <div class="flex items-center justify-center text-5xl h-24">
            {{ post.emoji.value }}
          </div>
          <span
            class="mb-0 flex items-center font-semibold h-12 line-clamp-2 text-base"
            >{{ post.title }}</span
          >
          <span class="text-xs text-accent-content">{{
            dateFormat(post.customDate)
          }}</span>
        </div>
      </nuxt-link>
    </li>
  </ul>
  <p v-else>1件もみつかりませんでした..</p>
</template>
