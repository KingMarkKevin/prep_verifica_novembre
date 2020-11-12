import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular';
  listProd : string[];
  o : Observable<Object>;

  constructor(private http:HttpClient){}

  getData = data => {
    this.listProd = data['products']
  }

  jRequest():void{
    this.o = this.http.get("https://3000-eedec9c2-c09f-4906-8cb4-b5d96a67a11d.ws-eu01.gitpod.io/api/products")
    this.o.subscribe(this.getData)
  }
}
