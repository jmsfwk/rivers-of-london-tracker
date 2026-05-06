<script setup lang="ts">
import PoliceHelmet from  './assets/police-helmet.svg';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img :src="PoliceHelmet" alt="Home" width="32" height="32">
        </RouterLink>

        <div lang="la" class="navbar-text"><i>Scientia est potentia</i></div>
      </div>
    </nav>
  </header>

  <div class="container p-3">
    <RouterView />
  </div>
</template>
