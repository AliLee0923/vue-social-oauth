<template>
  <div
    class="container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 my-auto"
  >
    <div class="p-8 bg-gray-200">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold tracking-tight">Login</h1>
          <p class="text-sm text-muted-foreground">
            Get started in one click with your Google account or enter your work
            email.
          </p>
        </div>
        <div class="grid gap-6">
          <div>
            <div class="grid gap-6">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-11 px-4 py-2 hover:text-purple-600"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline w-6 h-6 mr-3 text-gray-900 fill-current"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Gmail
              </button>
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <span class="w-full border-t"></span>
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                  <span class="bg-gray-100 px-2 text-muted-foreground"
                    >Or continue with</span
                  >
                </div>
              </div>
              <div class="grid gap-2">
                <div class="grid gap-1">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                    for="email"
                    >Email</label
                  ><input
                    class="flex bg-white h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 border-none"
                    id="email"
                    placeholder="name@example.com"
                    autocapitalize="none"
                    autocomplete="email"
                    autocorrect="off"
                    required
                    type="email"
                    v-model="email"
                  />
                </div>
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-11 px-4 py-2 border-[#6039DB] text-[#6039DB]"
                  @click="login"
                >
                  Login with Email
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <a
            class="underline underline-offset-4 hover:text-primary"
            href="/privacy"
            >Privacy Policy</a
          >.
        </p>
      </div>
    </div>
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex border-r"
    >
      <div class="z-20 flex w-full h-full items-center justify-center">
        <img src="../../assets/logo.png" />
      </div>
      <div class="relative z-20 mt-auto text-black">
        <blockquote class="space-y-2">
          <p class="text-lg">Post comments to all socials at once.</p>
          <footer class="text-sm">
            No more landing in spam, send relevant LinkedIn messages and e-mails
            based on your lead activity. Automated and easy
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");

const login = async () => {
  console.log(email.value)
  try {
    const response = await axios.post("http://localhost:5000/api/auth/signin", {
      email: email.value,
    });
    alert("Login successful");
  } catch (error) {
    alert("Login failed");
  }
};
</script>

<!-- <script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/signin", {
          email: this.email,
        });
        alert("Login successful");
      } catch (error) {
        alert("Login failed");
      }
    },
  },
};
</script> -->
