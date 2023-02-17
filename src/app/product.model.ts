export class Product{
    public name:string;
    public discription:string;
    public imagepath:string;
    public price:number;
    public brand:string;

    constructor(name:string,discription:string,imagepath:string,price:number,brand:string){
        this.name = name;
        this.discription=discription;
        this.imagepath=imagepath;
        this.price=price;
        this.brand=brand;
    }
}