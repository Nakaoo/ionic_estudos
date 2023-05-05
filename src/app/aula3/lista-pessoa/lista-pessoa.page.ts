import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {
  lista:any = []
  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    const aux: any = localStorage.getItem('lista')
    this.lista = JSON.parse(aux)
    this.lista.sort((a: any, b: any) => this.sortString(a.nome, b.nome))
    console.log('lista paciente')
  }

  exibeCadastro(){
    this.nav.navigateForward('cadastro-pessoa');
  }

  sortString (a: string, b: string){
    let x = a.toLowerCase()
    let y = b.toLowerCase()
    if(x < y) {return -1}
    if(x > y) {return 1}
    return 0;
  }

  detalhe(item: any){
    const aux = JSON.stringify(item)
    localStorage.setItem('pessoa', aux)
    console.log('og')
    this.nav.navigateForward('detalhe-pessoa')
  }
}
