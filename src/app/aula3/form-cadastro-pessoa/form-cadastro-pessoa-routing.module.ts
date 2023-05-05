import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCadastroPessoaPage } from './form-cadastro-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: FormCadastroPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCadastroPessoaPageRoutingModule {}
