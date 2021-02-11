<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !name.isValid }">
      <label id="name">Event name</label>
      <input type="text" id="name" v-model.trim="name.val" />
      <p v-if="!name.isValid">Event must not be Empty</p>
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label id="description">Event Description</label>
      <textarea id="description" v-model.trim="description.val"></textarea>
      <p v-if="!description.isValid">Description must not be Empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !date.isValid }">
      <label id="rate">Date</label>
      <input type="text" id="date" v-model.number="date.val" />
      <p v-if="!date.isValid">date must not be Empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !deadline.isValid }">
      <label id="deadline">Deadline</label>
      <input type="text" id="deadline" v-model.number="deadline.val" />
      <p v-if="!date.isValid">deadline must not be Empty</p>
    </div>

    <p v-if="!formIsValid">Please enter valid information</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: { val: '', isValid: true },
      description: { val: '', isValid: true },
      date: { val: null, isValid: true },
      deadline: { val: null, isValid: true },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      console.log(this.date)
      this.formIsValid = true;
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.date.val) {
        this.date.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        name: this.name.val,
        description: this.description.val,
        date: this.date.val + '',
        deadline: this.deadline.val + '',
      };
      console.log(formData);
      this.$store.dispatch('coaches/registerCoach', formData);
      this.$router.replace('/events');
    },
  },
};
</script>

<style scoped>
form{
  padding: 5rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>