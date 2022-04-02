class Snail extends Phaser.Scene {
    constructor() {
      super("snailScene");
    }

    preload() {

    }

    create() {
        this.pink = this.add.rectangle(500, 150, 148, 148, 0xe2739a);
        this.blue = this.add.rectangle(750, 400, 148, 148, 0x698ae7);
        this.green = this.add.rectangle(250, 400, 148, 148, 0x85e56c);
        this.yellow = this.add.rectangle(500, 650, 148, 148, 0xc19b49);
        this.keys = this.input.keyboard.addKeys('W, A, S, D');
        this.colors = [this.pink, this.blue, this.green, this.yellow];
        this.correct_seq = new Array();
        this.correct_seq.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
        this.tempblinker = 0;
        this.timer = this.time.addEvent({
          delay: 0,
          callback: function() {this.correct_seq[0].setAlpha(1)},
          callbackScope: this
        });
        this.timer = this.time.addEvent({
          delay: 1000,
          callback: function() {this.correct_seq[0].setAlpha(0.2)},
          callbackScope: this
        });
    }

    update() {
      this.pink.setAlpha((this.keys.W.isDown) ? 1 : 0.2);
      this.blue.setAlpha((this.keys.D.isDown) ? 1 : 0.2);
      this.green.setAlpha((this.keys.A.isDown) ? 1 : 0.2);
      this.yellow.setAlpha((this.keys.S.isDown) ? 1 : 0.2);
      /* if(this.tempblinker <= 100) {
        this.correct_seq[0].setAlpha(1);
        this.tempblinker++;
      }
      else if(this.tempblinker > 200) {
        this.tempblinker = 0;
        this.correct_seq[0] = this.colors[Math.floor(Math.random() * this.colors.length)];
      }
      else {
        this.correct_seq[0].setAlpha(0.2);
        this.tempblinker++;
      } */
    }
  }