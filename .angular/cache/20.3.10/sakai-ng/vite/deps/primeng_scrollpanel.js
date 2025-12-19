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
  NgZone,
  ViewChild,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  P,
  Tt,
  W,
  s3 as s
} from "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/scrollpanel/index.mjs
var style = "\n    .p-scrollpanel-content-container {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        z-index: 1;\n        float: left;\n    }\n\n    .p-scrollpanel-content {\n        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));\n        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));\n        position: relative;\n        overflow: auto;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n\n    .p-scrollpanel-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-scrollpanel-bar {\n        position: relative;\n        border-radius: dt('scrollpanel.bar.border.radius');\n        z-index: 2;\n        cursor: pointer;\n        opacity: 0;\n        outline-color: transparent;\n        background: dt('scrollpanel.bar.background');\n        border: 0 none;\n        transition:\n            outline-color dt('scrollpanel.transition.duration'),\n            opacity dt('scrollpanel.transition.duration');\n    }\n\n    .p-scrollpanel-bar:focus-visible {\n        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');\n        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');\n        outline-offset: dt('scrollpanel.barfocus.ring.offset');\n    }\n\n    .p-scrollpanel-bar-y {\n        width: dt('scrollpanel.bar.size');\n        inset-block-start: 0;\n    }\n\n    .p-scrollpanel-bar-x {\n        height: dt('scrollpanel.bar.size');\n        inset-block-end: 0;\n    }\n\n    .p-scrollpanel-hidden {\n        visibility: hidden;\n    }\n\n    .p-scrollpanel:hover .p-scrollpanel-bar,\n    .p-scrollpanel:active .p-scrollpanel-bar {\n        opacity: 1;\n    }\n\n    .p-scrollpanel-grabbed {\n        user-select: none;\n    }\n";

// node_modules/primeng/fesm2022/primeng-scrollpanel.mjs
var _c0 = ["content"];
var _c1 = ["xBar"];
var _c2 = ["yBar"];
var _c3 = ["*"];
function ScrollPanel_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function ScrollPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    .p-scrollpanel {
        display: block;
    }
