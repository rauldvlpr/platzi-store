import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  power = 10;

  items = ['raul', 'alma', 'bebe'];

  addItem() {
    this.items.push('Otro bebe');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
