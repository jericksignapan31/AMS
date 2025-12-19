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
  Bind,
  BindModule
} from "./chunk-SSPEJKN4.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-R2OVIKVM.js";
import "./chunk-APPCZKFW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  computed,
  contentChild,
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
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
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
  C2 as C,
  P,
  R,
  Rt,
  Tt,
  V2 as V,
  W,
  v
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/splitter/index.mjs
var style = "\n    .p-splitter {\n        display: flex;\n        flex-wrap: nowrap;\n        border: 1px solid dt('splitter.border.color');\n        background: dt('splitter.background');\n        border-radius: dt('border.radius.md');\n        color: dt('splitter.color');\n    }\n\n    .p-splitter-vertical {\n        flex-direction: column;\n    }\n\n    .p-splitter-gutter {\n        flex-grow: 0;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        background: dt('splitter.gutter.background');\n    }\n\n    .p-splitter-gutter-handle {\n        border-radius: dt('splitter.handle.border.radius');\n        background: dt('splitter.handle.background');\n        transition:\n            outline-color dt('splitter.transition.duration'),\n            box-shadow dt('splitter.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-splitter-gutter-handle:focus-visible {\n        box-shadow: dt('splitter.handle.focus.ring.shadow');\n        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');\n        outline-offset: dt('splitter.handle.focus.ring.offset');\n    }\n\n    .p-splitter-horizontal.p-splitter-resizing {\n        cursor: col-resize;\n        user-select: none;\n    }\n\n    .p-splitter-vertical.p-splitter-resizing {\n        cursor: row-resize;\n        user-select: none;\n    }\n\n    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n        height: dt('splitter.handle.size');\n        width: 100%;\n    }\n\n    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n        width: dt('splitter.handle.size');\n        height: 100%;\n    }\n\n    .p-splitter-horizontal > .p-splitter-gutter {\n        cursor: col-resize;\n    }\n\n    .p-splitter-vertical > .p-splitter-gutter {\n        cursor: row-resize;\n    }\n\n    .p-splitterpanel {\n        flex-grow: 1;\n        overflow: hidden;\n    }\n\n    .p-splitterpanel-nested {\n        display: flex;\n    }\n\n    .p-splitterpanel .p-splitter {\n        flex-grow: 1;\n        border: 0 none;\n    }\n";

