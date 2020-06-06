import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from '../model/material.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor(private httpClient: HttpClient) {}

  getMaterials(): Observable<Material[]> {
    return this.httpClient.get('/api/v1/materials/getAll').pipe(
      map((body: Material[]) => body),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
