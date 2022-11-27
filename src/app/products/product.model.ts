export class ProductModel {
    public title: string;
    public price: number;
    public description: string;
    public image: string;

    constructor(title:any, price:any, description:any, image:any){
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}