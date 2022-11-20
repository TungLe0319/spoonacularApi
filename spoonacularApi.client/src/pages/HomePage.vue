<template>
<div class="container mt-4">
  <div class="row">
    <div class="col-md-3" v-for="r in recipes" :key="r.id">
      <RecipeCard :recipe="r" />
    </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import RecipeCard from "../components/RecipeCard.vue";
import { recipesService } from "../services/RecipesService.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        async function getRecipes() {
            try {
                await recipesService.getRecipes();
            }
            catch (error) {
                Pop.error(error, "[getRecipes]");
            }
        }
        onMounted(() => {
            getRecipes();
        });
        return {
          recipes:computed(() => AppState.recipes),
        };
    },
    components: { RecipeCard }
}
</script>

<style scoped lang="scss">

</style>
