<template>
  <div class="smui-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'sm-swipe-item',

    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>
