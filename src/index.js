import * as PIXI from 'pixi.js';
import bunny from '../assets/bunny.png';

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const texture = PIXI.Texture.from(bunny);
const sprite = new PIXI.Sprite(texture);
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

app.stage.addChild(sprite);
