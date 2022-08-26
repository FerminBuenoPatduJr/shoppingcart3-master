import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Output() actionEmitter = new EventEmitter()
  @Output() deleteAllActionEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.actionEmitter.emit()
    console.log("from command bar")
  }

  deleteAll(){
    this.deleteAllActionEmitter.emit()
    console.log("deleteall from command")
  }
}
