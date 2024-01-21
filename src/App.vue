<template>
  <div class="nk-app-root">
    <div class="nk-main">
      <!-- sidebar @s -->
      <side-menu></side-menu>
      <!-- sidebar @e -->
        <!-- wrap @s -->
        <div class="nk-wrap">
            <!-- main header @s -->
              <header-menu></header-menu>
            <!-- main header @e -->

            <!-- main content @s -->
            <div class="nk-content">
                <router-view></router-view>
            </div>
            <!-- main content @e -->

            <!-- main footer @s -->
              <app-footer></app-footer>
            <!-- main footer @e -->
        </div>
        <!-- wrap @e -->
    </div>
  </div>
</template>

<script setup>
  import AppFooter from './views/components/AppFooter.vue';
  import HeaderMenu from './views/components/HeaderMenu.vue';
  import SideMenu from './views/components/SideMenu.vue';
</script>

<style scoped>

</style>