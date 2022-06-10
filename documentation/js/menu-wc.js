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
                                            'data-target="#components-links-module-AppModule-f007bf2f105871fa48e545c7f0f9e1c29a661b4977b642a1e3010d66ea2c26cfb8fecbf2402511e16b549016ba10d53b8f183d2941ce16a6a129fb208175f397"' : 'data-target="#xs-components-links-module-AppModule-f007bf2f105871fa48e545c7f0f9e1c29a661b4977b642a1e3010d66ea2c26cfb8fecbf2402511e16b549016ba10d53b8f183d2941ce16a6a129fb208175f397"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f007bf2f105871fa48e545c7f0f9e1c29a661b4977b642a1e3010d66ea2c26cfb8fecbf2402511e16b549016ba10d53b8f183d2941ce16a6a129fb208175f397"' :
                                            'id="xs-components-links-module-AppModule-f007bf2f105871fa48e545c7f0f9e1c29a661b4977b642a1e3010d66ea2c26cfb8fecbf2402511e16b549016ba10d53b8f183d2941ce16a6a129fb208175f397"' }>
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
                                            'data-target="#components-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' : 'data-target="#xs-components-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' :
                                            'id="xs-components-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-45e4e336b0327e1b557adc2c94968962b20618c87228181aa864dde428bf77f317aef2817f6ba54bbefedf3d1148766665d304e3a8ef09d281b9cf71982b057f"' }>
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
                                            'data-target="#components-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' : 'data-target="#xs-components-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' :
                                            'id="xs-components-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' }>
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
                                        'data-target="#injectables-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' : 'data-target="#xs-injectables-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' :
                                        'id="xs-injectables-links-module-ProductListModule-76d877edeb8ce59281e9402c622b04b2900630141070d5aa2ca0516a217600d01c0d7f6416a3352285014db64ef0d7fe860fbb10dbe27df91b0e3f1d90afee90"' }>
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