import { SharedModule } from './../shared/shared.module';
import { TaleRoutingModule } from './taleinfo-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TeamMemberComponent } from './about/team-member/team-member.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [AboutComponent, TeamMemberComponent, ContactComponent],
  imports: [
    SharedModule, TaleRoutingModule
  ],
  exports: [SharedModule, TaleRoutingModule]

})
export class TaleinfoModule { }
