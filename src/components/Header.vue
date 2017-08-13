<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                <router-link tag="a" class="navbar-left" :to="{name:'JobProfiles'}">
                    <img alt="Trukker logo" src="../assets/trukker-logo.png">
                </router-link>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown" ref="dropdown" :class="{open: isDropdownOpen}" @click="toggleDropdown">
                        <a href="#" @click.prevent="" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true"
                           aria-expanded="false">
                            <img id="avatar" class="img-circle"
                                 src="https://www.lavozdegalicia.es/img/avatar/user_male.png" width="40px"
                                 height="40px"><span
                                class="caret"> </span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click.prevent="logout"><strong
                                    class="glyphicon glyphicon-log-out"></strong> Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data(){
            return {
                isDropdownOpen: false,
            };
        },
        methods: {
            ...mapActions({
                clearToken: 'clearToken'
            }),
            toggleDropdown(){
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            resetDropdown(e){
                let el = this.$refs.dropdown;
                let target = e.target;
                if (( el !== target) && !el.contains(target)) {
                    this.isDropdownOpen = false;
                }
            },
            logout(){
                this.$http.get('authentication/logout')
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.clearToken();
                    this.$router.push('/');
                });
            }
        },
        created() {
            document.addEventListener('click', this.resetDropdown)
        },
        destroyed() {
            document.removeEventListener('click', this.resetDropdown)
        }
    }
</script>

<style scoped>

    .img-circle {
        margin: 0;
        padding: 0;
    }

    a.dropdown-toggle {
        padding: 21px 11px;
    }

    .navbar-default .navbar-nav > .open > a,
    .navbar-default .navbar-nav > .open > a:focus,
    .navbar-default .navbar-nav > .open > a:hover {
        background-color: #f2f2f3;
    }

    #avatar {
        margin-right: 5px;
        border: 1px solid #f2f2f3;
    }

    .caret {
        margin-left: 5px;
    }

    nav {
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
    }

    a img {
        margin: 20px -20px;
    }
</style>
