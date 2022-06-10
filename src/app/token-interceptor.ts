import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from './authentication/login/login.service';
import { Observable } from 'rxjs';

/**
 * Cette classe est un intercepteur qui permet de passer automatiquement le token du client à la requête avant de
 * l'envoyer à l'API
 */

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: LoginService) {}

  /**
   * Cette méthode permet d'intercepter chaque requête HTTP effectuée par le service HttpClient afin d'en
   * modifier l'entête et d'y passer l'access_token récupéré via le Local Storage du client
   */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`,
      },
    });

    return next.handle(request);
  }
}
