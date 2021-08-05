import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
queryparams1 ='';
queryparams2='';
  constructor(private activatedroute:ActivatedRoute) {
    this.activatedroute.params.subscribe(data=>{
      this.queryparams1 = data.id1;
      this.queryparams2 = data.id2;
  


    })
   }

  ngOnInit(): void {
  }

}
