class Parasite extends Phaser.Scene {
    constructor() {
      super("parasiteScene");
    }
    
    preload() {

    }

    create() {
        var player = this.add.rectangle(200, 200, 148, 148, 0x6666ff);
    }

    update() {

    }
  }