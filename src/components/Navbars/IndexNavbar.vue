<template>
  <nav
    class="
      top-0
      fixed
      z-50
      w-full
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      navbar-expand-lg
      bg-white
      shadow
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          lg:static
          lg:block
          lg:justify-start
        "
      >
        <router-link to="/">
          <img style="height: 30px; width: auto" :src="logo" />
        </router-link>
        <button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Docs
            </a>
          </li>
        </ul> -->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <index-dropdown />
          </li>
          <li class="flex items-center">
            <span
              class="
                hover:text-blueGray-500
                text-blueGray-700
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              >Home</span
            >
          </li>

          <li class="flex items-center">
            <span
              class="
                hover:text-blueGray-500
                text-blueGray-700
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              >About</span
            >
          </li>

          <li class="flex items-center">
            <span
              class="
                hover:text-blueGray-500
                text-blueGray-700
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              >Menu</span
            >
          </li>

          <!-- <li class="flex items-center">
            <button
              class="
                bg-emerald-500
                text-white
                active:bg-emerald-600
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-lg
                outline-none
                focus:outline-none
                lg:mr-1
                lg:mb-0
                ml-3
                mb-3
                ease-linear
                transition-all
                duration-150
              "
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import logo from "../../assets/img/logo.png";
export default {
  data() {
    return {
      logo,
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
