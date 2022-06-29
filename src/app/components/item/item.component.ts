import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //Propiedades de entrada, en este caso de define un objeto
  @Input() item: Item = new Item(); //Se inicializa el objeto
  //Evento de salida
  @Output() deleteItem: EventEmitter <Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item){
    this.deleteItem.emit(item);
  }

  onToggle(item: Item){
    item.completed =! item.completed;

  }

}
