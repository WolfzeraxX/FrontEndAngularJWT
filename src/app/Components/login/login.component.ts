import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ValidadorDeFormulario } from '../../Helper/validadorDeFormulario';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../Services/auth.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf ,RouterModule,HttpClientModule, NgToastModule],
  providers:[AuthService, HttpClient],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon : string = "bi bi-eye-slash";
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router, private toast:NgToastService, private http:HttpClient)
  {
    this.loginForm = this.fb.group({
    nameDeUsuario:['',Validators.required],
    senha:        ['',Validators.required]
  })
}

  

escondeMostraPass(){
  this.isText = !this.isText;
  this.isText? this.eyeIcon ="bi bi-eye" : this.eyeIcon = "bi bi-eye-slash"
  this.isText? this.type="text": this.type = "password"
  }


  logar() {
     if (this.loginForm.valid) {
       console.log(this.loginForm.value);
    
       this.auth.login(this.loginForm.value)
         .subscribe({
           next: (res) => {
            this.auth.storeToken(res.token)
            console.log(this.auth.estaLogado())
             this.toast.success({detail:"SUCESS", summary:res.message, duration: 5000});
             this.loginForm.reset();
             this.router.navigate(['dashboard'])
           },
           error: () => { 
             this.toast.error({detail:"Login ou Senha Invalidos", summary:"Algo deu errado", duration: 5000});
           },
         });
     }
  
  
         else
     {
       console.log("o form nao é valido")
       ValidadorDeFormulario.ValidandoFormulario(this.loginForm)
       alert("seu Formulario é Invalido")
     }
  }

  
}
