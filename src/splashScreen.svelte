<div class="splash">
  <i class="fa-solid fa-check-double" />
</div>

<style>
  @keyframes splash {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
  @keyframes logo {
    0% {
      transform: scale(0) rotate(45deg) translateY(5rem);
    }

    100% {
      transform: scale(1) rotate(0) translateY(0);
    }
  }
  .splash {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1000;
    background: #1a2980; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #1a2980,
      #26d0ce
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1a2980, #26d0ce);
    animation: splash 800ms ease-in-out forwards;
  }
  i {
    font-size: 10rem;
    animation: logo 500ms ease-in-out forwards;
  }
</style>
