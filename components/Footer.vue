<template>
    <footer class="bg-black pb-20 md:pb-0">
        <div class="text-white">
            <div class="py-16 flex flex-col md:flex-row justify-around items-center text-xl">
                <nuxt-link :to="{ path: '/', hash: '#home' }">
                    <div class="image">
                        <img src="../assets/images/logo-footer.jpg" class="w-full" alt="2 Heures de Perdues">
                    </div>
                </nuxt-link>

                <div class="w-10/12 md:w-auto m-auto md:m-0 my-12 md:my-0 flex flex-col">
                    <a class="my-1" href="https://docs.google.com/spreadsheets/d/1Ft5HlnWAsZ8OHYM2iPVDXLLMXP0huZzO97Pu5MtT110/edit#gid=59860108" rel="noreferrer" target="_blank">Chapeau</a>
                    <a class="my-1" href="http://frequencemoderne.fr/" rel="noreferrer" target="_blank">Fréquence Moderne</a>
                    <a class="my-1" href="https://fr.tipeee.com/frequence-moderne?fbclid=IwAR2uw5eIqKQ9fmNK7P3ZwhkDUWr1lsnhkqV-rrBjjoxUQdhMhYU9RheubMQ" rel="noreferrer" target="_blank">Tipee</a>
                    <nuxt-link class="my-2" to="">Mentions légales</nuxt-link>
                </div>

                <div class="w-10/12 md:w-auto m-auto md:m-0 flex flex-col">
                    <a class="my-2" href="mailto:2heuresdeperdues@gmail.com">2heuresdeperdues@gmail.com</a>
                    <a class="my-2" href="mailto:frequencemoderne@gmail.com">frequencemoderne@gmail.com</a>
                </div>
            </div>
        </div>
        <p class="pb-2 text-white text-center">Site non officiel, créé par <a href="https://twitter.com/GressierCosme1" rel="noreferrer" target="_blank">@GressierCosme1</a> dans le but d'un sujet d'étude. Site officiel : <a class="underline" href="https://www.2hdp.fr" rel="noreferrer" target="_blank">2hdp.fr</a></p>
    </footer>
</template>

<style>

.image {
    width: 16rem;
}

</style>