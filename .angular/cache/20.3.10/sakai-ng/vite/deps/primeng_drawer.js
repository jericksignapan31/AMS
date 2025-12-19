import {
  FocusTrap,
  FocusTrapModule
} from "./chunk-Y6KHBTSO.js";
import {
  Button
} from "./chunk-SPWXAIB5.js";
import "./chunk-RVGJXB7F.js";
import "./chunk-HQP6WWBM.js";
import "./chunk-UDJNLJ7R.js";
import {
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-P6SMTJBG.js";
import "./chunk-2NNT3GX6.js";
import {
  zindexutils
} from "./chunk-CMVOE67Z.js";
import {
  TimesIcon
} from "./chunk-PZZHTSKZ.js";
import "./chunk-6VI54KAM.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-HN3FT5WE.js";
import {
  BaseStyle
} from "./chunk-WXGRKYUQ.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-AEUBHVGT.js";
import {
  Bind
} from "./chunk-SSPEJKN4.js";
import "./chunk-Y3VPSMBK.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-GGMOGVES.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-R2OVIKVM.js";
import "./chunk-APPCZKFW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  P,
  W,
  _t,
  ut
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/drawer/index.mjs
var style2 = "\n    .p-drawer {\n        display: flex;\n        flex-direction: column;\n        transform: translate3d(0px, 0px, 0px);\n        position: relative;\n        transition: transform 0.3s;\n        background: dt('drawer.background');\n        color: dt('drawer.color');\n        border: 1px solid dt('drawer.border.color');\n        box-shadow: dt('drawer.shadow');\n    }\n\n    .p-drawer-content {\n        overflow-y: auto;\n        flex-grow: 1;\n        padding: dt('drawer.content.padding');\n    }\n\n    .p-drawer-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('drawer.header.padding');\n    }\n\n    .p-drawer-footer {\n        padding: dt('drawer.footer.padding');\n    }\n\n    .p-drawer-title {\n        font-weight: dt('drawer.title.font.weight');\n        font-size: dt('drawer.title.font.size');\n    }\n\n    .p-drawer-full .p-drawer {\n        transition: none;\n        transform: none;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-height: 100%;\n        top: 0px !important;\n        left: 0px !important;\n        border-width: 1px;\n    }\n\n    .p-drawer-left .p-drawer-enter-from,\n    .p-drawer-left .p-drawer-leave-to {\n        transform: translateX(-100%);\n    }\n\n    .p-drawer-right .p-drawer-enter-from,\n    .p-drawer-right .p-drawer-leave-to {\n        transform: translateX(100%);\n    }\n\n    .p-drawer-top .p-drawer-enter-from,\n    .p-drawer-top .p-drawer-leave-to {\n        transform: translateY(-100%);\n    }\n\n    .p-drawer-bottom .p-drawer-enter-from,\n    .p-drawer-bottom .p-drawer-leave-to {\n        transform: translateY(100%);\n    }\n\n    .p-drawer-full .p-drawer-enter-from,\n    .p-drawer-full .p-drawer-leave-to {\n        opacity: 0;\n    }\n\n    .p-drawer-full .p-drawer-enter-active,\n    .p-drawer-full .p-drawer-leave-active {\n        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n\n    .p-drawer-left .p-drawer {\n        width: 20rem;\n        height: 100%;\n        border-inline-end-width: 1px;\n    }\n\n    .p-drawer-right .p-drawer {\n        width: 20rem;\n        height: 100%;\n        border-inline-start-width: 1px;\n    }\n\n    .p-drawer-top .p-drawer {\n        height: 10rem;\n        width: 100%;\n        border-block-end-width: 1px;\n    }\n\n    .p-drawer-bottom .p-drawer {\n        height: 10rem;\n        width: 100%;\n        border-block-start-width: 1px;\n    }\n\n    .p-drawer-left .p-drawer-content,\n    .p-drawer-right .p-drawer-content,\n    .p-drawer-top .p-drawer-content,\n    .p-drawer-bottom .p-drawer-content {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-drawer-open {\n        display: flex;\n    }\n\n    .p-drawer-mask:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n";

// node_modules/primeng/fesm2022/primeng-drawer.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["content"];
var _c3 = ["closeicon"];
var _c4 = ["headless"];
var _c5 = ["container"];
var _c6 = ["closeButton"];
var _c7 = ["*"];
var _c8 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
function Drawer_div_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Drawer_div_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Drawer_div_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate);
  }
}
function Drawer_div_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Drawer_div_0_Conditional_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("title"));
    ɵɵproperty("pBind", ctx_r1.ptm("title"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header);
  }
}
function Drawer_div_0_Conditional_3_p_button_3_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 12);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "closeicon");
  }
}
function Drawer_div_0_Conditional_3_p_button_3_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function Drawer_div_0_Conditional_3_p_button_3_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Drawer_div_0_Conditional_3_p_button_3_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Drawer_div_0_Conditional_3_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Drawer_div_0_Conditional_3_p_button_3_ng_template_1__svg_svg_0_Template, 1, 1, "svg", 11)(1, Drawer_div_0_Conditional_3_p_button_3_ng_template_1_1_Template, 1, 0, null, 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
  }
}
function Drawer_div_0_Conditional_3_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 10);
    ɵɵlistener("onClick", function Drawer_div_0_Conditional_3_p_button_3_Template_p_button_onClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.close($event));
    })("keydown.enter", function Drawer_div_0_Conditional_3_p_button_3_Template_p_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.close($event));
    });
    ɵɵtemplate(1, Drawer_div_0_Conditional_3_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("pt", ctx_r1.ptm("pcCloseButton"))("ngClass", ctx_r1.cx("pcCloseButton"))("buttonProps", ctx_r1.closeButtonProps)("ariaLabel", ctx_r1.ariaCloseLabel);
    ɵɵattribute("data-pc-group-section", "iconcontainer");
  }
}
function Drawer_div_0_Conditional_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Drawer_div_0_Conditional_3_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Drawer_div_0_Conditional_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, Drawer_div_0_Conditional_3_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("footer"))("ngClass", ctx_r1.cx("footer"));
    ɵɵattribute("data-pc-section", "footer");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function Drawer_div_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, Drawer_div_0_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 4)(2, Drawer_div_0_Conditional_3_div_2_Template, 2, 4, "div", 6)(3, Drawer_div_0_Conditional_3_p_button_3_Template, 3, 5, "p-button", 7);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵprojection(5);
    ɵɵtemplate(6, Drawer_div_0_Conditional_3_ng_container_6_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵtemplate(7, Drawer_div_0_Conditional_3_ng_container_7_Template, 3, 4, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r1.ptm("header"))("ngClass", ctx_r1.cx("header"));
    ɵɵattribute("data-pc-section", "header");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.header);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCloseIcon && ctx_r1.closable);
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("content"))("ngClass", ctx_r1.cx("content"));
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function Drawer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("@panelState.start", function Drawer_div_0_Template_div_animation_panelState_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@panelState.done", function Drawer_div_0_Template_div_animation_panelState_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    })("keydown", function Drawer_div_0_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    });
    ɵɵconditionalCreate(2, Drawer_div_0_Conditional_2_Template, 1, 1, "ng-container")(3, Drawer_div_0_Conditional_3_Template, 8, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.style);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵproperty("pBind", ctx_r1.ptm("root"))("@panelState", ɵɵpureFunction1(10, _c9, ɵɵpureFunction2(7, _c8, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.headlessTemplate || ctx_r1._headlessTemplate ? 2 : 3);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`
);
var classes = {
  mask: ({
    instance
  }) => ["p-drawer-mask", {
    "p-overlay-mask p-overlay-mask-enter": instance.modal
  }, {
    "p-drawer-full": instance.fullScreen
  }],
  root: ({
    instance
  }) => ["p-drawer p-component", {
    "p-drawer-full": instance.fullScreen,
    "p-drawer-open": instance.visible
  }, `p-drawer-${instance.position}`],
  header: "p-drawer-header",
  title: "p-drawer-title",
  pcCloseButton: "p-drawer-close-button",
  content: "p-drawer-content",
  footer: "p-drawer-footer"
};
var DrawerStyle = class _DrawerStyle extends BaseStyle {
  name = "drawer";
  style = style3;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDrawerStyle_BaseFactory;
    return function DrawerStyle_Factory(__ngFactoryType__) {
      return (ɵDrawerStyle_BaseFactory || (ɵDrawerStyle_BaseFactory = ɵɵgetInheritedFactory(_DrawerStyle)))(__ngFactoryType__ || _DrawerStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DrawerStyle,
    factory: _DrawerStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerStyle, [{
    type: Injectable
  }], null, null);
})();
var DrawerClasses;
(function(DrawerClasses2) {
  DrawerClasses2["mask"] = "p-drawer-mask";
  DrawerClasses2["root"] = "p-drawer";
  DrawerClasses2["header"] = "p-drawer-header";
  DrawerClasses2["title"] = "p-drawer-title";
  DrawerClasses2["pcCloseButton"] = "p-drawer-close-button";
  DrawerClasses2["content"] = "p-drawer-content";
})(DrawerClasses || (DrawerClasses = {}));
var DRAWER_INSTANCE = new InjectionToken("DRAWER_INSTANCE");
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var defaultTransformOptions = "translate3d(-100%, 0px, 0px)";
var Drawer = class _Drawer extends BaseComponent {
  $pcDrawer = inject(DRAWER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Whether to block scrolling of the document when drawer is active.
   * @group Props
   */
  blockScroll = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Whether an overlay mask is displayed behind the drawer.
   * @group Props
   */
  modal = true;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Whether to dismiss drawer on click of the mask.
   * @group Props
   */
  dismissible = true;
  /**
   * Whether to display the close icon.
   * @group Props
   * @deprecated use 'closable' instead.
   */
  showCloseIcon = true;
  /**
   * Specifies if pressing escape key should hide the drawer.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible ?? false;
  }
  set visible(val) {
    this._visible = val;
  }
  /**
   * Specifies the position of the drawer, valid values are "left", "right", "bottom" and "top".
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    if (value === "full") {
      this.transformOptions = "none";
      return;
    }
    switch (value) {
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
    }
  }
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value === true) {
      this.transformOptions = "none";
    } else {
      this.transformOptions = defaultTransformOptions;
    }
  }
  /**
   * Title content of the dialog.
   * @group Props
   */
  header;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to display close button.
   * @group Props
   * @defaultValue true
   */
  closable = true;
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dialog visibility is changed.
   * @param {boolean} value - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  containerViewChild;
  closeButtonViewChild;
  initialized;
  _visible;
  _position = "left";
  _fullScreen = false;
  container;
  transformOptions = defaultTransformOptions;
  mask;
  maskClickListener;
  documentEscapeListener;
  animationEndListener;
  _componentStyle = inject(DrawerStyle);
  onAfterViewInit() {
    this.initialized = true;
  }
  /**
   * Content template for the content of the drawer.
   * @group Templates
   */
  headerTemplate;
  /**
   * Header template for the header of the drawer.
   * @group Templates
   */
  footerTemplate;
  /**
   * Content template for the footer of the drawer.
   * @group Templates
   */
  contentTemplate;
  /**
   * Close icon template for the close icon of the drawer.
   * @group Templates
   */
  closeIconTemplate;
  /**
   * Headless template for the headless drawer.
   * @group Templates
   */
  headlessTemplate;
  _headerTemplate;
  _footerTemplate;
  _contentTemplate;
  _closeIconTemplate;
  _headlessTemplate;
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.hide(false);
    }
  }
  show() {
    this.container?.setAttribute(this.$attrSelector, "");
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    if (this.modal) {
      this.enableModality();
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
    if (this.modal) {
      this.disableModality();
    }
  }
  close(event) {
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    const activeDrawers = this.document.querySelectorAll(".p-drawer-open");
    const activeDrawersLength = activeDrawers.length;
    const zIndex = activeDrawersLength == 1 ? String(parseInt(this.container.style.zIndex) - 1) : String(parseInt(activeDrawers[activeDrawersLength - 1].style.zIndex) - 1);
    if (!this.mask) {
      this.mask = this.renderer.createElement("div");
      if (this.mask) {
        _t(this.mask, "style", this.getMaskStyle());
        _t(this.mask, "style", `z-index: ${zIndex}`);
        W(this.mask, this.cx("mask"));
      }
      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, "click", (event) => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }
      this.renderer.appendChild(this.document.body, this.mask);
      if (this.blockScroll) {
        blockBodyScroll();
      }
    }
  }
  getMaskStyle() {
    return this.maskStyle ? Object.entries(this.maskStyle).map(([key, value]) => `${key}: ${value}`).join("; ") : "";
  }
  disableModality() {
    if (this.mask) {
      P(this.mask, "p-overlay-mask-enter");
      W(this.mask, "p-overlay-mask-leave");
      this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyModal.bind(this));
    }
  }
  destroyModal() {
    this.unbindMaskClickListener();
    if (this.mask) {
      this.renderer.removeChild(this.document.body, this.mask);
    }
    if (this.blockScroll) {
      unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.mask = null;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.hide(false);
        zindexutils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body" && this.container) {
        this.renderer.appendChild(this.document.body, this.container);
      } else if (this.container) {
        ut(this.appendTo, this.container);
      }
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindMaskClickListener();
    this.unbindDocumentEscapeListener();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  onDestroy() {
    this.initialized = false;
    if (this.visible && this.modal) {
      this.destroyModal();
    }
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    this.unbindAnimationEndListener();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDrawer_BaseFactory;
    return function Drawer_Factory(__ngFactoryType__) {
      return (ɵDrawer_BaseFactory || (ɵDrawer_BaseFactory = ɵɵgetInheritedFactory(_Drawer)))(__ngFactoryType__ || _Drawer);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Drawer,
    selectors: [["p-drawer"]],
    contentQueries: function Drawer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.headerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.footerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.contentTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.closeIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.headlessTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Drawer_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.containerViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.closeButtonViewChild = _t2.first);
      }
    },
    inputs: {
      appendTo: "appendTo",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaCloseLabel: "ariaCloseLabel",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      modal: [2, "modal", "modal", booleanAttribute],
      closeButtonProps: "closeButtonProps",
      dismissible: [2, "dismissible", "dismissible", booleanAttribute],
      showCloseIcon: [2, "showCloseIcon", "showCloseIcon", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      transitionOptions: "transitionOptions",
      visible: "visible",
      position: "position",
      fullScreen: "fullScreen",
      header: "header",
      maskStyle: "maskStyle",
      closable: [2, "closable", "closable", booleanAttribute]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange"
    },
    features: [ɵɵProvidersFeature([DrawerStyle, {
      provide: DRAWER_INSTANCE,
      useExisting: _Drawer
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Drawer
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["icon", ""], ["role", "complementary", "pFocusTrap", "", 3, "pBind", "class", "style", "keydown", 4, "ngIf"], ["role", "complementary", "pFocusTrap", "", 3, "keydown", "pBind"], [4, "ngTemplateOutlet"], [3, "pBind", "ngClass"], [3, "pBind", "class", 4, "ngIf"], [3, "pt", "ngClass", "buttonProps", "ariaLabel", "onClick", "keydown.enter", 4, "ngIf"], [4, "ngIf"], [3, "pBind"], [3, "onClick", "keydown.enter", "pt", "ngClass", "buttonProps", "ariaLabel"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function Drawer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Drawer_div_0_Template, 4, 12, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, TimesIcon, SharedModule, Bind, FocusTrapModule, FocusTrap],
    encapsulation: 2,
    data: {
      animation: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Drawer, [{
    type: Component,
    args: [{
      selector: "p-drawer",
      standalone: true,
      imports: [CommonModule, Button, TimesIcon, SharedModule, Bind, FocusTrapModule],
      providers: [DrawerStyle, {
        provide: DRAWER_INSTANCE,
        useExisting: Drawer
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Drawer
      }],
      hostDirectives: [Bind],
      template: `
        <div
            #container
            [pBind]="ptm('root')"
            [class]="cn(cx('root'), styleClass)"
            *ngIf="visible"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [style]="style"
            role="complementary"
            (keydown)="onKeyDown($event)"
            pFocusTrap
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate"></ng-container>
            } @else {
                <div [pBind]="ptm('header')" [ngClass]="cx('header')" [attr.data-pc-section]="'header'">
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div *ngIf="header" [pBind]="ptm('title')" [class]="cx('title')">{{ header }}</div>
                    <p-button
                        *ngIf="showCloseIcon && closable"
                        [pt]="ptm('pcCloseButton')"
                        [ngClass]="cx('pcCloseButton')"
                        (onClick)="close($event)"
                        (keydown.enter)="close($event)"
                        [buttonProps]="closeButtonProps"
                        [ariaLabel]="ariaCloseLabel"
                        [attr.data-pc-group-section]="'iconcontainer'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="times" *ngIf="!closeIconTemplate && !_closeIconTemplate" [attr.data-pc-section]="'closeicon'" />
                            <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>

                <div [pBind]="ptm('content')" [ngClass]="cx('content')" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>

                <ng-container *ngIf="footerTemplate || _footerTemplate">
                    <div [pBind]="ptm('footer')" [ngClass]="cx('footer')" [attr.data-pc-section]="'footer'">
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>
                </ng-container>
            }
        </div>
    `,
      animations: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    appendTo: [{
      type: Input
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeButtonProps: [{
      type: Input
    }],
    dismissible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCloseIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    closeButtonViewChild: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DrawerModule = class _DrawerModule {
  static ɵfac = function DrawerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DrawerModule,
    imports: [Drawer, SharedModule],
    exports: [Drawer, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Drawer, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerModule, [{
    type: NgModule,
    args: [{
      imports: [Drawer, SharedModule],
      exports: [Drawer, SharedModule]
    }]
  }], null, null);
})();
export {
  Drawer,
  DrawerClasses,
  DrawerModule,
  DrawerStyle
};
//# sourceMappingURL=primeng_drawer.js.map
