import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  URL_API = 'https://crud-products-nodejs-nidal.herokuapp.com/auth/signin';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  get isLoggedIn(): boolean {
    const authToken = this.getToken();
    return authToken !== null;
  }

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Cette méthode asynchrone permet de vérifier les crédits d'un utilisateurs. S'ils le sont, on récupère l'access token
   * généré par la réponse dans le local stoage du client
   * @param user Les identifiants de l'utilisateurs (username & password)
   */
  async signIn(user: User) {
    return this.http.post<any>(this.URL_API, user).subscribe((res: any) => {
      localStorage.setItem('access_token', res.accessToken);
    });
  }

  /**
   * Cette méthode permet de retourner l'access_token depuis le local storage du client.
   */
  getToken() {
    return localStorage.getItem('access_token');
  }

  /**
   * Cette méthode permet de supprimer l'access_token de l'utilisateur du local storage et le redirige vers l'accueil
   */
  doLogout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
