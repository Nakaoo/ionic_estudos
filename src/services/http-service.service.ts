import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  base_url = 'http://localhost:3333/';

  constructor(
    private http: HttpClient
  ) { }

  listaProdutos() {
    return this.http.get(this.base_url + 'product');
  }

  cadastraProduto(produto: any) {
    const data = produto
    return this.http.post(this.base_url + 'product', data)
  }
}
