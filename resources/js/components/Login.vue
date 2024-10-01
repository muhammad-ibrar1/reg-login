<template>
  <div class="login-container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-5">
          <div class="card-header text-center">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group mb-3">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Enter your email"
                  
                />
                <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
              </div>

              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="form.password"
                  class="form-control"
                  placeholder="Enter your password"
                  
                />
                <span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
              </div>

              <div class="form-group mb-3">
                <button class="btn btn-primary w-100" type="submit" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span v-if="loading">Logging in...</span>
                  <span v-else>Login</span>
                </button>
              </div>

              <div v-if="errors.general" class="alert alert-danger">
                {{ errors.general }}
              </div>

              <div class="form-group text-center">
                <a href="/register" class="text-muted">Don't have an account? Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {},
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      this.loading = true;
      this.errors = {};

      try {
        const response = await axios.post('/login', this.form);
         window.location.href = '/home';
      } catch (error) {
        this.loading = false;

        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors; // Validation errors
        } else if (error.response && error.response.status === 401) {
          this.errors.general = 'Invalid email or password';
        } else {
          this.errors.general = 'Something went wrong. Please try again later.';
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  padding: 20px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header h3 {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
}

.alert-danger {
  margin-top: 10px;
}
</style>
