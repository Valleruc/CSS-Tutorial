import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxComponent } from './Modules/flexbox/flexbox.component';


const routes: Routes = [
  {path: 'flexbox', component: FlexboxComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
