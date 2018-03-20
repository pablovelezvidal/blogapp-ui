import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Article } from './article';


@Injectable()
export class ArticleService {

  result:any;
  api:string = "http://localhost:3000";

  constructor(private _http: Http) { }

  getArticles() {
    return this._http.get(this.api+'/all')
      .map(result => this.result = result.json());
  }

  getArticle(id) {
    return this._http.get(this.api+'/articles/'+id)
      .map(result => this.result = result.json());
  }

  insertArticle(post: Article) {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this._http.post(this.api+'/create', JSON.stringify(post), options).
                map(result => {
                  this.result = result.json()
                });
  }

  updateArticle(post: Article, id) {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this._http.post(this.api+'/update/'+id, JSON.stringify(post), options).
                map(result => {
                  this.result = result.json()
                });
  }

  deleteArticle(id) {
    return this._http.get(this.api+'/delete/'+id)
      .map(result => this.result = result.json());
  }

}
