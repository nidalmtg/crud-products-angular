import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {

  private URL_API = 'https://crud-products-nodejs-nidal.herokuapp.com/products/';
  private URL_IMG = 'https://crud-products-nodejs-nidal.herokuapp.com/products/img/';

  constructor(private http: HttpClient) {}

  /**
   * Retourne le résultat d'une requête HTTP GET vers l'API afin de récupérer la liste des types de produits
   */
  getProductTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.URL_API + 'types');
  }

  /**
   * Retourne le résultat d'une requête HTTP GET vers l'API afin de récupérer un produit par ID
   * @param id Id du produit à récupérer
   */
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.URL_API + id);
  }

  /**
   * Retourne le résultat d'une requête HTTP GET vers l'API afjn de récupérer une liste de produit. S'il n'y a
   * pas de paramètres, alors la fonction retourne tous les produits de la base de données. Sinon, la requête
   * prend en compte les paramètres afin de filtrer la recherche.
   * @param search Occurence à rechercher dans le libellé ou la description du produit
   * @param type Type de produit recherché
   */
  getProducts(search?: string, type?: string): Observable<Product[]> {
    let url = this.URL_API;

    if (type && search) {
      url += '?type=' + type + '&search=' + search;
      return this.http.get<Product[]>(url);
    } else if (type && !search) {
      url += '?type=' + type;
      return this.http.get<Product[]>(url);
    } else if (!type && search) {
      url += '?search=' + search;
      return this.http.get<Product[]>(url);
    } else {
      return this.http.get<Product[]>(this.URL_API);
    }
  }

  /**
   * Retourne le résultat d'une requête HTTP POST vers l'API afin de créer un nouveau produit dans la base de données.
   * Le résultat contient l'objet modifié avec ses nouvelles valeurs
   * @param body Les données à transmettre à la requête
   * @param options Les options de la requêtes
   */
  createProduct(body: URLSearchParams, options: Object): Observable<Product> {
    return this.http.post<Product>(this.URL_API, body.toString(), options);
  }

  /**
   * Retourne le résultat d'une requête HTTP PATCH vers l'API afin de modifier un produit existant. Le résultat contient
   * l'objet modifié avec ses nouvelles valeurs
   * @param id Id du produit à modifier
   * @param body Les données à transmettre à la requête
   * @param options Les options de la requêtes
   */
  editProduct(id: string, body: URLSearchParams, options: Object): Observable<Product> {
    return this.http.patch<Product>(this.URL_API + id, body.toString(), options);
  }

  /**
   * Envoie une requête HTTP DELETE vers l'API afin de supprimer un produit de la base de données.
   * @param id Id du produit à supprimer
   */
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(this.URL_API + id);
  }

  /**
   * Evnoie une requête HTTP GET vers l'API afin d'en récupérer une image de type blob.
   * @param name Nom de l'image à récupérer
   */
  getImage(name: string) {
    return this.http.get(this.URL_IMG + name, { responseType: 'blob' });
  }
}
