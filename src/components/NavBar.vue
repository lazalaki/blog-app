<template>
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link tag="li" class="nav-item" to="/posts" active-class="active">
              <a class="nav-link" href="/posts">Posts</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>