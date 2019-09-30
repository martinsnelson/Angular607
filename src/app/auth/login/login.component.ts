import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { PlatformDetectorService } from '../../service/platform-detector/platform-detector.service';

// import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  senha = '';
  //EstadoErro = new EstadoControleErro();
  carregandoResult = false;
  @ViewChild('userNameFocusHtmlRef') userNameFocusHtmlRef: ElementRef<HTMLInputElement>;

  constructor(private _formBuilder: FormBuilder, 
    private _router: Router, 
    private _authService: AuthService,
    private _platformDetectorService: PlatformDetectorService) { 
    
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      // 'email' : ['nelsontecti@gmail.com', Validators.required],
      // 'senha' : ['n3Ls0n29', Validators.required]
      'email' : [null, Validators.required],
      'senha' : [null, Validators.required]
    });

    //  Se true a condição executa o focus
    this._platformDetectorService.isPlatformBrowser() && 
      this.userNameFocusHtmlRef.nativeElement.focus();
  }

  onFormSubmit(form: NgForm) {
    this._authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this._router.navigate(['produto-lista']);
        }
      }, (err) => {
        console.log(err);
        alert(err);
      });
    }

    registrar() {
      this._router.navigate(['registrar']);
    }


    todo(){
      this._router.navigate(['lista-tarefas']);
    }
}

// Angular Material: Erro quando o controle inválido está sujo, é tocado ou enviado 
// export class EstadoControleErro implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
