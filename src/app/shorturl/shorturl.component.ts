import { ShorturlService } from './../shorturl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shorturl',
  templateUrl: './shorturl.component.html',
  styleUrls: ['./shorturl.component.css']
})
export class ShorturlComponent implements OnInit {
 shortUrl : any;
 smallLink : String;
  constructor(private service : ShorturlService) { 

  }
  postUrl(input : HTMLInputElement) {
    let post = { url : input }
    
    console.log(post)
    this.service.postUrl(post)
    
    .subscribe(response => {
      this.shortUrl = response
       this.smallLink = (this.shortUrl).link
      console.log(this.smallLink);
   
    })
  }
  ngOnInit() {
  }

}
