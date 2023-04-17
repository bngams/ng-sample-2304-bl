import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Routes <=> alias <=> type  <=> Route[]
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'template-syntax', component: TemplateSyntaxComponent },
  // /!\ { path: 'products', loadComponent: () => {... }  },
  // { path: 'products', children: [ Route, Route ] }
  { path: 'products', data: {preload: true}, loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
