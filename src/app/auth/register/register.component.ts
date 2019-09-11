import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  nome = '';
  email = '';
  senha = '';
  carregandoResult = false;
  //EstadoErro = new EstadoControleErro();

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'email' : [null, Validators.required],
      'senha' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

}
