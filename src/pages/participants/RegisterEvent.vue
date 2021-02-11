<template>
<h1>{{event}}</h1>
  <form @submit.prevent="submitForm">
    <div class="form-controls">
      <label for="name">Your Name</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>
    <div class="form-controls">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
     <div class="form-controls">
      <label for="mobile">Your Phone</label>
      <input type="tel" id="mobile" v-model.trim="mobile" maxlength="10" minlength="9" />
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter valid email and non empty message
    </p>
    <div class="actions">
      <base-button>Register</base-button>
    </div>
  </form>
</template>

<script>
export default {
  props:['event'],
  data() {
    return {
      name: '',
      mobile: '',
      email: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') 
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        name:this.name,
        mobile:this.mobile,
        email: this.email,
        event: this.event
        // coachId: this.$route.params.id,
      });
      this.$router.replace('/');
    },
  },
};
</script>

<style  scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.errors {
  font-weight: bold;
  color: red;
}
.actions {
  text-align: center;
}
</style>