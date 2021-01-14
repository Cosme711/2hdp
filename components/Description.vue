<template>
    <div>

        <div>
            <h2>Le podcast</h2>
            <p>Chaque semaine, l’équipe de 2 heures de perdues <span class="font-bold">revient avec humour et mauvaise foi
                 sur un film</span> pour le décrypter scène par scène. De High School Musical aux Enfants du Paradis,
                  de Pretty Woman à L’Exorciste, aucune oeuvre n’échappe à l’équipe dont le principal objectif
                   est de <span class="font-bold">faire rire les auditeurs et de les faire patienter dans les transports.</span>
                    Bonne humeur et culture de l’à-peu-près sont les principaux moteurs de ce podcast.</p>
        </div>

        <div>
            <h2>L'équipe</h2>
            <Profile />
        </div>
        
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue"

export default {
    components: { Profile }
}
</script>