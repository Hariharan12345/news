import { Injectable } from '@angular/core';
import { NewJson } from '../home/NewJson.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // newsArticle:NewJson[];

  allNews: any;
  newsdetails = [];

  constructor(private http:HttpClient) { }
  config_url='https://newsapi.org/v2/top-headlines?country=us&apiKey=6e2cac9fabfe48f3b6693bc744886a4b'
  news() {
      return this.http.get(this.config_url)
    
  }
  // getAllNews(){
  
    
  //   // return[...this.newsArticle];
  //   // console.log(this.newsArticle)
    
  // }
  // getNews(NewsId:any){
  //   return{...this.newsArticle.find(news=>{
  //       return news.id=NewsId;
  //   })};
  // }

  getNews(NewsId) {
    this.http.get(this.config_url).subscribe(resp => {
      this.allNews = resp;
      this.newsdetails = this.allNews.articles[NewsId];
      // console.log(this.newsdetails);
    })
  }
  
}
