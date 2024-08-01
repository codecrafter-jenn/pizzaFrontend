<template>
    <div class="body">
      <div class="container">
        <Navbar />
        <img class="background" src="../assets/pizzabackground.jpg">
        <img class="logo" src="../assets/logo.png">
        <div class="center">
            <div class="div1 text"><span class="intro">Welcome to Blaze Pizza</span><br>Our love for exceptional pizza shines through in every bite. Our journey began with a simple idea: to create pizzas that are not only delicious but also crafted with the finest ingredients and meticulous attention to detail.</div>
            <hr>
            <div class="container2">
                <div class="div2"><img class="story" src="../assets/restaurant.jpg"><div class="div2text text"><span>Our Story</span><br>Blaze Pizza and Gourmet was founded on a passion for quality and a desire to bring a unique pizza experience to our community. From our humble beginnings, we've grown into a beloved local pizzeria, known for our innovative approach to traditional pizza-making.</div></div>
                <div class="div3"><div class="div3text text"><span>Our Philosophy</span><br>At Blaze Pizza we believe that great pizza starts with great ingredients. That's why we source the freshest produce, highest quality meats, and finest cheeses to top our pizzas. Our dough is hand-tossed and made fresh daily, ensuring a perfect base for our culinary creations.</div><img class="dough" src="../assets/cooking.jpg"></div>
                <div class="div4"><img class="chef" src="../assets/chef.jpg"><div class="div4text text"><span>Crafted with Passion</span><br>Every pizza we make is a labor of love. Our skilled chefs are passionate about their craft, bringing creativity and expertise to each pizza they prepare. Whether you're a fan of classic flavors or adventurous combinations, you'll find something to love on our menu.</div></div>
                <div class="div5"><div class="div5text text"><span>Fired to Perfection</span><br>Our pizzas are cooked to perfection in our state-of-the-art ovens, which ensure a crisp, flavorful crust and perfectly melted toppings every time. The result is a pizza that's not only satisfying but also memorable.</div><img class="fire" src="../assets/fire.jpg"></div>
                <div class="div6"><img class="hands" src="../assets/hands.jpg"><div class="div6text text"><span>Community Focus</span><br>As a locally-owned business, we are deeply committed to our community. We believe in giving back and supporting local initiatives that make our neighborhood a better place. We partner with local suppliers and participate in community events, all while providing a welcoming space for friends and families to gather and enjoy a great meal.</div></div>
                <div class="div7"><div class="div7text text"><span>Join Us</span><br>We invite you to join us at Blaze Pizza and experience the difference that passion and perfection make. Whether you're dining in, ordering takeout, or getting delivery, we're here to provide you with an unforgettable pizza experience.</div><img class="group" src="../assets/group.jpg"></div>
            </div>
            <div class="div8 text thanks"><span>Thank you for choosing Blaze Pizza. We look forward to serving you!</span></div>
        </div>
      </div>
    </div>
</template>

<script setup>
    import Navbar from "../components/Navbar.vue"
</script>

<style scoped>
.body {
  background-color: #661A1D;
  width: 100vw;
}
.container {
  display: grid;
}
.background {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  border: 5px solid black;
  border-radius: 2%;
  grid-column: 1;
  grid-row: 1;
}
.center {
  width: 80%;
  max-height: 80%;
  grid-column: 1;
  grid-row: 1;
  border-radius: 2%;
  margin-left: 10%;
  margin-top: 10%;
  position: relative;
  background-color: rgba(152, 152, 114, .8);
}
.logo {
    position: absolute;
    left: 80%;
    width: 15%;
    top: 10%;
    z-index: 3;
    border: none;
}
.intro {
    font-size: 2vw;
}
img {
    border-radius: 2%;
    border: black solid 4px;
}
.container2 {
    position: absolute;
    width: 100%;
    height: 80%;
    max-height: 70%;
    overflow: scroll;
    border-bottom: #661A1D solid 4px;
}
span {
    font-size: 2vw;
    color: antiquewhite;
    font-weight: 600;
    text-shadow: #661A1D 2px 0 10px;
}
.text {
    position: relative;
    font-size: 1.5vw;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 2%;
}
.div1 {
    position: relative;
    width: 85%;
}
.thanks {
    position: relative;
    text-align: center;
    top: 67%;
    text-shadow: #661A1D 2px 0 10px;
    width: 95%;
}
.container2::-webkit-scrollbar {
  display: none;
}
.container2 {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
hr {
    border: #661A1D solid 2px;
}
.div2 {
    margin: 2%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
    "story storytext";
}
.div2text {
    grid-area: storytext;
    align-self: center;
}
.story {
    width: 100%;
    grid-area: story;
}
.div3 {
    margin: 2%;
    text-align: right;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
    "philosophy dough";
}
.dough {
    width: 100%;
    grid-area: dough;
}
.div3text {
    grid-area: philosophy;
    align-self: center;
}
.div4 {
    margin: 2%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
    "chef cheftext";
}
.chef {
    width: 100%;
    grid-area: chef;
}
.div4text {
    align-self: center;
    grid-area: cheftext;
}
.div5 {
    margin: 2%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
    "firetext fire";
}
.fire {
    width: 100%;
    grid-area: fire;
}
.div5text {
    align-self: center;
    grid-area: firetext;
    text-align: right;
}
.div6 {
    margin: 2%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 
    "hands handstext";
}
.hands {
    width: 100%;
    grid-area: hands;
}
.div6text {
    align-self: center;
    grid-area: handstext;
}
.div7 {
    margin: 2%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: 
    "grouptext group";
}
.group {
    width: 100%;
    grid-area: group;
}
.div7text {
    align-self: center;
    grid-area: grouptext;
    text-align: right;
}
</style>
