<script setup lang="ts">
import { useRuntimeConfig, useFetch } from 'nuxt/app'
import { WP_REST_API_Posts } from 'wp-types'

const $config = useRuntimeConfig()

const wpUrl = $config.wpUrl
const companyUrl = $config.companyUrl

const { data: posts } = useFetch<WP_REST_API_Posts>(
  `${wpUrl}/blog?author=3&per_page=10&page=1`
)
</script>

<template>
  <section class="container">
    <p class="text-2xl font-bold">
      このサイトは、Nuxt.jsの学習のために作成したサイトです。
    </p>
  </section>

  <section class="mt-8">
    <h2 class="text-2xl">最近の会社ブログ</h2>
    <ul class="mt-4 space-y-2">
      <li v-for="(post, index) in posts" :key="index">
        ・<a
          :href="`${companyUrl}/blog/${post.slug}`"
          target="_blank"
          class="hover:opacity-70"
          >{{ post.title.rendered }}</a
        >
      </li>
    </ul>
    <div class="flex justify-end">
      <a
        :href="`${companyUrl}/blog/author/kazuki-hakozaki/`"
        target="_blank"
        class="btn"
        >もっと見る</a
      >
    </div>
  </section>
</template>
