<script setup>
  import Heading from './views/Heading.vue';
  import {RouterView} from 'vue-router';
</script>

<template>
  <div class="Main">
    <div class="Heading">
      <Heading />
    </div>
    <div class="AddedAnnouncementContainer">
      <RouterView />
    </div>
  </div>
</template>

