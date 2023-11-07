import { getWindowHeight, getWindowWidth } from '../utils';

export class Demo extends Phaser.Scene {
  screenWidth = getWindowWidth();
  screenHeight = getWindowHeight();
  data;
  btnPlay: Phaser.GameObjects.Sprite;

  constructor() {
    super('demo');
  }

  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        //fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        //fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        //fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(Math.round(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
    this.load.image('logo', 'assets/phaser3-logo.png');
    for (var i = 0; i < 500; i++) {
      this.load.image('logo' + i, 'assets/phaser3-logo.png');
    }
    this.load.image('libs', 'assets/libs.png');
    for (var i = 0; i < 100; i++) {
      this.load.image('libs' + i, 'assets/libs.png');
    }
    this.load.json('data', 'assets/test.json');
  }

  create() {
    this.data = this.cache.json.get('data');
    console.log(this.data.test);

    this.add.image(this.screenWidth / 2, this.screenHeight / 2, 'libs');

    this.btnPlay = this.add.sprite(300, this.screenHeight * 0.5, 'logo');

    this.btnPlay.scale = 0.5;

    this.btnPlay.setInteractive();

    const logo = this.add.image(this.screenWidth / 2, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    this.btnPlay.on('pointerup', () => {
      this.scene.start('startScene', { logo });
    });
  }
}
