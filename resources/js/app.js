/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import RegisterComponent from './components/Register.vue';
import LoginComponent from './components/Login.vue';

const app = createApp({});

app.component('register-component', RegisterComponent);
app.component('login-component', LoginComponent);

app.mount('#app');
