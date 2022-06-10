'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4900aa40df283a0c42242ee31c3dd4a34ced7af0a6d8e9d87533d994f4c469c8f8ccecbea2e32046720d84f51aa359e8b06240c27dab7064d95120ccfda49269"' : 'data-target="#xs-components-links-module-AppModule-4900aa40df283a0c42242ee31c3dd4a34ced7af0a6d8e9d87533d994f4c469c8f8ccecbea2e32046720d84f51aa359e8b06240c27dab7064d95120ccfda49269"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4900aa40df283a0c42242ee31c3dd4a34ced7af0a6d8e9d87533d994f4c469c8f8ccecbea2e32046720d84f51aa359e8b06240c27dab7064d95120ccfda49269"' :
                                            'id="xs-components-links-module-AppModule-4900aa40df283a0c42242ee31c3dd4a34ced7af0a6d8e9d87533d994f4c469c8f8ccecbea2e32046720d84f51aa359e8b06240c27dab7064d95120ccfda49269"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' : 'data-target="#xs-components-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' :
                                            'id="xs-components-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-6078ece4f7f108b9507ab8c21e93475566ccfa6e0b4b14943af0d098ac4ed7ff0cd7d43b701a32bf1ce588f6b09fe6b3b0c4ba1c745eb847f5c6a42eb1eea69d"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListModule.html" data-type="entity-link" >ProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' : 'data-target="#xs-components-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' :
                                            'id="xs-components-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' }>
                                            <li class="link">
                                                <a href="components/CreateProductPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProductPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProductPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProductPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' : 'data-target="#xs-injectables-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' :
                                        'id="xs-injectables-links-module-ProductListModule-f9c5977c346ff657354d8cb7853a3cbf42f1fd7e35cceb9c351ffe42d674988b95338f7fc36726f3f89448525bf378d40b1bcd36f8c629ac5abe75120efeabb2"' }>
                                        <li class="link">
                                            <a href="injectables/ProductListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FileHandler.html" data-type="entity-link" >FileHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductListService.html" data-type="entity-link" >ProductListService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link" >AuthGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});