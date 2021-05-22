import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();

  selecionar = '';




  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


  ngOnInit(): void {
  }

}
