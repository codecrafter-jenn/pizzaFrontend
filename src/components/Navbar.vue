<template>
    <nav>
        <routerlink>HOME</routerlink>
        <routerlink>MENU</routerlink>
        <routerlink>ABOUT US</routerlink>
        <routerlink>CONTACT</routerlink>
        <routerlink>LOG IN</routerlink>
    </nav>
</template>

<style scoped>
routerlink {
    color: antiquewhite;
    font-size: 1.5vw;

}
routerlink:hover {
    color: #989872;
    text-decoration: underline;
}
nav {
    position: absolute;
    margin-top: 6%;
    margin-left: 11%;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    width: 40%;
}
</style>