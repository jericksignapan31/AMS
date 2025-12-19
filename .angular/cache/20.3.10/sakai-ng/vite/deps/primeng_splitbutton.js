import {
  TieredMenu
} from "./chunk-P7YD5FNA.js";
import {
  ButtonDirective
} from "./chunk-SPWXAIB5.js";
import {
  AutoFocus
} from "./chunk-RVGJXB7F.js";
import "./chunk-HQP6WWBM.js";
import "./chunk-UDJNLJ7R.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ZVLLQLHS.js";
import "./chunk-P6SMTJBG.js";
import {
  Ripple
} from "./chunk-2NNT3GX6.js";
import "./chunk-CMVOE67Z.js";
import {
  ChevronDownIcon
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
import "./chunk-GGMOGVES.js";
import "./chunk-CIMRSYG7.js";
import "./chunk-QAUQ7NUX.js";
import "./chunk-RS4JDN4Z.js";
import "./chunk-XI5EKNQ2.js";
import {
  CommonModule,
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
  signal,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  s3 as s
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/splitbutton/index.mjs
var style = "\n    .p-splitbutton {\n        display: inline-flex;\n        position: relative;\n        border-radius: dt('splitbutton.border.radius');\n    }\n\n    .p-splitbutton-button.p-button {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n        border-inline-end: 0 none;\n    }\n\n    .p-splitbutton-button.p-button:focus-visible,\n    .p-splitbutton-dropdown.p-button:focus-visible {\n        z-index: 1;\n    }\n\n    .p-splitbutton-button.p-button:not(:disabled):hover,\n    .p-splitbutton-button.p-button:not(:disabled):active {\n        border-inline-end: 0 none;\n    }\n\n    .p-splitbutton-dropdown.p-button {\n        border-start-start-radius: 0;\n        border-end-start-radius: 0;\n    }\n\n    .p-splitbutton .p-menu {\n        min-width: 100%;\n    }\n\n    .p-splitbutton-fluid {\n        display: flex;\n    }\n\n    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {\n        border-start-end-radius: dt('splitbutton.rounded.border.radius');\n        border-end-end-radius: dt('splitbutton.rounded.border.radius');\n    }\n\n    .p-splitbutton-rounded .p-splitbutton-button.p-button {\n        border-start-start-radius: dt('splitbutton.rounded.border.radius');\n        border-end-start-radius: dt('splitbutton.rounded.border.radius');\n    }\n\n    .p-splitbutton-raised {\n        box-shadow: dt('splitbutton.raised.shadow');\n    }\n";

// node_modules/primeng/fesm2022/primeng-splitbutton.mjs
var _c0 = ["content"];
var _c1 = ["dropdownicon"];
var _c2 = ["defaultbtn"];
var _c3 = ["menu"];
function SplitButton_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SplitButton_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function SplitButton_ng_container_0_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵtemplate(2, SplitButton_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("pcButton"));
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("disabled", ctx_r2.disabled)("pAutoFocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions)("pt", ctx_r2.ptm("pcButton"));
    ɵɵattribute("tabindex", ctx_r2.tabindex)("aria-label", (ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"]) || ctx_r2.label);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate || ctx_r2._contentTemplate);
  }
}
function SplitButton_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10, 2);
    ɵɵlistener("click", function SplitButton_ng_template_1_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("pcButton"));
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("label", ctx_r2.label)("disabled", ctx_r2.buttonDisabled)("pAutoFocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions)("pt", ctx_r2.ptm("pcButton"));
    ɵɵattribute("tabindex", ctx_r2.tabindex)("aria-label", ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"]);
  }
}
function SplitButton_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.dropdownIcon);
  }
}
function SplitButton_ng_container_5__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 12);
  }
}
function SplitButton_ng_container_5_2_ng_template_0_Template(rf, ctx) {
}
function SplitButton_ng_container_5_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SplitButton_ng_container_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SplitButton_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SplitButton_ng_container_5__svg_svg_1_Template, 1, 0, "svg", 11)(2, SplitButton_ng_container_5_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIconTemplate && !ctx_r2._dropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-splitbutton p-component", {
    "p-splitbutton-raised": instance.raised,
    "p-splitbutton-rounded": instance.rounded,
    "p-splitbutton-outlined": instance.outlined,
    "p-splitbutton-text": instance.text,
    [`p-splitbutton-${instance.size === "small" ? "sm" : "lg"}`]: instance.size
  }],
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown p-button-icon-only"
};
var SplitButtonStyle = class _SplitButtonStyle extends BaseStyle {
  name = "splitbutton";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitButtonStyle_BaseFactory;
    return function SplitButtonStyle_Factory(__ngFactoryType__) {
      return (ɵSplitButtonStyle_BaseFactory || (ɵSplitButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_SplitButtonStyle)))(__ngFactoryType__ || _SplitButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SplitButtonStyle,
    factory: _SplitButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SplitButtonClasses;
(function(SplitButtonClasses2) {
  SplitButtonClasses2["root"] = "p-splitbutton";
  SplitButtonClasses2["pcButton"] = "p-splitbutton-button";
  SplitButtonClasses2["pcDropdown"] = "p-splitbutton-dropdown";
})(SplitButtonClasses || (SplitButtonClasses = {}));
var SPLITBUTTON_INSTANCE = new InjectionToken("SPLITBUTTON_INSTANCE");
var SplitButton = class _SplitButton extends BaseComponent {
  $pcSplitButton = inject(SPLITBUTTON_INSTANCE, {
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
   * MenuModel instance to define the overlay items.
   * @group Props
   */
  model;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Text of the button.
   * @group Props
   */
  label;
  /**
   * Tooltip for the main button.
   * @group Props
   */
  tooltip;
  /**
   * Tooltip options for the main button.
   * @group Props
   */
  tooltipOptions;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay menu.
   * @group Props
   */
  menuStyle;
  /**
   * Style class of the overlay menu.
   * @group Props
   */
  menuStyleClass;
  /**
   * Name of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   *  Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Indicates the direction of the element.
   * @group Props
   */
  dir;
  /**
   * Defines a string that labels the expand button for accessibility.
   * @group Props
   */
  expandAriaLabel;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Button Props
   */
  buttonProps;
  /**
   * Menu Button Props
   */
  menuButtonProps;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  set disabled(v) {
    this._disabled = v ?? false;
    this.buttonDisabled = v ?? false;
    this.menuButtonDisabled = v ?? false;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * When present, it specifies that the menu button element should be disabled.
   * @group Props
   */
  menuButtonDisabled = false;
  /**
   * When present, it specifies that the button element should be disabled.
   * @group Props
   */
  buttonDisabled = false;
  /**
   * Callback to invoke when default command button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onMenuHide = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onMenuShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  buttonViewChild;
  menu;
  /**
   * Template of the content.
   * @group Templates
   */
  contentTemplate;
  /**
   * Template of the dropdownicon.
   * @group Templates
   **/
  dropdownIconTemplate;
  templates;
  ariaId;
  isExpanded = signal(false, ...ngDevMode ? [{
    debugName: "isExpanded"
  }] : []);
  _disabled;
  _componentStyle = inject(SplitButtonStyle);
  _contentTemplate;
  _dropdownIconTemplate;
  onInit() {
    this.ariaId = s("pn_id_");
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onDefaultButtonClick(event) {
    this.onClick?.emit(event);
    this.menu?.hide();
  }
  onDropdownButtonClick(event) {
    this.onDropdownClick.emit(event);
    this.menu?.toggle({
      currentTarget: this.el?.nativeElement,
      relativeAlign: this.appendTo == null
    });
  }
  onDropdownButtonKeydown(event) {
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      this.onDropdownButtonClick();
      event.preventDefault();
    }
  }
  onHide() {
    this.isExpanded.set(false);
    this.onMenuHide.emit();
  }
  onShow() {
    this.isExpanded.set(true);
    this.onMenuShow.emit();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitButton_BaseFactory;
    return function SplitButton_Factory(__ngFactoryType__) {
      return (ɵSplitButton_BaseFactory || (ɵSplitButton_BaseFactory = ɵɵgetInheritedFactory(_SplitButton)))(__ngFactoryType__ || _SplitButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitButton,
    selectors: [["p-splitbutton"], ["p-splitButton"], ["p-split-button"]],
    contentQueries: function SplitButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SplitButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function SplitButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      model: "model",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      icon: "icon",
      iconPos: "iconPos",
      label: "label",
      tooltip: "tooltip",
      tooltipOptions: "tooltipOptions",
      styleClass: "styleClass",
      menuStyle: "menuStyle",
      menuStyleClass: "menuStyleClass",
      dropdownIcon: "dropdownIcon",
      appendTo: "appendTo",
      dir: "dir",
      expandAriaLabel: "expandAriaLabel",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      buttonProps: "buttonProps",
      menuButtonProps: "menuButtonProps",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      menuButtonDisabled: [2, "menuButtonDisabled", "menuButtonDisabled", booleanAttribute],
      buttonDisabled: [2, "buttonDisabled", "buttonDisabled", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMenuHide: "onMenuHide",
      onMenuShow: "onMenuShow",
      onDropdownClick: "onDropdownClick"
    },
    features: [ɵɵProvidersFeature([SplitButtonStyle, {
      provide: SPLITBUTTON_INSTANCE,
      useExisting: _SplitButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SplitButton
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 8,
    vars: 26,
    consts: [["defaultButton", ""], ["menu", ""], ["defaultbtn", ""], [4, "ngIf", "ngIfElse"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "keydown", "size", "severity", "text", "outlined", "disabled", "pt"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "onHide", "onShow", "id", "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions", "pt"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "disabled", "pAutoFocus", "pTooltip", "tooltipOptions", "pt"], [4, "ngTemplateOutlet"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "label", "disabled", "pAutoFocus", "pTooltip", "tooltipOptions", "pt"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-down"]],
    template: function SplitButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, SplitButton_ng_container_0_Template, 3, 16, "ng-container", 3)(1, SplitButton_ng_template_1_Template, 2, 16, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(3, "button", 4);
        ɵɵlistener("click", function SplitButton_Template_button_click_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDropdownButtonClick($event));
        })("keydown", function SplitButton_Template_button_keydown_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDropdownButtonKeydown($event));
        });
        ɵɵtemplate(4, SplitButton_span_4_Template, 1, 2, "span", 5)(5, SplitButton_ng_container_5_Template, 3, 2, "ng-container", 6);
        ɵɵelementEnd();
        ɵɵelementStart(6, "p-tieredmenu", 7, 1);
        ɵɵlistener("onHide", function SplitButton_Template_p_tieredmenu_onHide_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onHide());
        })("onShow", function SplitButton_Template_p_tieredmenu_onShow_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onShow());
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const defaultButton_r5 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.contentTemplate || ctx._contentTemplate)("ngIfElse", defaultButton_r5);
        ɵɵadvance(3);
        ɵɵclassMap(ctx.cx("pcDropdown"));
        ɵɵproperty("size", ctx.size)("severity", ctx.severity)("text", ctx.text)("outlined", ctx.outlined)("disabled", ctx.menuButtonDisabled)("pt", ctx.ptm("pcDropdown"));
        ɵɵattribute("aria-label", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaLabel"]) || ctx.expandAriaLabel)("aria-haspopup", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaHasPopup"]) || true)("aria-expanded", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaExpanded"]) || ctx.isExpanded())("aria-controls", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaControls"]) || ctx.ariaId);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dropdownIcon);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.dropdownIcon);
        ɵɵadvance();
        ɵɵstyleMap(ctx.menuStyle);
        ɵɵproperty("id", ctx.ariaId)("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions)("pt", ctx.ptm("pcMenu"));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ButtonDirective, TieredMenu, AutoFocus, ChevronDownIcon, Ripple, TooltipModule, Tooltip, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButton, [{
    type: Component,
    args: [{
      selector: "p-splitbutton, p-splitButton, p-split-button",
      standalone: true,
      imports: [CommonModule, ButtonDirective, TieredMenu, AutoFocus, ChevronDownIcon, Ripple, TooltipModule, SharedModule],
      template: `
        <ng-container *ngIf="contentTemplate || _contentTemplate; else defaultButton">
            <button
                [class]="cx('pcButton')"
                type="button"
                pButton
                pRipple
                [severity]="severity"
                [text]="text"
                [outlined]="outlined"
                [size]="size"
                [icon]="icon"
                [iconPos]="iconPos"
                (click)="onDefaultButtonClick($event)"
                [disabled]="disabled"
                [attr.tabindex]="tabindex"
                [attr.aria-label]="buttonProps?.['ariaLabel'] || label"
                [pAutoFocus]="autofocus"
                [pTooltip]="tooltip"
                [tooltipOptions]="tooltipOptions"
                [pt]="ptm('pcButton')"
            >
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </button>
        </ng-container>
        <ng-template #defaultButton>
            <button
                #defaultbtn
                [class]="cx('pcButton')"
                type="button"
                pButton
                pRipple
                [severity]="severity"
                [text]="text"
                [outlined]="outlined"
                [size]="size"
                [icon]="icon"
                [iconPos]="iconPos"
                [label]="label"
                (click)="onDefaultButtonClick($event)"
                [disabled]="buttonDisabled"
                [attr.tabindex]="tabindex"
                [attr.aria-label]="buttonProps?.['ariaLabel']"
                [pAutoFocus]="autofocus"
                [pTooltip]="tooltip"
                [tooltipOptions]="tooltipOptions"
                [pt]="ptm('pcButton')"
            ></button>
        </ng-template>
        <button
            type="button"
            pButton
            pRipple
            [size]="size"
            [severity]="severity"
            [text]="text"
            [outlined]="outlined"
            [class]="cx('pcDropdown')"
            (click)="onDropdownButtonClick($event)"
            (keydown)="onDropdownButtonKeydown($event)"
            [disabled]="menuButtonDisabled"
            [attr.aria-label]="menuButtonProps?.['ariaLabel'] || expandAriaLabel"
            [attr.aria-haspopup]="menuButtonProps?.['ariaHasPopup'] || true"
            [attr.aria-expanded]="menuButtonProps?.['ariaExpanded'] || isExpanded()"
            [attr.aria-controls]="menuButtonProps?.['ariaControls'] || ariaId"
            [pt]="ptm('pcDropdown')"
        >
            <span *ngIf="dropdownIcon" [class]="dropdownIcon"></span>
            <ng-container *ngIf="!dropdownIcon">
                <svg data-p-icon="chevron-down" *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate" />
                <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
            </ng-container>
        </button>
        <p-tieredmenu
            [id]="ariaId"
            #menu
            [popup]="true"
            [model]="model"
            [style]="menuStyle"
            [styleClass]="menuStyleClass"
            [appendTo]="appendTo"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onHide)="onHide()"
            (onShow)="onShow()"
            [pt]="ptm('pcMenu')"
        ></p-tieredmenu>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [SplitButtonStyle, {
        provide: SPLITBUTTON_INSTANCE,
        useExisting: SplitButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SplitButton
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipOptions: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    menuStyle: [{
      type: Input
    }],
    menuStyleClass: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    expandAriaLabel: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    menuButtonProps: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    menuButtonDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMenuHide: [{
      type: Output
    }],
    onMenuShow: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    buttonViewChild: [{
      type: ViewChild,
      args: ["defaultbtn"]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SplitButtonModule = class _SplitButtonModule {
  static ɵfac = function SplitButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SplitButtonModule,
    imports: [SplitButton, SharedModule],
    exports: [SplitButton, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SplitButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SplitButton, SharedModule],
      exports: [SplitButton, SharedModule]
    }]
  }], null, null);
})();
export {
  SplitButton,
  SplitButtonClasses,
  SplitButtonModule,
  SplitButtonStyle
};
//# sourceMappingURL=primeng_splitbutton.js.map
