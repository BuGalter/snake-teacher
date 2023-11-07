export const getWindowHeight = (): number => {
  return window.innerHeight;
};

export const getWindowWidth = (): number => {
  return window.innerWidth;
};

export const addScenesToConfig = (...args: any): Phaser.Scene[] => {
  let scenes = [];
  if (args.length > 0) {
    for (let index = 0; index < args.length; index++) {
      scenes.push(args[index]);
    }
  }

  return scenes;
};
