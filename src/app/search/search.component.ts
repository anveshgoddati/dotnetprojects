import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  queryTag = '';
  queryCountry = '';
  queryTrending = '';

  constructor( private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{

    this.queryCountry =data.country;
    this.queryTag = data.Tag;
    this.queryTrending = data.Trending;
    })
    
   }

  ngOnInit(): void {
  }

}
