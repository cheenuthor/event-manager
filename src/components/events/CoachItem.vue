<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>{{ date }}</h4>
    <div class="actions">
      <base-button link :to="coachDetailsLink">View Detais</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['name', 'description', 'date', 'deadline'],
  computed: {
    
    coachDetailsLink() {
      return this.$route.path + '/' + this.name;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}
h3 {
  font-size: 1.5rem;
}
h3,
h4 {
  margin: 0.5rem 0;
}
div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>