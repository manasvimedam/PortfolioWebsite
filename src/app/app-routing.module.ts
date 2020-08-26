import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: WorkComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Art', component: ArtComponent },
  { path: '404', component: NotFoundComponent },
  { path: ':key', component: ProjectComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
