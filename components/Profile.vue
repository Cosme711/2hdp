<template>
    <div class="flex flex-col items-center">
        <div class="h-28 w-24">
            <img :src="profile.image[0].url" class="h-full w-full">
        </div>
        <p>{{ profile.name }}</p>
        <a :href="profile.link" target="_blank">Link</a>
    </div>
</template>

<script>
export default {
    props: {
        profile: Object
    },
}
</script>

