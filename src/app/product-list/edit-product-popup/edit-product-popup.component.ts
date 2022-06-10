import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductListService } from '../product-list.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileHandler } from '../../file-handler';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-product-popup',
  templateUrl: './edit-product-popup.component.html',
  styleUrls: ['./edit-product-popup.component.css'],
})

export class EditProductPopupComponent implements OnInit {

  form = this.formBuilder.group({
    libelle: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
    quantite: ['', [Validators.required]],
    image: '',
  });
  fileHandler: FileHandler;

  @Input() product!: Product;
  @Input() productTypes!: string[];
  @Input() service!: ProductListService;

  imageSrc: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.fileHandler = new FileHandler(this.http);

    this.form.controls['libelle'].setValue(this.product.libelle);
    this.form.controls['description'].setValue(this.product.description);
    this.form.controls['type'].setValue(this.product.type);
    this.form.controls['quantite'].setValue(this.product.quantite);

    this.initImage(this.product.image);
  }

  /**
   * Permet de modifier un produit en récupérant les valeurs du formulaire. Si la requête est réussie, l'image est envoyée
   * vers l'API.
   * @see ProductListService.editProduct
   * @see FileHandler.uploadImage
   */
  editProduct() {
    let hasImage: boolean;
    hasImage = this.form.value['image'] !== '';

    const body = new URLSearchParams();
    for (const [key, value] of Object.entries(this.form.value)) {
      body.set(key, <string>value);
    }

    if (!hasImage) {
      body.set('image', this.product.image);
    } else {
      this.fileHandler.setNewFilename()
      body.set('image', this.fileHandler.toSend.alias);
    }

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    this.service.editProduct(this.product.id, body, options).subscribe((data: Product) => {
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
   * Permet de récupérer le nom de l'image du produit selectionné afin de l'afficher dans le formulaire
   *
   * @param name Nom de l'image à afficher
   */
  initImage(name: string) {
    this.service.getImage(name).subscribe(img => {

      const file = img;

      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    });
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
