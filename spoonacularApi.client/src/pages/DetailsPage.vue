<template>
  <div class="container text-dark" v-if="recipe">
    <div class="row">
      <div class="col-md-6">
     
        <img :src="recipe.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";

import { recipesService } from "../services/RecipesService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    async function getRecipeInformationById() {
      try {
        await recipesService.getRecipeInformationById(route.params.id);
      } catch (error) {
        Pop.error(error, "[getRecipes]");
      }
    }
    onMounted(() => {
      // getRecipes();
      getRecipeInformationById();
    });
    const route = useRoute();
    return {
      route,
      recipe: computed(() => AppState.activeRecipe),
    };
  },
  components: {},
};
</script>

<style scoped lang="scss"></style>
