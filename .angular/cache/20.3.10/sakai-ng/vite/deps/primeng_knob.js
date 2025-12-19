import {
  BaseEditableHolder
} from "./chunk-6OGXVJQK.js";
import "./chunk-5NGDX53P.js";
import {
  PARENT_INSTANCE
} from "./chunk-HN3FT5WE.js";
import {
  BaseStyle
} from "./chunk-WXGRKYUQ.js";
import {
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
  NgIf
} from "./chunk-R2OVIKVM.js";
import "./chunk-APPCZKFW.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import {
  rr
} from "./chunk-OTTARZB5.js";
import "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/knob/index.mjs
var style = "\n    .p-knob-range {\n        fill: none;\n        transition: stroke 0.1s ease-in;\n    }\n\n    .p-knob-value {\n        animation-name: p-knob-dash-frame;\n        animation-fill-mode: forwards;\n        fill: none;\n    }\n\n    .p-knob-text {\n        font-size: 1.3rem;\n        text-align: center;\n    }\n\n    .p-knob svg {\n        border-radius: 50%;\n        outline-color: transparent;\n        transition:\n            background dt('knob.transition.duration'),\n            color dt('knob.transition.duration'),\n            outline-color dt('knob.transition.duration'),\n            box-shadow dt('knob.transition.duration');\n    }\n\n    .p-knob svg:focus-visible {\n        box-shadow: dt('knob.focus.ring.shadow');\n        outline: dt('knob.focus.ring.width') dt('knob.focus.ring.style') dt('knob.focus.ring.color');\n        outline-offset: dt('knob.focus.ring.offset');\n    }\n\n    @keyframes p-knob-dash-frame {\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-knob.mjs
function Knob__svg_text_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("text"));
    ɵɵproperty("pBind", ctx_r0.ptm("text"));
    ɵɵattribute("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.valueToDisplay(), " ");
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-knob p-component", {
    "p-disabled": instance.$disabled()
  }],
  range: "p-knob-range",
  value: "p-knob-value",
  text: "p-knob-text"
};
var KnobStyle = class _KnobStyle extends BaseStyle {
  name = "knob";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵKnobStyle_BaseFactory;
    return function KnobStyle_Factory(__ngFactoryType__) {
      return (ɵKnobStyle_BaseFactory || (ɵKnobStyle_BaseFactory = ɵɵgetInheritedFactory(_KnobStyle)))(__ngFactoryType__ || _KnobStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _KnobStyle,
    factory: _KnobStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KnobStyle, [{
    type: Injectable
  }], null, null);
})();
var KnobClasses;
(function(KnobClasses2) {
  KnobClasses2["root"] = "p-knob";
  KnobClasses2["range"] = "p-knob-range";
  KnobClasses2["value"] = "p-knob-value";
  KnobClasses2["text"] = "p-knob-text";
})(KnobClasses || (KnobClasses = {}));
var KNOB_INSTANCE = new InjectionToken("KNOB_INSTANCE");
var KNOB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Knob),
  multi: true
};
var Knob = class _Knob extends BaseEditableHolder {
  $pcKnob = inject(KNOB_INSTANCE, {
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
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Background of the value.
   * @group Props
   */
  valueColor = rr("knob.value.background").variable;
  /**
   * Background color of the range.
   * @group Props
   */
  rangeColor = rr("knob.range.background").variable;
  /**
   * Color of the value text.
   * @group Props
   */
  textColor = rr("knob.text.color").variable;
  /**
   * Template string of the value.
   * @group Props
   */
  valueTemplate = "{value}";
  /**
   * Size of the component in pixels.
   * @group Props
   */
  size = 100;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Width of the knob stroke.
   * @group Props
   */
  strokeWidth = 14;
  /**
   * Whether the show the value inside the knob.
   * @group Props
   */
  showValue = true;
  /**
   * When present, it specifies that the component value cannot be edited.
   * @group Props
   */
  readonly = false;
  /**
   * Callback to invoke on value change.
   * @param {number} value - New value.
   * @group Emits
   */
  onChange = new EventEmitter();
  radius = 40;
  midX = 50;
  midY = 50;
  minRadians = 4 * Math.PI / 3;
  maxRadians = -Math.PI / 3;
  value = 0;
  windowMouseMoveListener;
  windowMouseUpListener;
  windowTouchMoveListener;
  windowTouchEndListener;
  _componentStyle = inject(KnobStyle);
  mapRange(x, inMin, inMax, outMin, outMax) {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.updateValue(event.offsetX, event.offsetY);
    }
  }
  updateValue(offsetX, offsetY) {
    let dx = offsetX - this.size / 2;
    let dy = this.size / 2 - offsetY;
    let angle = Math.atan2(dy, dx);
    let start = -Math.PI / 2 - Math.PI / 6;
    this.updateModel(angle, start);
  }
  updateModel(angle, start) {
    let mappedValue;
    if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
    else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
    else return;
    let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit(this.value);
  }
  onMouseDown(event) {
    if (!this.$disabled() && !this.readonly) {
      const window = this.document.defaultView || "window";
      this.windowMouseMoveListener = this.renderer.listen(window, "mousemove", this.onMouseMove.bind(this));
      this.windowMouseUpListener = this.renderer.listen(window, "mouseup", this.onMouseUp.bind(this));
      event.preventDefault();
    }
  }
  onMouseUp(event) {
    if (!this.$disabled() && !this.readonly) {
      if (this.windowMouseMoveListener) {
        this.windowMouseMoveListener();
        this.windowMouseUpListener = null;
      }
      if (this.windowMouseUpListener) {
        this.windowMouseUpListener();
        this.windowMouseMoveListener = null;
      }
      event.preventDefault();
    }
  }
  onTouchStart(event) {
    if (!this.$disabled() && !this.readonly) {
      const window = this.document.defaultView || "window";
      this.windowTouchMoveListener = this.renderer.listen(window, "touchmove", this.onTouchMove.bind(this));
      this.windowTouchEndListener = this.renderer.listen(window, "touchend", this.onTouchEnd.bind(this));
      event.preventDefault();
    }
  }
  onTouchEnd(event) {
    if (!this.$disabled() && !this.readonly) {
      if (this.windowTouchMoveListener) {
        this.windowTouchMoveListener();
      }
      if (this.windowTouchEndListener) {
        this.windowTouchEndListener();
      }
      this.windowTouchMoveListener = null;
      this.windowTouchEndListener = null;
      event.preventDefault();
    }
  }
  onMouseMove(event) {
    if (!this.$disabled() && !this.readonly) {
      this.updateValue(event.offsetX, event.offsetY);
      event.preventDefault();
    }
  }
  onTouchMove(event) {
    if (!this.$disabled() && !this.readonly && event instanceof TouchEvent && event.touches.length === 1) {
      const rect = this.el.nativeElement.children[0].getBoundingClientRect();
      const touch = event.targetTouches.item(0);
      if (touch) {
        const offsetX = touch.clientX - rect.left;
        const offsetY = touch.clientY - rect.top;
        this.updateValue(offsetX, offsetY);
      }
    }
  }
  updateModelValue(newValue) {
    if (newValue > this.max) this.value = this.max;
    else if (newValue < this.min) this.value = this.min;
    else this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit(this.value);
  }
  onKeyDown(event) {
    if (!this.$disabled() && !this.readonly) {
      switch (event.code) {
        case "ArrowRight":
        case "ArrowUp": {
          event.preventDefault();
          this.updateModelValue(this._value + 1);
          break;
        }
        case "ArrowLeft":
        case "ArrowDown": {
          event.preventDefault();
          this.updateModelValue(this._value - 1);
          break;
        }
        case "Home": {
          event.preventDefault();
          this.updateModelValue(this.min);
          break;
        }
        case "End": {
          event.preventDefault();
          this.updateModelValue(this.max);
          break;
        }
        case "PageUp": {
          event.preventDefault();
          this.updateModelValue(this._value + 10);
          break;
        }
        case "PageDown": {
          event.preventDefault();
          this.updateModelValue(this._value - 10);
          break;
        }
      }
    }
  }
  rangePath() {
    return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
  }
  valuePath() {
    return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
  }
  zeroRadians() {
    if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
    else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
  }
  valueRadians() {
    return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
  }
  minX() {
    return this.midX + Math.cos(this.minRadians) * this.radius;
  }
  minY() {
    return this.midY - Math.sin(this.minRadians) * this.radius;
  }
  maxX() {
    return this.midX + Math.cos(this.maxRadians) * this.radius;
  }
  maxY() {
    return this.midY - Math.sin(this.maxRadians) * this.radius;
  }
  zeroX() {
    return this.midX + Math.cos(this.zeroRadians()) * this.radius;
  }
  zeroY() {
    return this.midY - Math.sin(this.zeroRadians()) * this.radius;
  }
  valueX() {
    return this.midX + Math.cos(this.valueRadians()) * this.radius;
  }
  valueY() {
    return this.midY - Math.sin(this.valueRadians()) * this.radius;
  }
  largeArc() {
    return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
  }
  sweep() {
    return this.valueRadians() > this.zeroRadians() ? 0 : 1;
  }
  valueToDisplay() {
    return this.valueTemplate.replace("{value}", this._value.toString());
  }
  get _value() {
    return this.value != null ? this.value : this.min;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵKnob_BaseFactory;
    return function Knob_Factory(__ngFactoryType__) {
      return (ɵKnob_BaseFactory || (ɵKnob_BaseFactory = ɵɵgetInheritedFactory(_Knob)))(__ngFactoryType__ || _Knob);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Knob,
    selectors: [["p-knob"]],
    hostVars: 2,
    hostBindings: function Knob_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      valueColor: "valueColor",
      rangeColor: "rangeColor",
      textColor: "textColor",
      valueTemplate: "valueTemplate",
      size: [2, "size", "size", numberAttribute],
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([KNOB_VALUE_ACCESSOR, KnobStyle, {
      provide: KNOB_INSTANCE,
      useExisting: _Knob
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Knob
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 25,
    consts: [["viewBox", "0 0 100 100", "role", "slider", 3, "click", "keydown", "mousedown", "mouseup", "touchstart", "touchend", "pBind"], [3, "pBind"], ["text-anchor", "middle", 3, "class", "pBind", 4, "ngIf"], ["text-anchor", "middle", 3, "pBind"]],
    template: function Knob_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵlistener("click", function Knob_Template_svg_click_0_listener($event) {
          return ctx.onClick($event);
        })("keydown", function Knob_Template_svg_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("mousedown", function Knob_Template_svg_mousedown_0_listener($event) {
          return ctx.onMouseDown($event);
        })("mouseup", function Knob_Template_svg_mouseup_0_listener($event) {
          return ctx.onMouseUp($event);
        })("touchstart", function Knob_Template_svg_touchstart_0_listener($event) {
          return ctx.onTouchStart($event);
        })("touchend", function Knob_Template_svg_touchend_0_listener($event) {
          return ctx.onTouchEnd($event);
        });
        ɵɵelement(1, "path", 1)(2, "path", 1);
        ɵɵtemplate(3, Knob__svg_text_3_Template, 2, 8, "text", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵstyleProp("width", ctx.size + "px")("height", ctx.size + "px");
        ɵɵproperty("pBind", ctx.ptm("svg"));
        ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("required", ctx.required() ? "" : void 0)("aria-valuenow", ctx._value)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.readonly || ctx.$disabled() ? -1 : ctx.tabindex);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("range"));
        ɵɵproperty("pBind", ctx.ptm("range"));
        ɵɵattribute("d", ctx.rangePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.rangeColor);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("value"));
        ɵɵproperty("pBind", ctx.ptm("value"));
        ɵɵattribute("d", ctx.valuePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.valueColor);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showValue);
      }
    },
    dependencies: [CommonModule, NgIf, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Knob, [{
    type: Component,
    args: [{
      selector: "p-knob",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <svg
            viewBox="0 0 100 100"
            role="slider"
            [style.width]="size + 'px'"
            [style.height]="size + 'px'"
            (click)="onClick($event)"
            (keydown)="onKeyDown($event)"
            (mousedown)="onMouseDown($event)"
            (mouseup)="onMouseUp($event)"
            (touchstart)="onTouchStart($event)"
            (touchend)="onTouchEnd($event)"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.required]="required() ? '' : undefined"
            [attr.aria-valuenow]="_value"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.tabindex]="readonly || $disabled() ? -1 : tabindex"
            [pBind]="ptm('svg')"
        >
            <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" [class]="cx('range')" [pBind]="ptm('range')"></path>
            <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" [class]="cx('value')" [pBind]="ptm('value')"></path>
            <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" [class]="cx('text')" [attr.name]="name()" [pBind]="ptm('text')">
                {{ valueToDisplay() }}
            </text>
        </svg>
    `,
      providers: [KNOB_VALUE_ACCESSOR, KnobStyle, {
        provide: KNOB_INSTANCE,
        useExisting: Knob
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Knob
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueColor: [{
      type: Input
    }],
    rangeColor: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    valueTemplate: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var KnobModule = class _KnobModule {
  static ɵfac = function KnobModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KnobModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _KnobModule,
    imports: [Knob, SharedModule],
    exports: [Knob, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Knob, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KnobModule, [{
    type: NgModule,
    args: [{
      imports: [Knob, SharedModule],
      exports: [Knob, SharedModule]
    }]
  }], null, null);
})();
export {
  KNOB_VALUE_ACCESSOR,
  Knob,
  KnobClasses,
  KnobModule,
  KnobStyle
};
//# sourceMappingURL=primeng_knob.js.map
