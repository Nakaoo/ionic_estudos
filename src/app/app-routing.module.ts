import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pessoa',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./aula2/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./aula2/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./aula3/lista-pessoa/lista-pessoa.module').then( m => m.ListaPessoaPageModule)
  },
  {
    path: 'cadastro-pessoa',
    loadChildren: () => import('./aula3/form-cadastro-pessoa/form-cadastro-pessoa.module').then( m => m.FormCadastroPessoaPageModule)
  },
  {
    path: 'detalhe-pessoa',
    loadChildren: () => import('./aula3/detalhe-pessoa/detalhe-pessoa.module').then( m => m.DetalhePessoaPageModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./aula4/lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
