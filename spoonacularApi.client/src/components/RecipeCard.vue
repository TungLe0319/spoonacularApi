<template>
  <router-link :to="{name: 'Details', params:{id: recipe.id }}"> 
  <div class="card ">
  <img :src="recipe.image" :alt="recipe.title" class="rounded-top recipeImage">
  <div class="card-body">
    <h6> {{recipe.title}} </h6>
  </div>
</div>
  </router-link>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Recipe } from "../models/Recipe.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
recipe:{type:Recipe,required:true}
       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
.recipeImage{
  object-fit: cover;
}

</style>
