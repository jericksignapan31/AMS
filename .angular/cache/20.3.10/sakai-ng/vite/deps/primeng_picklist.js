import {
  CdkDropListGroup,
  DragDropModule,
  Listbox,
  moveItemInArray
} from "./chunk-KSXZYAET.js";
import "./chunk-5JOF7CKY.js";
import "./chunk-TX7QNBPM.js";
import "./chunk-YN3CW5YR.js";
import "./chunk-P23VO7CN.js";
import "./chunk-AG42BXM6.js";
import "./chunk-6OGXVJQK.js";
import "./chunk-5NGDX53P.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonModule
} from "./chunk-SPWXAIB5.js";
import "./chunk-RVGJXB7F.js";
import "./chunk-HQP6WWBM.js";
import "./chunk-UDJNLJ7R.js";
import "./chunk-P6SMTJBG.js";
import {
  Ripple
} from "./chunk-2NNT3GX6.js";
import {
  AngleDoubleDownIcon,
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleDoubleUpIcon,
  AngleDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  AngleUpIcon
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
  FilterService,
  PrimeTemplate,
  SharedModule
} from "./chunk-AEUBHVGT.js";
import {
  Bind,
  BindModule
} from "./chunk-SSPEJKN4.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C225D66Z.js";
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
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
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
  Y2 as Y,
  _t,
  h,
  l,
  s3 as s
} from "./chunk-U4LT4ZJN.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/picklist/index.mjs
var style = "\n    .p-picklist {\n        display: flex;\n        gap: dt('picklist.gap');\n    }\n\n    .p-picklist-controls {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: dt('picklist.controls.gap');\n    }\n\n    .p-picklist-list-container {\n        flex: 1 1 50%;\n    }\n\n    .p-picklist .p-listbox {\n        height: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-picklist.mjs
var _c0 = ["item"];
var _c1 = ["sourceHeader"];
var _c2 = ["targetHeader"];
var _c3 = ["sourceFilter"];
var _c4 = ["targetFilter"];
var _c5 = ["emptymessagesource"];
var _c6 = ["emptyfiltermessagesource"];
var _c7 = ["emptymessagetarget"];
var _c8 = ["emptyfiltermessagetarget"];
var _c9 = ["moveupicon"];
var _c10 = ["movetopicon"];
var _c11 = ["movedownicon"];
var _c12 = ["movebottomicon"];
var _c13 = ["movetotargeticon"];
var _c14 = ["movealltotargeticon"];
var _c15 = ["movetosourceicon"];
var _c16 = ["movealltosourceicon"];
var _c17 = ["targetfiltericon"];
var _c18 = ["sourcefiltericon"];
var _c19 = ["sourcelist"];
var _c20 = ["targetlist"];
var _c21 = (a0) => ({
  $implicit: a0
});
var _c22 = (a0) => ({
  options: a0
});
var _c23 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  index: a1,
  selected: a2,
  disabled: a3
});
function PickList_div_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcSourceMoveUpButton")["icon"]);
  }
}
function PickList_div_1_3_ng_template_0_Template(rf, ctx) {
}
function PickList_div_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_1_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 21);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcSourceMoveTopButton")["icon"]);
  }
}
function PickList_div_1_6_ng_template_0_Template(rf, ctx) {
}
function PickList_div_1_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_1_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 22);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcSourceMoveDownButton")["icon"]);
  }
}
function PickList_div_1_9_ng_template_0_Template(rf, ctx) {
}
function PickList_div_1_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_1_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcSourceMoveBottomButton")["icon"]);
  }
}
function PickList_div_1_12_ng_template_0_Template(rf, ctx) {
}
function PickList_div_1_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_1_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "button", 14);
    ɵɵlistener("click", function PickList_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      const sourcelist_r4 = ɵɵreference(4);
      return ɵɵresetView(ctx_r2.moveUp(sourcelist_r4, ctx_r2.source, ctx_r2.selectedItemsSource, ctx_r2.onSourceReorder, ctx_r2.SOURCE_LIST));
    });
    ɵɵtemplate(2, PickList_div_1__svg_svg_2_Template, 1, 1, "svg", 15)(3, PickList_div_1_3_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 14);
    ɵɵlistener("click", function PickList_div_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      const sourcelist_r4 = ɵɵreference(4);
      return ɵɵresetView(ctx_r2.moveTop(sourcelist_r4, ctx_r2.source, ctx_r2.selectedItemsSource, ctx_r2.onSourceReorder, ctx_r2.SOURCE_LIST));
    });
    ɵɵtemplate(5, PickList_div_1__svg_svg_5_Template, 1, 1, "svg", 17)(6, PickList_div_1_6_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 12);
    ɵɵlistener("click", function PickList_div_1_Template_button_click_7_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      const sourcelist_r4 = ɵɵreference(4);
      return ɵɵresetView(ctx_r2.moveDown(sourcelist_r4, ctx_r2.source, ctx_r2.selectedItemsSource, ctx_r2.onSourceReorder, ctx_r2.SOURCE_LIST));
    });
    ɵɵtemplate(8, PickList_div_1__svg_svg_8_Template, 1, 1, "svg", 18)(9, PickList_div_1_9_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 12);
    ɵɵlistener("click", function PickList_div_1_Template_button_click_10_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      const sourcelist_r4 = ɵɵreference(4);
      return ɵɵresetView(ctx_r2.moveBottom(sourcelist_r4, ctx_r2.source, ctx_r2.selectedItemsSource, ctx_r2.onSourceReorder, ctx_r2.SOURCE_LIST));
    });
    ɵɵtemplate(11, PickList_div_1__svg_svg_11_Template, 1, 1, "svg", 19)(12, PickList_div_1_12_Template, 1, 0, null, 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("sourceControls"));
    ɵɵproperty("pBind", ctx_r2.ptm("sourceControls"));
    ɵɵattribute("data-pc-group-section", "controls");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.sourceMoveDisabled())("buttonProps", ctx_r2.getButtonProps("moveup"))("pt", ctx_r2.ptm("pcSourceMoveUpButton"));
    ɵɵattribute("aria-label", ctx_r2.moveUpAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveUpIconTemplate && !ctx_r2._moveUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveUpIconTemplate || ctx_r2._moveUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.sourceMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movetop"))("pt", ctx_r2.ptm("pcSourceMoveTopButton"));
    ɵɵattribute("aria-label", ctx_r2.moveTopAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveTopIconTemplate && !ctx_r2._moveTopIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveTopIconTemplate || ctx_r2._moveTopIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.sourceMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movedown"))("pt", ctx_r2.ptm("pcSourceMoveDownButton"));
    ɵɵattribute("aria-label", ctx_r2.moveDownAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveDownIconTemplate && !ctx_r2._moveDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveDownIconTemplate || ctx_r2._moveDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.sourceMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movebottom"))("pt", ctx_r2.ptm("pcSourceMoveBottomButton"));
    ɵɵattribute("aria-label", ctx_r2.moveBottomAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveBottomIconTemplate || ctx_r2._moveBottomIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveBottomIconTemplate || ctx_r2._moveBottomIconTemplate);
  }
}
function PickList_ng_container_5_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.sourceHeader);
  }
}
function PickList_ng_container_5_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function PickList_ng_container_5_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_5_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_5_ng_template_1_div_0_Template, 2, 1, "div", 11)(1, PickList_ng_container_5_ng_template_1_1_Template, 1, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r2.sourceHeaderTemplate && !ctx_r2._sourceHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.sourceHeaderTemplate || ctx_r2._sourceHeaderTemplate);
  }
}
function PickList_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_5_ng_template_1_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_6_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function PickList_ng_container_6_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_6_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_6_ng_template_1_0_Template, 1, 0, null, 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.sourceFilterTemplate || ctx_r2._sourceFilterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c22, ctx_r2.sourceFilterOptions));
  }
}
function PickList_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_6_ng_template_1_Template, 1, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.sourceFilterIconTemplate || ctx_r2._sourceFilterIconTemplate);
  }
}
function PickList_ng_container_8_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_8_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const selected_r7 = ctx.selected;
    const disabled_r8 = ctx.disabled;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c23, item_r5, index_r6, selected_r7, disabled_r8));
  }
}
function PickList_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_8_ng_template_1_Template, 1, 7, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_9_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_9_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyMessageSourceTemplate || ctx_r2._emptyMessageSourceTemplate);
  }
}
function PickList_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_9_ng_template_1_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_10_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_10_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyFilterMessageSourceTemplate || ctx_r2._emptyFilterMessageSourceTemplate);
  }
}
function PickList_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_10_ng_template_1_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_13__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveToTargetButton")["icon"]);
  }
}
function PickList_ng_container_13__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 22);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveToTargetButton")["icon"]);
  }
}
function PickList_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_13__svg_svg_1_Template, 1, 1, "svg", 24)(2, PickList_ng_container_13__svg_svg_2_Template, 1, 1, "svg", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.viewChanged);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.viewChanged);
  }
}
function PickList_14_ng_template_0_Template(rf, ctx) {
}
function PickList_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_16__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveAllToTargetButton")["icon"]);
  }
}
function PickList_ng_container_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveAllToTargetButton")["icon"]);
  }
}
function PickList_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_16__svg_svg_1_Template, 1, 1, "svg", 26)(2, PickList_ng_container_16__svg_svg_2_Template, 1, 1, "svg", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.viewChanged);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.viewChanged);
  }
}
function PickList_17_ng_template_0_Template(rf, ctx) {
}
function PickList_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_19__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 29);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveToSourceButton")["icon"]);
  }
}
function PickList_ng_container_19__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveToSourceButton")["icon"]);
  }
}
function PickList_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_19__svg_svg_1_Template, 1, 1, "svg", 28)(2, PickList_ng_container_19__svg_svg_2_Template, 1, 1, "svg", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.viewChanged);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.viewChanged);
  }
}
function PickList_20_ng_template_0_Template(rf, ctx) {
}
function PickList_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_20_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_22__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 31);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveAllToSourceButton")["icon"]);
  }
}
function PickList_ng_container_22__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 21);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcMoveAllToSourceButton")["icon"]);
  }
}
function PickList_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_22__svg_svg_1_Template, 1, 1, "svg", 30)(2, PickList_ng_container_22__svg_svg_2_Template, 1, 1, "svg", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.viewChanged);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.viewChanged);
  }
}
function PickList_23_ng_template_0_Template(rf, ctx) {
}
function PickList_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_23_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_27_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.targetHeader);
  }
}
function PickList_ng_container_27_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function PickList_ng_container_27_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_27_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_27_ng_template_1_div_0_Template, 2, 1, "div", 11)(1, PickList_ng_container_27_ng_template_1_1_Template, 1, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r2.targetHeaderTemplate && !ctx_r2._targetHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.targetHeaderTemplate || ctx_r2._targetHeaderTemplate);
  }
}
function PickList_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_27_ng_template_1_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_28_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function PickList_ng_container_28_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_28_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_ng_container_28_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_28_ng_template_1_0_Template, 1, 0, null, 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.targetFilterTemplate || ctx_r2._targetFilterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c22, ctx_r2.targetFilterOptions));
  }
}
function PickList_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_28_ng_template_1_Template, 1, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_29_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.targetFilterIconTemplate || ctx_r2._targetFilterIconTemplate);
  }
}
function PickList_ng_container_30_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_30_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_30_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    const selected_r11 = ctx.selected;
    const disabled_r12 = ctx.disabled;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c23, item_r9, index_r10, selected_r11, disabled_r12));
  }
}
function PickList_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_30_ng_template_1_Template, 1, 7, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_31_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_31_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyMessageTargetTemplate || ctx_r2._emptyMessageTargetTemplate);
  }
}
function PickList_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_31_ng_template_1_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_ng_container_32_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PickList_ng_container_32_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_ng_container_32_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyFilterMessageTargetTemplate || ctx_r2._emptyFilterMessageTargetTemplate);
  }
}
function PickList_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickList_ng_container_32_ng_template_1_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function PickList_div_33__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcTargetMoveUpButton")["icon"]);
  }
}
function PickList_div_33_3_ng_template_0_Template(rf, ctx) {
}
function PickList_div_33_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_33_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_33__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 21);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcTargetMoveTopButton")["icon"]);
  }
}
function PickList_div_33_6_ng_template_0_Template(rf, ctx) {
}
function PickList_div_33_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_33_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_33__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 22);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcTargetMoveDownButton")["icon"]);
  }
}
function PickList_div_33_9_ng_template_0_Template(rf, ctx) {
}
function PickList_div_33_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_33_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_33__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcTargetMoveBottomButton")["icon"]);
  }
}
function PickList_div_33_12_ng_template_0_Template(rf, ctx) {
}
function PickList_div_33_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PickList_div_33_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PickList_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "button", 32);
    ɵɵlistener("click", function PickList_div_33_Template_button_click_1_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      const targetlist_r14 = ɵɵreference(26);
      return ɵɵresetView(ctx_r2.moveUp(targetlist_r14, ctx_r2.target, ctx_r2.selectedItemsTarget, ctx_r2.onTargetReorder, ctx_r2.TARGET_LIST));
    });
    ɵɵtemplate(2, PickList_div_33__svg_svg_2_Template, 1, 1, "svg", 15)(3, PickList_div_33_3_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 12);
    ɵɵlistener("click", function PickList_div_33_Template_button_click_4_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      const targetlist_r14 = ɵɵreference(26);
      return ɵɵresetView(ctx_r2.moveTop(targetlist_r14, ctx_r2.target, ctx_r2.selectedItemsTarget, ctx_r2.onTargetReorder, ctx_r2.TARGET_LIST));
    });
    ɵɵtemplate(5, PickList_div_33__svg_svg_5_Template, 1, 1, "svg", 17)(6, PickList_div_33_6_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 12);
    ɵɵlistener("click", function PickList_div_33_Template_button_click_7_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      const targetlist_r14 = ɵɵreference(26);
      return ɵɵresetView(ctx_r2.moveDown(targetlist_r14, ctx_r2.target, ctx_r2.selectedItemsTarget, ctx_r2.onTargetReorder, ctx_r2.TARGET_LIST));
    });
    ɵɵtemplate(8, PickList_div_33__svg_svg_8_Template, 1, 1, "svg", 18)(9, PickList_div_33_9_Template, 1, 0, null, 16);
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 12);
    ɵɵlistener("click", function PickList_div_33_Template_button_click_10_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      const targetlist_r14 = ɵɵreference(26);
      return ɵɵresetView(ctx_r2.moveBottom(targetlist_r14, ctx_r2.target, ctx_r2.selectedItemsTarget, ctx_r2.onTargetReorder, ctx_r2.TARGET_LIST));
    });
    ɵɵtemplate(11, PickList_div_33__svg_svg_11_Template, 1, 1, "svg", 19)(12, PickList_div_33_12_Template, 1, 0, null, 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("targetControls"));
    ɵɵproperty("pBind", ctx_r2.ptm("targetControls"));
    ɵɵattribute("data-pc-group-section", "controls");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.targetMoveDisabled())("buttonProps", ctx_r2.getButtonProps("moveup"))("pt", ctx_r2.ptm("pcTargetMoveUpButton"));
    ɵɵattribute("aria-label", ctx_r2.moveUpAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveUpIconTemplate && !ctx_r2._moveUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveUpIconTemplate || ctx_r2._moveUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.targetMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movetop"))("pt", ctx_r2.ptm("pcTargetMoveTopButton"));
    ɵɵattribute("aria-label", ctx_r2.moveTopAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveTopIconTemplate && !ctx_r2._moveTopIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveTopIconTemplate || ctx_r2.moveTopIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.targetMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movedown"))("pt", ctx_r2.ptm("pcTargetMoveDownButton"));
    ɵɵattribute("aria-label", ctx_r2.moveDownAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveDownIconTemplate && !ctx_r2._moveDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveDownIconTemplate || ctx_r2._moveDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r2.targetMoveDisabled())("buttonProps", ctx_r2.getButtonProps("movebottom"))("pt", ctx_r2.ptm("pcTargetMoveBottomButton"));
    ɵɵattribute("aria-label", ctx_r2.moveBottomAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.moveBottomIconTemplate && !ctx_r2._moveBottomIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.moveBottomIconTemplate || ctx_r2._moveBottomIconTemplate);
  }
}
var classes = {
  root: () => ["p-picklist p-component"],
  sourceControls: "p-picklist-controls p-picklist-source-controls",
  sourceListContainer: "p-picklist-list-container p-picklist-source-list-container",
  transferControls: "p-picklist-controls p-picklist-transfer-controls",
  targetListContainer: "p-picklist-list-container p-picklist-target-list-container",
  targetControls: "p-picklist-controls p-picklist-target-controls"
};
var PickListStyle = class _PickListStyle extends BaseStyle {
  name = "picklist";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPickListStyle_BaseFactory;
    return function PickListStyle_Factory(__ngFactoryType__) {
      return (ɵPickListStyle_BaseFactory || (ɵPickListStyle_BaseFactory = ɵɵgetInheritedFactory(_PickListStyle)))(__ngFactoryType__ || _PickListStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PickListStyle,
    factory: _PickListStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickListStyle, [{
    type: Injectable
  }], null, null);
})();
var PickListClasses;
(function(PickListClasses2) {
  PickListClasses2["root"] = "p-picklist";
  PickListClasses2["sourceControls"] = "p-picklist-source-controls";
  PickListClasses2["sourceListContainer"] = "p-picklist-source-list-container";
  PickListClasses2["transferControls"] = "p-picklist-transfer-controls";
  PickListClasses2["targetListContainer"] = "p-picklist-target-list-container";
  PickListClasses2["targetControls"] = "p-picklist-target-controls";
})(PickListClasses || (PickListClasses = {}));
var PICKLIST_INSTANCE = new InjectionToken("PICKLIST_INSTANCE");
var PickList = class _PickList extends BaseComponent {
  hostName = "";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcPickList = inject(PICKLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * An array of objects for the source list.
   * @group Props
   */
  source;
  /**
   * An array of objects for the target list.
   * @group Props
   */
  target;
  /**
   * Name of the field that uniquely identifies the options.
   * @group Props
   */
  dataKey;
  /**
   * Text for the source list caption
   * @group Props
   */
  sourceHeader;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines a string that labels the move to right button for accessibility.
   * @group Props
   */
  rightButtonAriaLabel;
  /**
   * Defines a string that labels the move to left button for accessibility.
   * @group Props
   */
  leftButtonAriaLabel;
  /**
   * Defines a string that labels the move to all right button for accessibility.
   * @group Props
   */
  allRightButtonAriaLabel;
  /**
   * Defines a string that labels the move to all left button for accessibility.
   * @group Props
   */
  allLeftButtonAriaLabel;
  /**
   * Defines a string that labels the move to up button for accessibility.
   * @group Props
   */
  upButtonAriaLabel;
  /**
   * Defines a string that labels the move to down button for accessibility.
   * @group Props
   */
  downButtonAriaLabel;
  /**
   * Defines a string that labels the move to top button for accessibility.
   * @group Props
   */
  topButtonAriaLabel;
  /**
   * Defines a string that labels the move to bottom button for accessibility.
   * @group Props
   */
  bottomButtonAriaLabel;
  /**
   * Defines a string that labels the source list.
   * @group Props
   */
  sourceAriaLabel;
  /**
   * Defines a string that labels the target list.
   * @group Props
   */
  targetAriaLabel;
  /**
   * Text for the target list caption
   * @group Props
   */
  targetHeader;
  /**
   * When enabled orderlist adjusts its controls based on screen size.
   * @group Props
   */
  responsive;
  /**
   * When specified displays an input field to filter the items on keyup and decides which field to search (Accepts multiple fields with a comma).
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity. Use sourceTrackBy or targetTrackBy in case different algorithms are needed per list.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy in source list, default algorithm checks for object identity.
   * @group Props
   */
  sourceTrackBy;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy in target list, default algorithm checks for object identity.
   * @group Props
   */
  targetTrackBy;
  /**
   * Whether to show filter input for source list when filterBy is enabled.
   * @group Props
   */
  showSourceFilter = true;
  /**
   * Whether to show filter input for target list when filterBy is enabled.
   * @group Props
   */
  showTargetFilter = true;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
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
   * Inline style of the source list element.
   * @group Props
   */
  sourceStyle;
  /**
   * Inline style of the target list element.
   * @group Props
   */
  targetStyle;
  /**
   * Whether to show buttons of source list.
   * @group Props
   */
  showSourceControls = true;
  /**
   * Whether to show buttons of target list.
   * @group Props
   */
  showTargetControls = true;
  /**
   * Placeholder text on source filter input.
   * @group Props
   */
  sourceFilterPlaceholder;
  /**
   * Placeholder text on target filter input.
   * @group Props
   */
  targetFilterPlaceholder;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Name of the disabled field of a target option or function to determine disabled state.
   * @group Props
   */
  sourceOptionDisabled;
  /**
   * Name of the disabled field of a target option or function to determine disabled state.
   * @group Props
   */
  targetOptionDisabled;
  /**
   * Defines a string that labels the filter input of source list.
   * @group Props
   */
  ariaSourceFilterLabel;
  /**
   * Defines a string that labels the filter input of target list.
   * @group Props
   */
  ariaTargetFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Whether to displays rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * Keeps selection on the transfer list.
   * @group Props
   */
  keepSelection = false;
  /**
   * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "14rem";
  /**
   * Whether to focus on the first visible or selected element.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  buttonProps = {
    severity: "secondary"
  };
  /**
   * Used to pass all properties of the ButtonProps to the move up button inside the component.
   * @group Props
   */
  moveUpButtonProps;
  /**
   * 	Used to pass all properties of the ButtonProps to the move top button inside the component.
   * @group Props
   */
  moveTopButtonProps;
  /**
   * 	Used to pass all properties of the ButtonProps to the move down button inside the component.
   * @group Props
   */
  moveDownButtonProps;
  /**
   * 	Used to pass all properties of the ButtonProps to the move bottom button inside the component.
   * @group Props
   */
  moveBottomButtonProps;
  /**
   * 	Used to pass all properties of the ButtonProps to the move to target button inside the component.
   * @group Props
   */
  moveToTargetProps;
  /**
   * 	Used to pass all properties of the ButtonProps to the move all to target button inside the component.
   * @group Props
   */
  moveAllToTargetProps;
  /**
   *  Used to pass all properties of the ButtonProps to the move to source button inside the component.
   * @group Props
   */
  moveToSourceProps;
  /**
   *  Used to pass all properties of the ButtonProps to the move all to source button inside the component.
   * @group Props
   */
  moveAllToSourceProps;
  /**
   * Indicates the width of the screen at which the component should change its behavior.
   * @group Props
   */
  get breakpoint() {
    return this._breakpoint;
  }
  set breakpoint(value) {
    if (value !== this._breakpoint) {
      this._breakpoint = value;
      if (isPlatformBrowser(this.platformId)) {
        this.destroyMedia();
        this.initMedia();
      }
    }
  }
  /**
   * Callback to invoke when items are moved from target to source.
   * @param {PickListMoveToSourceEvent} event - Custom move to source event.
   * @group Emits
   */
  onMoveToSource = new EventEmitter();
  /**
   * Callback to invoke when all items are moved from target to source.
   * @param {PickListMoveAllToSourceEvent} event - Custom move all to source event.
   * @group Emits
   */
  onMoveAllToSource = new EventEmitter();
  /**
   * Callback to invoke when all items are moved from source to target.
   * @param {PickListMoveAllToTargetEvent} event - Custom move all to target event.
   * @group Emits
   */
  onMoveAllToTarget = new EventEmitter();
  /**
   * Callback to invoke when items are moved from source to target.
   * @param {PickListMoveToTargetEvent} event - Custom move to target event.
   * @group Emits
   */
  onMoveToTarget = new EventEmitter();
  /**
   * Callback to invoke when items are reordered within source list.
   * @param {PickListSourceReorderEvent} event - Custom source reorder event.
   * @group Emits
   */
  onSourceReorder = new EventEmitter();
  /**
   * Callback to invoke when items are reordered within target list.
   * @param {PickListTargetReorderEvent} event - Custom target reorder event.
   * @group Emits
   */
  onTargetReorder = new EventEmitter();
  /**
   * Callback to invoke when items are selected within source list.
   * @param {PickListSourceSelectEvent} event - Custom source select event.
   * @group Emits
   */
  onSourceSelect = new EventEmitter();
  /**
   * Callback to invoke when items are selected within target list.
   * @param {PickListTargetSelectEvent} event - Custom target select event.
   * @group Emits
   */
  onTargetSelect = new EventEmitter();
  /**
   * Callback to invoke when the source list is filtered
   * @param {PickListSourceFilterEvent} event - Custom source filter event.
   * @group Emits
   */
  onSourceFilter = new EventEmitter();
  /**
   * Callback to invoke when the target list is filtered
   * @param {PickListTargetFilterEvent} event - Custom target filter event.
   * @group Emits
   */
  onTargetFilter = new EventEmitter();
  /**
   * Callback to invoke when the list is focused
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the list is blurred
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  listViewSourceChild;
  listViewTargetChild;
  sourceFilterViewChild;
  targetFilterViewChild;
  getButtonProps(direction) {
    switch (direction) {
      case "moveup":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveUpButtonProps);
      case "movetop":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveTopButtonProps);
      case "movedown":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveDownButtonProps);
      case "movebottom":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveBottomButtonProps);
      case "movetotarget":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveToTargetProps);
      case "movealltotarget":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveAllToTargetProps);
      case "movetosource":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveToSourceProps);
      case "movealltosource":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveAllToSourceProps);
      default:
        return this.buttonProps;
    }
  }
  get moveUpAriaLabel() {
    return this.upButtonAriaLabel ? this.upButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveUp : void 0;
  }
  get moveTopAriaLabel() {
    return this.topButtonAriaLabel ? this.topButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveTop : void 0;
  }
  get moveDownAriaLabel() {
    return this.downButtonAriaLabel ? this.downButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveDown : void 0;
  }
  get moveBottomAriaLabel() {
    return this.bottomButtonAriaLabel ? this.bottomButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveDown : void 0;
  }
  get moveToTargetAriaLabel() {
    return this.rightButtonAriaLabel ? this.rightButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveToTarget : void 0;
  }
  get moveAllToTargetAriaLabel() {
    return this.allRightButtonAriaLabel ? this.allRightButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveAllToTarget : void 0;
  }
  get moveToSourceAriaLabel() {
    return this.leftButtonAriaLabel ? this.leftButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveToSource : void 0;
  }
  get moveAllToSourceAriaLabel() {
    return this.allLeftButtonAriaLabel ? this.allLeftButtonAriaLabel : this.config.translation.aria ? this.config.translation.aria.moveAllToSource : void 0;
  }
  get idSource() {
    return this.id + "_source";
  }
  get idTarget() {
    return this.id + "_target";
  }
  _breakpoint = "960px";
  visibleOptionsSource;
  visibleOptionsTarget;
  selectedItemsSource = [];
  selectedItemsTarget = [];
  reorderedListElement;
  movedUp;
  movedDown;
  itemTouched;
  styleElement;
  id = s("pn_id_");
  filterValueSource;
  filterValueTarget;
  fromListType;
  sourceFilterOptions;
  targetFilterOptions;
  SOURCE_LIST = -1;
  TARGET_LIST = 1;
  window;
  media;
  viewChanged;
  _componentStyle = inject(PickListStyle);
  mediaChangeListener;
  filterService = inject(FilterService);
  onInit() {
    if (this.responsive) {
      this.createStyle();
      this.initMedia();
    }
    if (this.filterBy) {
      this.sourceFilterOptions = {
        filter: (value) => this.filterSource(value),
        reset: () => this.resetSourceFilter()
      };
      this.targetFilterOptions = {
        filter: (value) => this.filterTarget(value),
        reset: () => this.resetTargetFilter()
      };
    }
  }
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom source header template.
   * @group Templates
   */
  sourceHeaderTemplate;
  /**
   * Custom target header template.
   * @group Templates
   */
  targetHeaderTemplate;
  /**
   * Custom source filter template.
   * @group Templates
   */
  sourceFilterTemplate;
  /**
   * Custom target filter template.
   * @group Templates
   */
  targetFilterTemplate;
  /**
   * Custom empty message when source is empty template.
   * @group Templates
   */
  emptyMessageSourceTemplate;
  /**
   * Custom empty filter message when source is empty template.
   * @group Templates
   */
  emptyFilterMessageSourceTemplate;
  /**
   * Custom empty message when target is empty template.
   * @group Templates
   */
  emptyMessageTargetTemplate;
  /**
   * Custom empty filter message when target is empty template.
   * @group Templates
   */
  emptyFilterMessageTargetTemplate;
  /**
   * Custom move up icon template.
   * @group Templates
   */
  moveUpIconTemplate;
  /**
   * Custom move top icon template.
   * @group Templates
   */
  moveTopIconTemplate;
  /**
   * Custom move down icon template.
   * @group Templates
   */
  moveDownIconTemplate;
  /**
   * Custom move bottom icon template.
   * @group Templates
   */
  moveBottomIconTemplate;
  /**
   * Custom move to target icon template.
   * @group Templates
   */
  moveToTargetIconTemplate;
  /**
   * Custom move all to target icon template.
   * @group Templates
   */
  moveAllToTargetIconTemplate;
  /**
   * Custom move to source icon template.
   * @group Templates
   */
  moveToSourceIconTemplate;
  /**
   * Custom move all to source icon template.
   * @group Templates
   */
  moveAllToSourceIconTemplate;
  /**
   * Custom target filter icon template.
   * @group Templates
   */
  targetFilterIconTemplate;
  /**
   * Custom source filter icon template.
   * @group Templates
   */
  sourceFilterIconTemplate;
  templates;
  _itemTemplate;
  _sourceHeaderTemplate;
  _targetHeaderTemplate;
  _sourceFilterTemplate;
  _targetFilterTemplate;
  _emptyMessageSourceTemplate;
  _emptyFilterMessageSourceTemplate;
  _emptyMessageTargetTemplate;
  _emptyFilterMessageTargetTemplate;
  _moveUpIconTemplate;
  _moveTopIconTemplate;
  _moveDownIconTemplate;
  _moveBottomIconTemplate;
  _moveToTargetIconTemplate;
  _moveAllToTargetIconTemplate;
  _moveToSourceIconTemplate;
  _moveAllToSourceIconTemplate;
  _targetFilterIconTemplate;
  _sourceFilterIconTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "option":
          this._itemTemplate = item.template;
          break;
        case "sourceHeader":
          this._sourceHeaderTemplate = item.template;
          break;
        case "targetHeader":
          this._targetHeaderTemplate = item.template;
          break;
        case "sourceFilter":
          this._sourceFilterTemplate = item.template;
          break;
        case "targetFilter":
          this._targetFilterTemplate = item.template;
          break;
        case "emptymessagesource":
          this._emptyMessageSourceTemplate = item.template;
          break;
        case "emptyfiltermessagesource":
          this._emptyFilterMessageSourceTemplate = item.template;
          break;
        case "emptymessagetarget":
          this._emptyMessageTargetTemplate = item.template;
          break;
        case "emptyfiltermessagetarget":
          this._emptyFilterMessageTargetTemplate = item.template;
          break;
        case "moveupicon":
          this._moveUpIconTemplate = item.template;
          break;
        case "movetopicon":
          this._moveTopIconTemplate = item.template;
          break;
        case "movedownicon":
          this._moveDownIconTemplate = item.template;
          break;
        case "movebottomicon":
          this._moveBottomIconTemplate = item.template;
          break;
        case "movetotargeticon":
          this._moveToTargetIconTemplate = item.template;
          break;
        case "movealltotargeticon":
          this._moveAllToTargetIconTemplate = item.template;
          break;
        case "movetosourceicon":
          this._moveToSourceIconTemplate = item.template;
          break;
        case "movealltosourceicon":
          this._moveAllToSourceIconTemplate = item.template;
          break;
        case "targetfiltericon":
          this._targetFilterIconTemplate = item.template;
          break;
        case "sourcefiltericon":
          this._sourceFilterIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onChangeSelection(e, listType) {
    this.setSelectionList(listType, e.value);
    const callback = listType === this.SOURCE_LIST ? this.onSourceSelect : this.onTargetSelect;
    callback.emit({
      originalEvent: e.originalEvent,
      items: e.value
    });
  }
  onSourceItemDblClick() {
    if (this.disabled) {
      return;
    }
    this.moveRight();
    this.triggerChangeDetection();
  }
  onTargetItemDblClick() {
    if (this.disabled) {
      return;
    }
    this.moveLeft();
    this.triggerChangeDetection();
  }
  onFilter(event, listType) {
    let query = event.target.value;
    if (listType === this.SOURCE_LIST) this.filterSource(query);
    else if (listType === this.TARGET_LIST) this.filterTarget(query);
  }
  filterSource(value = "") {
    this.filterValueSource = value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter(this.source, this.SOURCE_LIST);
    this.onSourceFilter.emit({
      query: this.filterValueSource,
      value: this.visibleOptionsSource
    });
  }
  filterTarget(value = "") {
    this.filterValueTarget = value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter(this.target, this.TARGET_LIST);
    this.onTargetFilter.emit({
      query: this.filterValueTarget,
      value: this.visibleOptionsTarget
    });
  }
  filter(data, listType) {
    let searchFields = this.filterBy.split(",");
    if (listType === this.SOURCE_LIST) {
      this.visibleOptionsSource = this.filterService.filter(data, searchFields, this.filterValueSource, this.filterMatchMode, this.filterLocale);
      this.onSourceFilter.emit({
        query: this.filterValueSource,
        value: this.visibleOptionsSource
      });
    } else if (listType === this.TARGET_LIST) {
      this.visibleOptionsTarget = this.filterService.filter(data, searchFields, this.filterValueTarget, this.filterMatchMode, this.filterLocale);
      this.onTargetFilter.emit({
        query: this.filterValueTarget,
        value: this.visibleOptionsTarget
      });
    }
  }
  isItemVisible(item, listType) {
    if (listType == this.SOURCE_LIST) return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);
    else return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
  }
  isEmpty(listType) {
    if (listType == this.SOURCE_LIST) return this.filterValueSource ? !this.visibleOptionsSource || this.visibleOptionsSource.length === 0 : !this.source || this.source.length === 0;
    else return this.filterValueTarget ? !this.visibleOptionsTarget || this.visibleOptionsTarget.length === 0 : !this.target || this.target.length === 0;
  }
  isVisibleInList(data, item, filterValue) {
    if (filterValue && filterValue.trim().length) {
      for (let i = 0; i < data.length; i++) {
        if (item == data[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  onItemTouchEnd() {
    if (this.disabled) {
      return;
    }
    this.itemTouched = true;
  }
  sortByIndexInList(items, list) {
    return items.sort((item1, item2) => h(item1, list) - h(item2, list));
  }
  triggerChangeDetection() {
    this.source = [...this.source || []];
    this.target = [...this.target || []];
  }
  moveUp(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = 0; i < selectedItems.length; i++) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = h(selectedItem, list);
        if (selectedItemIndex != 0) {
          let movedItem = list[selectedItemIndex];
          let temp = list[selectedItemIndex - 1];
          list[selectedItemIndex - 1] = movedItem;
          list[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      this.movedUp = true;
      this.reorderedListElement = listElement;
      callback.emit({
        items: selectedItems
      });
      this.triggerChangeDetection();
    }
  }
  moveTop(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = 0; i < selectedItems.length; i++) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = h(selectedItem, list);
        if (selectedItemIndex != 0) {
          let movedItem = list.splice(selectedItemIndex, 1)[0];
          list.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      listElement.scrollTop = 0;
      callback.emit({
        items: selectedItems
      });
      this.triggerChangeDetection();
    }
  }
  moveDown(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = selectedItems.length - 1; i >= 0; i--) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = h(selectedItem, list);
        if (selectedItemIndex != list.length - 1) {
          let movedItem = list[selectedItemIndex];
          let temp = list[selectedItemIndex + 1];
          list[selectedItemIndex + 1] = movedItem;
          list[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      this.movedDown = true;
      this.reorderedListElement = listElement;
      callback.emit({
        items: selectedItems
      });
      this.triggerChangeDetection();
    }
  }
  moveBottom(listElement, list, selectedItems, callback, listType) {
    if (selectedItems && selectedItems.length) {
      selectedItems = this.sortByIndexInList(selectedItems, list);
      for (let i = selectedItems.length - 1; i >= 0; i--) {
        let selectedItem = selectedItems[i];
        let selectedItemIndex = h(selectedItem, list);
        if (selectedItemIndex != list.length - 1) {
          let movedItem = list.splice(selectedItemIndex, 1)[0];
          list.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && (this.filterValueSource && listType === this.SOURCE_LIST || this.filterValueTarget && listType === this.TARGET_LIST)) this.filter(list, listType);
      listElement.scrollTop = listElement.scrollHeight;
      callback.emit({
        items: selectedItems
      });
      this.triggerChangeDetection();
    }
  }
  moveRight() {
    if (this.selectedItemsSource && this.selectedItemsSource.length) {
      let itemsToMove = [...this.selectedItemsSource];
      for (let i = 0; i < itemsToMove.length; i++) {
        let selectedItem = itemsToMove[i];
        if (h(selectedItem, this.target || []) == -1) {
          this.target?.push(this.source?.splice(h(selectedItem, this.source), 1)[0]);
          if (this.visibleOptionsSource?.includes(selectedItem)) {
            this.visibleOptionsSource.splice(h(selectedItem, this.visibleOptionsSource), 1);
          }
        }
      }
      this.onMoveToTarget.emit({
        items: itemsToMove
      });
      if (this.keepSelection) {
        this.selectedItemsTarget = [...this.selectedItemsTarget, ...itemsToMove];
      }
      itemsToMove = [];
      this.selectedItemsSource = [];
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
      this.triggerChangeDetection();
    }
  }
  moveAllRight() {
    if (this.source) {
      let movedItems = [];
      for (let i = 0; i < this.source.length; i++) {
        if (this.isItemVisible(this.source[i], this.SOURCE_LIST)) {
          let removedItem = this.source.splice(i, 1)[0];
          if (this.target) {
            this.target = [...this.target, removedItem];
          }
          movedItems.push(removedItem);
          i--;
        }
      }
      this.onMoveAllToTarget.emit({
        items: movedItems
      });
      if (this.keepSelection) {
        this.selectedItemsTarget = [...this.selectedItemsTarget, ...this.selectedItemsSource];
      }
      this.selectedItemsSource = [];
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
      this.visibleOptionsSource = [];
      this.triggerChangeDetection();
    }
  }
  moveLeft() {
    if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
      let itemsToMove = [...this.selectedItemsTarget];
      for (let i = 0; i < itemsToMove.length; i++) {
        let selectedItem = itemsToMove[i];
        if (h(selectedItem, this.source || []) == -1) {
          this.source?.push(this.target?.splice(h(selectedItem, this.target), 1)[0]);
          if (this.visibleOptionsTarget?.includes(selectedItem)) {
            this.visibleOptionsTarget.splice(h(selectedItem, this.visibleOptionsTarget), 1)[0];
          }
        }
      }
      this.onMoveToSource.emit({
        items: itemsToMove
      });
      if (this.keepSelection) {
        this.selectedItemsSource = [...this.selectedItemsSource, itemsToMove];
      }
      itemsToMove = [];
      this.selectedItemsTarget = [];
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
      this.triggerChangeDetection();
    }
  }
  moveAllLeft() {
    if (this.target) {
      let movedItems = [];
      for (let i = 0; i < this.target.length; i++) {
        if (this.isItemVisible(this.target[i], this.TARGET_LIST)) {
          let removedItem = this.target.splice(i, 1)[0];
          if (this.source) {
            this.source = [...this.source, removedItem];
          }
          movedItems.push(removedItem);
          i--;
        }
      }
      this.onMoveAllToSource.emit({
        items: movedItems
      });
      if (this.keepSelection) {
        this.selectedItemsSource = [...this.selectedItemsSource, ...this.selectedItemsTarget];
      }
      this.selectedItemsTarget = [];
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
      this.visibleOptionsTarget = [];
      this.triggerChangeDetection();
    }
  }
  isSelected(item, selectedItems) {
    return this.findIndexInList(item, selectedItems) != -1;
  }
  findIndexInList(item, selectedItems) {
    return h(item, selectedItems);
  }
  onDrop(event, listType) {
    let isTransfer = event.previousContainer !== event.container;
    let dropIndexes = this.getDropIndexes(event.previousIndex, event.currentIndex, listType, isTransfer, event.item.data);
    if (listType === this.SOURCE_LIST) {
      if (isTransfer) {
        let itemsToMove = [];
        if (this.selectedItemsTarget && this.selectedItemsTarget.length > 0 && h(event.item.data, this.selectedItemsTarget) !== -1) {
          itemsToMove = [...this.selectedItemsTarget];
        } else {
          itemsToMove = [event.item.data];
        }
        const sortedItems = this.sortByIndexInList(itemsToMove, this.target || []);
        for (let item of sortedItems) {
          const itemIndex = h(item, this.target || []);
          if (itemIndex !== -1) {
            this.target?.splice(itemIndex, 1);
          }
        }
        for (let i = 0; i < sortedItems.length; i++) {
          this.source?.splice(dropIndexes.currentIndex + i, 0, sortedItems[i]);
        }
        this.selectedItemsTarget = [];
        if (this.keepSelection) {
          this.selectedItemsSource = [...this.selectedItemsSource, ...itemsToMove];
        }
        if (this.visibleOptionsTarget) {
          for (let item of itemsToMove) {
            const visibleIndex = h(item, this.visibleOptionsTarget);
            if (visibleIndex !== -1) {
              this.visibleOptionsTarget.splice(visibleIndex, 1);
            }
          }
        }
        this.onMoveToSource.emit({
          items: itemsToMove
        });
      } else {
        if (this.source) {
          moveItemInArray(this.source, dropIndexes.previousIndex, dropIndexes.currentIndex);
        }
        this.onSourceReorder.emit({
          items: [event.item.data]
        });
      }
      if (this.filterValueSource) {
        this.filter(this.source, this.SOURCE_LIST);
      }
    } else {
      if (isTransfer) {
        let itemsToMove = [];
        if (this.selectedItemsSource && this.selectedItemsSource.length > 0 && h(event.item.data, this.selectedItemsSource) !== -1) {
          itemsToMove = [...this.selectedItemsSource];
        } else {
          itemsToMove = [event.item.data];
        }
        const sortedItems = this.sortByIndexInList(itemsToMove, this.source || []);
        for (let item of sortedItems) {
          const itemIndex = h(item, this.source || []);
          if (itemIndex !== -1) {
            this.source?.splice(itemIndex, 1);
          }
        }
        for (let i = 0; i < sortedItems.length; i++) {
          this.target?.splice(dropIndexes.currentIndex + i, 0, sortedItems[i]);
        }
        this.selectedItemsSource = [];
        if (this.keepSelection) {
          this.selectedItemsTarget = [...this.selectedItemsTarget, ...itemsToMove];
        }
        if (this.visibleOptionsSource) {
          for (let item of itemsToMove) {
            const visibleIndex = h(item, this.visibleOptionsSource);
            if (visibleIndex !== -1) {
              this.visibleOptionsSource.splice(visibleIndex, 1);
            }
          }
        }
        this.onMoveToTarget.emit({
          items: itemsToMove
        });
      } else {
        if (this.target) {
          moveItemInArray(this.target, dropIndexes.previousIndex, dropIndexes.currentIndex);
        }
        this.onTargetReorder.emit({
          items: [event.item.data]
        });
      }
      if (this.filterValueTarget) {
        this.filter(this.target, this.TARGET_LIST);
      }
    }
    if (isTransfer) {
      this.triggerChangeDetection();
    }
    this.cd.markForCheck();
  }
  onListFocus(event, listType) {
    this.onFocus.emit(event);
  }
  onListBlur(event, listType) {
    this.onBlur.emit(event);
  }
  getListElement(listType) {
    return listType === this.SOURCE_LIST ? this.listViewSourceChild?.el.nativeElement : this.listViewTargetChild?.el.nativeElement;
  }
  getListItems(listType) {
    let listElemet = this.getListElement(listType);
    return Y(listElemet, "li.p-picklist-item");
  }
  getLatestSelectedVisibleOptionIndex(visibleList, selectedItems) {
    const latestSelectedItem = [...selectedItems].reverse().find((item) => visibleList.includes(item));
    return latestSelectedItem !== void 0 ? visibleList.indexOf(latestSelectedItem) : -1;
  }
  getVisibleList(listType) {
    if (listType === this.SOURCE_LIST) {
      return this.visibleOptionsSource && this.visibleOptionsSource.length > 0 ? this.visibleOptionsSource : this.source && this.source.length > 0 ? this.source : null;
    }
    return this.visibleOptionsTarget && this.visibleOptionsTarget.length > 0 ? this.visibleOptionsTarget : this.target && this.target.length > 0 ? this.target : null;
  }
  setSelectionList(listType, selectedItems) {
    if (listType === this.SOURCE_LIST) {
      this.selectedItemsSource = selectedItems;
    } else {
      this.selectedItemsTarget = selectedItems;
    }
  }
  getDropIndexes(fromIndex, toIndex, droppedList, isTransfer, data) {
    let previousIndex, currentIndex;
    if (droppedList === this.SOURCE_LIST) {
      previousIndex = isTransfer ? this.filterValueTarget ? h(data, this.target || []) : fromIndex : this.filterValueSource ? h(data, this.source || []) : fromIndex;
      currentIndex = this.filterValueSource ? this.findFilteredCurrentIndex(this.visibleOptionsSource || [], toIndex, this.source || []) : toIndex;
    } else {
      previousIndex = isTransfer ? this.filterValueSource ? h(data, this.source || []) : fromIndex : this.filterValueTarget ? h(data, this.target || []) : fromIndex;
      currentIndex = this.filterValueTarget ? this.findFilteredCurrentIndex(this.visibleOptionsTarget || [], toIndex, this.target || []) : toIndex;
    }
    return {
      previousIndex,
      currentIndex
    };
  }
  findFilteredCurrentIndex(visibleOptions, index, options) {
    if (visibleOptions.length === index) {
      let toIndex = h(visibleOptions[index - 1], options);
      return toIndex + 1;
    } else {
      return h(visibleOptions[index], options);
    }
  }
  resetSourceFilter() {
    this.visibleOptionsSource = null;
    this.filterValueSource = null;
    this.sourceFilterViewChild && (this.sourceFilterViewChild.nativeElement.value = "");
  }
  resetTargetFilter() {
    this.visibleOptionsTarget = null;
    this.filterValueTarget = null;
    this.targetFilterViewChild && (this.targetFilterViewChild.nativeElement.value = "");
  }
  resetFilter() {
    this.resetSourceFilter();
    this.resetTargetFilter();
  }
  initMedia() {
    if (isPlatformBrowser(this.platformId)) {
      this.media = this.document.defaultView?.matchMedia(`(max-width: ${this.breakpoint})`) || null;
      this.viewChanged = this.media?.matches || false;
      this.bindMediaChangeListener();
    }
  }
  destroyMedia() {
    this.unbindMediaChangeListener();
  }
  bindMediaChangeListener() {
    if (this.media && !this.mediaChangeListener) {
      this.mediaChangeListener = this.renderer.listen(this.media, "change", (event) => {
        this.viewChanged = event.matches;
        this.cd.markForCheck();
      });
    }
  }
  unbindMediaChangeListener() {
    if (this.mediaChangeListener) {
      this.mediaChangeListener();
      this.mediaChangeListener = null;
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, "");
        this.styleElement = this.renderer.createElement("style");
        this.renderer.setAttribute(this.styleElement, "type", "text/css");
        _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = `
                @media screen and (max-width: ${this.breakpoint}) {
                    .p-picklist[${this.id}] {
                        flex-direction: column;
                    }

                    .p-picklist[${this.id}] .p-picklist-controls {
                        flex-direction: row;
                    }
                }`;
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  sourceMoveDisabled() {
    if (this.disabled || !this.selectedItemsSource.length) {
      return true;
    }
  }
  targetMoveDisabled() {
    if (this.disabled || !this.selectedItemsTarget.length) {
      return true;
    }
  }
  moveRightDisabled() {
    return this.disabled || l(this.selectedItemsSource);
  }
  moveLeftDisabled() {
    return this.disabled || l(this.selectedItemsTarget);
  }
  moveAllRightDisabled() {
    return this.disabled || l(this.source);
  }
  moveAllLeftDisabled() {
    return this.disabled || l(this.target);
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
      ``;
    }
  }
  onDestroy() {
    this.destroyStyle();
    this.destroyMedia();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPickList_BaseFactory;
    return function PickList_Factory(__ngFactoryType__) {
      return (ɵPickList_BaseFactory || (ɵPickList_BaseFactory = ɵɵgetInheritedFactory(_PickList)))(__ngFactoryType__ || _PickList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _PickList,
    selectors: [["p-pickList"], ["p-picklist"], ["p-pick-list"]],
    contentQueries: function PickList_ContentQueries(rf, ctx, dirIndex) {
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
        ɵɵcontentQuery(dirIndex, _c12, 4);
        ɵɵcontentQuery(dirIndex, _c13, 4);
        ɵɵcontentQuery(dirIndex, _c14, 4);
        ɵɵcontentQuery(dirIndex, _c15, 4);
        ɵɵcontentQuery(dirIndex, _c16, 4);
        ɵɵcontentQuery(dirIndex, _c17, 4);
        ɵɵcontentQuery(dirIndex, _c18, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.itemTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.sourceHeaderTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.targetHeaderTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.sourceFilterTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.targetFilterTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.emptyMessageSourceTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.emptyFilterMessageSourceTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.emptyMessageTargetTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.emptyFilterMessageTargetTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveUpIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveTopIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveDownIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveBottomIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveToTargetIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveAllToTargetIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveToSourceIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.moveAllToSourceIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.targetFilterIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.sourceFilterIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function PickList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c19, 5);
        ɵɵviewQuery(_c20, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.listViewSourceChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.listViewTargetChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.sourceFilterViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.targetFilterViewChild = _t2.first);
      }
    },
    inputs: {
      hostName: "hostName",
      source: "source",
      target: "target",
      dataKey: "dataKey",
      sourceHeader: "sourceHeader",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      rightButtonAriaLabel: "rightButtonAriaLabel",
      leftButtonAriaLabel: "leftButtonAriaLabel",
      allRightButtonAriaLabel: "allRightButtonAriaLabel",
      allLeftButtonAriaLabel: "allLeftButtonAriaLabel",
      upButtonAriaLabel: "upButtonAriaLabel",
      downButtonAriaLabel: "downButtonAriaLabel",
      topButtonAriaLabel: "topButtonAriaLabel",
      bottomButtonAriaLabel: "bottomButtonAriaLabel",
      sourceAriaLabel: "sourceAriaLabel",
      targetAriaLabel: "targetAriaLabel",
      targetHeader: "targetHeader",
      responsive: [2, "responsive", "responsive", booleanAttribute],
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      trackBy: "trackBy",
      sourceTrackBy: "sourceTrackBy",
      targetTrackBy: "targetTrackBy",
      showSourceFilter: [2, "showSourceFilter", "showSourceFilter", booleanAttribute],
      showTargetFilter: [2, "showTargetFilter", "showTargetFilter", booleanAttribute],
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      dragdrop: [2, "dragdrop", "dragdrop", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      sourceStyle: "sourceStyle",
      targetStyle: "targetStyle",
      showSourceControls: [2, "showSourceControls", "showSourceControls", booleanAttribute],
      showTargetControls: [2, "showTargetControls", "showTargetControls", booleanAttribute],
      sourceFilterPlaceholder: "sourceFilterPlaceholder",
      targetFilterPlaceholder: "targetFilterPlaceholder",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      sourceOptionDisabled: "sourceOptionDisabled",
      targetOptionDisabled: "targetOptionDisabled",
      ariaSourceFilterLabel: "ariaSourceFilterLabel",
      ariaTargetFilterLabel: "ariaTargetFilterLabel",
      filterMatchMode: "filterMatchMode",
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      keepSelection: [2, "keepSelection", "keepSelection", booleanAttribute],
      scrollHeight: "scrollHeight",
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      buttonProps: "buttonProps",
      moveUpButtonProps: "moveUpButtonProps",
      moveTopButtonProps: "moveTopButtonProps",
      moveDownButtonProps: "moveDownButtonProps",
      moveBottomButtonProps: "moveBottomButtonProps",
      moveToTargetProps: "moveToTargetProps",
      moveAllToTargetProps: "moveAllToTargetProps",
      moveToSourceProps: "moveToSourceProps",
      moveAllToSourceProps: "moveAllToSourceProps",
      breakpoint: "breakpoint"
    },
    outputs: {
      onMoveToSource: "onMoveToSource",
      onMoveAllToSource: "onMoveAllToSource",
      onMoveAllToTarget: "onMoveAllToTarget",
      onMoveToTarget: "onMoveToTarget",
      onSourceReorder: "onSourceReorder",
      onTargetReorder: "onTargetReorder",
      onSourceSelect: "onSourceSelect",
      onTargetSelect: "onTargetSelect",
      onSourceFilter: "onSourceFilter",
      onTargetFilter: "onTargetFilter",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([PickListStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _PickList
    }, {
      provide: PICKLIST_INSTANCE,
      useExisting: _PickList
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 34,
    vars: 112,
    consts: [["sourcelist", ""], ["targetlist", ""], ["header", ""], ["filter", ""], ["item", ""], ["empty", ""], ["emptyfilter", ""], ["cdkDropListGroup", "", 3, "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["hostName", "picklist", 3, "ngModelChange", "onFocus", "onBlur", "onChange", "onDblClick", "onDrop", "onFilter", "ariaLabel", "multiple", "options", "ngModel", "optionLabel", "id", "listStyle", "striped", "tabindex", "disabled", "optionDisabled", "metaKeySelection", "scrollHeight", "autoOptionFocus", "filter", "filterBy", "filterLocale", "filterMatchMode", "filterPlaceHolder", "dragdrop", "dropListData", "pt"], [4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", "severity", "secondary", "hostName", "picklist", 3, "click", "disabled", "buttonProps", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "pButton", "", "pRipple", "", "severity", "secondary", 3, "click", "disabled", "buttonProps", "pt"], ["data-p-icon", "angle-up", "pButtonIcon", "", 3, "pt", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-double-up", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-down", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-double-down", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-up", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-double-up", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-down", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-double-down", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-right", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-right", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-double-right", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-double-right", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-left", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-left", "pButtonIcon", "", 3, "pt"], ["data-p-icon", "angle-double-left", "pButtonIcon", "", 3, "pt", 4, "ngIf"], ["data-p-icon", "angle-double-left", "pButtonIcon", "", 3, "pt"], ["type", "button", "pButton", "", "pRipple", "", "severity", "secondary", "hostName", "picklist", 1, "p-button-icon-only", 3, "click", "disabled", "buttonProps", "pt"]],
    template: function PickList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 7);
        ɵɵtemplate(1, PickList_div_1_Template, 13, 28, "div", 8);
        ɵɵelementStart(2, "div", 9)(3, "p-listbox", 10, 0);
        ɵɵtwoWayListener("ngModelChange", function PickList_Template_p_listbox_ngModelChange_3_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.selectedItemsSource, $event) || (ctx.selectedItemsSource = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onFocus", function PickList_Template_p_listbox_onFocus_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event, ctx.SOURCE_LIST));
        })("onBlur", function PickList_Template_p_listbox_onBlur_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event, ctx.SOURCE_LIST));
        })("onChange", function PickList_Template_p_listbox_onChange_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChangeSelection($event, ctx.SOURCE_LIST));
        })("onDblClick", function PickList_Template_p_listbox_onDblClick_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onSourceItemDblClick());
        })("onDrop", function PickList_Template_p_listbox_onDrop_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDrop($event, ctx.SOURCE_LIST));
        })("onFilter", function PickList_Template_p_listbox_onFilter_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFilter($event.originalEvent, ctx.SOURCE_LIST));
        });
        ɵɵtemplate(5, PickList_ng_container_5_Template, 3, 0, "ng-container", 11)(6, PickList_ng_container_6_Template, 3, 0, "ng-container", 11)(7, PickList_ng_container_7_Template, 2, 1, "ng-container", 11)(8, PickList_ng_container_8_Template, 3, 0, "ng-container", 11)(9, PickList_ng_container_9_Template, 3, 0, "ng-container", 11)(10, PickList_ng_container_10_Template, 3, 0, "ng-container", 11);
        ɵɵelementEnd()();
        ɵɵelementStart(11, "div", 9)(12, "button", 12);
        ɵɵlistener("click", function PickList_Template_button_click_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveRight());
        });
        ɵɵtemplate(13, PickList_ng_container_13_Template, 3, 2, "ng-container", 11)(14, PickList_14_Template, 1, 0, null, 13);
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 14);
        ɵɵlistener("click", function PickList_Template_button_click_15_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveAllRight());
        });
        ɵɵtemplate(16, PickList_ng_container_16_Template, 3, 2, "ng-container", 11)(17, PickList_17_Template, 1, 0, null, 13);
        ɵɵelementEnd();
        ɵɵelementStart(18, "button", 12);
        ɵɵlistener("click", function PickList_Template_button_click_18_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveLeft());
        });
        ɵɵtemplate(19, PickList_ng_container_19_Template, 3, 2, "ng-container", 11)(20, PickList_20_Template, 1, 0, null, 13);
        ɵɵelementEnd();
        ɵɵelementStart(21, "button", 12);
        ɵɵlistener("click", function PickList_Template_button_click_21_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveAllLeft());
        });
        ɵɵtemplate(22, PickList_ng_container_22_Template, 3, 2, "ng-container", 11)(23, PickList_23_Template, 1, 0, null, 13);
        ɵɵelementEnd()();
        ɵɵelementStart(24, "div", 9)(25, "p-listbox", 10, 1);
        ɵɵtwoWayListener("ngModelChange", function PickList_Template_p_listbox_ngModelChange_25_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.selectedItemsTarget, $event) || (ctx.selectedItemsTarget = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onFocus", function PickList_Template_p_listbox_onFocus_25_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event, ctx.TARGET_LIST));
        })("onBlur", function PickList_Template_p_listbox_onBlur_25_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event, ctx.TARGET_LIST));
        })("onChange", function PickList_Template_p_listbox_onChange_25_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChangeSelection($event, ctx.TARGET_LIST));
        })("onDblClick", function PickList_Template_p_listbox_onDblClick_25_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTargetItemDblClick());
        })("onDrop", function PickList_Template_p_listbox_onDrop_25_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDrop($event, ctx.TARGET_LIST));
        })("onFilter", function PickList_Template_p_listbox_onFilter_25_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFilter($event.originalEvent, ctx.TARGET_LIST));
        });
        ɵɵtemplate(27, PickList_ng_container_27_Template, 3, 0, "ng-container", 11)(28, PickList_ng_container_28_Template, 3, 0, "ng-container", 11)(29, PickList_ng_container_29_Template, 2, 1, "ng-container", 11)(30, PickList_ng_container_30_Template, 3, 0, "ng-container", 11)(31, PickList_ng_container_31_Template, 3, 0, "ng-container", 11)(32, PickList_ng_container_32_Template, 3, 0, "ng-container", 11);
        ɵɵelementEnd()();
        ɵɵtemplate(33, PickList_div_33_Template, 13, 28, "div", 8);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        ɵɵproperty("ngStyle", ctx.style)("pBind", ctx.ptm("root"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showSourceControls);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("sourceListContainer"));
        ɵɵproperty("pBind", ctx.ptm("sourceListContainer"));
        ɵɵattribute("data-pc-group-section", "listcontainer");
        ɵɵadvance();
        ɵɵproperty("ariaLabel", ctx.sourceAriaLabel)("multiple", true)("options", ctx.source);
        ɵɵtwoWayProperty("ngModel", ctx.selectedItemsSource);
        ɵɵproperty("optionLabel", ctx.dataKey ?? "name")("id", ctx.idSource + "_list")("listStyle", ctx.sourceStyle)("striped", ctx.stripedRows)("tabindex", ctx.tabindex)("disabled", ctx.disabled)("optionDisabled", ctx.sourceOptionDisabled)("metaKeySelection", ctx.metaKeySelection)("scrollHeight", ctx.scrollHeight)("autoOptionFocus", ctx.autoOptionFocus)("filter", ctx.filterBy)("filterBy", ctx.filterBy)("filterLocale", ctx.filterLocale)("filterMatchMode", ctx.filterMatchMode)("filterPlaceHolder", ctx.sourceFilterPlaceholder)("dragdrop", ctx.dragdrop)("dropListData", ctx.source)("pt", ctx.ptm("pcListbox"));
        ɵɵattribute("data-pc-group-section", "list");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.sourceHeaderTemplate || ctx._sourceHeaderTemplate || ctx.sourceHeader);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.sourceFilterTemplate || ctx._sourceFilterTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.sourceFilterIconTemplate || ctx._sourceFilterIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate || ctx._itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyMessageSourceTemplate || ctx._emptyMessageSourceTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyFilterMessageSourceTemplate || ctx._emptyFilterMessageSourceTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("transferControls"));
        ɵɵproperty("pBind", ctx.ptm("transferControls"));
        ɵɵattribute("data-pc-group-section", "controls");
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveRightDisabled())("buttonProps", ctx.getButtonProps("movetotarget"))("pt", ctx.ptm("pcMoveToTargetButton"));
        ɵɵattribute("aria-label", ctx.moveToTargetAriaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveToTargetIconTemplate && !ctx._moveToTargetIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveToTargetIconTemplate || ctx._moveToTargetIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(104, _c21, ctx.viewChanged));
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveAllRightDisabled())("buttonProps", ctx.getButtonProps("movealltotarget"))("pt", ctx.ptm("pcMoveAllToTargetButton"));
        ɵɵattribute("aria-label", ctx.moveAllToTargetAriaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveAllToTargetIconTemplate && !ctx._moveAllToTargetIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveAllToTargetIconTemplate || ctx._moveAllToTargetIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(106, _c21, ctx.viewChanged));
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveLeftDisabled())("buttonProps", ctx.getButtonProps("movetosource"))("pt", ctx.ptm("pcMoveToSourceButton"));
        ɵɵattribute("aria-label", ctx.moveToSourceAriaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveToSourceIconTemplate && !ctx._moveToSourceIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveToSourceIconTemplate || ctx._moveToSourceIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(108, _c21, ctx.viewChanged));
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveAllLeftDisabled())("buttonProps", ctx.getButtonProps("movealltosource"))("pt", ctx.ptm("pcMoveAllToSourceButton"));
        ɵɵattribute("aria-label", ctx.moveAllToSourceAriaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveAllToSourceIconTemplate && !ctx._moveAllToSourceIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveAllToSourceIconTemplate || ctx._moveAllToSourceIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(110, _c21, ctx.viewChanged));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("targetListContainer"));
        ɵɵproperty("pBind", ctx.ptm("targetListContainer"));
        ɵɵattribute("data-pc-group-section", "listcontainer");
        ɵɵadvance();
        ɵɵproperty("ariaLabel", ctx.targetAriaLabel)("multiple", true)("options", ctx.target);
        ɵɵtwoWayProperty("ngModel", ctx.selectedItemsTarget);
        ɵɵproperty("optionLabel", ctx.dataKey ?? "name")("id", ctx.idTarget + "_list")("listStyle", ctx.targetStyle)("striped", ctx.stripedRows)("tabindex", ctx.tabindex)("disabled", ctx.disabled)("optionDisabled", ctx.targetOptionDisabled)("metaKeySelection", ctx.metaKeySelection)("scrollHeight", ctx.scrollHeight)("autoOptionFocus", ctx.autoOptionFocus)("filter", ctx.filterBy)("filterBy", ctx.filterBy)("filterLocale", ctx.filterLocale)("filterMatchMode", ctx.filterMatchMode)("filterPlaceHolder", ctx.targetFilterPlaceholder)("dragdrop", ctx.dragdrop)("dropListData", ctx.target)("pt", ctx.ptm("pcListbox"));
        ɵɵattribute("data-pc-group-section", "list");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.targetHeaderTemplate || ctx._targetHeaderTemplate || ctx.targetHeader);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.targetFilterTemplate || ctx._targetFilterTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.targetFilterIconTemplate || ctx._targetFilterIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate || ctx._itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyMessageTargetTemplate || ctx._emptyMessageTargetTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyFilterMessageTargetTemplate || ctx._emptyFilterMessageTargetTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showTargetControls);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, ButtonModule, ButtonDirective, ButtonIcon, Ripple, DragDropModule, CdkDropListGroup, AngleDoubleDownIcon, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleDoubleUpIcon, AngleDownIcon, AngleLeftIcon, AngleRightIcon, AngleUpIcon, Listbox, FormsModule, NgControlStatus, NgModel, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickList, [{
    type: Component,
    args: [{
      selector: "p-pickList, p-picklist, p-pick-list",
      standalone: true,
      imports: [CommonModule, ButtonModule, Ripple, DragDropModule, AngleDoubleDownIcon, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleDoubleUpIcon, AngleDownIcon, AngleLeftIcon, AngleRightIcon, AngleUpIcon, Listbox, FormsModule, SharedModule, BindModule],
      template: `
        <div [ngStyle]="style" [class]="cn(cx('root'), styleClass)" cdkDropListGroup [pBind]="ptm('root')">
            <div [class]="cx('sourceControls')" *ngIf="showSourceControls" [pBind]="ptm('sourceControls')" [attr.data-pc-group-section]="'controls'">
                <button
                    type="button"
                    [attr.aria-label]="moveUpAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveUp(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [buttonProps]="getButtonProps('moveup')"
                    [pt]="ptm('pcSourceMoveUpButton')"
                >
                    <svg data-p-icon="angle-up" *ngIf="!moveUpIconTemplate && !_moveUpIconTemplate" [pt]="ptm('pcSourceMoveUpButton')['icon']" pButtonIcon />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate || _moveUpIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveTopAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveTop(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [buttonProps]="getButtonProps('movetop')"
                    [pt]="ptm('pcSourceMoveTopButton')"
                >
                    <svg data-p-icon="angle-double-up" *ngIf="!moveTopIconTemplate && !_moveTopIconTemplate" pButtonIcon [pt]="ptm('pcSourceMoveTopButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate || _moveTopIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveDownAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveDown(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [buttonProps]="getButtonProps('movedown')"
                    [pt]="ptm('pcSourceMoveDownButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-down" *ngIf="!moveDownIconTemplate && !_moveDownIconTemplate" pButtonIcon [pt]="ptm('pcSourceMoveDownButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate || _moveDownIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveBottomAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="sourceMoveDisabled()"
                    (click)="moveBottom(sourcelist, source, selectedItemsSource, onSourceReorder, SOURCE_LIST)"
                    [buttonProps]="getButtonProps('movebottom')"
                    [pt]="ptm('pcSourceMoveBottomButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-double-down" *ngIf="!moveBottomIconTemplate || _moveBottomIconTemplate" pButtonIcon [pt]="ptm('pcSourceMoveBottomButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate || _moveBottomIconTemplate"></ng-template>
                </button>
            </div>
            <div [class]="cx('sourceListContainer')" [attr.data-pc-group-section]="'listcontainer'" [pBind]="ptm('sourceListContainer')">
                <p-listbox
                    #sourcelist
                    [ariaLabel]="sourceAriaLabel"
                    [multiple]="true"
                    [options]="source"
                    [(ngModel)]="selectedItemsSource"
                    [optionLabel]="dataKey ?? 'name'"
                    [id]="idSource + '_list'"
                    [listStyle]="sourceStyle"
                    [striped]="stripedRows"
                    [tabindex]="tabindex"
                    (onFocus)="onListFocus($event, SOURCE_LIST)"
                    (onBlur)="onListBlur($event, SOURCE_LIST)"
                    (onChange)="onChangeSelection($event, SOURCE_LIST)"
                    (onDblClick)="onSourceItemDblClick()"
                    [disabled]="disabled"
                    [optionDisabled]="sourceOptionDisabled"
                    [metaKeySelection]="metaKeySelection"
                    [scrollHeight]="scrollHeight"
                    [autoOptionFocus]="autoOptionFocus"
                    [filter]="filterBy"
                    [filterBy]="filterBy"
                    [filterLocale]="filterLocale"
                    [filterMatchMode]="filterMatchMode"
                    [filterPlaceHolder]="sourceFilterPlaceholder"
                    [dragdrop]="dragdrop"
                    [dropListData]="source"
                    (onDrop)="onDrop($event, SOURCE_LIST)"
                    (onFilter)="onFilter($event.originalEvent, SOURCE_LIST)"
                    [pt]="ptm('pcListbox')"
                    hostName="picklist"
                    [attr.data-pc-group-section]="'list'"
                >
                    <ng-container *ngIf="sourceHeaderTemplate || _sourceHeaderTemplate || sourceHeader">
                        <ng-template #header>
                            <div *ngIf="!sourceHeaderTemplate && !_sourceHeaderTemplate">{{ sourceHeader }}</div>
                            <ng-template *ngTemplateOutlet="sourceHeaderTemplate || _sourceHeaderTemplate"></ng-template>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="sourceFilterTemplate || _sourceFilterTemplate">
                        <ng-template #filter>
                            <ng-template *ngTemplateOutlet="sourceFilterTemplate || _sourceFilterTemplate; context: { options: sourceFilterOptions }"></ng-template>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="sourceFilterIconTemplate || _sourceFilterIconTemplate">
                        <ng-container *ngTemplateOutlet="sourceFilterIconTemplate || _sourceFilterIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="itemTemplate || _itemTemplate">
                        <ng-template #item let-item let-index="index" let-selected="selected" let-disabled="disabled">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item, index: index, selected: selected, disabled: disabled }"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="emptyMessageSourceTemplate || _emptyMessageSourceTemplate">
                        <ng-template #empty>
                            <ng-container *ngTemplateOutlet="emptyMessageSourceTemplate || _emptyMessageSourceTemplate"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="emptyFilterMessageSourceTemplate || _emptyFilterMessageSourceTemplate">
                        <ng-template #emptyfilter>
                            <ng-container *ngTemplateOutlet="emptyFilterMessageSourceTemplate || _emptyFilterMessageSourceTemplate"></ng-container>
                        </ng-template>
                    </ng-container>
                </p-listbox>
            </div>
            <div [class]="cx('transferControls')" [attr.data-pc-group-section]="'controls'" [pBind]="ptm('transferControls')">
                <button
                    type="button"
                    [attr.aria-label]="moveToTargetAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="moveRightDisabled()"
                    (click)="moveRight()"
                    [buttonProps]="getButtonProps('movetotarget')"
                    [pt]="ptm('pcMoveToTargetButton')"
                    hostName="picklist"
                >
                    <ng-container *ngIf="!moveToTargetIconTemplate && !_moveToTargetIconTemplate">
                        <svg data-p-icon="angle-right" *ngIf="!viewChanged" pButtonIcon [pt]="ptm('pcMoveToTargetButton')['icon']" />
                        <svg data-p-icon="angle-down" *ngIf="viewChanged" pButtonIcon [pt]="ptm('pcMoveToTargetButton')['icon']" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveToTargetIconTemplate || _moveToTargetIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveAllToTargetAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="moveAllRightDisabled()"
                    (click)="moveAllRight()"
                    [buttonProps]="getButtonProps('movealltotarget')"
                    [pt]="ptm('pcMoveAllToTargetButton')"
                >
                    <ng-container *ngIf="!moveAllToTargetIconTemplate && !_moveAllToTargetIconTemplate">
                        <svg data-p-icon="angle-double-right" *ngIf="!viewChanged" pButtonIcon [pt]="ptm('pcMoveAllToTargetButton')['icon']" />
                        <svg data-p-icon="angle-double-down" *ngIf="viewChanged" pButtonIcon [pt]="ptm('pcMoveAllToTargetButton')['icon']" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveAllToTargetIconTemplate || _moveAllToTargetIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveToSourceAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="moveLeftDisabled()"
                    (click)="moveLeft()"
                    [buttonProps]="getButtonProps('movetosource')"
                    [pt]="ptm('pcMoveToSourceButton')"
                    hostName="picklist"
                >
                    <ng-container *ngIf="!moveToSourceIconTemplate && !_moveToSourceIconTemplate">
                        <svg data-p-icon="angle-left" *ngIf="!viewChanged" pButtonIcon [pt]="ptm('pcMoveToSourceButton')['icon']" />
                        <svg data-p-icon="angle-up" *ngIf="viewChanged" pButtonIcon [pt]="ptm('pcMoveToSourceButton')['icon']" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveToSourceIconTemplate || _moveToSourceIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveAllToSourceAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="moveAllLeftDisabled()"
                    (click)="moveAllLeft()"
                    [buttonProps]="getButtonProps('movealltosource')"
                    [pt]="ptm('pcMoveAllToSourceButton')"
                    hostName="picklist"
                >
                    <ng-container *ngIf="!moveAllToSourceIconTemplate && !_moveAllToSourceIconTemplate">
                        <svg data-p-icon="angle-double-left" *ngIf="!viewChanged" pButtonIcon [pt]="ptm('pcMoveAllToSourceButton')['icon']" />
                        <svg data-p-icon="angle-double-up" *ngIf="viewChanged" pButtonIcon [pt]="ptm('pcMoveAllToSourceButton')['icon']" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="moveAllToSourceIconTemplate || _moveAllToSourceIconTemplate; context: { $implicit: viewChanged }"></ng-template>
                </button>
            </div>
            <div [class]="cx('targetListContainer')" [attr.data-pc-group-section]="'listcontainer'" [pBind]="ptm('targetListContainer')">
                <p-listbox
                    #targetlist
                    [ariaLabel]="targetAriaLabel"
                    [multiple]="true"
                    [options]="target"
                    [(ngModel)]="selectedItemsTarget"
                    [optionLabel]="dataKey ?? 'name'"
                    [id]="idTarget + '_list'"
                    [listStyle]="targetStyle"
                    [striped]="stripedRows"
                    [tabindex]="tabindex"
                    (onFocus)="onListFocus($event, TARGET_LIST)"
                    (onBlur)="onListBlur($event, TARGET_LIST)"
                    (onChange)="onChangeSelection($event, TARGET_LIST)"
                    (onDblClick)="onTargetItemDblClick()"
                    [disabled]="disabled"
                    [optionDisabled]="targetOptionDisabled"
                    [metaKeySelection]="metaKeySelection"
                    [scrollHeight]="scrollHeight"
                    [autoOptionFocus]="autoOptionFocus"
                    [filter]="filterBy"
                    [filterBy]="filterBy"
                    [filterLocale]="filterLocale"
                    [filterMatchMode]="filterMatchMode"
                    [filterPlaceHolder]="targetFilterPlaceholder"
                    [dragdrop]="dragdrop"
                    [dropListData]="target"
                    (onDrop)="onDrop($event, TARGET_LIST)"
                    (onFilter)="onFilter($event.originalEvent, TARGET_LIST)"
                    [pt]="ptm('pcListbox')"
                    [attr.data-pc-group-section]="'list'"
                    hostName="picklist"
                >
                    <ng-container *ngIf="targetHeaderTemplate || _targetHeaderTemplate || targetHeader">
                        <ng-template #header>
                            <div *ngIf="!targetHeaderTemplate && !_targetHeaderTemplate">{{ targetHeader }}</div>
                            <ng-template *ngTemplateOutlet="targetHeaderTemplate || _targetHeaderTemplate"></ng-template>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="targetFilterTemplate || _targetFilterTemplate">
                        <ng-template #filter>
                            <ng-template *ngTemplateOutlet="targetFilterTemplate || _targetFilterTemplate; context: { options: targetFilterOptions }"></ng-template>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="targetFilterIconTemplate || _targetFilterIconTemplate">
                        <ng-container *ngTemplateOutlet="targetFilterIconTemplate || _targetFilterIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="itemTemplate || _itemTemplate">
                        <ng-template #item let-item let-index="index" let-selected="selected" let-disabled="disabled">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item, index: index, selected: selected, disabled: disabled }"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="emptyMessageTargetTemplate || _emptyMessageTargetTemplate">
                        <ng-template #empty>
                            <ng-container *ngTemplateOutlet="emptyMessageTargetTemplate || _emptyMessageTargetTemplate"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="emptyFilterMessageTargetTemplate || _emptyFilterMessageTargetTemplate">
                        <ng-template #emptyfilter>
                            <ng-container *ngTemplateOutlet="emptyFilterMessageTargetTemplate || _emptyFilterMessageTargetTemplate"></ng-container>
                        </ng-template>
                    </ng-container>
                </p-listbox>
            </div>
            <div [class]="cx('targetControls')" *ngIf="showTargetControls" [attr.data-pc-group-section]="'controls'" [pBind]="ptm('targetControls')">
                <button
                    type="button"
                    [attr.aria-label]="moveUpAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    class="p-button-icon-only"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveUp(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [buttonProps]="getButtonProps('moveup')"
                    [pt]="ptm('pcTargetMoveUpButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-up" *ngIf="!moveUpIconTemplate && !_moveUpIconTemplate" pButtonIcon [pt]="ptm('pcTargetMoveUpButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate || _moveUpIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveTopAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveTop(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [buttonProps]="getButtonProps('movetop')"
                    [pt]="ptm('pcTargetMoveTopButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-double-up" *ngIf="!moveTopIconTemplate && !_moveTopIconTemplate" pButtonIcon [pt]="ptm('pcTargetMoveTopButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate || moveTopIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveDownAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveDown(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [buttonProps]="getButtonProps('movedown')"
                    [pt]="ptm('pcTargetMoveDownButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-down" *ngIf="!moveDownIconTemplate && !_moveDownIconTemplate" pButtonIcon [pt]="ptm('pcTargetMoveDownButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate || _moveDownIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    [attr.aria-label]="moveBottomAriaLabel"
                    pButton
                    pRipple
                    severity="secondary"
                    [disabled]="targetMoveDisabled()"
                    (click)="moveBottom(targetlist, target, selectedItemsTarget, onTargetReorder, TARGET_LIST)"
                    [buttonProps]="getButtonProps('movebottom')"
                    [pt]="ptm('pcTargetMoveBottomButton')"
                    hostName="picklist"
                >
                    <svg data-p-icon="angle-double-down" *ngIf="!moveBottomIconTemplate && !_moveBottomIconTemplate" pButtonIcon [pt]="ptm('pcTargetMoveBottomButton')['icon']" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate || _moveBottomIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PickListStyle, {
        provide: PARENT_INSTANCE,
        useExisting: PickList
      }, {
        provide: PICKLIST_INSTANCE,
        useExisting: PickList
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    source: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    sourceHeader: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rightButtonAriaLabel: [{
      type: Input
    }],
    leftButtonAriaLabel: [{
      type: Input
    }],
    allRightButtonAriaLabel: [{
      type: Input
    }],
    allLeftButtonAriaLabel: [{
      type: Input
    }],
    upButtonAriaLabel: [{
      type: Input
    }],
    downButtonAriaLabel: [{
      type: Input
    }],
    topButtonAriaLabel: [{
      type: Input
    }],
    bottomButtonAriaLabel: [{
      type: Input
    }],
    sourceAriaLabel: [{
      type: Input
    }],
    targetAriaLabel: [{
      type: Input
    }],
    targetHeader: [{
      type: Input
    }],
    responsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    sourceTrackBy: [{
      type: Input
    }],
    targetTrackBy: [{
      type: Input
    }],
    showSourceFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTargetFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dragdrop: [{
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
    sourceStyle: [{
      type: Input
    }],
    targetStyle: [{
      type: Input
    }],
    showSourceControls: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTargetControls: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sourceFilterPlaceholder: [{
      type: Input
    }],
    targetFilterPlaceholder: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sourceOptionDisabled: [{
      type: Input
    }],
    targetOptionDisabled: [{
      type: Input
    }],
    ariaSourceFilterLabel: [{
      type: Input
    }],
    ariaTargetFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonProps: [{
      type: Input
    }],
    moveUpButtonProps: [{
      type: Input
    }],
    moveTopButtonProps: [{
      type: Input
    }],
    moveDownButtonProps: [{
      type: Input
    }],
    moveBottomButtonProps: [{
      type: Input
    }],
    moveToTargetProps: [{
      type: Input
    }],
    moveAllToTargetProps: [{
      type: Input
    }],
    moveToSourceProps: [{
      type: Input
    }],
    moveAllToSourceProps: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    onMoveToSource: [{
      type: Output
    }],
    onMoveAllToSource: [{
      type: Output
    }],
    onMoveAllToTarget: [{
      type: Output
    }],
    onMoveToTarget: [{
      type: Output
    }],
    onSourceReorder: [{
      type: Output
    }],
    onTargetReorder: [{
      type: Output
    }],
    onSourceSelect: [{
      type: Output
    }],
    onTargetSelect: [{
      type: Output
    }],
    onSourceFilter: [{
      type: Output
    }],
    onTargetFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    listViewSourceChild: [{
      type: ViewChild,
      args: ["sourcelist"]
    }],
    listViewTargetChild: [{
      type: ViewChild,
      args: ["targetlist"]
    }],
    sourceFilterViewChild: [{
      type: ViewChild,
      args: ["sourceFilter"]
    }],
    targetFilterViewChild: [{
      type: ViewChild,
      args: ["targetFilter"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    sourceHeaderTemplate: [{
      type: ContentChild,
      args: ["sourceHeader", {
        descendants: false
      }]
    }],
    targetHeaderTemplate: [{
      type: ContentChild,
      args: ["targetHeader", {
        descendants: false
      }]
    }],
    sourceFilterTemplate: [{
      type: ContentChild,
      args: ["sourceFilter", {
        descendants: false
      }]
    }],
    targetFilterTemplate: [{
      type: ContentChild,
      args: ["targetFilter", {
        descendants: false
      }]
    }],
    emptyMessageSourceTemplate: [{
      type: ContentChild,
      args: ["emptymessagesource", {
        descendants: false
      }]
    }],
    emptyFilterMessageSourceTemplate: [{
      type: ContentChild,
      args: ["emptyfiltermessagesource", {
        descendants: false
      }]
    }],
    emptyMessageTargetTemplate: [{
      type: ContentChild,
      args: ["emptymessagetarget", {
        descendants: false
      }]
    }],
    emptyFilterMessageTargetTemplate: [{
      type: ContentChild,
      args: ["emptyfiltermessagetarget", {
        descendants: false
      }]
    }],
    moveUpIconTemplate: [{
      type: ContentChild,
      args: ["moveupicon", {
        descendants: false
      }]
    }],
    moveTopIconTemplate: [{
      type: ContentChild,
      args: ["movetopicon", {
        descendants: false
      }]
    }],
    moveDownIconTemplate: [{
      type: ContentChild,
      args: ["movedownicon", {
        descendants: false
      }]
    }],
    moveBottomIconTemplate: [{
      type: ContentChild,
      args: ["movebottomicon", {
        descendants: false
      }]
    }],
    moveToTargetIconTemplate: [{
      type: ContentChild,
      args: ["movetotargeticon", {
        descendants: false
      }]
    }],
    moveAllToTargetIconTemplate: [{
      type: ContentChild,
      args: ["movealltotargeticon", {
        descendants: false
      }]
    }],
    moveToSourceIconTemplate: [{
      type: ContentChild,
      args: ["movetosourceicon", {
        descendants: false
      }]
    }],
    moveAllToSourceIconTemplate: [{
      type: ContentChild,
      args: ["movealltosourceicon", {
        descendants: false
      }]
    }],
    targetFilterIconTemplate: [{
      type: ContentChild,
      args: ["targetfiltericon", {
        descendants: false
      }]
    }],
    sourceFilterIconTemplate: [{
      type: ContentChild,
      args: ["sourcefiltericon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PickListModule = class _PickListModule {
  static ɵfac = function PickListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PickListModule,
    imports: [PickList, SharedModule],
    exports: [PickList, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PickList, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickListModule, [{
    type: NgModule,
    args: [{
      imports: [PickList, SharedModule],
      exports: [PickList, SharedModule]
    }]
  }], null, null);
})();
export {
  PickList,
  PickListClasses,
  PickListModule,
  PickListStyle
};
//# sourceMappingURL=primeng_picklist.js.map
