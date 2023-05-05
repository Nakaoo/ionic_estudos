import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})

export class ListaProdutosPage {
  url = 'http://localhost:3333/product';
  urlz = 'https://cataas.com/cat';
  urlt = 'https://api.waifu.pics/sfw/cringe';
  produtos: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.http.get(this.url).
    subscribe((resp: any) => {
      this.produtos = resp.product
    })
  }
}
