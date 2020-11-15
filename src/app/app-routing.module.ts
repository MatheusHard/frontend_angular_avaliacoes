import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeCreateComponent } from './cidade/cidade-create/cidade-create.component';
import { CidadeListComponent } from './cidade/cidade-list/cidade-list.component';
import { CidadeUpdateComponent } from './cidade/cidade-update/cidade-update.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {path: 'home', component: MainNavComponent},
  {path:'cidades/list', component: CidadeListComponent  },
  {path:'cidades/create', component: CidadeCreateComponent  },
  {path:'cidades/:id', component: CidadeUpdateComponent  },
  {path:'', redirectTo: 'home', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
