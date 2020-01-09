import { Component, OnInit } from '@angular/core';
import { NewJson } from 'src/app/home/NewJson.model';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  loadedNews:any;
  load:[]
  constructor(private activatedRoute:ActivatedRoute, private homeservice:NewsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        if(!paramMap.has("NewsId")){
          return;
                                   }
        const NewsId=paramMap.get('NewsId');
        
        this.loadedNews=this.homeservice.getNews(NewsId);
        
        this.homeservice.news().subscribe(resp => {
        this.loadedNews= resp;
        this.load=this.loadedNews.articles[NewsId]
        console.log(this.load)
        })}
      
    )
    }

}
