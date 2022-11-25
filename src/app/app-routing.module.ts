import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {WatchlistComponent} from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movie-list' },
  { path: 'movie-list', component: ListComponent },
  { path: 'movie-details/:movie-id', component: DetailsComponent },
  { path: 'watchlist', component: WatchlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
