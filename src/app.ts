import * as Phaser from 'phaser';

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.image('libs', 'assets/libs.png');
  }

  create() {
    this.add.image(screenWidth / 2, screenHeight / 2, 'libs');

    const logo = this.add.image(screenWidth / 2, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: screenWidth,
  height: screenHeight,
  scene: Demo,
};

const game = new Phaser.Game(config);
