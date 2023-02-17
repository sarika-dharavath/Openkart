
export class order{
    public orderId: string;
    public productName: string;
    constructor(orderId:string, productName:string){
        this.orderId = orderId;
        this.productName = productName;
    }
}