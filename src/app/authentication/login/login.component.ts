import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  hide = true;

  get passwordInput() {
    return this.signinForm.get('password');
  }

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    public route: Router
  ) {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
          ),
        ],
      ],
    });
  }

  ngOnInit() {
    this.loginService.doLogout();
  }

  /**
   * Cette méthode permet de connecter un utilisateur. Si ses identifiants sont valides,
   * il est redirigé vers la catalogue
   * @see LoginService.signIn
   */
  loginUser() {
    this.loginService.signIn(this.signinForm.value).then(() => {
      setTimeout(() => {
        if (this.loginService.isLoggedIn) {
          console.log('connecté');
          this.route.navigate(['/products']);
        } else {
          console.log('mauvais identifiant');
        }
      }, 1000);
    });
  }

  /**
   * Cette méthode permet de retourner une erreur si le champs username du formulaire ne correspond pas aux validateurs
   */
  getUsernameErrorMessage() {
    return this.signinForm.controls['username'].hasError('required')
      ? "Vous devez entrer un nom d'utilisateur"
      : '';
  }

  /**
   * Cette méthode permet de retourner une erreur si le champs password du formulaire ne correspond pas aux validateurs
   */
  getPasswordErrorMessage() {
    if (this.signinForm.controls['password'].hasError('required')) {
      return 'Vous devez entrer un mot de passe';
    }
    return this.signinForm.controls['password'].hasError('pattern')
      ? "Le mot de passe saisi n'est pas assez fort"
      : '';
  }
}
