import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoreComponent },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
