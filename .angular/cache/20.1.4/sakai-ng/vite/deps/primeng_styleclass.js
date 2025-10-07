import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  booleanAttribute,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-ONJW5VE5.js";
import "./chunk-YVXMBCE5.js";
import "./chunk-G6ECYYJH.js";
import "./chunk-RTGP7ALM.js";
import {
  O,
  R,
  W
} from "./chunk-ICG2ZITK.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-styleclass.mjs
var StyleClass = class _StyleClass {
  el;
  renderer;
  zone;
  constructor(el, renderer, zone) {
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
  }
  /**
   * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
   * @group Props
   */
  selector;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterFromClass;
  /**
   * Style class to add during enter animation.
   * @group Props
   */
  enterActiveClass;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterToClass;
  /**
   * Style class to add when item begins to get hidden.
   * @group Props
   */
  leaveFromClass;
  /**
   * Style class to add during leave animation.
   * @group Props
   */
  leaveActiveClass;
  /**
   * Style class to add when leave animation is completed.
   * @group Props
   */
  leaveToClass;
  /**
   * Whether to trigger leave animation when outside of the element is clicked.
   * @group Props
   */
  hideOnOutsideClick;
  /**
   * Adds or removes a class when no enter-leave animation is required.
   * @group Props
   */
  toggleClass;
  /**
   * Whether to trigger leave animation when escape key pressed.
   * @group Props
   */
  hideOnEscape;
  eventListener;
  documentClickListener;
  documentKeydownListener;
  target;
  enterListener;
  leaveListener;
  animating;
  _enterClass;
  _leaveClass;
  clickListener() {
    this.target = this.resolveTarget();
    if (this.toggleClass) {
      this.toggle();
    } else {
      if (this.target?.offsetParent === null) this.enter();
      else this.leave();
    }
  }
  toggle() {
    if (R(this.target, this.toggleClass)) O(this.target, this.toggleClass);
    else W(this.target, this.toggleClass);
  }
  enter() {
    if (this.enterActiveClass) {
      if (!this.animating) {
        this.animating = true;
        if (this.enterActiveClass === "animate-slidedown") {
          this.target.style.height = "0px";
          O(this.target, "hidden");
          this.target.style.maxHeight = this.target.scrollHeight + "px";
          W(this.target, "hidden");
          this.target.style.height = "";
        }
        W(this.target, this.enterActiveClass);
        if (this.enterFromClass) {
          O(this.target, this.enterFromClass);
        }
        this.enterListener = this.renderer.listen(this.target, "animationend", () => {
          O(this.target, this.enterActiveClass);
          if (this.enterToClass) {
            W(this.target, this.enterToClass);
          }
          this.enterListener && this.enterListener();
          if (this.enterActiveClass === "animate-slidedown") {
            this.target.style.maxHeight = "";
          }
          this.animating = false;
        });
      }
    } else {
      if (this.enterFromClass) {
        O(this.target, this.enterFromClass);
      }
      if (this.enterToClass) {
        W(this.target, this.enterToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.bindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.bindDocumentKeydownListener();
    }
  }
  leave() {
    if (this.leaveActiveClass) {
      if (!this.animating) {
        this.animating = true;
        W(this.target, this.leaveActiveClass);
        if (this.leaveFromClass) {
          O(this.target, this.leaveFromClass);
        }
        this.leaveListener = this.renderer.listen(this.target, "animationend", () => {
          O(this.target, this.leaveActiveClass);
          if (this.leaveToClass) {
            W(this.target, this.leaveToClass);
          }
          this.leaveListener && this.leaveListener();
          this.animating = false;
        });
      }
    } else {
      if (this.leaveFromClass) {
        O(this.target, this.leaveFromClass);
      }
      if (this.leaveToClass) {
        W(this.target, this.leaveToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.unbindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.unbindDocumentKeydownListener();
    }
  }
  resolveTarget() {
    if (this.target) {
      return this.target;
    }
    switch (this.selector) {
      case "@next":
        return this.el.nativeElement.nextElementSibling;
      case "@prev":
        return this.el.nativeElement.previousElementSibling;
      case "@parent":
        return this.el.nativeElement.parentElement;
      case "@grandparent":
        return this.el.nativeElement.parentElement.parentElement;
      default:
        return document.querySelector(this.selector);
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "click", (event) => {
        if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentClickListener();
        else if (this.isOutsideClick(event)) this.leave();
      });
    }
  }
  bindDocumentKeydownListener() {
    if (!this.documentKeydownListener) {
      this.zone.runOutsideAngular(() => {
        this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "keydown", (event) => {
          const {
            key,
            keyCode,
            which,
            type
          } = event;
          if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentKeydownListener();
          if (this.isVisible() && key === "Escape" && keyCode === 27 && which === 27) this.leave();
        });
      });
    }
  }
  isVisible() {
    return this.target.offsetParent !== null;
  }
  isOutsideClick(event) {
    return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  unbindDocumentKeydownListener() {
    if (this.documentKeydownListener) {
      this.documentKeydownListener();
      this.documentKeydownListener = null;
    }
  }
  ngOnDestroy() {
    this.target = null;
    if (this.eventListener) {
      this.eventListener();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentKeydownListener();
  }
  static ɵfac = function StyleClass_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClass)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StyleClass,
    selectors: [["", "pStyleClass", ""]],
    hostBindings: function StyleClass_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function StyleClass_click_HostBindingHandler($event) {
          return ctx.clickListener($event);
        });
      }
    },
    inputs: {
      selector: [0, "pStyleClass", "selector"],
      enterFromClass: "enterFromClass",
      enterActiveClass: "enterActiveClass",
      enterToClass: "enterToClass",
      leaveFromClass: "leaveFromClass",
      leaveActiveClass: "leaveActiveClass",
      leaveToClass: "leaveToClass",
      hideOnOutsideClick: [2, "hideOnOutsideClick", "hideOnOutsideClick", booleanAttribute],
      toggleClass: "toggleClass",
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClass, [{
    type: Directive,
    args: [{
      selector: "[pStyleClass]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    selector: [{
      type: Input,
      args: ["pStyleClass"]
    }],
    enterFromClass: [{
      type: Input
    }],
    enterActiveClass: [{
      type: Input
    }],
    enterToClass: [{
      type: Input
    }],
    leaveFromClass: [{
      type: Input
    }],
    leaveActiveClass: [{
      type: Input
    }],
    leaveToClass: [{
      type: Input
    }],
    hideOnOutsideClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggleClass: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    clickListener: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var StyleClassModule = class _StyleClassModule {
  static ɵfac = function StyleClassModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClassModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StyleClassModule,
    imports: [StyleClass],
    exports: [StyleClass]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClassModule, [{
    type: NgModule,
    args: [{
      imports: [StyleClass],
      exports: [StyleClass]
    }]
  }], null, null);
})();
export {
  StyleClass,
  StyleClassModule
};
//# sourceMappingURL=primeng_styleclass.js.map
