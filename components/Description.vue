<template>
    <div class="w-10/12 m-auto flex">

        <div class="py-20">
            <div class="w-2/3">
                <h2 class="text-5xl font-bold">Le podcast</h2>
                <p class="mt-4 text-2xl">Chaque semaine, l’équipe de 2 heures de perdues <span class="font-bold">revient avec humour et mauvaise foi 
                    sur un film</span> pour le décrypter scène par scène.<br /> De High School Musical aux Enfants du Paradis, 
                    de Pretty Woman à L’Exorciste, aucune oeuvre n’échappe à l’équipe dont le principal objectif 
                    est de <span class="font-bold">faire rire les auditeurs et de les faire patienter dans les transports.</span>
                    Bonne humeur et culture de l’à-peu-près sont les principaux moteurs de ce podcast.</p>
            </div>
            <div class="pt-16 w-1/2">
                <h2 class="text-5xl font-bold">L'équipe</h2>
                <div class="mt-8 grid gap-10 grid-cols-4">
                    <Profile v-for="profile in profiles"
                        :key="profile.id"
                        :profile="profile"
                    />
                </div>
            </div>
        </div>

        <div class="pt-20">
            <Button />
        </div>
        
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue"
import Button from "@/components/Button.vue"
import { mapState } from 'vuex'

export default {
    components: { Profile, Button },
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