import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [

  {
    path: '', component: LandingPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

