import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Cette classe contient des méthodes concernant la manipulation de fichiers et l'envoi de fichiers vers l'API
 */

export class FileHandler {
  toSend: any;
  URL_API = 'https://crud-products-nodejs-nidal.herokuapp.com/products';

  constructor(private http: HttpClient) {}

  /**
   * Cette méthode permet de modifier le nom du fichier à envoyer en y ajoutant un timestamp afin d'éviter les conflits
   * de noms entre fichiers aux noms identiques
   */
  setNewFilename() {
    const filename = this.toSend.name.split('.')[0];
    const fileExt = this.toSend.name.split('.')[1];
    this.toSend.alias = filename.split('.').join('_') + '_' + Date.now() + '.' + fileExt;
  }

  /**
   * Cette méthode vérifie si un fichier est prêt à être envoyé (var toSend) et l'envoie vers l'API
   * @see uploadImageRequest
   */
  uploadImage() {
    if (this.toSend) {
      const formData = new FormData();
      formData.append('file', this.toSend, this.toSend.alias);
      this.uploadImageRequest(formData).subscribe(() => {
        // TODO : message confirmation création objet avec recap + refresh
        console.log('file sent');
      });
    }
  }

  /**
   * Envoie une requête HTTP POST vers l'API afin d'y envoyer une image depuis le client.
   * @param file Un FormData ayant comme forme {'file', nomfichier}
   */
  uploadImageRequest(file: FormData): Observable<void> {
    return this.http.post<void>(this.URL_API + '/upload-image', file);
  }


}
