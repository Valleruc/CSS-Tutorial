import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flexbox', loadChildren: () => import('./Modules/flexbox/flexbox.module').then(m => m.FlexboxModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
