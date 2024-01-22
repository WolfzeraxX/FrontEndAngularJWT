import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadorDeFormulario } from '../../Helper/validadorDeFormulario';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../Services/auth.service';
import { Route, Router, RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';


@Component({
  selector: 'app-registrar',
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule, HttpClientModule,RouterModule, NgToastModule],
  providers:[AuthService],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon : string = "bi bi-eye-slash";
  RegistroForm:FormGroup;
  
  
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) 
  {
    this.RegistroForm = this.fb.group({
      
    nome:         ['', Validators.required],
    sobreNome:    ['', Validators.required],
    email:        ['', Validators.required],
    nameDeUsuario:['', Validators.required],
    senha:        ['', Validators.required],
    
    
  })
    
  }

escondeMostraPass()
{
  this.isText = !this.isText;
  this.isText? this.eyeIcon ="bi bi-eye" : this.eyeIcon = "bi bi-eye-slash"
  this.isText? this.type="text": this.type = "password"
  }

  aoRegistrar() {
    if (this.RegistroForm.valid) {
      console.log(this.RegistroForm.value);
  
      this.auth.registrar(this.RegistroForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.router.navigate(['login']);
          },
          error: (err) => {
            alert(err.error.message);
          }
        });
    }
 else
 {
   ValidadorDeFormulario.ValidandoFormulario(this.RegistroForm)

 }
  }
}
