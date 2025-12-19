import {
  Button
} from "./chunk-SPWXAIB5.js";
import "./chunk-RVGJXB7F.js";
import "./chunk-HQP6WWBM.js";
import "./chunk-UDJNLJ7R.js";
import "./chunk-P6SMTJBG.js";
import "./chunk-2NNT3GX6.js";
import {
  zindexutils
} from "./chunk-CMVOE67Z.js";
import {
  ChevronUpIcon
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
  state,
  style,
  transition,
  trigger
} from "./chunk-GGMOGVES.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-R2OVIKVM.js";
import "./chunk-APPCZKFW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  $
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/scrolltop/index.mjs
var style2 = "\n    .p-scrolltop.p-button {\n        position: fixed !important;\n        inset-block-end: 20px;\n        inset-inline-end: 20px;\n    }\n\n    .p-scrolltop-sticky.p-button {\n        position: sticky !important;\n        display: flex;\n        margin-inline-start: auto;\n    }\n\n    .p-scrolltop-enter-from {\n        opacity: 0;\n    }\n\n    .p-scrolltop-enter-active {\n        transition: opacity 0.15s;\n    }\n\n    .p-scrolltop.p-scrolltop-leave-to {\n        opacity: 0;\n    }\n\n    .p-scrolltop-leave-active {\n        transition: opacity 0.15s;\n    }\n";

