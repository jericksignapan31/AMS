import {
  Tree
} from "./chunk-RZUM7X4K.js";
import "./chunk-5JOF7CKY.js";
import "./chunk-TX7QNBPM.js";
import "./chunk-YN3CW5YR.js";
import {
  Chip
} from "./chunk-YYXRBKBV.js";
import {
  Overlay
} from "./chunk-MDPCOYFN.js";
import "./chunk-P23VO7CN.js";
import "./chunk-AG42BXM6.js";
import {
  BaseEditableHolder
} from "./chunk-6OGXVJQK.js";
import "./chunk-5NGDX53P.js";
import {
  AutoFocus
} from "./chunk-RVGJXB7F.js";
import {
  Fluid
} from "./chunk-HQP6WWBM.js";
import "./chunk-P6SMTJBG.js";
import "./chunk-2NNT3GX6.js";
import "./chunk-CMVOE67Z.js";
import {
  ChevronDownIcon,
  TimesIcon
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
  Bind
} from "./chunk-SSPEJKN4.js";
import "./chunk-Y3VPSMBK.js";
import "./chunk-GGMOGVES.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-C225D66Z.js";
import {
  CommonModule,
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
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  Lt,
  R,
  b,
  bt,
  s,
  s3 as s2,
  vt
} from "./chunk-U4LT4ZJN.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/treeselect/index.mjs
var style = "\n    .p-treeselect {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('treeselect.background');\n        border: 1px solid dt('treeselect.border.color');\n        transition:\n            background dt('treeselect.transition.duration'),\n            color dt('treeselect.transition.duration'),\n            border-color dt('treeselect.transition.duration'),\n            outline-color dt('treeselect.transition.duration'),\n            box-shadow dt('treeselect.transition.duration');\n        border-radius: dt('treeselect.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('treeselect.shadow');\n    }\n\n    .p-treeselect:not(.p-disabled):hover {\n        border-color: dt('treeselect.hover.border.color');\n    }\n\n    .p-treeselect:not(.p-disabled).p-focus {\n        border-color: dt('treeselect.focus.border.color');\n        box-shadow: dt('treeselect.focus.ring.shadow');\n        outline: dt('treeselect.focus.ring.width') dt('treeselect.focus.ring.style') dt('treeselect.focus.ring.color');\n        outline-offset: dt('treeselect.focus.ring.offset');\n    }\n\n    .p-treeselect.p-variant-filled {\n        background: dt('treeselect.filled.background');\n    }\n\n    .p-treeselect.p-variant-filled:not(.p-disabled):hover {\n        background: dt('treeselect.filled.hover.background');\n    }\n\n    .p-treeselect.p-variant-filled.p-focus {\n        background: dt('treeselect.filled.focus.background');\n    }\n\n    .p-treeselect.p-invalid {\n        border-color: dt('treeselect.invalid.border.color');\n    }\n\n    .p-treeselect.p-disabled {\n        opacity: 1;\n        background: dt('treeselect.disabled.background');\n    }\n\n    .p-treeselect-clear-icon {\n        align-self: center;\n        color: dt('treeselect.clear.icon.color');\n        inset-inline-end: dt('treeselect.dropdown.width');\n    }\n\n    .p-treeselect-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('treeselect.dropdown.color');\n        width: dt('treeselect.dropdown.width');\n        border-start-end-radius: dt('border.radius.md');\n        border-end-end-radius: dt('border.radius.md');\n    }\n\n    .p-treeselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n\n    .p-treeselect-label {\n        display: flex;\n        align-items: center;\n        gap: calc(dt('treeselect.padding.y') / 2);\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding: dt('treeselect.padding.y') dt('treeselect.padding.x');\n        color: dt('treeselect.color');\n    }\n\n    .p-treeselect-label.p-placeholder {\n        color: dt('treeselect.placeholder.color');\n    }\n\n    .p-treeselect.p-invalid .p-treeselect-label.p-placeholder {\n        color: dt('treeselect.invalid.placeholder.color');\n    }\n\n    .p-treeselect:has(.p-select-clear-icon) .p-treeselect-label {\n        padding-inline-end: dt('treeselect.padding.x');\n    }\n\n    .p-treeselect.p-disabled .p-treeselect-label {\n        color: dt('treeselect.disabled.color');\n    }\n\n    .p-treeselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n\n    .p-treeselect-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('treeselect.overlay.background');\n        color: dt('treeselect.overlay.color');\n        border: 1px solid dt('treeselect.overlay.border.color');\n        border-radius: dt('treeselect.overlay.border.radius');\n        box-shadow: dt('treeselect.overlay.shadow');\n        overflow: hidden;\n        min-width: 100%;\n    }\n\n    .p-treeselect-tree-container {\n        overflow: auto;\n    }\n\n    .p-treeselect-empty-message {\n        padding: dt('treeselect.empty.message.padding');\n        background: transparent;\n    }\n\n    .p-treeselect-fluid {\n        display: flex;\n    }\n\n    .p-treeselect-overlay .p-tree {\n        padding: dt('treeselect.tree.padding');\n    }\n\n    .p-treeselect-overlay .p-tree-loading {\n        min-height: 3rem;\n    }\n\n    .p-treeselect-label .p-chip {\n        padding-block-start: calc(dt('treeselect.padding.y') / 2);\n        padding-block-end: calc(dt('treeselect.padding.y') / 2);\n        border-radius: dt('treeselect.chip.border.radius');\n    }\n\n    .p-treeselect-label:has(.p-chip) {\n        padding: calc(dt('treeselect.padding.y') / 2) calc(dt('treeselect.padding.x') / 2);\n    }\n\n    .p-treeselect-sm .p-treeselect-label {\n        font-size: dt('treeselect.sm.font.size');\n        padding-block: dt('treeselect.sm.padding.y');\n        padding-inline: dt('treeselect.sm.padding.x');\n    }\n\n    .p-treeselect-sm .p-treeselect-dropdown .p-icon {\n        font-size: dt('treeselect.sm.font.size');\n        width: dt('treeselect.sm.font.size');\n        height: dt('treeselect.sm.font.size');\n    }\n\n    .p-treeselect-lg .p-treeselect-label {\n        font-size: dt('treeselect.lg.font.size');\n        padding-block: dt('treeselect.lg.padding.y');\n        padding-inline: dt('treeselect.lg.padding.x');\n    }\n\n    .p-treeselect-lg .p-treeselect-dropdown .p-icon {\n        font-size: dt('treeselect.lg.font.size');\n        width: dt('treeselect.lg.font.size');\n        height: dt('treeselect.lg.font.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-treeselect.mjs
var _c0 = ["value"];
var _c1 = ["header"];
var _c2 = ["empty"];
var _c3 = ["footer"];
var _c4 = ["clearicon"];
var _c5 = ["triggericon"];
var _c6 = ["dropdownicon"];
var _c7 = ["filtericon"];
var _c8 = ["closeicon"];
var _c9 = ["itemtogglericon"];
var _c10 = ["itemcheckboxicon"];
var _c11 = ["itemloadingicon"];
var _c12 = ["focusInput"];
var _c13 = ["filter"];
var _c14 = ["tree"];
var _c15 = ["panel"];
var _c16 = ["overlay"];
var _c17 = ["firstHiddenFocusableEl"];
var _c18 = ["lastHiddenFocusableEl"];
var _c19 = (a0, a1) => ({
  $implicit: a0,
  placeholder: a1
});
var _c20 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c21 = (a0) => ({
  "max-height": a0
});
var _c22 = (a0) => ({
  $implicit: a0
});
var _c23 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function TreeSelect_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.valueTemplate || ctx_r1._valueTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c19, ctx_r1.value, ctx_r1.placeholder));
  }
}
function TreeSelect_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.label || "empty", " ");
  }
}
function TreeSelect_ng_template_6_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "p-chip", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("chipItem"));
    ɵɵproperty("pBind", ctx_r1.ptm("chipItem"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("pcChip"));
    ɵɵproperty("label", node_r3.label)("pt", ctx_r1.ptm("pcChip"));
  }
}
function TreeSelect_ng_template_6_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.placeholder || "empty");
  }
}
function TreeSelect_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_6_ng_template_1_div_0_Template, 2, 7, "div", 24)(1, TreeSelect_ng_template_6_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 18);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.emptyValue);
  }
}
function TreeSelect_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 17)(1, TreeSelect_ng_template_6_ng_template_1_Template, 2, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const chipsValueTemplate_r4 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.display === "comma")("ngIfElse", chipsValueTemplate_r4);
  }
}
function TreeSelect_ng_container_8__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 28);
    ɵɵlistener("click", function TreeSelect_ng_container_8__svg_svg_1_Template_svg_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
  }
}
function TreeSelect_ng_container_8_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_ng_container_8_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_container_8_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("click", function TreeSelect_ng_container_8_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clear($event));
    });
    ɵɵtemplate(1, TreeSelect_ng_container_8_span_2_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function TreeSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_container_8__svg_svg_1_Template, 1, 3, "svg", 26)(2, TreeSelect_ng_container_8_span_2_Template, 2, 4, "span", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.clearIconTemplate || ctx_r1.clearIconTemplate);
  }
}
function TreeSelect__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 31);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("dropdownIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
  }
}
function TreeSelect_span_11_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, TreeSelect_span_11_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("dropdownIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.triggerIconTemplate || ctx_r1._triggerIconTemplate || ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function TreeSelect_ng_template_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_ng_container_8_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_ng_container_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_ng_container_8_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function TreeSelect_ng_template_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_template_14_ng_container_8_ng_template_1_Template, 1, 1, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function TreeSelect_ng_template_14_9_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_9_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const expanded_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTogglerIconTemplate || ctx_r1._itemTogglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c22, expanded_r8));
  }
}
function TreeSelect_ng_template_14_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_9_ng_template_0_Template, 1, 4, "ng-template", null, 10, ɵɵtemplateRefExtractor);
  }
}
function TreeSelect_ng_template_14_10_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_10_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const selected_r9 = ctx.$implicit;
    const partialSelected_r10 = ctx.partialSelected;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c23, selected_r9, partialSelected_r10));
  }
}
function TreeSelect_ng_template_14_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_10_ng_template_0_Template, 1, 5, "ng-template", null, 11, ɵɵtemplateRefExtractor);
  }
}
function TreeSelect_ng_template_14_11_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_11_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemLoadingIconTemplate || ctx_r1._itemLoadingIconTemplate);
  }
}
function TreeSelect_ng_template_14_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_14_11_ng_template_0_Template, 1, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
  }
}
function TreeSelect_ng_template_14_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16, 5)(2, "span", 32, 6);
    ɵɵlistener("focus", function TreeSelect_ng_template_14_Template_span_focus_2_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFirstHiddenFocus($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, TreeSelect_ng_template_14_ng_container_4_Template, 1, 0, "ng-container", 23);
    ɵɵelementStart(5, "div", 16)(6, "p-tree", 33, 7);
    ɵɵlistener("selectionChange", function TreeSelect_ng_template_14_Template_p_tree_selectionChange_6_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelectionChange($event));
    })("onNodeExpand", function TreeSelect_ng_template_14_Template_p_tree_onNodeExpand_6_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeExpand($event));
    })("onNodeCollapse", function TreeSelect_ng_template_14_Template_p_tree_onNodeCollapse_6_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeCollapse($event));
    })("onNodeSelect", function TreeSelect_ng_template_14_Template_p_tree_onNodeSelect_6_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect($event));
    })("onNodeUnselect", function TreeSelect_ng_template_14_Template_p_tree_onNodeUnselect_6_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onUnselect($event));
    });
    ɵɵtemplate(8, TreeSelect_ng_template_14_ng_container_8_Template, 3, 0, "ng-container", 18)(9, TreeSelect_ng_template_14_9_Template, 2, 0, null, 18)(10, TreeSelect_ng_template_14_10_Template, 2, 0, null, 18)(11, TreeSelect_ng_template_14_11_Template, 2, 0, null, 18);
    ɵɵelementEnd()();
    ɵɵtemplate(12, TreeSelect_ng_template_14_ng_container_12_Template, 1, 0, "ng-container", 23);
    ɵɵelementStart(13, "span", 32, 8);
    ɵɵlistener("focus", function TreeSelect_ng_template_14_Template_span_focus_13_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLastHiddenFocus($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("panel"), ctx_r1.panelStyleClass, ctx_r1.panelClass));
    ɵɵproperty("ngStyle", ctx_r1.panelStyle)("pBind", ctx_r1.ptm("panel"));
    ɵɵattribute("id", ctx_r1.listId);
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r1.ptm("hiddenFirstFocusableEl"));
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(45, _c20, ctx_r1.value, ctx_r1.options));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("treeContainer"));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(48, _c21, ctx_r1.scrollHeight))("pBind", ctx_r1.ptm("treeContainer"));
    ɵɵadvance();
    ɵɵproperty("value", ctx_r1.options)("propagateSelectionDown", ctx_r1.propagateSelectionDown)("propagateSelectionUp", ctx_r1.propagateSelectionUp)("selectionMode", ctx_r1.selectionMode)("selection", ctx_r1.value)("metaKeySelection", ctx_r1.metaKeySelection)("emptyMessage", ctx_r1.emptyMessage)("filter", ctx_r1.filter)("filterBy", ctx_r1.filterBy)("filterMode", ctx_r1.filterMode)("filterPlaceholder", ctx_r1.filterPlaceholder)("filterLocale", ctx_r1.filterLocale)("filteredNodes", ctx_r1.filteredNodes)("virtualScroll", ctx_r1.virtualScroll)("virtualScrollItemSize", ctx_r1.virtualScrollItemSize)("virtualScrollOptions", ctx_r1.virtualScrollOptions)("_templateMap", ctx_r1.templateMap)("loading", ctx_r1.loading)("filterInputAutoFocus", ctx_r1.filterInputAutoFocus)("pt", ctx_r1.ptm("pcTree"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTogglerIconTemplate || ctx_r1._itemTogglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemLoadingIconTemplate || ctx_r1._itemLoadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(50, _c20, ctx_r1.value, ctx_r1.options));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("hiddenLastFocusableEl"));
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */

    .p-treeselect.ng-invalid.ng-dirty {
        border-color: dt('treeselect.invalid.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty.p-focus {
        border-color: dt('treeselect.focus.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect-clear-icon.p-icon {
        flex-shrink: 0;
    }
`
);
var inlineStyles = {
  root: ({
    instance
  }) => __spreadValues({
    position: instance.$appendTo() === "self" ? "relative" : void 0
  }, instance.containerStyle)
};
var classes = {
  root: ({
    instance
  }) => ["p-treeselect p-component p-inputwrapper", {
    "p-treeselect-display-chip": instance.display === "chip",
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-focus": instance.focused,
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputwrapper-filled": !instance.emptyValue,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-treeselect-open": instance.overlayVisible,
    "p-treeselect-clearable": instance.showClear,
    "p-treeselect-fluid": instance.hasFluid,
    "p-treeselect-sm p-inputfield-sm": instance.size() === "small",
    "p-treeselect-lg p-inputfield-lg": instance.size() === "large"
  }],
  labelContainer: "p-treeselect-label-container",
  label: ({
    instance
  }) => ["p-treeselect-label", {
    "p-placeholder": instance.label === instance.placeholder,
    "p-treeselect-label-empty": !instance.placeholder && instance.emptyValue
  }],
  clearIcon: "p-treeselect-clear-icon",
  chip: "p-treeselect-chip-item",
  pcChip: "p-treeselect-chip",
  dropdown: "p-treeselect-dropdown",
  dropdownIcon: "p-treeselect-dropdown-icon",
  panel: "p-treeselect-overlay p-component-overlay p-component",
  treeContainer: "p-treeselect-tree-container",
  emptyMessage: "p-treeselect-empty-message"
};
var TreeSelectStyle = class _TreeSelectStyle extends BaseStyle {
  name = "treeselect";
  style = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTreeSelectStyle_BaseFactory;
    return function TreeSelectStyle_Factory(__ngFactoryType__) {
      return (ɵTreeSelectStyle_BaseFactory || (ɵTreeSelectStyle_BaseFactory = ɵɵgetInheritedFactory(_TreeSelectStyle)))(__ngFactoryType__ || _TreeSelectStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeSelectStyle,
    factory: _TreeSelectStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSelectStyle, [{
    type: Injectable
  }], null, null);
})();
var TreeSelectClasses;
(function(TreeSelectClasses2) {
  TreeSelectClasses2["root"] = "p-treeselect";
  TreeSelectClasses2["labelContainer"] = "p-treeselect-label-container";
  TreeSelectClasses2["label"] = "p-treeselect-label";
  TreeSelectClasses2["chipItem"] = "p-treeselect-chip-item";
  TreeSelectClasses2["clearIcon"] = "p-treeselect-clear-icon";
  TreeSelectClasses2["pcChip"] = "p-treeselect-chip";
  TreeSelectClasses2["dropdown"] = "p-treeselect-dropdown";
  TreeSelectClasses2["dropdownIcon"] = "p-treeselect-dropdown-icon";
  TreeSelectClasses2["panel"] = "p-treeselect-overlay";
  TreeSelectClasses2["treeContainer"] = "p-treeselect-tree-container";
  TreeSelectClasses2["emptyMessage"] = "p-treeselect-empty-message";
})(TreeSelectClasses || (TreeSelectClasses = {}));
var TREESELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TreeSelect),
  multi: true
};
var TREESELECT_INSTANCE = new InjectionToken("TREESELECT_INSTANCE");
var TreeSelect = class _TreeSelect extends BaseEditableHolder {
  $pcTreeSelect = inject(TREESELECT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(TreeSelectStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  inputId;
  /**
   * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "400px";
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode = "single";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = "0";
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  placeholder;
  /**
   * Style class of the overlay panel.
   * @group Props
   */
  panelClass;
  /**
   * Inline style of the panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the container element.
   * @deprecated since v20.0.0, use `style` instead.
   * @group Props
   */
  containerStyle;
  /**
   * Style class of the container element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  containerStyleClass;
  /**
   * Inline style of the label element.
   * @group Props
   */
  labelStyle;
  /**
   * Style class of the label element.
   * @group Props
   */
  labelStyleClass;
  /**
   * Specifies the options for the overlay.
   * @group Props
   */
  overlayOptions;
  /**
   * Text to display when there are no options available. Defaults to value from PrimeNG locale configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * When specified, displays an input field to filter the items.
   * @group Props
   */
  filter = false;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy = "label";
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Determines whether the filter input should be automatically focused when the component is rendered.
   * @group Props
   */
  filterInputAutoFocus = true;
  /**
   * Whether checkbox selections propagate to descendant nodes.
   * @group Props
   */
  propagateSelectionDown = true;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @group Props
   */
  propagateSelectionUp = true;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = true;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * An array of treenodes.
   * @defaultValue undefined
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(options) {
    this._options = options;
    this.updateTreeState();
  }
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeSelectNodeExpandEvent} event - Custom node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeSelectNodeCollapseEvent} event - Custom node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when treeselect gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when treeselect loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeNodeUnSelectEvent} event - node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeNodeSelectEvent} event - node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  focusInput;
  filterViewChild;
  treeViewChild;
  panelEl;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  filteredNodes;
  filterValue = null;
  serializedValue;
  /**
   * Custom value template.
   * @group Templates
   */
  valueTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom empty message template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom clear icon template.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom trigger icon template.
   * @group Templates
   */
  triggerIconTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  /**
   * Custom close icon template.
   * @group Templates
   */
  closeIconTemplate;
  /**
   * Custom item toggler icon template.
   * @group Templates
   */
  itemTogglerIconTemplate;
  /**
   * Custom item checkbox icon template.
   * @group Templates
   */
  itemCheckboxIconTemplate;
  /**
   * Custom item loading icon template.
   * @group Templates
   */
  itemLoadingIconTemplate;
  templates;
  _valueTemplate;
  _headerTemplate;
  _emptyTemplate;
  _footerTemplate;
  _clearIconTemplate;
  _triggerIconTemplate;
  _filterIconTemplate;
  _closeIconTemplate;
  _itemTogglerIconTemplate;
  _itemCheckboxIconTemplate;
  _itemLoadingIconTemplate;
  _dropdownIconTemplate;
  focused;
  overlayVisible;
  value;
  expandedNodes = [];
  _options;
  templateMap;
  listId = "";
  onHostClick(event) {
    this.onClick(event);
  }
  onInit() {
    this.listId = s2("pn_id_") + "_list";
    this.updateTreeState();
  }
  onAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "value":
          this._valueTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "triggericon":
          this._triggerIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
        case "itemtogglericon":
          this._itemTogglerIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this._itemCheckboxIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "itemloadingicon":
          this._itemLoadingIconTemplate = item.template;
          break;
        default:
          if (item.name) this.templateMap[item.name] = item.template;
          else this.valueTemplate = item.template;
          break;
      }
    });
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.filter) {
          s(this.filterValue) && this.treeViewChild?._filter(this.filterValue);
          this.filterInputAutoFocus && this.filterViewChild?.nativeElement.focus();
        } else {
          let focusableElements = b(this.panelEl?.nativeElement);
          if (focusableElements && focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
        break;
    }
  }
  onOverlayBeforeHide(event) {
    let focusableElements = b(this.el.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
  onSelectionChange(event) {
    this.value = event;
    this.onModelChange(this.value);
    this.cd.markForCheck();
  }
  onClick(event) {
    if (this.$disabled()) {
      return;
    }
    if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target) && !R(event.target, "p-treeselect-close") && !R(event.target, "p-checkbox-box") && !R(event.target, "p-checkbox-icon")) {
      if (this.overlayVisible) {
        this.hide();
      } else {
        this.show();
      }
      this.focusInput?.nativeElement.focus();
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      //down
      case "ArrowDown":
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }
        this.onArrowDown(event);
        event.preventDefault();
        break;
      //space
      case "Space":
      case "Enter":
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }
        break;
      //escape
      case "Escape":
        if (this.overlayVisible) {
          this.hide();
          this.focusInput?.nativeElement.focus();
          event.preventDefault();
        }
        break;
      //tab
      case "Tab":
        this.onTabKey(event);
        break;
      default:
        break;
    }
  }
  onFilterInput(event) {
    this.filterValue = event.target.value;
    this.treeViewChild?._filter(this.filterValue);
    this.onFilter.emit({
      filter: this.filterValue,
      filteredValue: this.treeViewChild?.filteredNodes
    });
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
  }
  onArrowDown(event) {
    if (this.overlayVisible && this.panelEl?.nativeElement) {
      let focusableElements = b(this.panelEl.nativeElement, ".p-tree-node");
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
      event.preventDefault();
    }
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInput?.nativeElement ? vt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInput?.nativeElement;
    bt(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInput?.nativeElement ? Lt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInput?.nativeElement;
    bt(focusableEl);
  }
  show() {
    this.overlayVisible = true;
  }
  hide(event) {
    this.overlayVisible = false;
    this.resetFilter();
    this.onHide.emit(event);
    this.cd.markForCheck();
  }
  clear(event) {
    this.value = null;
    this.resetExpandedNodes();
    this.resetPartialSelected();
    this.onModelChange(this.value);
    this.onClear.emit();
    event.stopPropagation();
  }
  checkValue() {
    return this.value !== null && s(this.value);
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        bt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay?.nativeElement : this.firstHiddenFocusableElementOnOverlay?.nativeElement);
        event.preventDefault();
      } else {
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  hasFocusableElements() {
    return b(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  resetFilter() {
    if (this.filter && !this.resetFilterOnHide) {
      this.filteredNodes = this.treeViewChild?.filteredNodes;
      this.treeViewChild?.resetFilter();
    } else {
      this.filterValue = null;
    }
  }
  updateTreeState() {
    if (this.value) {
      let selectedNodes = this.selectionMode === "single" ? [this.value] : [...this.value];
      this.resetExpandedNodes();
      this.resetPartialSelected();
      if (selectedNodes && this.options) {
        this.updateTreeBranchState(null, null, selectedNodes);
      }
    }
  }
  updateTreeBranchState(node, path, selectedNodes) {
    if (node) {
      if (this.isSelected(node)) {
        this.expandPath(path);
        selectedNodes.splice(selectedNodes.indexOf(node), 1);
      }
      if (selectedNodes.length > 0 && node.children) {
        for (let childNode of node.children) {
          this.updateTreeBranchState(childNode, [...path, node], selectedNodes);
        }
      }
    } else {
      for (let childNode of this.options) {
        this.updateTreeBranchState(childNode, [], selectedNodes);
      }
    }
  }
  expandPath(expandedNodes) {
    for (let node of expandedNodes) {
      node.expanded = true;
    }
    this.expandedNodes = [...expandedNodes];
  }
  nodeExpand(event) {
    this.onNodeExpand.emit(event);
    this.expandedNodes.push(event.node);
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
  }
  nodeCollapse(event) {
    this.onNodeCollapse.emit(event);
    this.expandedNodes.splice(this.expandedNodes.indexOf(event.node), 1);
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
  }
  resetExpandedNodes() {
    for (let node of this.expandedNodes) {
      node.expanded = false;
    }
    this.expandedNodes = [];
  }
  resetPartialSelected(nodes = this.options) {
    if (!nodes) {
      return;
    }
    for (let node of nodes) {
      node.partialSelected = false;
      if (node.children && node.children?.length > 0) {
        this.resetPartialSelected(node.children);
      }
    }
  }
  findSelectedNodes(node, keys, selectedNodes) {
    if (node) {
      if (this.isSelected(node)) {
        selectedNodes.push(node);
        delete keys[node.key];
      }
      if (Object.keys(keys).length && node.children) {
        for (let childNode of node.children) {
          this.findSelectedNodes(childNode, keys, selectedNodes);
        }
      }
    } else {
      for (let childNode of this.options) {
        this.findSelectedNodes(childNode, keys, selectedNodes);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.value) {
      if (this.selectionMode === "single") {
        let areNodesEqual = this.value.key && this.value.key === node.key || this.value == node;
        index = areNodesEqual ? 0 : -1;
      } else {
        for (let i = 0; i < this.value.length; i++) {
          let selectedNode = this.value[i];
          let areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;
          if (areNodesEqual) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  onSelect(event) {
    this.onNodeSelect.emit(event);
    if (this.selectionMode === "single") {
      this.hide();
      this.focusInput?.nativeElement.focus();
    }
  }
  onUnselect(event) {
    this.onNodeUnselect.emit(event);
  }
  onInputFocus(event) {
    if (this.$disabled()) {
      return;
    }
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    this.value = value;
    this.updateTreeState();
    this.cd.markForCheck();
  }
  get emptyValue() {
    return !this.value || Object.keys(this.value).length === 0;
  }
  get emptyOptions() {
    return !this.options || this.options.length === 0;
  }
  get label() {
    let value = this.value || [];
    return value.length ? value.map((node) => node.label).join(", ") : this.selectionMode === "single" && this.value ? value.label : this.placeholder;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTreeSelect_BaseFactory;
    return function TreeSelect_Factory(__ngFactoryType__) {
      return (ɵTreeSelect_BaseFactory || (ɵTreeSelect_BaseFactory = ɵɵgetInheritedFactory(_TreeSelect)))(__ngFactoryType__ || _TreeSelect);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TreeSelect,
    selectors: [["p-treeSelect"], ["p-treeselect"], ["p-tree-select"]],
    contentQueries: function TreeSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.triggerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTogglerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemCheckboxIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemLoadingIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TreeSelect_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c12, 5);
        ɵɵviewQuery(_c13, 5);
        ɵɵviewQuery(_c14, 5);
        ɵɵviewQuery(_c15, 5);
        ɵɵviewQuery(_c16, 5);
        ɵɵviewQuery(_c17, 5);
        ɵɵviewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelEl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function TreeSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function TreeSelect_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.sx("root"));
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.containerStyleClass));
      }
    },
    inputs: {
      inputId: "inputId",
      scrollHeight: "scrollHeight",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      display: "display",
      selectionMode: "selectionMode",
      tabindex: "tabindex",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      placeholder: "placeholder",
      panelClass: "panelClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      containerStyle: "containerStyle",
      containerStyleClass: "containerStyleClass",
      labelStyle: "labelStyle",
      labelStyleClass: "labelStyleClass",
      overlayOptions: "overlayOptions",
      emptyMessage: "emptyMessage",
      filter: [2, "filter", "filter", booleanAttribute],
      filterBy: "filterBy",
      filterMode: "filterMode",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      filterInputAutoFocus: [2, "filterInputAutoFocus", "filterInputAutoFocus", booleanAttribute],
      propagateSelectionDown: [2, "propagateSelectionDown", "propagateSelectionDown", booleanAttribute],
      propagateSelectionUp: [2, "propagateSelectionUp", "propagateSelectionUp", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      options: "options",
      loading: [2, "loading", "loading", booleanAttribute],
      size: [1, "size"],
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onNodeUnselect: "onNodeUnselect",
      onNodeSelect: "onNodeSelect"
    },
    features: [ɵɵProvidersFeature([TREESELECT_VALUE_ACCESSOR, TreeSelectStyle, {
      provide: TREESELECT_INSTANCE,
      useExisting: _TreeSelect
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TreeSelect
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 16,
    vars: 35,
    consts: [["focusInput", ""], ["defaultValueTemplate", ""], ["overlay", ""], ["content", ""], ["chipsValueTemplate", ""], ["panel", ""], ["firstHiddenFocusableEl", ""], ["tree", ""], ["lastHiddenFocusableEl", ""], ["empty", ""], ["togglericon", ""], ["checkboxicon", ""], ["loadingicon", ""], [1, "p-hidden-accessible", 3, "pBind"], ["type", "text", "role", "combobox", "readonly", "", 3, "focus", "blur", "keydown", "pAutoFocus", "pBind"], [3, "pBind"], [3, "ngStyle", "pBind"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["role", "button", "aria-haspopup", "tree", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onBeforeHide", "onShow", "onHide", "hostAttrSelector", "visible", "options", "target", "appendTo", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind", 4, "ngFor", "ngForOf"], [3, "label", "pt"], ["data-p-icon", "times", 3, "class", "pBind", "click", 4, "ngIf"], [3, "class", "pBind", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-down", 3, "pBind"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "pBind"], [3, "selectionChange", "onNodeExpand", "onNodeCollapse", "onNodeSelect", "onNodeUnselect", "value", "propagateSelectionDown", "propagateSelectionUp", "selectionMode", "selection", "metaKeySelection", "emptyMessage", "filter", "filterBy", "filterMode", "filterPlaceholder", "filterLocale", "filteredNodes", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "_templateMap", "loading", "filterInputAutoFocus", "pt"]],
    template: function TreeSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 13)(1, "input", 14, 0);
        ɵɵlistener("focus", function TreeSelect_Template_input_focus_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function TreeSelect_Template_input_blur_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("keydown", function TreeSelect_Template_input_keydown_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        });
        ɵɵelementEnd()();
        ɵɵelementStart(3, "div", 15)(4, "div", 16);
        ɵɵtemplate(5, TreeSelect_ng_container_5_Template, 2, 5, "ng-container", 17)(6, TreeSelect_ng_template_6_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd()();
        ɵɵtemplate(8, TreeSelect_ng_container_8_Template, 3, 2, "ng-container", 18);
        ɵɵelementStart(9, "div", 19);
        ɵɵtemplate(10, TreeSelect__svg_svg_10_Template, 1, 3, "svg", 20)(11, TreeSelect_span_11_Template, 2, 4, "span", 21);
        ɵɵelementEnd();
        ɵɵelementStart(12, "p-overlay", 22, 2);
        ɵɵtwoWayListener("visibleChange", function TreeSelect_Template_p_overlay_visibleChange_12_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onAnimationStart", function TreeSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onOverlayAnimationStart($event));
        })("onBeforeHide", function TreeSelect_Template_p_overlay_onBeforeHide_12_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onOverlayBeforeHide($event));
        })("onShow", function TreeSelect_Template_p_overlay_onShow_12_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onShow.emit($event));
        })("onHide", function TreeSelect_Template_p_overlay_onHide_12_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.hide($event));
        });
        ɵɵtemplate(14, TreeSelect_ng_template_14_Template, 15, 53, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const defaultValueTemplate_r11 = ɵɵreference(7);
        ɵɵproperty("pBind", ctx.ptm("hiddenInputContainer"));
        ɵɵattribute("data-p-hidden-accessible", true);
        ɵɵadvance();
        ɵɵproperty("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("hiddenInput"));
        ɵɵattribute("id", ctx.inputId)("disabled", ctx.$disabled() ? "" : void 0)("tabindex", !ctx.$disabled() ? ctx.tabindex : -1)("aria-controls", ctx.overlayVisible ? ctx.listId : null)("aria-haspopup", "tree")("aria-expanded", ctx.overlayVisible ?? false)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel || (ctx.label === "p-emptylabel" ? void 0 : ctx.label));
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("labelContainer"));
        ɵɵproperty("pBind", ctx.ptm("labelContainer"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cn(ctx.cx("label"), ctx.labelStyleClass));
        ɵɵproperty("ngStyle", ctx.labelStyle)("pBind", ctx.ptm("label"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.valueTemplate || ctx._valueTemplate)("ngIfElse", defaultValueTemplate_r11);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.checkValue() && !ctx.$disabled() && ctx.showClear);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("dropdown"));
        ɵɵproperty("pBind", ctx.ptm("dropdown"));
        ɵɵattribute("aria-expanded", ctx.overlayVisible ?? false)("aria-label", "treeselect trigger");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.triggerIconTemplate && !ctx._triggerIconTemplate && !ctx.dropdownIconTemplate && !ctx._dropdownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.triggerIconTemplate || ctx._triggerIconTemplate || ctx.dropdownIconTemplate || ctx._dropdownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("hostAttrSelector", ctx.$attrSelector);
        ɵɵtwoWayProperty("visible", ctx.overlayVisible);
        ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.$appendTo())("pt", ctx.ptm("pcOverlay"));
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, SharedModule, Tree, AutoFocus, TimesIcon, ChevronDownIcon, Chip, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSelect, [{
    type: Component,
    args: [{
      selector: "p-treeSelect, p-treeselect, p-tree-select",
      standalone: true,
      imports: [CommonModule, Overlay, SharedModule, Tree, AutoFocus, TimesIcon, ChevronDownIcon, Chip, Bind],
      hostDirectives: [Bind],
      template: `
        <div class="p-hidden-accessible" [pBind]="ptm('hiddenInputContainer')" [attr.data-p-hidden-accessible]="true">
            <input
                #focusInput
                type="text"
                role="combobox"
                [attr.id]="inputId"
                readonly
                [attr.disabled]="$disabled() ? '' : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.tabindex]="!$disabled() ? tabindex : -1"
                [attr.aria-controls]="overlayVisible ? listId : null"
                [attr.aria-haspopup]="'tree'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel || (label === 'p-emptylabel' ? undefined : label)"
                [pAutoFocus]="autofocus"
                [pBind]="ptm('hiddenInput')"
            />
        </div>
        <div [class]="cx('labelContainer')" [pBind]="ptm('labelContainer')">
            <div [class]="cn(cx('label'), labelStyleClass)" [ngStyle]="labelStyle" [pBind]="ptm('label')">
                <ng-container *ngIf="valueTemplate || _valueTemplate; else defaultValueTemplate">
                    <ng-container *ngTemplateOutlet="valueTemplate || _valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>
                </ng-container>
                <ng-template #defaultValueTemplate>
                    <ng-container *ngIf="display === 'comma'; else chipsValueTemplate">
                        {{ label || 'empty' }}
                    </ng-container>
                    <ng-template #chipsValueTemplate>
                        <div *ngFor="let node of value" [class]="cx('chipItem')" [pBind]="ptm('chipItem')">
                            <p-chip [label]="node.label" [class]="cx('pcChip')" [pt]="ptm('pcChip')" />
                        </div>
                        <ng-container *ngIf="emptyValue">{{ placeholder || 'empty' }}</ng-container>
                    </ng-template>
                </ng-template>
            </div>
        </div>
        <ng-container *ngIf="checkValue() && !$disabled() && showClear">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear($event)" [pBind]="ptm('clearIcon')" />
            <span *ngIf="clearIconTemplate || clearIconTemplate" [class]="cx('clearIcon')" (click)="clear($event)" [pBind]="ptm('clearIcon')">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <div [class]="cx('dropdown')" role="button" aria-haspopup="tree" [attr.aria-expanded]="overlayVisible ?? false" [attr.aria-label]="'treeselect trigger'" [pBind]="ptm('dropdown')">
            <svg data-p-icon="chevron-down" *ngIf="!triggerIconTemplate && !_triggerIconTemplate && !dropdownIconTemplate && !_dropdownIconTemplate" [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')" />
            <span *ngIf="triggerIconTemplate || _triggerIconTemplate || dropdownIconTemplate || _dropdownIconTemplate" [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')">
                <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate || dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
            </span>
        </div>
        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            [pt]="ptm('pcOverlay')"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onBeforeHide)="onOverlayBeforeHide($event)"
            (onShow)="onShow.emit($event)"
            (onHide)="hide($event)"
        >
            <ng-template #content>
                <div #panel [attr.id]="listId" [class]="cn(cx('panel'), panelStyleClass, panelClass)" [ngStyle]="panelStyle" [pBind]="ptm('panel')">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('hiddenFirstFocusableEl')"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: value, options: options }"></ng-container>
                    <div [class]="cx('treeContainer')" [ngStyle]="{ 'max-height': scrollHeight }" [pBind]="ptm('treeContainer')">
                        <p-tree
                            #tree
                            [value]="options"
                            [propagateSelectionDown]="propagateSelectionDown"
                            [propagateSelectionUp]="propagateSelectionUp"
                            [selectionMode]="selectionMode"
                            (selectionChange)="onSelectionChange($event)"
                            [selection]="value"
                            [metaKeySelection]="metaKeySelection"
                            (onNodeExpand)="nodeExpand($event)"
                            (onNodeCollapse)="nodeCollapse($event)"
                            (onNodeSelect)="onSelect($event)"
                            [emptyMessage]="emptyMessage"
                            (onNodeUnselect)="onUnselect($event)"
                            [filter]="filter"
                            [filterBy]="filterBy"
                            [filterMode]="filterMode"
                            [filterPlaceholder]="filterPlaceholder"
                            [filterLocale]="filterLocale"
                            [filteredNodes]="filteredNodes"
                            [virtualScroll]="virtualScroll"
                            [virtualScrollItemSize]="virtualScrollItemSize"
                            [virtualScrollOptions]="virtualScrollOptions"
                            [_templateMap]="templateMap"
                            [loading]="loading"
                            [filterInputAutoFocus]="filterInputAutoFocus"
                            [pt]="ptm('pcTree')"
                        >
                            <ng-container *ngIf="emptyTemplate || _emptyTemplate">
                                <ng-template #empty>
                                    <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                </ng-template>
                            </ng-container>
                            <ng-template #togglericon let-expanded *ngIf="itemTogglerIconTemplate || _itemTogglerIconTemplate">
                                <ng-container *ngTemplateOutlet="itemTogglerIconTemplate || _itemTogglerIconTemplate; context: { $implicit: expanded }"></ng-container>
                            </ng-template>
                            <ng-template #checkboxicon let-selected let-partialSelected="partialSelected" *ngIf="itemCheckboxIconTemplate || _itemCheckboxIconTemplate">
                                <ng-container *ngTemplateOutlet="itemCheckboxIconTemplate || _itemCheckboxIconTemplate; context: { $implicit: selected, partialSelected: partialSelected }"></ng-container>
                            </ng-template>
                            <ng-template #loadingicon *ngIf="itemLoadingIconTemplate || _itemLoadingIconTemplate">
                                <ng-container *ngTemplateOutlet="itemLoadingIconTemplate || _itemLoadingIconTemplate"></ng-container>
                            </ng-template>
                        </p-tree>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: value, options: options }"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('hiddenLastFocusableEl')"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TREESELECT_VALUE_ACCESSOR, TreeSelectStyle, {
        provide: TREESELECT_INSTANCE,
        useExisting: TreeSelect
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TreeSelect
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), containerStyleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], null, {
    inputId: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    containerStyleClass: [{
      type: Input
    }],
    labelStyle: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterMode: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    filterInputAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionDown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionUp: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    options: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    focusInput: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    treeViewChild: [{
      type: ViewChild,
      args: ["tree"]
    }],
    panelEl: [{
      type: ViewChild,
      args: ["panel"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    valueTemplate: [{
      type: ContentChild,
      args: ["value", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    itemTogglerIconTemplate: [{
      type: ContentChild,
      args: ["itemtogglericon", {
        descendants: false
      }]
    }],
    itemCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["itemcheckboxicon", {
        descendants: false
      }]
    }],
    itemLoadingIconTemplate: [{
      type: ContentChild,
      args: ["itemloadingicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var TreeSelectModule = class _TreeSelectModule {
  static ɵfac = function TreeSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeSelectModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TreeSelectModule,
    imports: [TreeSelect, SharedModule],
    exports: [TreeSelect, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TreeSelect, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSelectModule, [{
    type: NgModule,
    args: [{
      imports: [TreeSelect, SharedModule],
      exports: [TreeSelect, SharedModule]
    }]
  }], null, null);
})();
export {
  TREESELECT_VALUE_ACCESSOR,
  TreeSelect,
  TreeSelectClasses,
  TreeSelectModule,
  TreeSelectStyle
};
//# sourceMappingURL=primeng_treeselect.js.map
