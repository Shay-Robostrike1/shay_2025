---
layout: base
title: Coding Journey 
description: Home Page
image: /images/mario_animation.png
menu: nav/index.html
hide: true
---

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/index.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });
// this is where the mario ends and the actual contents begin
</script>



<h2 class="home-heading">Home</h2>
<p class="home-description">Shay's coding and game progress Journey</p>

<div class="button-container">
    <a href="{{site.baseurl}}/snakegame/" class="glow-button">
        Snake Game
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/rpg/" class="glow-button">
        RPG Stable
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/rpg0x/" class="glow-button">
        RPG Beta test
        <span class="glow-effect"></span>
    </a>
</div>

<h2 class="placeholder-heading">College Articulation</h2>
<p class="placeholder-description">Shay's Hacks</p>

<div class="button-container">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" class="glow-button-blue-purple">
        Variables I/O
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" class="glow-button-blue-purple">
        Data Types
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/for-loops/" class="glow-button-blue-purple">
        Loops and sprites
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/javascript/2024/09/15/javascript_output_objects_IPYNB_2_.html" class="glow-button-blue-purple">
        JavaScript output
        <span class="glow-effect"></span>
    </a>
</div>

<h2 class="placeholder-heading">placeholder heading</h2>
<p class="placeholder-description">placeholder description.</p>

<style>
    .home-heading {
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        margin-top: 20px;
        color: #008a1d;
        text-shadow: 0 0 10px #008a1d, 0 0 15px #1D6A3D;
    }

    .home-description {
        text-align: center;
        color: #D3D3D3;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .placeholder-heading {
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        margin-top: 20px;
        color: #008a1d;
        text-shadow: 0 0 10px #008a1d, 0 0 15px #1D6A3D;
    }

    .placeholder-description {
        text-align: center;
        color: #D3D3D3;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .glow-button {
        display: inline-block;
        background: linear-gradient(135deg, #1D6A3D, #21618C);
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        position: relative;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s;
        text-shadow: 0 0 8px #FFF, 0 0 16px #1D6A3D;
        overflow: hidden;
        min-width: 150px;
        height: 50px;
        color: #FFF;
    }

    .glow-button:link, .glow-button:visited, .glow-button:active, .glow-button:hover {
        color: #FFF !important;
        text-decoration: none !important;
    }

    .glow-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .glow-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        opacity: 0;
        transition: opacity 0.3s;
    }

    .glow-button:hover .glow-effect {
        opacity: 1;
    }

    .glow-button-blue-purple {
        display: inline-block;
        background: linear-gradient(135deg, #2C3E50, #8E44AD);
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        position: relative;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s;
        text-shadow: 0 0 8px #FFF, 0 0 16px #2C3E50;
        overflow: hidden;
        min-width: 150px;
        height: 50px;
        color: #D3D3D3;
    }

    .glow-button-blue-purple:link, .glow-button-blue-purple:visited, .glow-button-blue-purple:active, .glow-button-blue-purple:hover {
        color: #D3D3D3 !important;
        text-decoration: none !important;
    }

    .glow-button-blue-purple:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .glow-button-blue-purple:hover .glow-effect {
        opacity: 1;
    }
</style>

