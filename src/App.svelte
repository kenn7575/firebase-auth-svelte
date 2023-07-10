<script>
  import LoginPage from "./loginPage.svelte";
  import { auth, firestore } from "./lib/firebase.js";
  import { FirebaseApp } from "sveltefire";
  import SplashScreen from "./splashScreen.svelte";
  import { userStore } from "sveltefire";
  const user = userStore(auth);
  import Home from "./home.svelte";
  import { Router, Route, navigate } from "svelte-routing";

  $: console.log($user);
  $: if ($user && $user?.emailVerified) {
    navigate("/");
  } else {
    navigate("/login");
  }
</script>

<SplashScreen />
<main>
  <FirebaseApp {firestore} {auth}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </Router>
  </FirebaseApp>
</main>

<style>
  main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
</style>
