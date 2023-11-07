import { getWindowHeight, getWindowWidth } from '../utils';

export class MainScene extends Phaser.Scene {
  screenWidth = getWindowWidth();
  screenHeight = getWindowHeight();
  buttonHeight: number;
  buttonWidth: number;

  constructor() {
    super('mainScene');
  }

  create() {
    let button = this.add.sprite(0, 0, 'button');
    button.setScale(0.1);
    this.buttonHeight = button.displayHeight;
    this.buttonWidth = button.displayWidth;
    button.setPosition(this.buttonWidth * 0.5, this.buttonHeight * 0.5);
    let text = this.add.text(0, 0, 'АВТОРЫ', { fontSize: 20 });
    let width = text.displayWidth;
    text.setPosition(
      this.buttonWidth * 0.5 - width * 0.5,
      this.buttonHeight * 0.5 - 10
    );

    this.add.container(this.screenWidth * 0.5 - this.buttonWidth * 0.5, 200, [
      button,
      text,
    ]);

    this.add.image(this.screenWidth / 2, 70, 'logo');

    const data = this.cache.json.get('data');
    console.log(data);

    button.setInteractive();
    button.on(
      'pointerup',
      () => {
        this.scene.start('authorScene');
      },
      this
    );
  }
}
