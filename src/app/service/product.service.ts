import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInputError } from './../common/bad-input';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://localhost:44370/api/product";
  tokenheaders:HttpHeaders;
  constructor(private http:HttpClient) { 
    this.tokenheaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
   }

  getProducts(){  
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  createProduct(resource:any){
    return this.http.post(this.url, resource, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  deleteProduct(id:number){
    return this.http.delete(this.url + '/' + id, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
 
  productById(id:number){
    return this.http.get(this.url+'/'+id).pipe(
      map((response:any) => response),
      catchError(this.handleError)
    );
  }

  editProduct(resource:any, id:number){
    return this.http.put(this.url+'/'+id,resource, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  /*editJobPatch(resource:any, id:number){
    return this.http.patch(this.url+'/'+id,resource).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }*/

  handleError(error:Response){
    alert(error.status);
    if(error.status === 400){
      return throwError(new BadInputError(error.json))
    }
    else if(error.status === 404){
      return throwError(new NotFoundError(error.json));
    }else{
      return throwError(new AppError(error.json));
    }
  }
}
