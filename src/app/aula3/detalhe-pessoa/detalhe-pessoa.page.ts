import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.page.html',
  styleUrls: ['./detalhe-pessoa.page.scss'],
})
export class DetalhePessoaPage implements OnInit {
  pessoa = {nome: '', idade: 0, genero: ''}

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   const aux: any = localStorage.getItem('pessoa')
   this.pessoa = JSON.parse(aux)
  }
}
