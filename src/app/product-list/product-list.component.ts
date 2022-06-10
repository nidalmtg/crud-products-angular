import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from './product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productTypes: string[] = [];
  selectedProduct!: Product;

  @ViewChild('templateEdit', { static: true }) templateEdit: TemplateRef<any>;
  @ViewChild('templateShowImg', { static: true }) templateShowImg: TemplateRef<any>;

  displayedColumns: string[] = [
    'numero',
    'image',
    'libelle',
    'description',
    'type',
    'quantite',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  imageSrc: any;

  filterForm = this.formBuilder.group({
    search: '',
    type: '',
  });

  constructor(
    private _service: ProductListService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getProductTypes();
  }

  get service(): ProductListService {
    return this._service;
  }

  set service(value: ProductListService) {
    this._service = value;
  }

  /**
   * Récupère l'image via son nom dans la base de données pour l'afficher dans une fenêtre de dialogue
   * @param name Nom de l'image à afficher
   */
  openImage(name: string) {
    this._service.getImage(name).subscribe(img => {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);

      reader.readAsDataURL(img);
      this.dialog.open(this.templateShowImg);
    });
  }

  /**
   * Récupère le produit selectionné et ouvre la fenêtre de modification d'un produit
   * @param id Id du produit à modifier
   */
  editProductPopup(id: string): void {
    this.getSelectedProduct(id);
    setTimeout(() => this.dialog.open(this.templateEdit), 750);
  }

  /**
   * Récupère le produit selectionné et ouvre une fenêtre de confirmation pour supprimer le produit
   * selectionné. En cas de confirmation, le produit est directement supprimé de la base de données.
   * @param id Id du produit à supprimer
   * @see deleteProduct
   */
  deleteProductConfirm(id: string): void {
    this.getSelectedProduct(id);
    setTimeout(() => {
      if (confirm('Êtes-vous sûr de vouloir supprimer ' + this.selectedProduct.libelle + ' ?')) {
        this.deleteProduct(id);
        alert(this.selectedProduct.libelle + ' a correctement été supprimé');
      }
    }, 750);
  }

  /**
   * Récupère les champs du formulaire de filtre et met à jour la liste de produits avec le résultat
   * de la recherche.
   * @see ProductListService.getProducts
   */
  setFilters() {
    this._service
      // @ts-ignore
      .getProducts(this.filterForm.get('search').value, this.filterForm.get('type').value)
      .subscribe(data => {
        this.products = data;
        this.dataSource.data = this.products;
      });
  }

  /**
   * Met à zéro le formulaire et affiche tous les produits de la base de données*
   * @see ProductListService.getProducts
   */
  resetFilters() {
    this.filterForm.reset();
    this._service.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  /**
   * Méthode qui initialise la liste des types de produit
   * @see ProductListService.getProductTypes
   */
  getProductTypes() {
    this._service.getProductTypes().subscribe((data: string[]) => (this.productTypes = data));
  }

  /**
   * Méthode qui initialise la liste de produits et la datasource du tableau de produits
   * @see ProductListService.getProduct
   */
  getProducts() {
    this._service.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.dataSource.data = this.products;
    });
  }

  /**
   * Méthode qui change le produit selectionné (contenu dans la variable selectedProduct)
   * @see ProductListService.getProductById
   */
  getSelectedProduct(id: string) {
    this._service.getProductById(id).subscribe((data: Product) => {
      this.selectedProduct = data;
    });
  }

  /**
   * Méthode qui supprime le produit selectionné et qui affiche une alert box pour confirmer la suppression
   * @see ProductListService.deleteProduct
   */
  deleteProduct(id: string) {
    this._service.deleteProduct(id).subscribe(() => {
      // TODO : message confirmation suppression + refresh
      alert('Le produit a correctement été supprimé du catalogue');
    });
  }
}
