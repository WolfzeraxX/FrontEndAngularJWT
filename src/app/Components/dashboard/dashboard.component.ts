import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalcularService } from '../../Services/calcular.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule,HttpClientModule,AsyncPipe],
  providers:[CalcularService,HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  result: Observable<number> = new Observable<number>();

  formGroup = new FormGroup({
    number1: new FormControl<number>(0),
    number2: new FormControl<number>(0),
    operation: new FormControl<string>('')
  });

  constructor(private calcularService: CalcularService , ) {

  }

  setOperation(operation: string): void {
    this.formGroup.get('operation')?.setValue(operation);
  }

  calculate() {
    const { number1, number2 , operation} = this.formGroup.value;
    this.result = this.calcularService.calcular(number1!, number2!,operation!);
    console.log(number1, number2, operation)
    console.log(this.result)
  }}

