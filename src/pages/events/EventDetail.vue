<template>
  <div>
    <section>
      <base-card>
        <h2>Event Name : {{ name }}</h2>
        <h3>Date : {{ date }}</h3>
        <h3>Dead : {{ deadline }}</h3>
        <h4>Description : {{description}}</h4>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h3>Register the event</h3>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view :event="name" ></router-view>
      </base-card>
    </section>

  </div>
</template>


<script>
export default {
  props: ['name'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    // name() {
    //   return this.selectedCoach.name;
    // },
    contactLink() {
      return this.$route.path + '/contact';
    },
    deadline() {
      return this.selectedCoach.deadline;
    },
    date() {
      return this.selectedCoach.date;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.name === this.name
    );
  },
};
</script>
<style>
</style>