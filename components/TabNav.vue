<template>
  <thead class="tabs">
    <ul>
      <li class="news-btns">
        <button
          type="button"
          :class="{ 'is-active': tab.isActive }"
          @click="selectTab(tab)"
          v-for="tab in tabs"
          :key="tab.id"
          class="news-btn btn"
        >
          {{ tab.name }}
        </button>
      </li>
      <section class="tabs-details">
        <slot></slot>
      </section>
    </ul>
  </thead>
</template>
<script>
export default {
  data() {
    return {
      /* Holds all of the tabs data */
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>
