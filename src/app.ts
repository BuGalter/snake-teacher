import * as Phaser from 'phaser';
import { MainScene, LoadingScene, AuthorScene } from './scenes';
import { configPhaser } from './config';
import { addScenesToConfig } from './utils';

configPhaser.scene = addScenesToConfig(LoadingScene, MainScene, AuthorScene);

const game = new Phaser.Game(configPhaser);
