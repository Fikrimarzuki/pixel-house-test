<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="nav-text"><b>K</b><i class="fas fa-clipboard-check"></i><b>NBAN</b></router-link>
    </div>
    <div class="navbar-menu" id="navbarBasicExample">
      <div class="navbar-end">
        <router-link to="/kanban" class="navbar-item">Profile</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
  }
  .navbar-brand {
    padding-left: 10px;
  }
  .navbar-brand .fa-clipboard-check {
    color: black
  }
  .navbar-brand .nav-text {
    color: black;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
</style>
