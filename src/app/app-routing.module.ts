import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'news',
    children:[
      {
        path:'',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path:':NewsId',
        loadChildren: () => import('./news/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)

      }
    ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
