import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() selectedProduct:ProductModel = new ProductModel(0, '', '', '', '');
  @Output() deleteProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  delete(selectedProduct:any) {
    this.deleteProduct.emit(selectedProduct)
  }

}
