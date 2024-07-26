<script setup>
import Navbar from "../components/Navbar.vue"
</script>

<template>
  <div class="body">
    <div class="container">
    <Navbar />
    <img src="../assets/ivan-torres-MQUqbmszGGM-unsplash (4).jpg">
    <div class="center">
      <div class="grid">
        <img class="logo" src="../assets/logo.png">
        <h1>BLAZE PIZZA & GOURMET</h1>
        <h3>Crafted with Passion, Fired to Perfection</h3>
      </div>
      <div class="grid2">
        <p>We're passionate about creating delicious, mouth-watering pizzas that bring joy to your taste buds. Our commitment to quality and freshness shines through in every bite, whether you're enjoying The Works, a Meat Lover's, or a custom creation topped with your favorite ingredients.</p>
        <button>See the menu &#8680</button>
      </div>
    </div>
    <img src="../assets/pizza.png" class="pizza">
    </div>
  </div>
  
</template>

<style scoped>
.body {
  background-color: #661A1D;
  width: 100vw;

}
img {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  border: 5px solid black;
  border-radius: 2%;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
}
.pizza {
  grid-column: 1;
  grid-row: 1;
  z-index: 3;

}
.container {
  display: grid;
}
.center {
  width: 50%;
  height: 80%;
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  border-radius: 2%;
  margin-left: 10%;
  margin-top: 10%;
  background-image: linear-gradient(to right, #989872, rgba(255,0,0,0));
  position: relative;
}
.grid {
  position:absolute;
  top: 2%;
  left: 2%;
  width: 70%;
  height: 30%;
  display: grid;
  grid-template-columns: 1fr 2fr ;
  grid-template-areas: 
    "logo header"
    "logo tagline"   
}
.grid2 {
  position:absolute;
  top: 32%;
  left: 2%;
  width: 50%;
  height: 66%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: 
    "main main main "
    ". button ."
    ;
}
.logo {
  border: none;
  grid-area: logo;
  align-self: center;
}
h1 {
  text-wrap: nowrap;
  color: antiquewhite;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  grid-area: header;
  align-self: flex-end;
  font-size: 2vw;
}
button {
  background-color:#661A1D;
  color: antiquewhite;
  height: 40%;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.3);
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.8vw;
  grid-area: button;
}
h3{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
  border-bottom: #661A1D 3px solid;
  grid-area: tagline;
  align-self: flex-start;
  text-wrap: nowrap;
  font-size: 1vw;
}
p {
  color: antiquewhite;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.5vw;
  text-align: center;
  grid-area: main;
  align-self: center;
}

</style>