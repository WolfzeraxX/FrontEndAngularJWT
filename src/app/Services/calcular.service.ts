import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  private apiUrl = 'https://localhost:7276/api/Calcular';

  

  constructor(private http: HttpClient) {}

  calcular(number1: number, number2: number, operation: string): Observable<number> {
    const dados = { number1, number2, operation };

    return this.http.post<number>(`${this.apiUrl}/Calcular`, dados);
  }
    
  }
