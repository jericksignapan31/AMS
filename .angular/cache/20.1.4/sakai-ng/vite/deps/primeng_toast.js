import {
  zindexutils
} from "./chunk-UQLQBFGK.js";
import {
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon,
  TimesIcon
} from "./chunk-63EEKHWQ.js";
import {
  CheckIcon
} from "./chunk-WOQBGGUY.js";
import {
  BaseComponent
} from "./chunk-SXIRYO3K.js";
import {
  BaseStyle
} from "./chunk-MF6USTO4.js";
import {
  MessageService,
  PrimeTemplate,
  SharedModule
} from "./chunk-DW56MBMF.js";
import "./chunk-W2Q77YF4.js";
import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-7R335IKT.js";
import "./chunk-ZLMKASLL.js";
import {
  Kt,
  a,
  s3 as s
} from "./chunk-ICG2ZITK.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-I7P5IMQC.js";
import "./chunk-636JCMZ5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
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
  ɵɵdirectiveInject,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ONJW5VE5.js";
import "./chunk-YVXMBCE5.js";
import "./chunk-G6ECYYJH.js";
import "./chunk-RTGP7ALM.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style2 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-from {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n\n    .p-toast-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toast .p-toast-message.p-toast-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n    }\n\n    .p-toast-message-enter-active {\n        transition:\n            transform 0.3s,\n            opacity 0.3s;\n    }\n\n    .p-toast-message-leave-active {\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin-bottom 0.3s;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c0 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c1 = (a0) => ({
  value: "visible",
  params: a0
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c2, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("messageIcon"), ctx_r1.message == null ? null : ctx_r1.message.icon));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("messageIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("messageIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("messageIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("messageIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("messageIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 6)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 7)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 8)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 9)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 7);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional((tmp_4_0 = ctx_r1.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 2, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    ɵɵelementStart(3, "div", 5)(4, "div", 5);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.message.icon ? 1 : 2);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r1.cx("messageText"));
    ɵɵattribute("data-pc-section", "text");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.cx("summary"));
    ɵɵattribute("data-pc-section", "summary");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.message.summary, " ");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.cx("detail"));
    ɵɵattribute("data-pc-section", "detail");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("closeIcon"), ctx_r1.message == null ? null : ctx_r1.message.closeIcon));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 2, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("closeIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 14);
    ɵɵlistener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    });
    ɵɵconditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("class", ctx_r1.cx("closeButton"))("aria-label", ctx_r1.closeAriaLabel)("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 9, "ng-container", 4)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵconditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 4, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("messageContent"), ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass));
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.template);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c3, ctx_r1.message));
    ɵɵadvance();
    ɵɵconditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c4 = ["message"];
var _c5 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-toastItem", 1);
    ɵɵlistener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_0_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  theme = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (ɵToastStyle_BaseFactory || (ɵToastStyle_BaseFactory = ɵɵgetInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
    super.ngOnDestroy();
  }
  static ɵfac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [ɵɵProvidersFeature([ToastStyle]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 14,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave"], [3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "ngClass"], ["data-p-icon", "check", 3, "class"], ["data-p-icon", "info-circle", 3, "class"], ["data-p-icon", "times-circle", 3, "class"], ["data-p-icon", "exclamation-triangle", 3, "class"], ["data-p-icon", "check"], ["data-p-icon", "info-circle"], ["data-p-icon", "times-circle"], ["data-p-icon", "exclamation-triangle"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter"], ["data-p-icon", "times", 3, "class"], [3, "class", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵlistener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMouseLeave());
        });
        ɵɵconditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        ɵɵproperty("@messageState", ɵɵpureFunction1(12, _c1, ɵɵpureFunction4(7, _c0, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        ɵɵattribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵconditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
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
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s("pn_id_");
  templates;
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
      if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && a(this.messages)) {
        zindexutils.clear(this.el?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static ɵfac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c4, 5);
        ɵɵcontentQuery(dirIndex, _c5, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headlessTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx.sx("root"));
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [ɵɵProvidersFeature([ToastStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Toast_p_toastItem_0_Template, 1, 10, "p-toastItem", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [], {
    key: [{
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
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static ɵfac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();
export {
  Toast,
  ToastClasses,
  ToastItem,
  ToastModule,
  ToastStyle
};
//# sourceMappingURL=primeng_toast.js.map
