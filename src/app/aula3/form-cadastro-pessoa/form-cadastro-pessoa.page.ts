import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro-pessoa',
  templateUrl: './form-cadastro-pessoa.page.html',
  styleUrls: ['./form-cadastro-pessoa.page.scss'],
})
export class FormCadastroPessoaPage implements OnInit {
  public nome: string = '';
  public idade: string = '';
  public genero: string = '';
  public lista: any = [];

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
    const aux: any = localStorage.getItem('lista')
    this.lista = JSON.parse(aux);
  }

  save(){

    const data: object = {
      "nome": this.nome,
      "idade": this.idade,
      "genero": this.genero
    }

    this.lista.push(data)

    localStorage.setItem('lista', JSON.stringify(this.lista));

    this.nav.navigateBack('pessoa');
  }
}
