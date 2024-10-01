<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header text-center">
            <h2>Register</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group mb-3">
                <label for="name">Name:</label>
                <input type="text" v-model="form.name" class="form-control" :class="{'is-invalid': errors.name}" />
                <div v-if="errors.name" class="invalid-feedback">
                  {{ errors.name[0] }}
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" class="form-control" :class="{'is-invalid': errors.email}" />
                <div v-if="errors.email" class="invalid-feedback">
                  {{ errors.email[0] }}
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="password">Password:</label>
                <input type="password" v-model="form.password" class="form-control" :class="{'is-invalid': errors.password}" />
                <div v-if="errors.password" class="invalid-feedback">
                  {{ errors.password[0] }}
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  methods: {
    async register() {
      try {
        this.errors = {};
        // we can use /api/register as well if we go through api. for now i am just going with basic thing
        const response = await axios.post('/register', this.form);
        window.location.href = '/home';
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.card-header {
  background-color: #007bff;
  color: white;
}
</style>
