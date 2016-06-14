import { Component, OnInit } from '@angular/core';
import './board';
import './canvasui';
import 'uct';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {

  canvas;
  predictor;
  ui;
  game;

  constructor() {
    this.canvas = document.getElementById('checkers');
    this.predictor = document.getElementById('predictor');
    this.ui = new CanvasCheckers(this.canvas, this.predictor, 8, 8);
    this.game = new Checkers.Game(this.ui);
  }

  switchSides() {
    document.getElementById('red').innerHTML = 'Red: Your Browser';
    document.getElementById('blue').innerHTML = 'Human: (you!)';
    this.ui.switchSides();
  }

  ngOnInit() {
    this.game.start();
  }

}
