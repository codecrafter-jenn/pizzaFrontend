<script setup>

</script>

<template>
  <div class="body">
    <div class="container">
    <img src="../assets/ivan-torres-MQUqbmszGGM-unsplash (4).jpg">
    <div class="center">
        <img class="logo" src="../assets/logo.png">
        <h1>BLAZE PIZZA & GOURMET</h1>
        <h3>Crafted with Passion, Fired to Perfection</h3>
        <p>We're passionate about creating delicious, mouth-watering pizzas that bring joy to your taste buds. Our commitment to quality and freshness shines through in every bite, whether you're enjoying The Works, a Meat Lover's, or a custom creation topped with your favorite ingredients.</p>
        <button>See the menu &#8680</button>
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
  position: relative;
  width: 50%;
  height: 80%;
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  border-radius: 2%;
  margin-left: 10%;
  margin-top: 10%;
  background-image: linear-gradient(to right, #989872, rgba(255,0,0,0));
}
.logo {
  border: none;
  margin: 2%;
  width: 20%;
  position: absolute;
}
h1 {
  width: 65%;
  height: 10%;
  top: 5%;
  text-wrap: nowrap;
  color: antiquewhite;
  display: inline-block;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  position: absolute;
  left: 25%;
}
button {
  background-color:#661A1D;
  color: antiquewhite;
  position: absolute;
  top: 70%;
  left: 12%;
  width: 30%;
  height: 10%;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.3);
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size:x-large;
}
h3{
  position: absolute;
  left: 25%;
  top: 12%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
  border-bottom: #661A1D 3px solid;
}
p {
  position: absolute;
  color: antiquewhite;
  top: 25%;
  right: 50%;
  margin-left: 5%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: x-large;
  text-align: center;
}

</style>