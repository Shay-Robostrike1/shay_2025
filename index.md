---
layout: page
title: Home
---

<h2 class="home-heading">Home</h2>
<p class="home-description">Shay's coding and game progress Journey</p>

<div class="button-container">
    <a href="{{ site.baseurl }}/snakegame/" class="glow-button">
        Snake Game
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/rpg/" class="glow-button">
        RPG Stable
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/rpg0x/" class="glow-button">
        RPG Beta test
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/gamify/adventureGame" class="glow-button">
        Adventure Game
        <span class="glow-effect"></span>
    </a>
</div>

<h2 class="placeholder-heading">College Articulation</h2>
<p class="placeholder-description">Shay's Hacks</p>

<div class="button-container">
    <a href="{{ site.baseurl }}/csse/javascript/fundamentals/variables" class="glow-button-blue-purple">
        Variables I/O
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/csse/javascript/fundamentals/data-types/" class="glow-button-blue-purple">
        Data Types
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/csse/javascript/fundamentals/for-loops/" class="glow-button-blue-purple">
        Loops and sprites
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/javascript/2024/09/15/javascript_output_objects_IPYNB_2_.html" class="glow-button-blue-purple">
        JavaScript output
        <span class="glow-effect"></span>
    </a>
</div>


<h2 class="placeholder-heading">Homeworks</h2>
<p class="placeholder-description">Sprint3 homeworks</p>

<div class="button-container">
    <a href="{{ site.baseurl }}/2024/11/04/classes-hw_IPYNB_2_.html" class="glow-button-darkblue">
        Classes Homework
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/csse/javascript/fundamentals/data-abstraction-homework" class="glow-button-darkblue">
        Data Abstraction Homework
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/2024/10/28/variables_hw_IPYNB_2_.html" class="glow-button-darkblue">
        Variables Homework
        <span class="glow-effect"></span>
    </a>
    <a href="{{ site.baseurl }}/nestedconditionals_hw/" class="glow-button-darkblue">
        Nested Conditionals Homework
        <span class="glow-effect"></span>
    </a>
</div>

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
        color: #D3D3D3;
    }

    .glow-button:link, .glow-button:visited, .glow-button:active, .glow-button:hover {
        color: #D3D3D3 !important;
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

    .glow-button-darkblue {
        display: inline-block;
        background: linear-gradient(135deg, #3B5998, #1D3F72);
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        position: relative;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s;
        text-shadow: 0 0 8px #FFF, 0 0 16px #3B5998;
        overflow: hidden;
        min-width: 150px;
        height: 50px;
        color: #D3D3D3;
    }

    .glow-button-darkblue:link, .glow-button-darkblue:visited, .glow-button-darkblue:active, .glow-button-darkblue:hover {
        color: #D3D3D3 !important;
        text-decoration: none !important;
    }

    .glow-button-darkblue:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .glow-button-darkblue:hover .glow-effect {
        opacity: 1;
    }
</style>
