<template>
    <div class="">
        <div class="tabs">
          <ul>
            <router-link tag="li" :to="{name: 'client-overview'}" active-class="is-active" exact><a>Overview</a></router-link>
            <router-link tag="li" :to="{name: 'client-accounting'}" active-class="is-active" exact><a>Accounting</a></router-link>
          </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<style scoped>
.tabs ul {
  margin: 0;
}
</style>
