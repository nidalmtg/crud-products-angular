import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileHandler } from '../../file-handler';

@Component({
  selector: 'app-create-product-popup',
  templateUrl: './create-product-popup.component.html',
  styleUrls: ['./create-product-popup.component.css'],
})
export class CreateProductPopupComponent implements OnInit {

  form = this.formBuilder.group({
    libelle: '',
    description: '',
    type: '',
    quantite: '',
    image: '',
  });
  fileHandler!: FileHandler;

  @Input() productTypes!: string[];
  @Input() service!: ProductListService;
  imageSrc: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.fileHandler = new FileHandler(this.http);
  }

  /**
   * Permet de créer un produit en récupérant les valeurs du formulaire. Si la requête est réussie, l'image est envoyée
   * vers l'API.
   * @see ProductListService.createProduct
   * @see FileHandler.uploadImage
   */
  createProduct() {
    const body = new URLSearchParams();
    for (const [key, value] of Object.entries(this.form.value)) {
      body.set(key, <string>value);
    }
    this.fileHandler.setNewFilename()
    body.set('image', this.fileHandler.toSend.alias);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    this.service.createProduct(body, options).subscribe((data: Product) => {
      this.fileHandler.uploadImage();
      console.log(data);
    });
  }

  /**
   * Permet de récupérer le fichier chargé depuis l'input dans une variable et d'afficher sa prévisualisation
   * dans le formulaire.
   *
   * @param event Fichier envoyé depuis le formulaire
   * @see previsualizeImage
   */
  onFileSelected(event: any) {
    this.fileHandler.toSend = event.target.files[0];
    this.previsualizeImage(event);
  }

  /**
   * @param event Image à prévisualiser
   */
  previsualizeImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }
}
