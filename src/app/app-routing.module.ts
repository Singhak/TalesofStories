import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'arts', loadChildren: './gallery/gallery.module#GalleryModule' },
  { path: 'posts', loadChildren: './posts/post.module#PostModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
