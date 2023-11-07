import { getWindowHeight, getWindowWidth } from '../utils';

export class AuthorScene extends Phaser.Scene {
  screenWidth = getWindowWidth();
  screenHeight = getWindowHeight();

  constructor() {
    super('authorScene');
  }

  create() {
    this.add.image(this.screenWidth / 2, this.screenHeight / 2, 'libs');
  }
}
