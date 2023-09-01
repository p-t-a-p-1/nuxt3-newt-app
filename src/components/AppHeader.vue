<template>
  <header>
    <div class="navbar max-w-4xl px-4 mx-auto">
      <h1 class="flex-1">
        <NuxtLink to="/" class="normal-case text-xl hover:opacity-70"
          >hako</NuxtLink
        >
      </h1>
      <nav class="flex-none">
        <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <label tabindex="0" class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu dropdown-content p-2 shadow z-[1] bg-base-100 rounded-box"
          >
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/notes">Notes</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
