<template>
    <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/menu">MENU</RouterLink>
        <RouterLink to="/aboutUs">ABOUT US</RouterLink>
        <RouterLink to="/contactUs">CONTACT</RouterLink>
        <RouterLink to="/login">LOG IN</RouterLink>
    </nav>
</template>

<style scoped>
a {
    color: antiquewhite;
    font-size: 1.5vw;
    text-decoration: none;

}
a:hover {
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