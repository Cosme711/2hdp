<template>
    <div class="flex flex-col items-center">
        <div class="h-28 w-24">
            <img :src="profile.image[0].url" class="h-full w-full" alt="Profile Image - 2 Heures de Perdues">
        </div>
        <p class="mt-2 text-xl">{{ profile.name }}</p>
        <a :href="profile.link" target="_blank" class="link mt-1 text-sm">{{ profile.username }}</a>
    </div>
</template>

<script>
export default {
    props: {
        profile: Object
    },
}
</script>

<style>

.link {
    color: #0F79FF;
}

</style>

