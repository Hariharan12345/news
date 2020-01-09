import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewJson } from '../home/NewJson.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  httpClient: any;


  
    constructor(private myArticle:NewsService,http:HttpClient) {}
    news1:any;

    ngOnInit(){
      this.myArticle.news().subscribe(resp => {
        this.news1= resp;
        console.log(this.news1.articles[0]);
      });
     
  
    }
 
}
