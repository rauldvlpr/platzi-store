import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {

  @Input() product: Product;
  @Output() productAddCart = new EventEmitter<string>();

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChange');
    console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');

  }

  addCart() {
    console.log('Agregar la carrito...');
    this.productAddCart.emit(this.product.id);
  }

}
