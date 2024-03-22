import { defineStore } from "pinia";

export const useSiderbarStore = defineStore("SiderbarStore", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  getters: {},
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    reset() {
      this.isCollapse = false;
    },
  },
});
