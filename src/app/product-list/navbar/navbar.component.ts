import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LoginService } from '../../authentication/login/login.service';
import { ProductListService } from '../product-list.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private isLogged: boolean | undefined;
  public productTypes: string[] = [];

  @ViewChild('templateCreate', { static: true }) templateCreate!: TemplateRef<any>;

  constructor(
    private _loginService: LoginService,
    private _productListService: ProductListService,
    private dialog: MatDialog
  ) {}

  get loginService(): LoginService {
    return this._loginService;
  }

  get productListService(): ProductListService {
    return this._productListService;
  }

  ngOnInit(): void {
    this.isLogged = this._loginService.isLoggedIn;
    if (this.isLogged) {
      this.productListService.getProductTypes().subscribe(data => {
        this.productTypes = data;
      });
    }
  }

  /**
   * Permet d'ouvrir une fenêtre de dialogue vers le formulaire de création d'un nouveau produit
   */
  createProductPopup() {
    this.dialog.open(this.templateCreate);
  }
}
