<template>
    <div class="body">
      <div class="container">
        <Navbar />
        <img class="background" src="../assets/pizzabackground.jpg">
        <img class="logo" src="../assets/logo.png">
        <div class="center">
            <div class="maintext"><span class="header">Get in Touch</span><br>At Blaze Pizza, we value your feedback and are here to assist you with any questions or concerns. Whether you have a comment about your recent visit, a question about our menu, or a suggestion for improvement, we would love to hear from you!<br>
                <hr><font-awesome-icon :icon="['fab', 'facebook']" />facebook.com/blazepizza &nbsp &nbsp &nbsp &nbsp &nbsp<font-awesome-icon :icon="['fab', 'instagram']" />@blazepizza &nbsp &nbsp &nbsp &nbsp &nbsp<font-awesome-icon :icon="['fab', 'twitter']" />@blazepizza</div>
            <hr>
            <div class="container2">
            <div class="info"><span>Address</span><br>Blaze Pizza<br>123 Pizza Ave.<br>Pizza City, PZ 54321<br><span>Phone</span><br>(123)456-7890<br><span>Email</span><br>contact@blazepizza.com</div>
            <div class="hours"><span>Hours</span><br><b>Monday to Friday:</b><br>11:00 AM - 10:00 PM<br><b>Saturday:</b><br>12:00 PM - 11:00 PM<br><b>Sunday:</b><br>12:00 PM - 9:00 PM</div>

            <form>
                <div class="feedback"><span>Feedback Form</span></div>
                <hr>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <br>
                <div class="form-group">
                    <input type="submit" value="Submit feedback">
                </div>
            </form>

<!--            <div class="social"><span>Follow Us</span><br>Stay connected with the latest news, promotions, and events. Follow us on social media!<br>
                <font-awesome-icon :icon="['fab', 'facebook']" />facebook.com/blazepizza &nbsp &nbsp &nbsp &nbsp &nbsp<font-awesome-icon :icon="['fab', 'instagram']" />@blazepizza &nbsp &nbsp &nbsp &nbsp &nbsp<font-awesome-icon :icon="['fab', 'twitter']" />@blazepizza</div>
-->
            </div>
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
    contain:content;
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
    contain:content;
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
    contain:content;
  }
  .logo {
      position: absolute;
      left: 80%;
      width: 15%;
      top: 10%;
      z-index: 3;
      border: none;
  }
  .maintext {
    font-size: 1.3vw;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
    position: relative;
    width: 85%;
    text-align: center;
  }
  span {
    font-size: 2vw;
    color: antiquewhite;
    font-weight: 600;
    text-shadow: #661A1D 2px 0 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .info, .hours, .social {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.3vw;
    text-wrap: none;
  }
  .info {
    grid-area: info;
  }
  .hours {
    grid-area: hours;
  }
  .social {
    text-align: justify;
    grid-area: socials;
  }
  .container2 {
    padding-top: 4%;
    padding-left: 2%;
    padding-right: 2%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: 
    "form info"
    "form hours"
    "socials socials";
    grid-gap: 2%;
    contain:content;
  }
  hr {
    border: #661A1D solid 1px;
  }
  .header {
    font-size: 2.5vw;
  }
  form {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.3vw;
    border: black 4px solid;
    border-radius: 2%;
    grid-area: form;
    padding: 2%;
    background-color: rgba(250, 235, 215, .25);

}
input[type=submit] {
    background-color: #661A1D;
    color: antiquewhite;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 30%;
    font-size: 1.2vw;
    position: relative;
    margin-left: 70%;
    
}
input {
    width: 100%;
    background-color: antiquewhite;
    font-size: 1.2vw;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border: #661A1D solid 2px;
}
textarea {
    width: 100%;
    background-color: antiquewhite;
    resize: none;
    border: none;
    border: #661A1D solid 2px;
}
.center::-webkit-scrollbar {
  display: none;
}
.center {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
@media only screen and (max-width: 768px) {
    .container2 {
        padding-top: 1%;
    }
    .maintext {
    padding-top: 1%;
    }
    span {
    font-size: 1.5vw;
    }
    .header {
    font-size: 2vw;
  }
}

  </style>
