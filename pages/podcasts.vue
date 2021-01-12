<template>
    <div class="w-11/12 m-auto">
      <div class="pt-32 w-full flex flex-col items-end">
        <select class="outline-none">
            <option value="">Plus récent</option>
            <option value="">Plus ancien</option>
            <option value="">Ordre Alphabétique</option>
        </select>
      </div>
      <div class="w-11/12 sm:w-full m-auto justify-self-stretch pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Card v-for="podcast in podcasts" 
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
      <div class="py-4 text-center">
        <a class="cursor-pointer" @click="loadMore()">Load More...</a>
      </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue"
import { mapState } from 'vuex'

export default {
    components: { Card },
    computed: mapState({
        podcasts: state => state.podcasts
    }),
}
</script>