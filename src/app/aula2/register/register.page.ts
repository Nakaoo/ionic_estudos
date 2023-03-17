import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public nome: string = '';
  public sobrenome: string = '';
  public nascimento: string = '';
  public genero: string = '';

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  send(){
    const nome = (this.nome);
    const sobrenome = (this.sobrenome);
    const nascimento = (this.nascimento);
    const genero = (this.genero);
    const date = {nome, sobrenome, nascimento, genero};
  }
}
