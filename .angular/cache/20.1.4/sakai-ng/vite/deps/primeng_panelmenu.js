import {
  Tooltip,
  TooltipModule
} from "./chunk-H6RZA5GF.js";
import "./chunk-C5DLRIHR.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-WZWEIIDP.js";
import "./chunk-UQLQBFGK.js";
import {
  ChevronDownIcon,
  ChevronRightIcon
} from "./chunk-DGNGYPKO.js";
import "./chunk-D7BNBSZQ.js";
import {
  BaseComponent
} from "./chunk-UE3YHGFK.js";
import {
  BaseStyle
} from "./chunk-SFZHRILD.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-YZA7OKIW.js";
import "./chunk-W2Q77YF4.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-7R335IKT.js";
import "./chunk-AFGWAMKA.js";
import "./chunk-MFAXB7NO.js";
import "./chunk-RSPUADW5.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
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
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-ONJW5VE5.js";
import "./chunk-YVXMBCE5.js";
import "./chunk-G6ECYYJH.js";
import "./chunk-RTGP7ALM.js";
import "./chunk-ZLMKASLL.js";
import {
  Q2 as Q,
  a,
  bt,
  j,
  k,
  m,
  q,
  s,
  s3 as s2,
  z2 as z
} from "./chunk-ICG2ZITK.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@primeuix/styles/dist/panelmenu/index.mjs
var style2 = "\n    .p-panelmenu {\n        display: flex;\n        flex-direction: column;\n        gap: dt('panelmenu.gap');\n    }\n\n    .p-panelmenu-panel {\n        background: dt('panelmenu.panel.background');\n        border-width: dt('panelmenu.panel.border.width');\n        border-style: solid;\n        border-color: dt('panelmenu.panel.border.color');\n        color: dt('panelmenu.panel.color');\n        border-radius: dt('panelmenu.panel.border.radius');\n        padding: dt('panelmenu.panel.padding');\n    }\n\n    .p-panelmenu-panel:first-child {\n        border-width: dt('panelmenu.panel.first.border.width');\n        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');\n        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');\n    }\n\n    .p-panelmenu-panel:last-child {\n        border-width: dt('panelmenu.panel.last.border.width');\n        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');\n        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');\n    }\n\n    .p-panelmenu-header {\n        outline: 0 none;\n    }\n\n    .p-panelmenu-header-content {\n        border-radius: dt('panelmenu.item.border.radius');\n        transition:\n            background dt('panelmenu.transition.duration'),\n            color dt('panelmenu.transition.duration'),\n            outline-color dt('panelmenu.transition.duration'),\n            box-shadow dt('panelmenu.transition.duration');\n        outline-color: transparent;\n        color: dt('panelmenu.item.color');\n    }\n\n    .p-panelmenu-header-link {\n        display: flex;\n        gap: dt('panelmenu.item.gap');\n        padding: dt('panelmenu.item.padding');\n        align-items: center;\n        user-select: none;\n        cursor: pointer;\n        position: relative;\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .p-panelmenu-header-icon,\n    .p-panelmenu-item-icon {\n        color: dt('panelmenu.item.icon.color');\n    }\n\n    .p-panelmenu-submenu-icon {\n        color: dt('panelmenu.submenu.icon.color');\n    }\n\n    .p-panelmenu-submenu-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {\n        background: dt('panelmenu.item.focus.background');\n        color: dt('panelmenu.item.focus.color');\n    }\n\n    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {\n        color: dt('panelmenu.item.icon.focus.color');\n    }\n\n    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {\n        color: dt('panelmenu.submenu.icon.focus.color');\n    }\n\n    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {\n        background: dt('panelmenu.item.focus.background');\n        color: dt('panelmenu.item.focus.color');\n    }\n\n    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {\n        color: dt('panelmenu.item.icon.focus.color');\n    }\n\n    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {\n        color: dt('panelmenu.submenu.icon.focus.color');\n    }\n\n    .p-panelmenu-submenu {\n        margin: 0;\n        padding: 0 0 0 dt('panelmenu.submenu.indent');\n        outline: 0;\n        list-style: none;\n    }\n\n    .p-panelmenu-submenu:dir(rtl) {\n        padding: 0 dt('panelmenu.submenu.indent') 0 0;\n    }\n\n    .p-panelmenu-item-link {\n        display: flex;\n        gap: dt('panelmenu.item.gap');\n        padding: dt('panelmenu.item.padding');\n        align-items: center;\n        user-select: none;\n        cursor: pointer;\n        text-decoration: none;\n        color: inherit;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .p-panelmenu-item-label {\n        line-height: 1;\n    }\n\n    .p-panelmenu-item-content {\n        border-radius: dt('panelmenu.item.border.radius');\n        transition:\n            background dt('panelmenu.transition.duration'),\n            color dt('panelmenu.transition.duration'),\n            outline-color dt('panelmenu.transition.duration'),\n            box-shadow dt('panelmenu.transition.duration');\n        color: dt('panelmenu.item.color');\n        outline-color: transparent;\n    }\n\n    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {\n        background: dt('panelmenu.item.focus.background');\n        color: dt('panelmenu.item.focus.color');\n    }\n\n    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {\n        color: dt('panelmenu.item.focus.color');\n    }\n\n    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {\n        color: dt('panelmenu.submenu.icon.focus.color');\n    }\n\n    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {\n        background: dt('panelmenu.item.focus.background');\n        color: dt('panelmenu.item.focus.color');\n    }\n\n    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {\n        color: dt('panelmenu.item.icon.focus.color');\n    }\n\n    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {\n        color: dt('panelmenu.submenu.icon.focus.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-panelmenu.mjs
var _c0 = ["list"];
var _c1 = (a0) => ({
  processedItem: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  $implicit: a0
});
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("separator"), ctx_r2.getItemProp(processedItem_r2, "styleClass")));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 19);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("submenuIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("submenuIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 17)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(5).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemActive(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.panelMenu.submenuIconTemplate && !ctx_r2.panelMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.panelMenu.submenuIconTemplate || ctx_r2.panelMenu._submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemIcon", ɵɵpureFunction1(3, _c1, processedItem_r2)));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(processedItem_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 5, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 3, "span", 15)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(5);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLink"));
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r2, "target"));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-pc-section", "action")("tabindex", !!ctx_r2.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", (processedItem_r2.item == null ? null : processedItem_r2.item.escape) !== false)("ngIfElse", htmlLabel_r5);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 19);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("submenuIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("submenuIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 17)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(5).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemActive(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.panelMenu.submenuIconTemplate && !ctx_r2.panelMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.panelMenu.submenuIconTemplate && ctx_r2.panelMenu._submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("itemIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(processedItem_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("badge"), ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass")));
    ɵɵadvance();
    ɵɵtextInterpolate(processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 3, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 1, 3, "span", 24)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_4_Template, 2, 3, "span", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-panelmenu-item-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c2))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"));
    ɵɵattribute("title", ctx_r2.getItemProp(processedItem_r2, "title"))("data-pc-section", "action")("tabindex", !!ctx_r2.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "label"));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 6, 10, "a", 11)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 5, 21, "a", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, processedItem_r2.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelmenu_sub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-panelmenu-sub", 27);
    ɵɵlistener("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelmenu_sub_5_Template_p_panelmenu_sub_itemToggle_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemToggle($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.getItemId(processedItem_r2) + "_list")("panelId", ctx_r2.panelId)("items", processedItem_r2 == null ? null : processedItem_r2.items)("itemTemplate", ctx_r2.itemTemplate)("transitionOptions", ctx_r2.transitionOptions)("focusedItemId", ctx_r2.focusedItemId)("activeItemPath", ctx_r2.activeItemPath)("level", ctx_r2.level + 1)("parentExpanded", !!ctx_r2.parentExpanded && ctx_r2.isItemExpanded(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7)(1, "div", 8);
    ɵɵlistener("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r2));
    });
    ɵɵtemplate(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 9)(3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div");
    ɵɵtemplate(5, PanelMenuSub_ng_template_2_li_1_p_panelmenu_sub_5_Template, 1, 9, "p-panelmenu-sub", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const processedItem_r2 = ctx_r6.$implicit;
    const index_r8 = ctx_r6.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("item", ɵɵpureFunction1(18, _c1, processedItem_r2)), ctx_r2.getItemProp(processedItem_r2, "styleClass")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("pTooltip", ctx_r2.getItemProp(processedItem_r2, "tooltip"))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("aria-label", ctx_r2.getItemProp(processedItem_r2, "label"))("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : void 0)("aria-level", ctx_r2.level + 1)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r8))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("itemContent"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("@submenu", ctx_r2.getAnimation(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2) && ctx_r2.isItemExpanded(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_0_Template, 1, 2, "li", 4)(1, PanelMenuSub_ng_template_2_li_1_Template, 6, 20, "li", 5);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", processedItem_r2.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !processedItem_r2.separator && ctx_r2.isItemVisible(processedItem_r2));
  }
}
var _c4 = ["submenu"];
var _c5 = ["submenuicon"];
var _c6 = ["headericon"];
var _c7 = ["item"];
var _c8 = ["container"];
var _c9 = (a0) => ({
  item: a0
});
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(7);
    ɵɵclassMap(ctx_r4.cx("headerIcon"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(7);
    ɵɵclassMap(ctx_r4.cx("headerIcon"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 15)(2, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(5).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemActive(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 6)(2, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_2_Template, 1, 0, null, 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.headerIconTemplate && !ctx_r4._headerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.headerIconTemplate || ctx_r4._headerIconTemplate);
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("headerIcon"), item_r3.icon));
    ɵɵproperty("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLabel"));
    ɵɵproperty("innerHTML", ctx_r4.getItemProp(item_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("badge"), ctx_r4.getItemProp(item_r3, "badgeStyleClass")));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_container_1_Template, 3, 2, "ng-container", 6)(2, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_2_Template, 1, 3, "span", 3)(3, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_3_Template, 2, 3, "span", 12)(4, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_ng_template_4_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_span_6_Template, 2, 3, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(5);
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLink"));
    ɵɵproperty("target", ctx_r4.getItemProp(item_r3, "target"));
    ɵɵattribute("href", ctx_r4.getItemProp(item_r3, "url"), ɵɵsanitizeUrl)("tabindex", -1)("title", ctx_r4.getItemProp(item_r3, "title"))("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_ng_container_3_a_1_Template, 7, 12, "a", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.getItemProp(item_r3, "routerLink"));
  }
}
function PanelMenu_ng_container_0_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r4.cx("headerIcon"));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r4.cx("headerIcon"));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 15)(2, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemActive(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 6)(2, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_2_Template, 1, 0, null, 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.headerIconTemplate && !ctx_r4._headerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.headerIconTemplate || ctx_r4._headerIconTemplate);
  }
}
function PanelMenu_ng_container_0_div_1_a_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("headerIcon"), item_r3.icon));
    ɵɵproperty("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLabel"));
    ɵɵproperty("innerHTML", ctx_r4.getItemProp(item_r3, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_0_div_1_a_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("badge"), ctx_r4.getItemProp(item_r3, "badgeStyleClass")));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_0_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 20);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_a_5_ng_container_1_Template, 3, 2, "ng-container", 6)(2, PanelMenu_ng_container_0_div_1_a_5_span_2_Template, 1, 3, "span", 3)(3, PanelMenu_ng_container_0_div_1_a_5_span_3_Template, 2, 3, "span", 12)(4, PanelMenu_ng_container_0_div_1_a_5_ng_template_4_Template, 1, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_0_div_1_a_5_span_6_Template, 2, 3, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = ɵɵreference(5);
    const item_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("headerLink"));
    ɵɵproperty("routerLink", ctx_r4.getItemProp(item_r3, "routerLink"))("queryParams", ctx_r4.getItemProp(item_r3, "queryParams"))("routerLinkActive", "p-panelmenu-item-link-active")("routerLinkActiveOptions", ctx_r4.getItemProp(item_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c2))("target", ctx_r4.getItemProp(item_r3, "target"))("fragment", ctx_r4.getItemProp(item_r3, "fragment"))("queryParamsHandling", ctx_r4.getItemProp(item_r3, "queryParamsHandling"))("preserveFragment", ctx_r4.getItemProp(item_r3, "preserveFragment"))("skipLocationChange", ctx_r4.getItemProp(item_r3, "skipLocationChange"))("replaceUrl", ctx_r4.getItemProp(item_r3, "replaceUrl"))("state", ctx_r4.getItemProp(item_r3, "state"));
    ɵɵattribute("tabindex", -1)("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlRouteLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_0_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_0_div_1_div_6_Template_div_animation_rootItem_done_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.onToggleDone());
    });
    ɵɵelementStart(1, "div")(2, "p-panelMenuList", 22);
    ɵɵlistener("headerFocus", function PanelMenu_ng_container_0_div_1_div_6_Template_p_panelMenuList_headerFocus_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.updateFocusedHeader($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cx("contentContainer", ɵɵpureFunction1(17, _c1, item_r3)));
    ɵɵproperty("@rootItem", ctx_r4.getAnimation(item_r3));
    ɵɵattribute("id", ctx_r4.getContentId(item_r3, i_r4))("aria-labelledby", ctx_r4.getHeaderId(item_r3, i_r4))("data-pc-section", "toggleablecontent");
    ɵɵadvance();
    ɵɵclassMap(ctx_r4.cx("content"));
    ɵɵattribute("data-pc-section", "menucontent");
    ɵɵadvance();
    ɵɵproperty("panelId", ctx_r4.getPanelId(i_r4, item_r3))("items", ctx_r4.getItemProp(item_r3, "items"))("itemTemplate", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("transitionOptions", ctx_r4.transitionOptions)("root", true)("activeItem", ctx_r4.activeItem())("tabindex", ctx_r4.tabindex)("parentExpanded", ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵlistener("click", function PanelMenu_ng_container_0_div_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onHeaderClick($event, item_r3, i_r4));
    })("keydown", function PanelMenu_ng_container_0_div_1_Template_div_keydown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onHeaderKeyDown($event, item_r3, i_r4));
    });
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, PanelMenu_ng_container_0_div_1_ng_container_3_Template, 2, 1, "ng-container", 6)(4, PanelMenu_ng_container_0_div_1_ng_container_4_Template, 1, 0, "ng-container", 7)(5, PanelMenu_ng_container_0_div_1_a_5_Template, 7, 21, "a", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(6, PanelMenu_ng_container_0_div_1_div_6_Template, 3, 19, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("panel"), ctx_r4.getItemProp(item_r3, "headerClass")));
    ɵɵproperty("ngStyle", ctx_r4.getItemProp(item_r3, "style"));
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵclassMap(ctx_r4.cn(ctx_r4.cx("header", ɵɵpureFunction1(25, _c9, item_r3)), ctx_r4.getItemProp(item_r3, "styleClass")));
    ɵɵproperty("ngStyle", ctx_r4.getItemProp(item_r3, "style"))("pTooltip", ctx_r4.getItemProp(item_r3, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r4.getItemProp(item_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r4.getHeaderId(item_r3, i_r4))("aria-expanded", ctx_r4.isItemActive(item_r3))("aria-label", ctx_r4.getItemProp(item_r3, "label"))("aria-controls", ctx_r4.getContentId(item_r3, i_r4))("aria-disabled", ctx_r4.isItemDisabled(item_r3))("data-p-highlight", ctx_r4.isItemActive(item_r3))("data-p-disabled", ctx_r4.isItemDisabled(item_r3))("data-pc-section", "header");
    ɵɵadvance();
    ɵɵclassMap(ctx_r4.cx("headerContent"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.itemTemplate && !ctx_r4._itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(27, _c3, item_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getItemProp(item_r3, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemGroup(item_r3));
  }
}
function PanelMenu_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_0_div_1_Template, 7, 29, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.isItemVisible(item_r3));
  }
}
var theme = (
  /*css*/
  `
    ${style2}
    /*For PrimeNG*/
    .p-panelmenu-item:not(.ng-animating) {
        overflow: hidden;
    }

    .p-panelmenu-panel {
        overflow: hidden;
    }

    .p-panelmenu-root-list,
    .p-panelmenu-submenu,
    .p-panelmenu-item-link {
        outline: 0 none;
    }
`
);
var classes = {
  root: () => ["p-panelmenu p-component"],
  panel: "p-panelmenu-panel",
  header: ({
    instance,
    item
  }) => ["p-panelmenu-header", {
    "p-panelmenu-header-active": instance.isItemActive(item) && !!item.items,
    "p-disabled": instance.isItemDisabled(item)
  }],
  headerContent: "p-panelmenu-header-content",
  headerLink: "p-panelmenu-header-link",
  headerIcon: "p-panelmenu-header-icon",
  headerLabel: "p-panelmenu-header-label",
  contentContainer: ({
    instance,
    processedItem
  }) => ["p-panelmenu-content-container", {
    "p-panelmenu-expanded": instance.isItemActive(processedItem)
  }],
  content: "p-panelmenu-content",
  rootList: "p-panelmenu-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-panelmenu-item", {
    "p-focus": instance.isItemFocused(processedItem) && !instance.isItemDisabled(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-panelmenu-item-content",
  itemLink: "p-panelmenu-item-link",
  itemIcon: "p-panelmenu-item-icon",
  itemLabel: "p-panelmenu-item-label",
  submenuIcon: "p-panelmenu-submenu-icon",
  submenu: "p-panelmenu-submenu",
  separator: "p-menuitem-separator",
  badge: "p-menuitem-badge"
};
var PanelMenuStyle = class _PanelMenuStyle extends BaseStyle {
  name = "panelmenu";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPanelMenuStyle_BaseFactory;
    return function PanelMenuStyle_Factory(__ngFactoryType__) {
      return (ɵPanelMenuStyle_BaseFactory || (ɵPanelMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_PanelMenuStyle)))(__ngFactoryType__ || _PanelMenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PanelMenuStyle,
    factory: _PanelMenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var PanelMenuClasses;
(function(PanelMenuClasses2) {
  PanelMenuClasses2["root"] = "p-panelmenu";
  PanelMenuClasses2["panel"] = "p-panelmenu-panel";
  PanelMenuClasses2["header"] = "p-panelmenu-header";
  PanelMenuClasses2["headerContent"] = "p-panelmenu-header-content";
  PanelMenuClasses2["headerLink"] = "p-panelmenu-header-link";
  PanelMenuClasses2["headerIcon"] = "p-panelmenu-header-icon";
  PanelMenuClasses2["headerLabel"] = "p-panelmenu-header-label";
  PanelMenuClasses2["contentContainer"] = "p-panelmenu-content-container";
  PanelMenuClasses2["content"] = "p-panelmenu-content";
  PanelMenuClasses2["rootList"] = "p-panelmenu-root-list";
  PanelMenuClasses2["item"] = "p-panelmenu-item";
  PanelMenuClasses2["itemContent"] = "p-panelmenu-item-content";
  PanelMenuClasses2["itemLink"] = "p-panelmenu-item-link";
  PanelMenuClasses2["itemIcon"] = "p-panelmenu-item-icon";
  PanelMenuClasses2["itemLabel"] = "p-panelmenu-item-label";
  PanelMenuClasses2["submenuIcon"] = "p-panelmenu-submenu-icon";
  PanelMenuClasses2["submenu"] = "p-panelmenu-submenu";
  PanelMenuClasses2["separator"] = "p-menuitem-separator";
})(PanelMenuClasses || (PanelMenuClasses = {}));
var PanelMenuSub = class _PanelMenuSub extends BaseComponent {
  panelId;
  focusedItemId;
  items;
  itemTemplate;
  level = 0;
  activeItemPath;
  root;
  tabindex;
  transitionOptions;
  parentExpanded;
  itemToggle = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeyDown = new EventEmitter();
  listViewChild;
  panelMenu = inject(forwardRef(() => PanelMenu));
  _componentStyle = inject(PanelMenuStyle);
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return {
      "p-panelmenu-item": true,
      "p-disabled": this.isItemDisabled(processedItem),
      "p-focus": this.isItemFocused(processedItem)
    };
  }
  getItemProp(processedItem, name, params) {
    return processedItem && processedItem.item ? m(processedItem.item[name], params) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemExpanded(processedItem) {
    return processedItem.expanded;
  }
  isItemActive(processedItem) {
    return this.isItemExpanded(processedItem) || this.activeItemPath.some((path) => path && path.key === processedItem.key);
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return s(processedItem.items);
  }
  getAnimation(processedItem) {
    return this.isItemActive(processedItem) ? {
      value: "visible",
      params: {
        transitionParams: this.transitionOptions,
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemClick(event, processedItem) {
    if (!this.isItemDisabled(processedItem)) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemToggle.emit({
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    }
  }
  onItemToggle(event) {
    this.itemToggle.emit(event);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPanelMenuSub_BaseFactory;
    return function PanelMenuSub_Factory(__ngFactoryType__) {
      return (ɵPanelMenuSub_BaseFactory || (ɵPanelMenuSub_BaseFactory = ɵɵgetInheritedFactory(_PanelMenuSub)))(__ngFactoryType__ || _PanelMenuSub);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuSub,
    selectors: [["p-panelMenuSub"], ["p-panelmenu-sub"]],
    viewQuery: function PanelMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    inputs: {
      panelId: "panelId",
      focusedItemId: "focusedItemId",
      items: "items",
      itemTemplate: "itemTemplate",
      level: [2, "level", "level", numberAttribute],
      activeItemPath: "activeItemPath",
      root: [2, "root", "root", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      transitionOptions: "transitionOptions",
      parentExpanded: [2, "parentExpanded", "parentExpanded", booleanAttribute]
    },
    outputs: {
      itemToggle: "itemToggle",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeyDown: "menuKeyDown"
    },
    features: [ɵɵProvidersFeature([PanelMenuStyle]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 7,
    consts: [["list", ""], ["htmlLabel", ""], ["role", "tree", 3, "focusin", "focusout", "keydown", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "class", 4, "ngIf"], ["role", "treeitem", 3, "class", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator"], ["role", "treeitem", 3, "ngStyle", "pTooltip", "tooltipOptions"], [3, "click"], [4, "ngIf"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], [3, "class", "target", 4, "ngIf"], [3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [3, "target"], [3, "class", "ngStyle", 4, "ngIf"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-down", 3, "class", "ngStyle", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "class", "ngStyle", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "ngStyle"], ["data-p-icon", "chevron-right", 3, "ngStyle"], [3, "ngStyle"], [3, "innerHTML"], [3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", "innerHTML", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemToggle", "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded"]],
    template: function PanelMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 2, 0);
        ɵɵlistener("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuFocus.emit($event));
        })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuBlur.emit($event));
        })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuKeyDown.emit($event));
        });
        ɵɵtemplate(2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.root ? ctx.cn(ctx.cx("rootList"), ctx.cx("submenu")) : ctx.cx("submenu"));
        ɵɵproperty("tabindex", -1);
        ɵɵattribute("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: [_PanelMenuSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, TooltipModule, Tooltip, ChevronDownIcon, ChevronRightIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuSub, [{
    type: Component,
    args: [{
      selector: "p-panelMenuSub, p-panelmenu-sub",
      imports: [CommonModule, RouterModule, TooltipModule, ChevronDownIcon, ChevronRightIcon, SharedModule],
      standalone: true,
      template: `
        <ul
            #list
            [class]="root ? cn(cx('rootList'), cx('submenu')) : cx('submenu')"
            role="tree"
            [tabindex]="-1"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="'menu'"
            [attr.aria-hidden]="!parentExpanded"
            (focusin)="menuFocus.emit($event)"
            (focusout)="menuBlur.emit($event)"
            (keydown)="menuKeyDown.emit($event)"
        >
            <ng-template ngFor let-processedItem let-index="index" [ngForOf]="items">
                <li *ngIf="processedItem.separator" [class]="cn(cx('separator'), getItemProp(processedItem, 'styleClass'))" role="separator"></li>
                <li
                    *ngIf="!processedItem.separator && isItemVisible(processedItem)"
                    role="treeitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.aria-label]="getItemProp(processedItem, 'label')"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [class]="cn(cx('item', { processedItem }), getItemProp(processedItem, 'styleClass'))"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [pTooltip]="getItemProp(processedItem, 'tooltip')"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div [class]="cx('itemContent')" (click)="onItemClick($event, processedItem)">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                [class]="cx('itemLink')"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate && !panelMenu._submenuIconTemplate">
                                        <svg data-p-icon="chevron-down" [class]="cn(cx('submenuIcon'), getItemProp(processedItem, 'icon'))" *ngIf="isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <svg data-p-icon="chevron-right" [class]="cn(cx('submenuIcon'), getItemProp(processedItem, 'icon'))" *ngIf="!isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate || panelMenu._submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span [class]="cx('itemIcon', { processedItem })" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span [class]="cx('itemLabel')" *ngIf="processedItem.item?.escape !== false; else htmlLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-panelmenu-item-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                [class]="cx('itemLink')"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.title]="getItemProp(processedItem, 'title')"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate && !panelMenu._submenuIconTemplate">
                                        <svg data-p-icon="chevron-down" *ngIf="isItemActive(processedItem)" [class]="cn(cx('submenuIcon'), getItemProp(processedItem, 'icon'))" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <svg data-p-icon="chevron-right" *ngIf="!isItemActive(processedItem)" [class]="cn(cx('submenuIcon'), getItemProp(processedItem, 'icon'))" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate && panelMenu._submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'))" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span *ngIf="getItemProp(processedItem, 'label')" [class]="cx('itemLabel')" [innerHTML]="getItemProp(processedItem, 'label')"></span>

                                <span [class]="cn(cx('badge'), getItemProp(processedItem, 'badgeStyleClass'))" *ngIf="processedItem.badge">{{ processedItem.badge }}</span>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div [@submenu]="getAnimation(processedItem)">
                        <p-panelmenu-sub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem) && isItemExpanded(processedItem)"
                            [id]="getItemId(processedItem) + '_list'"
                            [panelId]="panelId"
                            [items]="processedItem?.items"
                            [itemTemplate]="itemTemplate"
                            [transitionOptions]="transitionOptions"
                            [focusedItemId]="focusedItemId"
                            [activeItemPath]="activeItemPath"
                            [level]="level + 1"
                            [parentExpanded]="!!parentExpanded && isItemExpanded(processedItem)"
                            (itemToggle)="onItemToggle($event)"
                        ></p-panelmenu-sub>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      encapsulation: ViewEncapsulation.None,
      providers: [PanelMenuStyle]
    }]
  }], null, {
    panelId: [{
      type: Input
    }],
    focusedItemId: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    activeItemPath: [{
      type: Input
    }],
    root: [{
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
    transitionOptions: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemToggle: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeyDown: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }]
  });
})();
var PanelMenuList = class _PanelMenuList extends BaseComponent {
  panelId;
  id;
  items;
  itemTemplate;
  parentExpanded;
  expanded;
  transitionOptions;
  root;
  tabindex;
  activeItem;
  itemToggle = new EventEmitter();
  headerFocus = new EventEmitter();
  subMenuViewChild;
  searchTimeout;
  searchValue;
  focused;
  focusedItem = signal(null, ...ngDevMode ? [{
    debugName: "focusedItem"
  }] : []);
  activeItemPath = signal([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : []);
  processedItems = signal([], ...ngDevMode ? [{
    debugName: "processedItems"
  }] : []);
  visibleItems = computed(() => {
    const processedItems = this.processedItems();
    return this.flatItems(processedItems);
  }, ...ngDevMode ? [{
    debugName: "visibleItems"
  }] : []);
  get focusedItemId() {
    const focusedItem = this.focusedItem();
    return focusedItem && focusedItem.item?.id ? focusedItem.item.id : s(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : void 0;
  }
  ngOnChanges(changes) {
    this.processedItems.set(this.createProcessedItems(changes?.items?.currentValue || this.items || []));
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? m(processedItem.item[name]) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemActive(processedItem) {
    return this.activeItemPath().some((path) => path.key === processedItem.parentKey);
  }
  isItemGroup(processedItem) {
    return s(processedItem.items);
  }
  isElementInPanel(event, element) {
    const panel = event.currentTarget.closest('[data-pc-section="panel"]');
    return panel && panel.contains(element);
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isVisibleItem(processedItem) {
    return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
  }
  findFirstItem() {
    return this.visibleItems().find((processedItem) => this.isValidItem(processedItem));
  }
  findLastItem() {
    return q(this.visibleItems(), (processedItem) => this.isValidItem(processedItem));
  }
  findItemByEventTarget(target) {
    let parentNode = target;
    while (parentNode && parentNode.tagName?.toLowerCase() !== "li") {
      parentNode = parentNode?.parentNode;
    }
    return parentNode?.id && this.visibleItems().find((processedItem) => this.isValidItem(processedItem) && `${this.panelId}_${processedItem.key}` === parentNode.id);
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        icon: item.icon,
        expanded: item.expanded,
        separator: item.separator,
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  findProcessedItemByItemKey(key, processedItems, level = 0) {
    processedItems = processedItems || this.processedItems();
    if (processedItems && processedItems.length) {
      for (let i = 0; i < processedItems.length; i++) {
        const processedItem = processedItems[i];
        if (this.getItemProp(processedItem, "key") === key) return processedItem;
        const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem) return matchedItem;
      }
    }
  }
  flatItems(processedItems, processedFlattenItems = []) {
    processedItems && processedItems.forEach((processedItem) => {
      if (this.isVisibleItem(processedItem)) {
        processedFlattenItems.push(processedItem);
        this.flatItems(processedItem.items, processedFlattenItems);
      }
    });
    return processedFlattenItems;
  }
  changeFocusedItem(event) {
    const {
      originalEvent,
      processedItem,
      focusOnNext,
      selfCheck,
      allowHeaderFocus = true
    } = event;
    if (s(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
      this.focusedItem.set(processedItem);
      this.scrollInView();
    } else if (allowHeaderFocus) {
      this.headerFocus.emit({
        originalEvent,
        focusOnNext,
        selfCheck
      });
    }
  }
  scrollInView() {
    const element = z(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onFocus(event) {
    if (!this.focused) {
      this.focused = true;
      const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findItemByEventTarget(event.target) || this.findFirstItem() : this.findLastItem());
      if (event.relatedTarget !== null) this.focusedItem.set(focusedItem);
    }
  }
  onBlur(event) {
    const target = event.relatedTarget;
    if (this.focused && !this.el.nativeElement.contains(target)) {
      this.focused = false;
      this.focusedItem.set(null);
      this.searchValue = "";
    }
  }
  onItemToggle(event) {
    const {
      processedItem,
      expanded
    } = event;
    if (processedItem.item) {
      processedItem.item.expanded = !processedItem.item.expanded;
    }
    this.processedItems.set(this.createProcessedItems(this.items || [], 0, {}, ""));
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== processedItem.parentKey);
    if (expanded) {
      activeItemPath.push(processedItem);
    }
    this.activeItemPath.set(activeItemPath);
    this.focusedItem.set(processedItem);
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
      case "Tab":
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && j(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const processedItem = s(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const processedItem = s(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      selfCheck: true
    });
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    if (s(this.focusedItem())) {
      const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
      if (matched) {
        const activeItemPath = this.activeItemPath().filter((p) => p.key !== this.focusedItem().key);
        this.activeItemPath.set(activeItemPath);
      } else {
        const focusedItem = s(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
        this.focusedItem.set(focusedItem);
      }
      event.preventDefault();
    }
  }
  onArrowRightKey(event) {
    if (s(this.focusedItem())) {
      const grouped = this.isItemGroup(this.focusedItem());
      if (grouped) {
        const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
        if (matched) {
          this.onArrowDownKey(event);
        } else {
          const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItem().parentKey);
          activeItemPath.push(this.focusedItem());
          this.activeItemPath.set(activeItemPath);
        }
      }
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findFirstItem(),
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findLastItem(),
      focusOnNext: true,
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEnterKey(event) {
    if (s(this.focusedItem())) {
      const element = z(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (z(element, '[data-pc-section="action"]') || z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find((pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  findPrevItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index > 0 ? q(this.visibleItems().slice(0, index), (pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let matchedItem = null;
    let matched = false;
    if (s(this.focusedItem())) {
      const focusedItemIndex = this.visibleItems().findIndex((processedItem) => processedItem.key === this.focusedItem().key);
      matchedItem = this.visibleItems().slice(focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem));
      matchedItem = a(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem)) : matchedItem;
    } else {
      matchedItem = this.visibleItems().find((processedItem) => this.isItemMatched(processedItem));
    }
    if (s(matchedItem)) {
      matched = true;
    }
    if (a(matchedItem) && a(this.focusedItem())) {
      matchedItem = this.findFirstItem();
    }
    if (s(matchedItem)) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: matchedItem,
        allowHeaderFocus: false
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPanelMenuList_BaseFactory;
    return function PanelMenuList_Factory(__ngFactoryType__) {
      return (ɵPanelMenuList_BaseFactory || (ɵPanelMenuList_BaseFactory = ɵɵgetInheritedFactory(_PanelMenuList)))(__ngFactoryType__ || _PanelMenuList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuList,
    selectors: [["p-panelMenuList"], ["p-panel-menu-list"]],
    viewQuery: function PanelMenuList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subMenuViewChild = _t.first);
      }
    },
    inputs: {
      panelId: "panelId",
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      parentExpanded: [2, "parentExpanded", "parentExpanded", booleanAttribute],
      expanded: [2, "expanded", "expanded", booleanAttribute],
      transitionOptions: "transitionOptions",
      root: [2, "root", "root", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      activeItem: "activeItem"
    },
    outputs: {
      itemToggle: "itemToggle",
      headerFocus: "headerFocus"
    },
    features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 10,
    consts: [["submenu", ""], [3, "itemToggle", "keydown", "menuFocus", "menuBlur", "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded"]],
    template: function PanelMenuList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "p-panelmenu-sub", 1, 0);
        ɵɵlistener("itemToggle", function PanelMenuList_Template_p_panelmenu_sub_itemToggle_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemToggle($event));
        })("keydown", function PanelMenuList_Template_p_panelmenu_sub_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("menuFocus", function PanelMenuList_Template_p_panelmenu_sub_menuFocus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus($event));
        })("menuBlur", function PanelMenuList_Template_p_panelmenu_sub_menuBlur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur($event));
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
      }
    },
    dependencies: [CommonModule, PanelMenuSub, RouterModule, TooltipModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuList, [{
    type: Component,
    args: [{
      selector: "p-panelMenuList, p-panel-menu-list",
      imports: [CommonModule, PanelMenuSub, RouterModule, TooltipModule, SharedModule],
      standalone: true,
      template: `
        <p-panelmenu-sub
            #submenu
            [root]="true"
            [id]="panelId + '_list'"
            [panelId]="panelId"
            [tabindex]="tabindex"
            [itemTemplate]="itemTemplate"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [activeItemPath]="activeItemPath()"
            [transitionOptions]="transitionOptions"
            [items]="processedItems()"
            [parentExpanded]="parentExpanded"
            (itemToggle)="onItemToggle($event)"
            (keydown)="onKeyDown($event)"
            (menuFocus)="onFocus($event)"
            (menuBlur)="onBlur($event)"
        ></p-panelmenu-sub>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    panelId: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    root: [{
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
    activeItem: [{
      type: Input
    }],
    itemToggle: [{
      type: Output
    }],
    headerFocus: [{
      type: Output
    }],
    subMenuViewChild: [{
      type: ViewChild,
      args: ["submenu"]
    }]
  });
})();
var PanelMenu = class _PanelMenu extends BaseComponent {
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Whether multiple tabs can be activated at the same time or not.
   * @group Props
   */
  multiple = false;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  containerViewChild;
  /**
   * Template option of submenu icon.
   * @group Templates
   */
  submenuIconTemplate;
  /**
   * Template option of header icon.
   * @group Templates
   */
  headerIconTemplate;
  /**
   * Template option of item.
   * @group Templates
   */
  itemTemplate;
  templates;
  _submenuIconTemplate;
  _headerIconTemplate;
  _itemTemplate;
  animating;
  activeItem = signal(null, ...ngDevMode ? [{
    debugName: "activeItem"
  }] : []);
  _componentStyle = inject(PanelMenuStyle);
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || s2("pn_id_");
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this._submenuIconTemplate = item.template;
          break;
        case "headericon":
          this._headerIconTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  /**
   * Collapses open panels.
   * @group Method
   */
  collapseAll() {
    for (let item of this.model) {
      if (item.expanded) {
        item.expanded = false;
      }
    }
    this.cd.detectChanges();
  }
  onToggleDone() {
    this.animating = false;
    this.cd.markForCheck();
  }
  changeActiveItem(event, item, index, selfActive = false) {
    if (!this.isItemDisabled(item)) {
      const activeItem = selfActive ? item : this.activeItem && k(item, this.activeItem) ? null : item;
      this.activeItem.set(activeItem);
    }
  }
  getAnimation(item) {
    return item.expanded ? {
      value: "visible",
      params: {
        transitionParams: this.animating ? this.transitionOptions : "0ms",
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isItemActive(item) {
    return item.expanded;
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemGroup(item) {
    return s(item.items);
  }
  getPanelId(index, item) {
    return item && item.id ? item.id : `${this.id}_${index}`;
  }
  getHeaderId(item, index) {
    return item.id ? item.id + "_header" : `${this.getPanelId(index)}_header`;
  }
  getContentId(item, index) {
    return item.id ? item.id + "_content" : `${this.getPanelId(index)}_content`;
  }
  updateFocusedHeader(event) {
    const {
      originalEvent,
      focusOnNext,
      selfCheck
    } = event;
    const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
    const header = selfCheck ? z(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
    header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
  }
  changeFocusedHeader(event, element) {
    element && bt(element);
  }
  findNextHeader(panelElement, selfCheck = false) {
    const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
    const headerElement = z(nextPanelElement, '[data-pc-section="header"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
  }
  findPrevHeader(panelElement, selfCheck = false) {
    const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
    const headerElement = z(prevPanelElement, '[data-pc-section="header"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
  }
  findFirstHeader() {
    return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
  }
  findLastHeader() {
    return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
  }
  onHeaderClick(event, item, index) {
    if (this.isItemDisabled(item)) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (!this.multiple) {
      for (let modelItem of this.model) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    this.changeActiveItem(event, item, index);
    this.animating = true;
    bt(event.currentTarget);
  }
  onHeaderKeyDown(event, item, index) {
    switch (event.code) {
      case "ArrowDown":
        this.onHeaderArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onHeaderArrowUpKey(event);
        break;
      case "Home":
        this.onHeaderHomeKey(event);
        break;
      case "End":
        this.onHeaderEndKey(event);
        break;
      case "Enter":
      case "Space":
        this.onHeaderEnterKey(event, item, index);
        break;
      default:
        break;
    }
  }
  onHeaderArrowDownKey(event) {
    const rootList = Q(event.currentTarget, "data-p-highlight") === true ? z(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? bt(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onHeaderArrowUpKey(event) {
    const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
    const rootList = Q(prevHeader, "data-p-highlight") === true ? z(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? bt(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: false
    });
    event.preventDefault();
  }
  onHeaderHomeKey(event) {
    this.changeFocusedHeader(event, this.findFirstHeader());
    event.preventDefault();
  }
  onHeaderEndKey(event) {
    this.changeFocusedHeader(event, this.findLastHeader());
    event.preventDefault();
  }
  onHeaderEnterKey(event, item, index) {
    const headerAction = z(event.currentTarget, '[data-pc-section="headeraction"]');
    headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
    event.preventDefault();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPanelMenu_BaseFactory;
    return function PanelMenu_Factory(__ngFactoryType__) {
      return (ɵPanelMenu_BaseFactory || (ɵPanelMenu_BaseFactory = ɵɵgetInheritedFactory(_PanelMenu)))(__ngFactoryType__ || _PanelMenu);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenu,
    selectors: [["p-panelMenu"], ["p-panelmenu"], ["p-panel-menu"]],
    contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function PanelMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c8, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: ["data-pc-section", "root", "data-pc-name", "panelmenu"],
    hostVars: 2,
    hostBindings: function PanelMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      model: "model",
      styleClass: "styleClass",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      transitionOptions: "transitionOptions",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    features: [ɵɵProvidersFeature([PanelMenuStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["htmlLabel", ""], ["htmlRouteLabel", ""], [4, "ngFor", "ngForOf"], [3, "class", "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["role", "button", 3, "click", "keydown", "ngStyle", "pTooltip", "tabindex", "tooltipOptions"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["role", "region", 3, "class", 4, "ngIf"], [3, "target", "class", 4, "ngIf"], [3, "target"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-down", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-down"], ["data-p-icon", "chevron-right"], [3, "innerHTML"], [3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["role", "region"], [3, "headerFocus", "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded"]],
    template: function PanelMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, PanelMenu_ng_container_0_Template, 2, 1, "ng-container", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, PanelMenuList, RouterModule, RouterLink, RouterLinkActive, TooltipModule, Tooltip, ChevronDownIcon, ChevronRightIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("rootItem", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenu, [{
    type: Component,
    args: [{
      selector: "p-panelMenu, p-panelmenu, p-panel-menu",
      imports: [CommonModule, PanelMenuList, RouterModule, TooltipModule, ChevronDownIcon, ChevronRightIcon, SharedModule],
      standalone: true,
      template: `
        <ng-container *ngFor="let item of model; let f = first; let l = last; let i = index">
            <div *ngIf="isItemVisible(item)" [class]="cn(cx('panel'), getItemProp(item, 'headerClass'))" [ngStyle]="getItemProp(item, 'style')" [attr.data-pc-section]="'panel'">
                <div
                    [class]="cn(cx('header', { item }), getItemProp(item, 'styleClass'))"
                    [ngStyle]="getItemProp(item, 'style')"
                    [pTooltip]="getItemProp(item, 'tooltip')"
                    [attr.id]="getHeaderId(item, i)"
                    [tabindex]="0"
                    role="button"
                    [tooltipOptions]="getItemProp(item, 'tooltipOptions')"
                    [attr.aria-expanded]="isItemActive(item)"
                    [attr.aria-label]="getItemProp(item, 'label')"
                    [attr.aria-controls]="getContentId(item, i)"
                    [attr.aria-disabled]="isItemDisabled(item)"
                    [attr.data-p-highlight]="isItemActive(item)"
                    [attr.data-p-disabled]="isItemDisabled(item)"
                    [attr.data-pc-section]="'header'"
                    (click)="onHeaderClick($event, item, i)"
                    (keydown)="onHeaderKeyDown($event, item, i)"
                >
                    <div [class]="cx('headerContent')">
                        <ng-container *ngIf="!itemTemplate && !_itemTemplate">
                            <a
                                *ngIf="!getItemProp(item, 'routerLink')"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.tabindex]="-1"
                                [target]="getItemProp(item, 'target')"
                                [attr.title]="getItemProp(item, 'title')"
                                [class]="cx('headerLink')"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!headerIconTemplate && !_headerIconTemplate">
                                        <svg data-p-icon="chevron-down" [class]="cx('headerIcon')" *ngIf="isItemActive(item)" />
                                        <svg data-p-icon="chevron-right" [class]="cx('headerIcon')" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="headerIconTemplate || _headerIconTemplate"></ng-template>
                                </ng-container>
                                <span [class]="cn(cx('headerIcon'), item.icon)" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span [class]="cx('headerLabel')" *ngIf="getItemProp(item, 'escape') !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlLabel><span [class]="cx('headerLabel')" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span [class]="cn(cx('badge'), getItemProp(item, 'badgeStyleClass'))" *ngIf="getItemProp(item, 'badge')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                        <a
                            *ngIf="getItemProp(item, 'routerLink')"
                            [routerLink]="getItemProp(item, 'routerLink')"
                            [queryParams]="getItemProp(item, 'queryParams')"
                            [routerLinkActive]="'p-panelmenu-item-link-active'"
                            [routerLinkActiveOptions]="getItemProp(item, 'routerLinkActiveOptions') || { exact: false }"
                            [target]="getItemProp(item, 'target')"
                            [class]="cx('headerLink')"
                            [attr.tabindex]="-1"
                            [fragment]="getItemProp(item, 'fragment')"
                            [queryParamsHandling]="getItemProp(item, 'queryParamsHandling')"
                            [preserveFragment]="getItemProp(item, 'preserveFragment')"
                            [skipLocationChange]="getItemProp(item, 'skipLocationChange')"
                            [replaceUrl]="getItemProp(item, 'replaceUrl')"
                            [state]="getItemProp(item, 'state')"
                            [attr.data-pc-section]="'headeraction'"
                        >
                            <ng-container *ngIf="isItemGroup(item)">
                                <ng-container *ngIf="!headerIconTemplate && !_headerIconTemplate">
                                    <svg data-p-icon="chevron-down" [class]="cx('headerIcon')" *ngIf="isItemActive(item)" />
                                    <svg data-p-icon="chevron-right" [class]="cx('headerIcon')" *ngIf="!isItemActive(item)" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="headerIconTemplate || _headerIconTemplate"></ng-template>
                            </ng-container>
                            <span [class]="cn(cx('headerIcon'), item.icon)" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                            <span [class]="cx('headerLabel')" *ngIf="getItemProp(item, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                            <ng-template #htmlRouteLabel><span [class]="cx('headerLabel')" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                            <span *ngIf="getItemProp(item, 'badge')" [class]="cn(cx('badge'), getItemProp(item, 'badgeStyleClass'))">{{ getItemProp(item, 'badge') }}</span>
                        </a>
                    </div>
                </div>
                <div
                    *ngIf="isItemGroup(item)"
                    [class]="cx('contentContainer', { processedItem: item })"
                    [@rootItem]="getAnimation(item)"
                    (@rootItem.done)="onToggleDone()"
                    role="region"
                    [attr.id]="getContentId(item, i)"
                    [attr.aria-labelledby]="getHeaderId(item, i)"
                    [attr.data-pc-section]="'toggleablecontent'"
                >
                    <div [class]="cx('content')" [attr.data-pc-section]="'menucontent'">
                        <p-panelMenuList
                            [panelId]="getPanelId(i, item)"
                            [items]="getItemProp(item, 'items')"
                            [itemTemplate]="itemTemplate || _itemTemplate"
                            [transitionOptions]="transitionOptions"
                            [root]="true"
                            [activeItem]="activeItem()"
                            [tabindex]="tabindex"
                            [parentExpanded]="isItemActive(item)"
                            (headerFocus)="updateFocusedHeader($event)"
                        ></p-panelMenuList>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
      animations: [trigger("rootItem", [state("hidden", style({
        height: "0",
        visibility: "hidden"
      })), state("visible", style({
        height: "*",
        visibility: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PanelMenuStyle],
      host: {
        "[class]": 'cn(cx("root"), styleClass)',
        "data-pc-section": "root",
        "data-pc-name": "panelmenu"
      }
    }]
  }], null, {
    model: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    submenuIconTemplate: [{
      type: ContentChild,
      args: ["submenuicon", {
        descendants: false
      }]
    }],
    headerIconTemplate: [{
      type: ContentChild,
      args: ["headericon", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelMenuModule = class _PanelMenuModule {
  static ɵfac = function PanelMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PanelMenuModule,
    imports: [PanelMenu, SharedModule],
    exports: [PanelMenu, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PanelMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuModule, [{
    type: NgModule,
    args: [{
      imports: [PanelMenu, SharedModule],
      exports: [PanelMenu, SharedModule]
    }]
  }], null, null);
})();
export {
  PanelMenu,
  PanelMenuClasses,
  PanelMenuList,
  PanelMenuModule,
  PanelMenuStyle,
  PanelMenuSub
};
//# sourceMappingURL=primeng_panelmenu.js.map
