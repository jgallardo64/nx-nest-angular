import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
