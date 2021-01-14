<template>
    <div class="w-10/12 m-auto">

        <div class="pt-20 w-1/2">
            <h2 class="text-4xl font-bold">Le podcast</h2>
            <p class="mt-4">Chaque semaine, l’équipe de 2 heures de perdues <span class="font-bold">revient avec humour et mauvaise foi
                 sur un film</span> pour le décrypter scène par scène. De High School Musical aux Enfants du Paradis,
                  de Pretty Woman à L’Exorciste, aucune oeuvre n’échappe à l’équipe dont le principal objectif
                   est de <span class="font-bold">faire rire les auditeurs et de les faire patienter dans les transports.</span>
                    Bonne humeur et culture de l’à-peu-près sont les principaux moteurs de ce podcast.</p>
        </div>

        <div class="pt-10 w-1/2">
            <h2 class="text-4xl font-bold">L'équipe</h2>
            <div class="grid gap-10 grid-cols-4">
                <Profile v-for="profile in profiles"
                    :key="profile.id"
                    :profile="profile"
                />
            </div>
        </div>
        
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue"
import { mapState } from 'vuex'

export default {
    components: { Profile },
    methods: {
        getProfiles() {
            this.$store.dispatch("profiles/getProfiles")
        }
    },
    mounted: function() {
        this.getProfiles();
    },
    computed: mapState({
        profiles: state => state.profiles.profiles
    })
}
</script>