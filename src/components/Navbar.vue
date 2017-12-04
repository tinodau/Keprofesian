<template>
    </div>
        <b-navbar type="dark" variant="info" toggleable>
            <b-container>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
                <b-navbar-nav>
                <b-nav-item to="/">
                    Home
                </b-nav-item>
                <b-nav-item to="/history">
                    History
                </b-nav-item>
                <b-nav-item to="/customer">
                    Customer
                </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
  data() {
      return {
          
      }
  }
}
</script>

<style lang="scss">

</style>


