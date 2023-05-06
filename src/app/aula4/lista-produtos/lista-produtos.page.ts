import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

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
    private http: HttpServiceService
  ) { }

  ionViewWillEnter() {
    const prod = {marca: 'Nescau', categoria: 'Achocolatado', preco: 14.8}

    this.http.listaProdutos().subscribe(resp => {
      this.produtos = resp;
    })

    this.http.cadastraProduto(prod).subscribe(resp => console.log(resp))
  }
}
