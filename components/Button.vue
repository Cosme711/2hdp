<template>
    <div class="grid grid-row-3 gap-5">
        <div>
            <a class="relative btn overflow-hidden w-20 h-20 bg-darkgray rounded-2xl flex justify-center items-center" href="https://twitter.com/2_hdp?lang=fr" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" class="i text-5xl text-white"/>
            </a>
        </div>
        <div>
            <a class="relative btn overflow-hidden w-20 h-20 bg-darkgray rounded-2xl flex justify-center items-center" href="https://www.instagram.com/2_hdp/?hl=fr" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" class="i text-5xl text-white"/>
            </a>
        </div>
        <div>
            <a class="relative btn overflow-hidden w-20 h-20 bg-darkgray rounded-2xl flex justify-center items-center" href="https://www.facebook.com/2Hdeperdues/" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="i text-5xl text-white "/>
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