export class ProductModel {
    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public image: string;

    constructor(id:number, title:any, price:any, description:any, image:any){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}