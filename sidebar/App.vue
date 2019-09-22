<template>
    <div>
        <div class="sidebar">SIDEBAR</div>
        <div class="content"><div id="main-app"></div></div>
    </div>
</template>

<style scoped>
.sidebar{
    background-color: #162A62;
    display: block;
    min-height: 100%;
    position: absolute;
    z-index: 999;
    width: 100px;
}

.content {
    margin-left: 100px;
}
</style>