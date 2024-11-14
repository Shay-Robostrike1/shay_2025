// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import PlayerFish from './PlayerFish.js';
import PlayerTurtle from './PlayerTurtle.js';
import NPC from './NPC.js';

class GameLevelWater {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    const image_src_water = path + "/images/rpg/seatank_beta.png";
    const image_data_water = {
        name: 'water',
        src: image_src_water,
        pixels: {height: 580, width: 1038}
    };

    const TURTLE_SCALE_FACTOR = 10;
    const sprite_src_turtle_fish = path + "/images/rpg/robots_spritesheet1.png"; // Same sprite sheet for both
    const sprite_data_turtle = {
      name: 'turtle_A',
      src: sprite_src_turtle_fish,
      SCALE_FACTOR: TURTLE_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height / 4 }, // Turtle in the upper half
      pixels: { height: 140, width: 256 },
      orientation: { rows: 2, columns: 4 },
      down: { row: 0, start: 0, columns: 1 }, // Row 0 for turtle (top row)
      right: { row: 0, start: 1, columns: 1 },
      up: { row: 0, start: 2, columns: 1 },
      left: { row: 0, start: 3, columns: 1 },
    };

    const sprite_data_fish = {
        name: 'fish',
        src: sprite_src_turtle_fish, // Same sprite sheet as the turtle
        SCALE_FACTOR: 16,
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: { height: 140, width: 256 },
        INIT_POSITION: { x: 0, y: height / 2 }, // Fish in the lower half
        orientation: { rows: 2, columns: 4 },
        down: { row: 1, start: 0, columns: 3 }, // Row 1 for fish (bottom row)
        left: { row: 2, start: 0, columns: 3 },
        right: { row: 3, start: 0, columns: 3 },
        up: { row: 4, start: 0, columns: 3 },
    };

    const sprite_src_npc = path + "/images/rpg/fishies.png";
    const sprite_data_npc = {
        name: 'npc',
        src: sprite_src_npc,
        SCALE_FACTOR: 16,
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: { height: 256, width: 384 },
        INIT_POSITION: { x: width / 2, y: height / 2 },
        orientation: { rows: 8, columns: 12 },
        down: { row: 0, start: 9, columns: 3 },
        left: { row: 1, start: 9, columns: 3 },
        right: { row: 2, start: 9, columns: 3 },
        up: { row: 3, start: 9, columns: 3 },
    };

    this.objects = [
      { class: Background, data: image_data_water },
      { class: PlayerTurtle, data: sprite_data_turtle },
      { class: PlayerFish, data: sprite_data_fish },
      { class: NPC, data: sprite_data_npc }
    ];
  }
}

export default GameLevelWater;
