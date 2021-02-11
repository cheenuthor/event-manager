<template>
  <div>
    <h1></h1>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Request Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequest && !isLoading">
          <request-item
            v-for="req in receivedRequests"
            :key="req.name"
            :name="req.name"
            :mobile="req.mobile"
            :email="req.email"
            :event="req.event"
          >
          </request-item>
        </ul>
        <h3 v-else>you haven't received any request yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/participants/RequestItem.vue';

export default {
  components: { RequestItem },
  created() {
    this.loadRequest();
  },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequest() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequest');
      } catch (error) {
        this.error = error.message || 'something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>