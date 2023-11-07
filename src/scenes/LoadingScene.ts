import { getWindowHeight, getWindowWidth } from '../utils';

export class LoadingScene extends Phaser.Scene {
  screenWidth = getWindowWidth();
  screenHeight = getWindowHeight();

  constructor() {
    super({ key: 'loadingScene', active: false });
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(
      this.screenWidth / 2 - 260,
      this.screenHeight / 2 - 25,
      520,
      50
    );

    const studioText = this.make.text({
      x: this.screenWidth / 2,
      y: 70,
      text: 'BG&DA Studio',
      style: {
        font: '40px monospace',
        color: '#00ff00',
      },
    });

    studioText.setOrigin(0.5, 0.5);

    const phaserText = this.make.text({
      x: this.screenWidth / 2,
      y: this.screenHeight - 100,
      text: 'made with Phaser',
      style: {
        font: '20px monospace',
        color: '#00ff00',
      },
    });

    phaserText.setOrigin(0.5, 0.5);

    const loadingText = this.make.text({
      x: this.screenWidth / 2,
      y: this.screenHeight / 2 - 50,
      text: 'Загрузка...',
      style: {
        font: '20px monospace',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: this.screenWidth / 2,
      y: this.screenHeight / 2,
      text: '0%',
      style: {
        font: '18px monospace',
      },
    });

    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: this.screenWidth / 2,
      y: this.screenHeight / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(Math.round(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0x00ff00, 1);
      progressBar.fillRect(
        this.screenWidth / 2 - 250,
        this.screenHeight / 2 - 15,
        500 * value,
        30
      );
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Сейчас загружаем: ' + file.key);
    });

    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      studioText.destroy();
      phaserText.destroy();
    });

    this.load.image('logo', 'assets/phaser3-logo.png');
    for (var i = 0; i < 100; i++) {
      this.load.image('logo' + i, 'assets/phaser3-logo.png');
    }

    this.load.image('libs', 'assets/libs.png');
    for (var i = 0; i < 100; i++) {
      this.load.image('libs' + i, 'assets/libs.png');
    }

    this.load.image('button', 'assets/button.png');
    for (var i = 0; i < 100; i++) {
      this.load.image('button' + i, 'assets/button.png');
    }

    this.load.json('data', 'assets/test.json');
  }

  create() {
    this.scene.start('mainScene');
  }
}
