<template>
    <div class="flex flex-col items-center">
        <div class="h-20 w-16 little:h-28 little:w-24">
            <img :src="profile.image[0].url" class="h-full w-full">
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

