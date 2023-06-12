import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductComponent  {
  constructor(private httpClient:HttpClient){

  }
  ngOnInit():void{
   //this.getProducts();
   //this.getProduct(); 
   //this.createProduct(); 
   //this.updateProduct()
   //this.deleteProduct();
  }
  getProducts(){
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
      response=>{
        console.log(response);

      }
    );
    console.log(response)
  };
  getProduct(){
    const  url ='https://api.escuelajs.co/api/v1/products/2'
    const response = this.httpClient.get(url).subscribe(
      response=>{
        console.log(response);

      }
    );
    console.log(response);
  };
  createProduct(){
    const data ={
      id: 45 ,
      title: "zapatos",
      price: 54,
      description: "Deportivos color blanco / Alexander Ortiz",
      categoryId: 1,
      images: [
      "https://picsum.photos/640/640?r=4213",
      "https://picsum.photos/640/640?r=7623",
      "https://picsum.photos/640/640?r=9048"
      ]
    
    }
    const url = 'https://api.escuelajs.co/api/v1/products'
    this.httpClient.post(url, data).subscribe(
      response=>{
        console.log(response);
      }
    )
  };
  updateProduct(){
    const data = {
      title:"zapatos adidas",
      price: 44,
      description:"zapatos adidaas rojos/Alexander Ortiz"
    }
    const url='https://api.escuelajs.co/api/v1/products/453'
    this.httpClient.put(url, data).subscribe(
      response=>{
        console.log(response);
      }
    )
  };
  deleteProduct(){
    const url='https://api.escuelajs.co/api/v1/products/'
    this.httpClient.delete(url).subscribe(
      response=>{
        console.log(response);
      }
    )
    };
}