// node_modules/primeng/fesm2022/primeng-splitter.mjs
var _c0 = ["panel"];
function Splitter_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Splitter_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mousedown", function Splitter_ng_template_0_div_2_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onGutterMouseDown($event, i_r2));
    })("touchstart", function Splitter_ng_template_0_div_2_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onGutterTouchStart($event, i_r2));
    })("touchmove", function Splitter_ng_template_0_div_2_Template_div_touchmove_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onGutterTouchMove($event));
    })("touchend", function Splitter_ng_template_0_div_2_Template_div_touchend_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onGutterTouchEnd($event));
    });
    ɵɵelementStart(1, "div", 5);
    ɵɵlistener("keyup", function Splitter_ng_template_0_div_2_Template_div_keyup_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onGutterKeyUp($event));
    })("keydown", function Splitter_ng_template_0_div_2_Template_div_keydown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onGutterKeyDown($event, i_r2));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("gutter"));
    ɵɵproperty("pBind", ctx_r2.ptm("gutter"));
    ɵɵattribute("data-p-gutter-resizing", false);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("gutterHandle"));
    ɵɵproperty("pBind", ctx_r2.ptm("gutterHandle"))("ngStyle", ctx_r2.gutterStyle());
    ɵɵattribute("aria-orientation", ctx_r2.layout)("aria-valuenow", ctx_r2.prevSize);
  }
}
function Splitter_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Splitter_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵtemplate(2, Splitter_ng_template_0_div_2_Template, 2, 10, "div", 3);
  }
  if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("panel"), ctx_r2.panelStyleClass));
    ɵɵproperty("pBind", ctx_r2.ptm("panel"))("ngStyle", ctx_r2.panelStyle);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", panel_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r2 !== ctx_r2.panels.length - 1);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-splitter p-component", "p-splitter-" + instance.layout],
  panel: ({
    instance
  }) => ["p-splitterpanel", {
    "p-splitterpanel-nested": instance.nestedState()
  }],
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
};
var inlineStyles = {
  root: ({
    instance
  }) => [{
    display: "flex",
    "flex-wrap": "nowrap"
  }, instance.layout === "vertical" ? {
    "flex-direction": "column"
  } : ""]
};
var SplitterStyle = class _SplitterStyle extends BaseStyle {
  name = "splitter";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitterStyle_BaseFactory;
    return function SplitterStyle_Factory(__ngFactoryType__) {
      return (ɵSplitterStyle_BaseFactory || (ɵSplitterStyle_BaseFactory = ɵɵgetInheritedFactory(_SplitterStyle)))(__ngFactoryType__ || _SplitterStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SplitterStyle,
    factory: _SplitterStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterStyle, [{
    type: Injectable
  }], null, null);
})();
var SplitterClasses;
(function(SplitterClasses2) {
  SplitterClasses2["root"] = "p-splitter";
  SplitterClasses2["gutter"] = "p-splitter-gutter";
  SplitterClasses2["gutterHandle"] = "p-splitter-gutter-handle";
})(SplitterClasses || (SplitterClasses = {}));
var SPLITTER_INSTANCE = new InjectionToken("SPLITTER_INSTANCE");
var Splitter = class _Splitter extends BaseComponent {
  $pcSplitter = inject(SPLITTER_INSTANCE, {
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
   * @deprecated since v20. Use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the panel.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the panel.
   * @group Props
   */
  panelStyle;
  /**
   * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
   * @group Props
   */
  stateStorage = "session";
  /**
   * Storage identifier of a stateful Splitter.
   * @group Props
   */
  stateKey = null;
  /**
   * Orientation of the panels. Valid values are 'horizontal' and 'vertical'.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Size of the divider in pixels.
   * @group Props
   */
  gutterSize = 4;
  /**
   * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  /**
   * Minimum size of the elements relative to 100%.
   * @group Props
   */
  minSizes = [];
  /**
   * Size of the elements relative to 100%.
   * @group Props
   */
  get panelSizes() {
    return this._panelSizes;
  }
  set panelSizes(val) {
    this._panelSizes = val;
    if (this.el && this.el.nativeElement && this.panels.length > 0) {
      let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
      let _panelSizes = [];
      this.panels.map((panel, i) => {
        let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
        let panelSize = panelInitialSize || 100 / this.panels.length;
        _panelSizes[i] = panelSize;
        children[i].style.flexBasis = "calc(" + panelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      });
    }
  }
  /**
   * Callback to invoke when resize ends.
   * @param {SplitterResizeEndEvent} event - Custom panel resize end event
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when resize starts.
   * @param {SplitterResizeStartEvent} event - Custom panel resize start event
   * @group Emits
   */
  onResizeStart = new EventEmitter();
  templates;
  panelChildren;
  splitter = contentChild(forwardRef(() => _Splitter), ...ngDevMode ? [{
    debugName: "splitter"
  }] : []);
  nestedState = computed(() => this.splitter(), ...ngDevMode ? [{
    debugName: "nestedState"
  }] : []);
  panels = [];
  dragging = false;
  mouseMoveListener;
  mouseUpListener;
  touchMoveListener;
  touchEndListener;
  size;
  gutterElement;
  startPos;
  prevPanelElement;
  nextPanelElement;
  nextPanelSize;
  prevPanelSize;
  _panelSizes = [];
  prevPanelIndex;
  timer;
  prevSize;
  _componentStyle = inject(SplitterStyle);
  onAfterContentInit() {
    if (this.templates && this.templates.toArray().length > 0) {
      this.templates.forEach((item) => {
        switch (item.getType()) {
          case "panel":
            this.panels.push(item.template);
            break;
          default:
            this.panels.push(item.template);
            break;
        }
      });
    }
    if (this.panelChildren && this.panelChildren.toArray().length > 0) {
      this.panelChildren.forEach((item) => {
        this.panels.push(item);
      });
    }
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.panels && this.panels.length) {
        let initialized = false;
        if (this.isStateful()) {
          initialized = this.restoreState();
        }
        if (!initialized) {
          let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
          let _panelSizes = [];
          this.panels.map((panel, i) => {
            let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
            let panelSize = panelInitialSize || 100 / this.panels.length;
            _panelSizes[i] = panelSize;
            children[i].style.flexBasis = "calc(" + panelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
          });
          this._panelSizes = _panelSizes;
          this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
        }
      }
    }
  }
  resizeStart(event, index, isKeyDown) {
    this.gutterElement = event.currentTarget || event.target.parentElement;
    this.size = this.horizontal() ? Rt(this.el.nativeElement) : Tt(this.el.nativeElement);
    if (!isKeyDown) {
      this.dragging = true;
      this.startPos = this.horizontal() ? event instanceof MouseEvent ? event.pageX : event.changedTouches[0].pageX : event instanceof MouseEvent ? event.pageY : event.changedTouches[0].pageY;
    }
    this.prevPanelElement = this.gutterElement.previousElementSibling;
    this.nextPanelElement = this.gutterElement.nextElementSibling;
    if (isKeyDown) {
      this.prevPanelSize = this.horizontal() ? v(this.prevPanelElement, true) : C(this.prevPanelElement, true);
      this.nextPanelSize = this.horizontal() ? v(this.nextPanelElement, true) : C(this.nextPanelElement, true);
    } else {
      this.prevPanelSize = 100 * (this.horizontal() ? v(this.prevPanelElement, true) : C(this.prevPanelElement, true)) / this.size;
      this.nextPanelSize = 100 * (this.horizontal() ? v(this.nextPanelElement, true) : C(this.nextPanelElement, true)) / this.size;
    }
    this.prevPanelIndex = index;
    W(this.gutterElement, "p-splitter-gutter-resizing");
    this.gutterElement.setAttribute("data-p-gutter-resizing", "true");
    W(this.el.nativeElement, "p-splitter-resizing");
    this.el.nativeElement.setAttribute("data-p-resizing", "true");
    this.onResizeStart.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
  }
  onResize(event, step, isKeyDown) {
    let newPos, newPrevPanelSize, newNextPanelSize;
    if (isKeyDown) {
      if (this.horizontal()) {
        newPrevPanelSize = 100 * ((this.prevPanelSize ?? 0) + (step ?? 0)) / (this.size ?? 1);
        newNextPanelSize = 100 * ((this.nextPanelSize ?? 0) - (step ?? 0)) / (this.size ?? 1);
      } else {
        newPrevPanelSize = 100 * ((this.prevPanelSize ?? 0) - (step ?? 0)) / (this.size ?? 1);
        newNextPanelSize = 100 * ((this.nextPanelSize ?? 0) + (step ?? 0)) / (this.size ?? 1);
      }
    } else {
      if (this.horizontal()) {
        if (V(this.el.nativeElement)) {
          newPos = ((this.startPos ?? 0) - event.pageX) * 100 / (this.size ?? 1);
        } else {
          newPos = (event.pageX - (this.startPos ?? 0)) * 100 / (this.size ?? 1);
        }
      } else {
        newPos = (event.pageY - (this.startPos ?? 0)) * 100 / (this.size ?? 1);
      }
      newPrevPanelSize = this.prevPanelSize + newPos;
      newNextPanelSize = this.nextPanelSize - newPos;
    }
    this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
    if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
      this.prevPanelElement.style.flexBasis = "calc(" + newPrevPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this.nextPanelElement.style.flexBasis = "calc(" + newNextPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this._panelSizes[this.prevPanelIndex] = newPrevPanelSize;
      this._panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
    }
  }
  resizeEnd(event) {
    if (this.isStateful()) {
      this.saveState();
    }
    this.onResizeEnd.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
    P(this.gutterElement, "p-splitter-gutter-resizing");
    P(this.el.nativeElement, "p-splitter-resizing");
    this.clear();
  }
  onGutterMouseDown(event, index) {
    this.resizeStart(event, index);
    this.bindMouseListeners();
  }
  onGutterTouchStart(event, index) {
    if (event.cancelable) {
      this.resizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    }
  }
  onGutterTouchMove(event) {
    this.onResize(event);
    event.preventDefault();
  }
  onGutterTouchEnd(event) {
    this.resizeEnd(event);
    this.unbindTouchListeners();
    if (event.cancelable) event.preventDefault();
  }
  repeat(event, index, step) {
    this.resizeStart(event, index, true);
    this.onResize(event, step, true);
  }
  setTimer(event, index, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, index, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  onGutterKeyUp(event) {
    this.clearTimer();
    this.resizeEnd(event);
  }
  onGutterKeyDown(event, index) {
    switch (event.code) {
      case "ArrowLeft": {
        if (this.layout === "horizontal") {
          this.setTimer(event, index, this.step * -1);
        }
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        if (this.layout === "horizontal") {
          this.setTimer(event, index, this.step);
        }
        event.preventDefault();
        break;
      }
      case "ArrowDown": {
        if (this.layout === "vertical") {
          this.setTimer(event, index, this.step * -1);
        }
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (this.layout === "vertical") {
          this.setTimer(event, index, this.step);
        }
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  validateResize(newPrevPanelSize, newNextPanelSize) {
    if (this.minSizes.length >= 1 && this.minSizes[0] && this.minSizes[0] > newPrevPanelSize) {
      return false;
    }
    if (this.minSizes.length > 1 && this.minSizes[1] && this.minSizes[1] > newNextPanelSize) {
      return false;
    }
    return true;
  }
  bindMouseListeners() {
    if (!this.mouseMoveListener) {
      this.mouseMoveListener = this.renderer.listen(this.document, "mousemove", (event) => {
        this.onResize(event);
      });
    }
    if (!this.mouseUpListener) {
      this.mouseUpListener = this.renderer.listen(this.document, "mouseup", (event) => {
        this.resizeEnd(event);
        this.unbindMouseListeners();
      });
    }
  }
  bindTouchListeners() {
    if (!this.touchMoveListener) {
      this.touchMoveListener = this.renderer.listen(this.document, "touchmove", (event) => {
        this.onResize(event.changedTouches[0]);
      });
    }
    if (!this.touchEndListener) {
      this.touchEndListener = this.renderer.listen(this.document, "touchend", (event) => {
        this.resizeEnd(event);
        this.unbindTouchListeners();
      });
    }
  }
  unbindMouseListeners() {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
      this.mouseMoveListener = null;
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
      this.mouseUpListener = null;
    }
  }
  unbindTouchListeners() {
    if (this.touchMoveListener) {
      this.touchMoveListener();
      this.touchMoveListener = null;
    }
    if (this.touchEndListener) {
      this.touchEndListener();
      this.touchEndListener = null;
    }
  }
  clear() {
    this.dragging = false;
    this.size = null;
    this.startPos = null;
    this.prevPanelElement = null;
    this.nextPanelElement = null;
    this.prevPanelSize = null;
    this.nextPanelSize = null;
    this.gutterElement = null;
    this.prevPanelIndex = null;
  }
  isStateful() {
    return this.stateKey != null;
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return this.document.defaultView?.localStorage;
        case "session":
          return this.document.defaultView?.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Storage is not a available by default on the server.");
    }
  }
  saveState() {
    this.getStorage()?.setItem(this.stateKey, JSON.stringify(this._panelSizes));
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage?.getItem(this.stateKey);
    if (stateString) {
      this._panelSizes = JSON.parse(stateString);
      let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
      children.forEach((child, i) => {
        child.style.flexBasis = "calc(" + this._panelSizes[i] + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      });
      return true;
    }
    return false;
  }
  gutterStyle() {
    if (this.horizontal()) return {
      width: this.gutterSize + "px"
    };
    else return {
      height: this.gutterSize + "px"
    };
  }
  horizontal() {
    return this.layout === "horizontal";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitter_BaseFactory;
    return function Splitter_Factory(__ngFactoryType__) {
      return (ɵSplitter_BaseFactory || (ɵSplitter_BaseFactory = ɵɵgetInheritedFactory(_Splitter)))(__ngFactoryType__ || _Splitter);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Splitter,
    selectors: [["p-splitter"]],
    contentQueries: function Splitter_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.splitter, _Splitter, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
        ɵɵcontentQuery(dirIndex, _c0, 4);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelChildren = _t);
      }
    },
    hostVars: 3,
    hostBindings: function Splitter_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-p-gutter-resizing", false);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      stateStorage: "stateStorage",
      stateKey: "stateKey",
      layout: "layout",
      gutterSize: [2, "gutterSize", "gutterSize", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      minSizes: "minSizes",
      panelSizes: "panelSizes"
    },
    outputs: {
      onResizeEnd: "onResizeEnd",
      onResizeStart: "onResizeStart"
    },
    features: [ɵɵProvidersFeature([SplitterStyle, {
      provide: SPLITTER_INSTANCE,
      useExisting: _Splitter
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Splitter
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], ["tabindex", "-1", 3, "pBind", "ngStyle"], [4, "ngTemplateOutlet"], ["role", "separator", "tabindex", "-1", 3, "pBind", "class", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "-1", 3, "mousedown", "touchstart", "touchmove", "touchend", "pBind"], ["tabindex", "0", 3, "keyup", "keydown", "pBind", "ngStyle"]],
    template: function Splitter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Splitter_ng_template_0_Template, 3, 6, "ng-template", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.panels);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Splitter, [{
    type: Component,
    args: [{
      selector: "p-splitter",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <ng-template ngFor let-panel [ngForOf]="panels" let-i="index">
            <div [pBind]="ptm('panel')" [class]="cn(cx('panel'), panelStyleClass)" [ngStyle]="panelStyle" tabindex="-1">
                <ng-container *ngTemplateOutlet="panel"></ng-container>
            </div>
            <div
                *ngIf="i !== panels.length - 1"
                [pBind]="ptm('gutter')"
                [class]="cx('gutter')"
                role="separator"
                tabindex="-1"
                (mousedown)="onGutterMouseDown($event, i)"
                (touchstart)="onGutterTouchStart($event, i)"
                (touchmove)="onGutterTouchMove($event)"
                (touchend)="onGutterTouchEnd($event)"
                [attr.data-p-gutter-resizing]="false"
            >
                <div
                    [pBind]="ptm('gutterHandle')"
                    [class]="cx('gutterHandle')"
                    tabindex="0"
                    [ngStyle]="gutterStyle()"
                    [attr.aria-orientation]="layout"
                    [attr.aria-valuenow]="prevSize"
                    (keyup)="onGutterKeyUp($event)"
                    (keydown)="onGutterKeyDown($event, i)"
                ></div>
            </div>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-gutter-resizing]": "false"
      },
      providers: [SplitterStyle, {
        provide: SPLITTER_INSTANCE,
        useExisting: Splitter
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Splitter
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    gutterSize: [{
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
    minSizes: [{
      type: Input
    }],
    panelSizes: [{
      type: Input
    }],
    onResizeEnd: [{
      type: Output
    }],
    onResizeStart: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    panelChildren: [{
      type: ContentChildren,
      args: ["panel", {
        descendants: false
      }]
    }]
  });
})();
var SplitterModule = class _SplitterModule {
  static ɵfac = function SplitterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SplitterModule,
    imports: [Splitter, SharedModule, BindModule],
    exports: [Splitter, SharedModule, BindModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Splitter, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterModule, [{
    type: NgModule,
    args: [{
      imports: [Splitter, SharedModule, BindModule],
      exports: [Splitter, SharedModule, BindModule]
    }]
  }], null, null);
})();
export {
  Splitter,
  SplitterClasses,
  SplitterModule,
  SplitterStyle
};
//# sourceMappingURL=primeng_splitter.js.map
