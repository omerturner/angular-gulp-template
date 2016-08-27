import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api
  constructor(private http: Http) { }

}