// node_modules/primeng/fesm2022/primeng-scrolltop.mjs
var _c0 = ["icon"];
var _c1 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c2 = (a0) => ({
  value: "open",
  params: a0
});
var _c3 = (a0) => ({
  styleClass: a0
});
function ScrollTop_p_button_0_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("icon"), ctx_r1._icon));
  }
}
function ScrollTop_p_button_0_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("icon"));
  }
}
function ScrollTop_p_button_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ScrollTop_p_button_0_ng_template_1_ng_container_0_span_1_Template, 1, 2, "span", 5)(2, ScrollTop_p_button_0_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 2, "svg", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1._icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1._icon);
  }
}
function ScrollTop_p_button_0_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ScrollTop_p_button_0_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScrollTop_p_button_0_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const icon_r3 = ɵɵreference(2);
    ɵɵproperty("ngIf", !icon_r3);
  }
}
function ScrollTop_p_button_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ScrollTop_p_button_0_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3)(1, ScrollTop_p_button_0_ng_template_1_1_Template, 1, 1, null, 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r1.iconTemplate && !ctx_r1._iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c3, ctx_r1.cx("icon")));
  }
}
function ScrollTop_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 2);
    ɵɵlistener("@animation.start", function ScrollTop_p_button_0_Template_p_button_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onEnter($event));
    })("@animation.done", function ScrollTop_p_button_0_Template_p_button_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeave($event));
    })("click", function ScrollTop_p_button_0_Template_p_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵtemplate(1, ScrollTop_p_button_0_ng_template_1_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@animation", ɵɵpureFunction1(9, _c2, ɵɵpureFunction2(6, _c1, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("pt", ctx_r1.ptm("pcButton"))("styleClass", ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass))("ngStyle", ctx_r1.style)("buttonProps", ctx_r1.buttonProps);
    ɵɵattribute("aria-label", ctx_r1.buttonAriaLabel);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-scrolltop", {
    "p-scrolltop-sticky": instance.target !== "window"
  }],
  icon: "p-scrolltop-icon"
};
var ScrollTopStyle = class _ScrollTopStyle extends BaseStyle {
  name = "scrolltop";
  style = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollTopStyle_BaseFactory;
    return function ScrollTopStyle_Factory(__ngFactoryType__) {
      return (ɵScrollTopStyle_BaseFactory || (ɵScrollTopStyle_BaseFactory = ɵɵgetInheritedFactory(_ScrollTopStyle)))(__ngFactoryType__ || _ScrollTopStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollTopStyle,
    factory: _ScrollTopStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTopStyle, [{
    type: Injectable
  }], null, null);
})();
var ScrollTopClasses;
(function(ScrollTopClasses2) {
  ScrollTopClasses2["root"] = "p-scrolltop";
  ScrollTopClasses2["icon"] = "p-scrolltop-icon";
})(ScrollTopClasses || (ScrollTopClasses = {}));
var SCROLLTOP_INSTANCE = new InjectionToken("SCROLLTOP_INSTANCE");
var ScrollTop = class _ScrollTop extends BaseComponent {
  $pcScrollTop = inject(SCROLLTOP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Target of the ScrollTop.
   * @group Props
   */
  target = "window";
  /**
   * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
   * @group Props
   */
  threshold = 400;
  /**
   * Name of the icon or JSX.Element for icon.
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  /**
   * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
   * @group Props
   */
  behavior = "smooth";
  /**
   * A string value used to determine the display transition options.
   * @group Props
   */
  showTransitionOptions = ".15s";
  /**
   * A string value used to determine the hiding transition options.
   * @group Props
   */
  hideTransitionOptions = ".15s";
  /**
   * Establishes a string value that labels the scroll-top button.
   * @group Props
   */
  buttonAriaLabel;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  buttonProps = {
    rounded: true,
    severity: "success"
  };
  /**
   * Template of the icon.
   * @group Templates
   */
  iconTemplate;
  templates;
  _iconTemplate;
  _icon;
  set icon(value) {
    this._icon = value;
  }
  documentScrollListener;
  parentScrollListener;
  visible = false;
  overlay;
  _componentStyle = inject(ScrollTopStyle);
  onInit() {
    if (this.target === "window") this.bindDocumentScrollListener();
    else if (this.target === "parent") this.bindParentScrollListener();
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  onClick() {
    let scrollElement = this.target === "window" ? this.document.defaultView : this.el.nativeElement.parentElement;
    scrollElement.scroll({
      top: 0,
      behavior: this.behavior
    });
  }
  onEnter(event) {
    switch (event.toState) {
      case "open":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        break;
      case "void":
        this.overlay = null;
        break;
    }
  }
  onLeave(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  checkVisibility(scrollY) {
    if (scrollY > this.threshold) this.visible = true;
    else this.visible = false;
    this.cd.markForCheck();
  }
  bindParentScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.parentScrollListener = this.renderer.listen(this.el.nativeElement.parentElement, "scroll", () => {
        this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
      });
    }
  }
  bindDocumentScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentScrollListener = this.renderer.listen(this.document.defaultView, "scroll", () => {
        this.checkVisibility($());
      });
    }
  }
  unbindParentScrollListener() {
    if (this.parentScrollListener) {
      this.parentScrollListener();
      this.parentScrollListener = null;
    }
  }
  unbindDocumentScrollListener() {
    if (this.documentScrollListener) {
      this.documentScrollListener();
      this.documentScrollListener = null;
    }
  }
  onDestroy() {
    if (this.target === "window") this.unbindDocumentScrollListener();
    else if (this.target === "parent") this.unbindParentScrollListener();
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollTop_BaseFactory;
    return function ScrollTop_Factory(__ngFactoryType__) {
      return (ɵScrollTop_BaseFactory || (ɵScrollTop_BaseFactory = ɵɵgetInheritedFactory(_ScrollTop)))(__ngFactoryType__ || _ScrollTop);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollTop,
    selectors: [["p-scrollTop"], ["p-scrolltop"], ["p-scroll-top"]],
    contentQueries: function ScrollTop_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      styleClass: "styleClass",
      style: "style",
      target: "target",
      threshold: [2, "threshold", "threshold", numberAttribute],
      icon: "icon",
      behavior: "behavior",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      buttonAriaLabel: "buttonAriaLabel",
      buttonProps: "buttonProps"
    },
    features: [ɵɵProvidersFeature([ScrollTopStyle, {
      provide: SCROLLTOP_INSTANCE,
      useExisting: _ScrollTop
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ScrollTop
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["icon", ""], ["type", "button", 3, "pt", "styleClass", "ngStyle", "buttonProps", "click", 4, "ngIf"], ["type", "button", 3, "click", "pt", "styleClass", "ngStyle", "buttonProps"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-up"], [3, "ngIf"]],
    template: function ScrollTop_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ScrollTop_p_button_0_Template, 3, 11, "p-button", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, ChevronUpIcon, Button, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        opacity: 0
      })), state("open", style({
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTop, [{
    type: Component,
    args: [{
      selector: "p-scrollTop, p-scrolltop, p-scroll-top",
      standalone: true,
      imports: [CommonModule, ChevronUpIcon, Button, SharedModule],
      template: `
        <p-button
            *ngIf="visible"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            (click)="onClick()"
            [pt]="ptm('pcButton')"
            [styleClass]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            type="button"
            [buttonProps]="buttonProps"
        >
            <ng-template #icon>
                <ng-container *ngIf="!iconTemplate && !_iconTemplate">
                    <span *ngIf="_icon" [class]="cn(cx('icon'), _icon)"></span>
                    <svg data-p-icon="chevron-up" *ngIf="!_icon" [class]="cx('icon')" />
                </ng-container>
                <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { styleClass: cx('icon') }"></ng-template>
            </ng-template>
        </p-button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      animations: [trigger("animation", [state("void", style({
        opacity: 0
      })), state("open", style({
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      providers: [ScrollTopStyle, {
        provide: SCROLLTOP_INSTANCE,
        useExisting: ScrollTop
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ScrollTop
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    threshold: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    behavior: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    buttonAriaLabel: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollTopModule = class _ScrollTopModule {
  static ɵfac = function ScrollTopModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollTopModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollTopModule,
    imports: [ScrollTop, SharedModule],
    exports: [ScrollTop, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ScrollTop, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTopModule, [{
    type: NgModule,
    args: [{
      imports: [ScrollTop, SharedModule],
      exports: [ScrollTop, SharedModule]
    }]
  }], null, null);
})();
export {
  ScrollTop,
  ScrollTopClasses,
  ScrollTopModule,
  ScrollTopStyle
};
//# sourceMappingURL=primeng_scrolltop.js.map
