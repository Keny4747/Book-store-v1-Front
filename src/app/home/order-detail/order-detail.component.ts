import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute } from '@angular/router';
import { SalesOrder } from '../shared/sales-order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit{

  salesOrder? : SalesOrder;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const orderId = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.homeService.getOrder(orderId)
    .subscribe(salesOrder =>{
      this.salesOrder=salesOrder
    })
  }


}
