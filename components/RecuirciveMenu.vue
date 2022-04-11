<template>
  <div class="menu">
    <MenuItem
      v-for="menuItem in GetMenu"
      :key="menuItem.id"
      :data="menuItem.child"
      :label="menuItem.label"
      :depth="0"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "recursive-menu",
  data: () => ({}),

  props: ["menuItem"],

  computed: {
    ...mapGetters("menu", ["GetMenu"]),
  },
  methods: {
    ...mapActions("menu", ["Menu_Data"]),
  },
  mounted() {
    this.Menu_Data();
  },
};
</script>

<style scoped>
.menu i {
  position: fixed;
  left: 250px;
  font-size: 20px;
  top: 15px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.menu i i {
  left: 20px;
}
.menu {
  display: flex;
  transition: all 0.3s ease;
}
</style>
