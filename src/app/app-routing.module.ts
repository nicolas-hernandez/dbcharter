import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharterComponent } from './charter/charter.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
        path:"",
        component: CharterComponent,
    },
    {
        path:"**",
        component: PagenotfoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
