<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-5">
        <div>
            <a class="relative btn overflow-hidden w-16 h-16 bg-darkgray rounded-2xl shadow-xs flex justify-center items-center">
                <font-awesome-icon :icon="['fab', 'instagram']" class="i text-2xl text-yellow "/>
            </a>
        </div>
        <div>
            <a class="relative btn overflow-hidden w-16 h-16 bg-darkgray rounded-2xl shadow-xs flex justify-center items-center">
                <font-awesome-icon :icon="['fab', 'twitter']" class="i text-2xl text-yellow "/>
            </a>
        </div>
        <div>
            <a class="relative btn overflow-hidden w-16 h-16 bg-darkgray rounded-2xl shadow-xs flex justify-center items-center">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="i text-2xl text-yellow "/>
            </a>
        </div>
        <div>
            <a class="relative btn overflow-hidden w-16 h-16 bg-darkgray rounded-2xl shadow-xs flex justify-center items-center">
                <font-awesome-icon :icon="['fab', 'twitch']" class="i text-2xl text-yellow "/>
            </a>
        </div>
    </div>
</template>

<style>

.btn:hover .i{
    transform: scale(1.3);
    color: #fff;
}

.btn::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: #ffae00;
    transform: rotate(45deg);
    left: -120%;
    top: 90%;
}
.btn:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
}
.btn:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
}

@keyframes aaa {
    0%{
        left: -110%;
        top: 90%;
    }50%{
        left: 10%;
        top: -30%;
    }100%{
        top: -10%;
        left: -10%;
    }
}
</style>