<script>
  import { auth } from "./lib/firebase.js";
  import { userStore } from "sveltefire";
  const user = userStore(auth);
  async function signOut() {
    await auth
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<div class="wrapper">
  <h1>You are logged in!</h1>
  <button on:click={signOut}>Sign out</button>
</div>

<style>
</style>
