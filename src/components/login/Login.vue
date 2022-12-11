<template>
  <div class="flex items-center justify-center h-screen bg-[#8cb68c]">
    <div>
      <div class="flex items-center justify-center">
        <router-link to="/">
          <a class="navbar-brand flex items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-link mr-3 text-white"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
              />
              <path
                d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
              />
            </svg>
            <span class="text-white font-bold text-4xl"> a.nak </span>
          </a>
        </router-link>
      </div>
      <form class="text-center" @submit.prevent="login">
        <div class="pt-5">
          <input
            v-model="email"
            placeholder="Email"
            type="text"
            class="border p-2 text-black"
          />
        </div>
        <div>
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            class="border p-2 mt-2 text-black"
          />
        </div>
        <button
          type="submit"
          class="p-2 bg-green-700 font-bold rounded-md text-center mt-4 px-4"
        >
          Login
        </button>
      </form>
      <p class="my-2 text-xl">
        Don't have an account?
        <span class="font-bold underline">
          <router-link to="/register"> Register</router-link>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";
export default {
  name: "Login",

  data: () => ({
    email: "",
    password: "",
  }),

  // https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0
  methods: {
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((a) => {
          alert("Successfully logged in");
          console.log(a);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>
/* 
/* Please ❤ this if you like it! */
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
/* body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #e2eee2;
  background-color: #8cb68c;
  overflow-x: hidden;
} */ */
a {
  cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.full-height {
  min-height: 100vh;
}
.my-2 {
  font-size:medium;
}
.p-2 {
  font-size: small;
}
</style>
