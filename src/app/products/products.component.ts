import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ProductList: ProductModel[] = [];
  selectedProduct: ProductModel = new ProductModel('shoes', 100, 'These are random shoes', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg')
  constructor() { }

  ngOnInit(): void {
    const product1 = new ProductModel('shoes', 100, 'These are random shoes', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg')
    const product2 = new ProductModel('shirts', 300, 'this is a shirt', 'https://www.sydneybrewery.com/wp-content/uploads/2021/03/SH-navy-front-square.jpg')
    this.ProductList = [product1, product2]
  }

  selectProduct(product:any){
    console.log(product)
    this.selectedProduct = product
  }

}
