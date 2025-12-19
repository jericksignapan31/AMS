import {
  BaseEditableHolder
} from "./chunk-6OGXVJQK.js";
import "./chunk-5NGDX53P.js";
import {
  AutoFocus
} from "./chunk-RVGJXB7F.js";
import "./chunk-P6SMTJBG.js";
import {
  StarFillIcon,
  StarIcon
} from "./chunk-PZZHTSKZ.js";
import "./chunk-6VI54KAM.js";
import {
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
  Bind,
  BindModule
} from "./chunk-SSPEJKN4.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-C225D66Z.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
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
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  bt,
  s3 as s,
  vt
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/rating/index.mjs
var style = "\n    .p-rating {\n        position: relative;\n        display: inline-flex;\n        align-items: center;\n        gap: dt('rating.gap');\n    }\n\n    .p-rating-option {\n        display: inline-flex;\n        align-items: center;\n        cursor: pointer;\n        outline-color: transparent;\n        border-radius: 50%;\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n    }\n\n    .p-rating-option.p-focus-visible {\n        box-shadow: dt('rating.focus.ring.shadow');\n        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');\n        outline-offset: dt('rating.focus.ring.offset');\n    }\n\n    .p-rating-icon {\n        color: dt('rating.icon.color');\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n        font-size: dt('rating.icon.size');\n        width: dt('rating.icon.size');\n        height: dt('rating.icon.size');\n    }\n\n    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n        color: dt('rating.icon.hover.color');\n    }\n\n    .p-rating-option-active .p-rating-icon {\n        color: dt('rating.icon.active.color');\n    }\n\n    .p-rating-icon.p-invalid {\n        /* @todo */\n        stroke: dt('rating.invalid.icon.color');\n    }\n\n    .p-rating.p-readonly .p-rating-option {\n        cursor: not-allowed;\n    }\n";

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c0 = ["onicon"];
var _c1 = ["officon"];
var _c2 = (a0, a1) => ({
  star: a0,
  value: a1
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  class: a1
});
function Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.onIconTemplate || ctx_r2._onIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, star_r2 + 1, ctx_r2.cx("onIcon")));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r2.cx("onIcon"));
    ɵɵproperty("ngStyle", ctx_r2.iconOnStyle)("ngClass", ctx_r2.iconOnClass)("pBind", ctx_r2.ptm("onIcon"));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r2.cx("onIcon"));
    ɵɵproperty("ngStyle", ctx_r2.iconOnStyle)("pBind", ctx_r2.ptm("onIcon"));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r2.iconOnClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.iconOnClass);
  }
}
function Rating_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Rating_ng_template_0_Conditional_3_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_3_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r2.onIconTemplate || ctx_r2._onIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.offIconTemplate || ctx_r2._offIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, star_r2 + 1, ctx_r2.cx("offIcon")));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r2.cx("offIcon"));
    ɵɵproperty("ngStyle", ctx_r2.iconOffStyle)("ngClass", ctx_r2.iconOffClass)("pBind", ctx_r2.ptm("offIcon"));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r2.cx("offIcon"));
    ɵɵproperty("ngStyle", ctx_r2.iconOffStyle)("pBind", ctx_r2.ptm("offIcon"));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r2.iconOffClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.iconOffClass);
  }
}
function Rating_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Rating_ng_template_0_Conditional_4_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r2.offIconTemplate || ctx_r2._offIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function Rating_ng_template_0_Template_div_click_0_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onOptionClick($event, star_r2 + 1));
    });
    ɵɵelementStart(1, "span", 2)(2, "input", 3);
    ɵɵlistener("focus", function Rating_ng_template_0_Template_input_focus_2_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event, star_r2 + 1));
    })("blur", function Rating_ng_template_0_Template_input_blur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("change", function Rating_ng_template_0_Template_input_change_2_listener($event) {
      const star_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onChange($event, star_r2 + 1));
    });
    ɵɵelementEnd()();
    ɵɵconditionalCreate(3, Rating_ng_template_0_Conditional_3_Template, 2, 1)(4, Rating_ng_template_0_Conditional_4_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("option", ɵɵpureFunction2(16, _c2, star_r2, ctx_r2.value)));
    ɵɵproperty("pBind", ctx_r2.ptm("option"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r2.ptm("hiddenOptionInputContainer"));
    ɵɵattribute("data-p-hidden-accessible", true);
    ɵɵadvance();
    ɵɵproperty("value", star_r2 + 1)("checked", ctx_r2.value === star_r2 + 1)("pAutoFocus", ctx_r2.autofocus)("pBind", ctx_r2.ptm("hiddenOptionInput"));
    ɵɵattribute("name", ctx_r2.name() || ctx_r2.nameattr + "_name")("value", ctx_r2.modelValue())("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-label", ctx_r2.starAriaLabel(star_r2 + 1));
    ɵɵadvance();
    ɵɵconditional(star_r2 + 1 <= ctx_r2.value ? 3 : 4);
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
        stroke: dt('rating.invalid.icon.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-rating", {
    "p-readonly": instance.readonly,
    "p-disabled": instance.$disabled()
  }],
  option: ({
    instance,
    star,
    value
  }) => ["p-rating-option", {
    "p-rating-option-active": star + 1 <= value,
    "p-focus-visible": star + 1 === instance.focusedOptionIndex() && instance.isFocusVisibleItem
  }],
  onIcon: ({
    instance
  }) => ["p-rating-icon p-rating-on-icon", {
    "p-invalid": instance.invalid()
  }],
  offIcon: ({
    instance
  }) => ["p-rating-icon p-rating-off-icon", {
    "p-invalid": instance.invalid()
  }]
};
var RatingStyle = class _RatingStyle extends BaseStyle {
  name = "rating";
  style = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRatingStyle_BaseFactory;
    return function RatingStyle_Factory(__ngFactoryType__) {
      return (ɵRatingStyle_BaseFactory || (ɵRatingStyle_BaseFactory = ɵɵgetInheritedFactory(_RatingStyle)))(__ngFactoryType__ || _RatingStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RatingStyle,
    factory: _RatingStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStyle, [{
    type: Injectable
  }], null, null);
})();
var RatingClasses;
(function(RatingClasses2) {
  RatingClasses2["root"] = "p-rating";
  RatingClasses2["option"] = "p-rating-option";
  RatingClasses2["onIcon"] = "p-rating-on-icon";
  RatingClasses2["offIcon"] = "p-rating-off-icon";
})(RatingClasses || (RatingClasses = {}));
var RATING_INSTANCE = new InjectionToken("RATING_INSTANCE");
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating extends BaseEditableHolder {
  $pcRating = inject(RATING_INSTANCE, {
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
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  templates;
  value;
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  nameattr;
  _componentStyle = inject(RatingStyle);
  _onIconTemplate;
  _offIconTemplate;
  onInit() {
    this.nameattr = this.nameattr || s("pn_id_");
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = vt(event.currentTarget, "");
      firstFocusableEl && bt(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    if (!this.readonly && !this.$disabled()) {
      if (this.focusedOptionIndex() === value || value === this.value) {
        this.focusedOptionIndex.set(-1);
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
      }
    }
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.focusedOptionIndex.set(value);
      this.isFocusVisibleItem = event.sourceCapabilities?.firesTouchEvents === false;
      this.onFocus.emit(event);
    }
  }
  updateModel(event, value) {
    this.writeValue(value);
    this.onModelChange(this.value);
    this.onModelTouched();
    this.onRate.emit({
      originalEvent: event,
      value
    });
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria?.star : this.config.translation.aria?.stars?.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate || this._offIconTemplate : this.onIconTemplate || this.offIconTemplate;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(value);
  }
  get isCustomIcon() {
    return !!(this.onIconTemplate || this._onIconTemplate || this.offIconTemplate || this._offIconTemplate);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRating_BaseFactory;
    return function Rating_Factory(__ngFactoryType__) {
      return (ɵRating_BaseFactory || (ɵRating_BaseFactory = ɵɵgetInheritedFactory(_Rating)))(__ngFactoryType__ || _Rating);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.onIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.offIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Rating_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("root"));
      }
    },
    inputs: {
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RatingStyle, {
      provide: RATING_INSTANCE,
      useExisting: _Rating
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Rating
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], [3, "click", "pBind"], [1, "p-hidden-accessible", 3, "pBind"], ["type", "radio", 3, "focus", "blur", "change", "value", "checked", "pAutoFocus", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngStyle", "ngClass", "pBind", 4, "ngIf"], ["data-p-icon", "star-fill", 3, "ngStyle", "class", "pBind", 4, "ngIf"], [3, "ngStyle", "ngClass", "pBind"], ["data-p-icon", "star-fill", 3, "ngStyle", "pBind"], ["data-p-icon", "star", 3, "ngStyle", "class", "pBind", 4, "ngIf"], ["data-p-icon", "star", 3, "ngStyle", "pBind"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Rating_ng_template_0_Template, 5, 19, "ng-template", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.starsArray);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      imports: [CommonModule, AutoFocus, StarFillIcon, StarIcon, SharedModule, BindModule],
      standalone: true,
      template: `
        <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
            <div [class]="cx('option', { star, value })" (click)="onOptionClick($event, star + 1)" [pBind]="ptm('option')">
                <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true" [pBind]="ptm('hiddenOptionInputContainer')">
                    <input
                        type="radio"
                        [value]="star + 1"
                        [attr.name]="name() || nameattr + '_name'"
                        [attr.value]="modelValue()"
                        [attr.required]="required() ? '' : undefined"
                        [attr.readonly]="readonly ? '' : undefined"
                        [attr.disabled]="$disabled() ? '' : undefined"
                        [checked]="value === star + 1"
                        [attr.aria-label]="starAriaLabel(star + 1)"
                        (focus)="onInputFocus($event, star + 1)"
                        (blur)="onInputBlur($event)"
                        (change)="onChange($event, star + 1)"
                        [pAutoFocus]="autofocus"
                        [pBind]="ptm('hiddenOptionInput')"
                    />
                </span>
                @if (star + 1 <= value) {
                    @if (onIconTemplate || _onIconTemplate) {
                        <ng-container *ngTemplateOutlet="onIconTemplate || _onIconTemplate; context: { $implicit: star + 1, class: cx('onIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('onIcon')" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [pBind]="ptm('onIcon')"></span>
                        <svg data-p-icon="star-fill" *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [class]="cx('onIcon')" [pBind]="ptm('onIcon')" />
                    }
                } @else {
                    @if (offIconTemplate || _offIconTemplate) {
                        <ng-container *ngTemplateOutlet="offIconTemplate || _offIconTemplate; context: { $implicit: star + 1, class: cx('offIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('offIcon')" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [pBind]="ptm('offIcon')"></span>
                        <svg data-p-icon="star" *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [class]="cx('offIcon')" [pBind]="ptm('offIcon')" />
                    }
                }
            </div>
        </ng-template>
    `,
      providers: [RATING_VALUE_ACCESSOR, RatingStyle, {
        provide: RATING_INSTANCE,
        useExisting: Rating
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Rating
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static ɵfac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RatingModule,
    imports: [Rating, SharedModule],
    exports: [Rating, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Rating, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [Rating, SharedModule],
      exports: [Rating, SharedModule]
    }]
  }], null, null);
})();
export {
  RATING_VALUE_ACCESSOR,
  Rating,
  RatingClasses,
  RatingModule,
  RatingStyle
};
//# sourceMappingURL=primeng_rating.js.map
