import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormBuilder, ReactiveFormsModule, FormsModule]
})

export class CreateComponent implements OnInit {

  articleFrm: FormGroup;
  articles: Array<Article>;
  article: Article;

  constructor(
    private _articleService: ArticleService, 
    private router:Router, 
    private ar:ActivatedRoute,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this._articleService.getArticles()
      .subscribe(res => this.articles = res);

    this.ar.params.subscribe(params => {
      if (params['id']) {
        this._articleService.getArticle(params['id'])
          .subscribe(res => {
            this.article = res;

            this.articleFrm = this.fb.group({
              'title' : [this.article['title'], Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(45)])],
              'content' : [this.article['content'], Validators.compose([Validators.required, Validators.minLength(10)])]
            });
          });
      } else {
        this.articleFrm = this.fb.group({
          'title' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(45)])],
          'content' : [null, Validators.compose([Validators.required, Validators.minLength(10)])]
        });
      }
    });

  }

  addArticle(articleId, article: Article) {
    if (articleId !== undefined) {
      this._articleService.updateArticle(article, articleId._id)
      .subscribe(updateArticle => {
        this.router.navigateByUrl('/');
      })
    } else {
      this._articleService.insertArticle(article)
      .subscribe(newArticle => {
        this.articles.push(newArticle);
        this.router.navigateByUrl('/');
      });
    }
  }

}
