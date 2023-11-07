import * as Phaser from 'phaser';
import { getWindowHeight, getWindowWidth } from '../utils';

export const configPhaser = {
  type: Phaser.AUTO,
  backgroundColor: '#98FB98',
  width: getWindowWidth(),
  height: getWindowHeight(),
  scene: null,
};
