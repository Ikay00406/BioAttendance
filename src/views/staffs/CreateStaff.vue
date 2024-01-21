<template>
<div class="container col-lg-6">
  <h1 class="mb-4 fs-3 fw-bold text-center">Create Staff Form</h1> 

  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="firstname" class="form-label">First Name</label>
      <input v-model="formData.firstname" type="text" id="firstname" name="firstname" class="form-control">
    </div>

    <div class="mb-4">
      <label for="lastname" class="form-label">Last Name</label>
      <input v-model="formData.lastname" type="text" id="lastname" name="lastname" class="form-control">
    </div>

    <div class="mb-4">
      <label for="department" class="form-label">Department</label>
      <input v-model="formData.department" type="text" id="department" name="department" class="form-control">
    </div>

    <div class="mb-4">
      <label for="gender" class="form-label">Gender</label>
      <select v-model="formData.gender" id="gender" name="gender" class="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="email" class="form-label">Email</label>
      <input v-model="formData.email" type="email" id="email" name="email" class="form-control">
    </div>

    <div class="mb-4">
      <label for="password" class="form-label">Password</label>
      <input v-model="formData.password" type="password" id="password" name="password" class="form-control">
    </div>

    <button @click="submittedData" type="submit" class="btn btn-primary">Submit</button>
  </form>

  
</div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const formData = ref({
        firstname: '',
        lastname: '',
        department: '',
        gender: 'male',
        email: '',
        password: '',
      });
  
      const submittedData = ref(null);
  
      const submitForm = () => {
        // Simulate form submission
        submittedData.value = { ...formData.value };
      };
  
      return {
        formData,
        submittedData,
        submitForm,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  