`
);
var classes = {
  root: "p-scrollpanel p-component",
  contentContainer: "p-scrollpanel-content-container",
  content: "p-scrollpanel-content",
  barX: "p-scrollpanel-bar p-scrollpanel-bar-x",
  barY: "p-scrollpanel-bar p-scrollpanel-bar-y"
};
var ScrollPanelStyle = class _ScrollPanelStyle extends BaseStyle {
  name = "scrollpanel";
  style = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollPanelStyle_BaseFactory;
    return function ScrollPanelStyle_Factory(__ngFactoryType__) {
      return (ɵScrollPanelStyle_BaseFactory || (ɵScrollPanelStyle_BaseFactory = ɵɵgetInheritedFactory(_ScrollPanelStyle)))(__ngFactoryType__ || _ScrollPanelStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollPanelStyle,
    factory: _ScrollPanelStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var ScrollPanelClasses;
(function(ScrollPanelClasses2) {
  ScrollPanelClasses2["root"] = "p-scrollpanel";
  ScrollPanelClasses2["contentContainer"] = "p-scrollpanel-content-container";
  ScrollPanelClasses2["content"] = "p-scrollpanel-content";
  ScrollPanelClasses2["barX"] = "p-scrollpanel-bar-x";
  ScrollPanelClasses2["barY"] = "p-scrollpanel-bar-y";
})(ScrollPanelClasses || (ScrollPanelClasses = {}));
var SCROLLPANEL_INSTANCE = new InjectionToken("SCROLLPANEL_INSTANCE");
var ScrollPanel = class _ScrollPanel extends BaseComponent {
  $pcScrollPanel = inject(SCROLLPANEL_INSTANCE, {
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
   * Step factor to scroll the content while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  contentViewChild;
  xBarViewChild;
  yBarViewChild;
  /**
   * Defines template option for content.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  scrollYRatio;
  scrollXRatio;
  timeoutFrame = (fn) => setTimeout(fn, 0);
  initialized = false;
  lastPageY;
  lastPageX;
  isXBarClicked = false;
  isYBarClicked = false;
  lastScrollLeft = 0;
  lastScrollTop = 0;
  orientation = "vertical";
  timer;
  contentId;
  windowResizeListener;
  contentScrollListener;
  mouseEnterListener;
  xBarMouseDownListener;
  yBarMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  _componentStyle = inject(ScrollPanelStyle);
  zone = inject(NgZone);
  onInit() {
    this.contentId = s("pn_id_") + "_content";
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.windowResizeListener = this.renderer.listen(window, "resize", this.moveBar);
        this.contentScrollListener = this.renderer.listen(this.contentViewChild.nativeElement, "scroll", this.moveBar);
        this.mouseEnterListener = this.renderer.listen(this.contentViewChild.nativeElement, "mouseenter", this.moveBar);
        this.xBarMouseDownListener = this.renderer.listen(this.xBarViewChild.nativeElement, "mousedown", this.onXBarMouseDown);
        this.yBarMouseDownListener = this.renderer.listen(this.yBarViewChild.nativeElement, "mousedown", this.onYBarMouseDown);
        this.calculateContainerHeight();
        this.initialized = true;
      });
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  calculateContainerHeight() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    const window2 = this.document.defaultView;
    let containerStyles = window2.getComputedStyle(container), xBarStyles = window2.getComputedStyle(xBar), pureContainerHeight = Tt(container) - parseInt(xBarStyles["height"], 10);
    if (containerStyles["max-height"] != "none" && pureContainerHeight == 0) {
      if (content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
        container.style.height = containerStyles["max-height"];
      } else {
        container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
      }
    }
  }
  moveBar() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    let totalWidth = content.scrollWidth;
    let ownWidth = content.clientWidth;
    let bottom = (container.clientHeight - xBar.clientHeight) * -1;
    this.scrollXRatio = ownWidth / totalWidth;
    let yBar = this.yBarViewChild.nativeElement;
    let totalHeight = content.scrollHeight;
    let ownHeight = content.clientHeight;
    let right = (container.clientWidth - yBar.clientWidth) * -1;
    this.scrollYRatio = ownHeight / totalHeight;
    this.requestAnimationFrame(() => {
      if (this.scrollXRatio >= 1) {
        xBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(xBar, "p-scrollpanel-hidden");
      } else {
        xBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(xBar, "p-scrollpanel-hidden");
        const xBarWidth = Math.max(this.scrollXRatio * 100, 10);
        const xBarLeft = Math.abs(content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth));
        xBar.style.cssText = "width:" + xBarWidth + "%; inset-inline-start:" + xBarLeft + "%;bottom:" + bottom + "px;";
      }
      if (this.scrollYRatio >= 1) {
        yBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(yBar, "p-scrollpanel-hidden");
      } else {
        yBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(yBar, "p-scrollpanel-hidden");
        const yBarHeight = Math.max(this.scrollYRatio * 100, 10);
        const yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
        yBar.style.cssText = "height:" + yBarHeight + "%; top: calc(" + yBarTop + "% - " + xBar.clientHeight + "px); inset-inline-end:" + right + "px;";
      }
    });
    this.cd.markForCheck();
  }
  onScroll(event) {
    if (this.lastScrollLeft !== event.target.scrollLeft) {
      this.lastScrollLeft = event.target.scrollLeft;
      this.orientation = "horizontal";
    } else if (this.lastScrollTop !== event.target.scrollTop) {
      this.lastScrollTop = event.target.scrollTop;
      this.orientation = "vertical";
    }
    this.moveBar();
  }
  onKeyDown(event) {
    if (this.orientation === "vertical") {
      switch (event.code) {
        case "ArrowDown": {
          this.setTimer("scrollTop", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          this.setTimer("scrollTop", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowLeft":
        case "ArrowRight": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    } else if (this.orientation === "horizontal") {
      switch (event.code) {
        case "ArrowRight": {
          this.setTimer("scrollLeft", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.setTimer("scrollLeft", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowDown":
        case "ArrowUp": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    }
  }
  onKeyUp() {
    this.clearTimer();
  }
  repeat(bar, step) {
    this.contentViewChild?.nativeElement && (this.contentViewChild.nativeElement[bar] += step);
    this.moveBar();
  }
  setTimer(bar, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(bar, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  bindDocumentMouseListeners() {
    if (!this.documentMouseMoveListener) {
      this.documentMouseMoveListener = (e) => {
        this.onDocumentMouseMove(e);
      };
      this.document.addEventListener("mousemove", this.documentMouseMoveListener);
    }
    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = (e) => {
        this.onDocumentMouseUp(e);
      };
      this.document.addEventListener("mouseup", this.documentMouseUpListener);
    }
  }
  unbindDocumentMouseListeners() {
    if (this.documentMouseMoveListener) {
      this.document.removeEventListener("mousemove", this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener("mouseup", this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onYBarMouseDown(e) {
    this.isYBarClicked = true;
    this.yBarViewChild?.nativeElement?.focus();
    this.lastPageY = e.pageY;
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onXBarMouseDown(e) {
    this.isXBarClicked = true;
    this.xBarViewChild?.nativeElement?.focus();
    this.lastPageX = e.pageX;
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onDocumentMouseMove(e) {
    if (this.isXBarClicked) {
      this.onMouseMoveForXBar(e);
    } else if (this.isYBarClicked) {
      this.onMouseMoveForYBar(e);
    } else {
      this.onMouseMoveForXBar(e);
      this.onMouseMoveForYBar(e);
    }
  }
  onMouseMoveForXBar(e) {
    let deltaX = e.pageX - this.lastPageX;
    this.lastPageX = e.pageX;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollLeft += deltaX / this.scrollXRatio;
    });
  }
  onMouseMoveForYBar(e) {
    let deltaY = e.pageY - this.lastPageY;
    this.lastPageY = e.pageY;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollTop += deltaY / this.scrollYRatio;
    });
  }
  /**
   * Scrolls the top location to the given value.
   * @param scrollTop
   * @group Method
   */
  scrollTop(scrollTop) {
    let scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
    scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
    this.contentViewChild.nativeElement.scrollTop = scrollTop;
  }
  onFocus(event) {
    if (this.xBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "horizontal";
    } else if (this.yBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "vertical";
    }
  }
  onBlur() {
    if (this.orientation === "horizontal") {
      this.orientation = "vertical";
    }
  }
  onDocumentMouseUp(e) {
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.document.body, "p-scrollpanel-grabbed");
    this.unbindDocumentMouseListeners();
    this.isXBarClicked = false;
    this.isYBarClicked = false;
  }
  requestAnimationFrame(f) {
    let frame = window.requestAnimationFrame || this.timeoutFrame;
    frame(f);
  }
  unbindListeners() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.contentScrollListener) {
      this.contentScrollListener();
      this.contentScrollListener = null;
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
      this.mouseEnterListener = null;
    }
    if (this.xBarMouseDownListener) {
      this.xBarMouseDownListener();
      this.xBarMouseDownListener = null;
    }
    if (this.yBarMouseDownListener) {
      this.yBarMouseDownListener();
      this.yBarMouseDownListener = null;
    }
  }
  onDestroy() {
    if (this.initialized) {
      this.unbindListeners();
    }
  }
  /**
   * Refreshes the position and size of the scrollbar.
   * @group Method
   */
  refresh() {
    this.moveBar();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollPanel_BaseFactory;
    return function ScrollPanel_Factory(__ngFactoryType__) {
      return (ɵScrollPanel_BaseFactory || (ɵScrollPanel_BaseFactory = ɵɵgetInheritedFactory(_ScrollPanel)))(__ngFactoryType__ || _ScrollPanel);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollPanel,
    selectors: [["p-scroll-panel"], ["p-scrollPanel"], ["p-scrollpanel"]],
    contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ScrollPanel_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.xBarViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yBarViewChild = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function ScrollPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      step: [2, "step", "step", numberAttribute]
    },
    features: [ɵɵProvidersFeature([ScrollPanelStyle, {
      provide: SCROLLPANEL_INSTANCE,
      useExisting: _ScrollPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ScrollPanel
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 20,
    consts: [["content", ""], ["xBar", ""], ["yBar", ""], [3, "pBind"], [3, "mouseenter", "scroll", "pBind"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "blur", "pBind"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "pBind"]],
    template: function ScrollPanel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 3)(1, "div", 4, 0);
        ɵɵlistener("mouseenter", function ScrollPanel_Template_div_mouseenter_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveBar());
        })("scroll", function ScrollPanel_Template_div_scroll_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onScroll($event));
        });
        ɵɵconditionalCreate(3, ScrollPanel_Conditional_3_Template, 1, 0);
        ɵɵtemplate(4, ScrollPanel_ng_container_4_Template, 1, 0, "ng-container", 5);
        ɵɵelementEnd()();
        ɵɵelementStart(5, "div", 6, 1);
        ɵɵlistener("mousedown", function ScrollPanel_Template_div_mousedown_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onXBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus($event));
        })("blur", function ScrollPanel_Template_div_blur_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 7, 2);
        ɵɵlistener("mousedown", function ScrollPanel_Template_div_mousedown_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onYBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_7_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus($event));
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("contentContainer"));
        ɵɵproperty("pBind", ctx.ptm("contentContainer"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("content"));
        ɵɵproperty("pBind", ctx.ptm("content"));
        ɵɵadvance(2);
        ɵɵconditional(!ctx.contentTemplate && !ctx._contentTemplate ? 3 : -1);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("barX"));
        ɵɵproperty("pBind", ctx.ptm("barX"));
        ɵɵattribute("aria-orientation", "horizontal")("aria-valuenow", ctx.lastScrollLeft)("aria-controls", ctx.contentId);
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("barY"));
        ɵɵproperty("pBind", ctx.ptm("barY"));
        ɵɵattribute("aria-orientation", "vertical")("aria-valuenow", ctx.lastScrollTop)("aria-controls", ctx.contentId);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanel, [{
    type: Component,
    args: [{
      selector: "p-scroll-panel, p-scrollPanel, p-scrollpanel",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('contentContainer')" [class]="cx('contentContainer')">
            <div #content [pBind]="ptm('content')" [class]="cx('content')" (mouseenter)="moveBar()" (scroll)="onScroll($event)">
                @if (!contentTemplate && !_contentTemplate) {
                    <ng-content></ng-content>
                }
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
        </div>
        <div
            #xBar
            [pBind]="ptm('barX')"
            [class]="cx('barX')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'horizontal'"
            [attr.aria-valuenow]="lastScrollLeft"
            [attr.aria-controls]="contentId"
            (mousedown)="onXBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
            (blur)="onBlur()"
        ></div>
        <div
            #yBar
            [pBind]="ptm('barY')"
            [class]="cx('barY')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'vertical'"
            [attr.aria-valuenow]="lastScrollTop"
            [attr.aria-controls]="contentId"
            (mousedown)="onYBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
        ></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ScrollPanelStyle, {
        provide: SCROLLPANEL_INSTANCE,
        useExisting: ScrollPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ScrollPanel
      }],
      host: {
        "[class]": 'cn(cx("root"), styleClass)'
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    xBarViewChild: [{
      type: ViewChild,
      args: ["xBar"]
    }],
    yBarViewChild: [{
      type: ViewChild,
      args: ["yBar"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollPanelModule = class _ScrollPanelModule {
  static ɵfac = function ScrollPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollPanelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollPanelModule,
    imports: [ScrollPanel, SharedModule, BindModule],
    exports: [ScrollPanel, SharedModule, BindModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ScrollPanel, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelModule, [{
    type: NgModule,
    args: [{
      imports: [ScrollPanel, SharedModule, BindModule],
      exports: [ScrollPanel, SharedModule, BindModule]
    }]
  }], null, null);
})();
export {
  ScrollPanel,
  ScrollPanelClasses,
  ScrollPanelModule,
  ScrollPanelStyle
};
//# sourceMappingURL=primeng_scrollpanel.js.map
