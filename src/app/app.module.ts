import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostModule } from './posts/post.module';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './taleinfo/contact/contact.component';
import { AboutComponent } from './taleinfo/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { GalleryModule } from './gallery/gallery.module';
import { TeamMemberComponent } from './taleinfo/about/team-member/team-member.component';
import { TeamComponent } from './taleinfo/about/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    TeamMemberComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    GalleryModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
