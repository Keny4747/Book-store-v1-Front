import { Book } from "src/app/admin/books/shared/book.model";

export interface SalesOrder{
  id: number;
  total: number;
  createAt: Date;
  paymentStatus:string;
  customer:null;
  items: SalesItem[];
}
export interface SalesItem{
  id: number;
  price: number;
  downloadsAvaliable:number;
  book:Book;
}
