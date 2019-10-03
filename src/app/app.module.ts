import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { PostModule } from './posts/post.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { TaleinfoModule } from './taleinfo/taleinfo.module';
import { DropdownDirective } from './header/dropdown-directive';
// import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    // PostModule,
    TaleinfoModule,
    // GalleryModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
