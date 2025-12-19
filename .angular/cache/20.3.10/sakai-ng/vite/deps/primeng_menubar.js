import {
  Badge,
  BadgeModule
} from "./chunk-UDJNLJ7R.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-ZVLLQLHS.js";
import "./chunk-P6SMTJBG.js";
import {
  Ripple
} from "./chunk-2NNT3GX6.js";
import {
  zindexutils
} from "./chunk-CMVOE67Z.js";
import {
  AngleDownIcon,
  AngleRightIcon,
  BarsIcon
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
  Bind,
  BindModule
} from "./chunk-SSPEJKN4.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-CIMRSYG7.js";
import "./chunk-QAUQ7NUX.js";
import "./chunk-RS4JDN4Z.js";
import "./chunk-XI5EKNQ2.js";
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
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  effect,
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
  ɵɵdirectiveInject,
  ɵɵdomProperty,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import {
  Subject,
  debounce,
  filter,
  interval
} from "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import {
  J,
  M,
  Yt,
  bt,
  l,
  m,
  s,
  s3 as s2,
  z2 as z
} from "./chunk-U4LT4ZJN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/menubar/index.mjs
var style = "\n    .p-menubar {\n        display: flex;\n        align-items: center;\n        background: dt('menubar.background');\n        border: 1px solid dt('menubar.border.color');\n        border-radius: dt('menubar.border.radius');\n        color: dt('menubar.color');\n        padding: dt('menubar.padding');\n        gap: dt('menubar.gap');\n    }\n\n    .p-menubar-start,\n    .p-megamenu-end {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-menubar-root-list,\n    .p-menubar-submenu {\n        display: flex;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        outline: 0 none;\n    }\n\n    .p-menubar-root-list {\n        align-items: center;\n        flex-wrap: wrap;\n        gap: dt('menubar.gap');\n    }\n\n    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n        border-radius: dt('menubar.base.item.border.radius');\n    }\n\n    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n        padding: dt('menubar.base.item.padding');\n    }\n\n    .p-menubar-item-content {\n        transition:\n            background dt('menubar.transition.duration'),\n            color dt('menubar.transition.duration');\n        border-radius: dt('menubar.item.border.radius');\n        color: dt('menubar.item.color');\n    }\n\n    .p-menubar-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menubar.item.padding');\n        gap: dt('menubar.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menubar-item-label {\n        line-height: 1;\n    }\n\n    .p-menubar-item-icon {\n        color: dt('menubar.item.icon.color');\n    }\n\n    .p-menubar-submenu-icon {\n        color: dt('menubar.submenu.icon.color');\n        margin-left: auto;\n        font-size: dt('menubar.submenu.icon.size');\n        width: dt('menubar.submenu.icon.size');\n        height: dt('menubar.submenu.icon.size');\n    }\n\n    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-menubar-item.p-focus > .p-menubar-item-content {\n        color: dt('menubar.item.focus.color');\n        background: dt('menubar.item.focus.background');\n    }\n\n    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n        color: dt('menubar.item.icon.focus.color');\n    }\n\n    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n        color: dt('menubar.submenu.icon.focus.color');\n    }\n\n    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n        color: dt('menubar.item.focus.color');\n        background: dt('menubar.item.focus.background');\n    }\n\n    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n        color: dt('menubar.item.icon.focus.color');\n    }\n\n    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n        color: dt('menubar.submenu.icon.focus.color');\n    }\n\n    .p-menubar-item-active > .p-menubar-item-content {\n        color: dt('menubar.item.active.color');\n        background: dt('menubar.item.active.background');\n    }\n\n    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n        color: dt('menubar.item.icon.active.color');\n    }\n\n    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n        color: dt('menubar.submenu.icon.active.color');\n    }\n\n    .p-menubar-submenu {\n        display: none;\n        position: absolute;\n        min-width: 12.5rem;\n        z-index: 1;\n        background: dt('menubar.submenu.background');\n        border: 1px solid dt('menubar.submenu.border.color');\n        border-radius: dt('menubar.submenu.border.radius');\n        box-shadow: dt('menubar.submenu.shadow');\n        color: dt('menubar.submenu.color');\n        flex-direction: column;\n        padding: dt('menubar.submenu.padding');\n        gap: dt('menubar.submenu.gap');\n    }\n\n    .p-menubar-submenu .p-menubar-separator {\n        border-block-start: 1px solid dt('menubar.separator.border.color');\n    }\n\n    .p-menubar-submenu .p-menubar-item {\n        position: relative;\n    }\n\n    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n        display: block;\n        left: 100%;\n        top: 0;\n    }\n\n    .p-menubar-end {\n        margin-left: auto;\n        align-self: center;\n    }\n\n    .p-menubar-end:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-menubar-button {\n        display: none;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        width: dt('menubar.mobile.button.size');\n        height: dt('menubar.mobile.button.size');\n        position: relative;\n        color: dt('menubar.mobile.button.color');\n        border: 0 none;\n        background: transparent;\n        border-radius: dt('menubar.mobile.button.border.radius');\n        transition:\n            background dt('menubar.transition.duration'),\n            color dt('menubar.transition.duration'),\n            outline-color dt('menubar.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-menubar-button:hover {\n        color: dt('menubar.mobile.button.hover.color');\n        background: dt('menubar.mobile.button.hover.background');\n    }\n\n    .p-menubar-button:focus-visible {\n        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');\n        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');\n        outline-offset: dt('menubar.mobile.button.focus.ring.offset');\n    }\n\n    .p-menubar-mobile {\n        position: relative;\n    }\n\n    .p-menubar-mobile .p-menubar-button {\n        display: flex;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list {\n        position: absolute;\n        display: none;\n        width: 100%;\n        flex-direction: column;\n        top: 100%;\n        left: 0;\n        z-index: 1;\n        padding: dt('menubar.submenu.padding');\n        background: dt('menubar.submenu.background');\n        border: 1px solid dt('menubar.submenu.border.color');\n        box-shadow: dt('menubar.submenu.shadow');\n        border-radius: dt('menubar.submenu.border.radius');\n        gap: dt('menubar.submenu.gap');\n    }\n\n    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {\n        left: auto;\n        right: 0;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n        padding: dt('menubar.item.padding');\n    }\n\n    .p-menubar-mobile-active .p-menubar-root-list {\n        display: flex;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n        width: 100%;\n        position: static;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n        border-block-start: 1px solid dt('menubar.separator.border.color');\n    }\n\n    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n        margin-left: auto;\n        transition: transform 0.2s;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),\n    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n        transform: rotate(-180deg);\n    }\n\n    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n        transition: transform 0.2s;\n        transform: rotate(90deg);\n    }\n\n    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n        transform: rotate(-90deg);\n    }\n\n    .p-menubar-mobile .p-menubar-submenu {\n        width: 100%;\n        position: static;\n        box-shadow: none;\n        border: 0 none;\n        padding-inline-start: dt('menubar.submenu.mobile.indent');\n        padding-inline-end: 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-menubar.mjs
var _c0 = (a0, a1) => ({
  instance: a0,
  processedItem: a1
});
var _c1 = () => ({
  exact: false
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  root: a1
});
function MenubarSub_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.getItemProp(processedItem_r1, "style"));
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("separator"), processedItem_r1 == null ? null : processedItem_r1.styleClass));
    ɵɵproperty("pBind", ctx_r1.ptm("separator"));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.getItemProp(processedItem_r1, "iconStyle"));
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r1, "icon")));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemIcon"));
    ɵɵattribute("tabindex", -1);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLabel"));
    ɵɵproperty("id", ctx_r1.getItemLabelId(processedItem_r1))("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r1), " ");
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r1), ɵɵsanitizeHtml)("id", ctx_r1.getItemLabelId(processedItem_r1))("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLabel"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 20);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.getItemProp(processedItem_r1, "badgeStyleClass"));
    ɵɵproperty("value", ctx_r1.getItemProp(processedItem_r1, "badge"))("pt", ctx_r1.getPTOptions(processedItem_r1, index_r5, "pcBadge"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "submenuIcon"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "submenuIcon"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 22)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.root);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.root);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 9)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 0, null, 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.submenuiconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.submenuiconTemplate);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_span_1_Template, 1, 6, "span", 14)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_span_2_Template, 2, 5, "span", 15)(3, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_p_badge_5_Template, 1, 4, "p-badge", 16)(6, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext(3);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLink"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLink"));
    ɵɵattribute("href", ctx_r1.getItemProp(processedItem_r1, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r1.getItemProp(processedItem_r1, "automationId"))("target", ctx_r1.getItemProp(processedItem_r1, "target"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 29);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r1, "icon")));
    ɵɵproperty("ngStyle", ctx_r1.getItemProp(processedItem_r1, "iconStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemIcon"));
    ɵɵattribute("tabindex", -1);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemLabel(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r1), ɵɵsanitizeHtml)("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLabel"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 20);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.getItemProp(processedItem_r1, "badgeStyleClass"));
    ɵɵproperty("value", ctx_r1.getItemProp(processedItem_r1, "badge"))("pt", ctx_r1.getPTOptions(processedItem_r1, index_r5, "pcBadge"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "submenuIcon"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "submenuIcon"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 22)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.root);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.root);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 9)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 0, null, 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.submenuiconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.submenuiconTemplate);
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 27)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_span_2_Template, 2, 4, "span", 28)(3, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_p_badge_5_Template, 1, 4, "p-badge", 16)(6, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext(3);
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r1.getItemProp(processedItem_r1, "routerLink"))("queryParams", ctx_r1.getItemProp(processedItem_r1, "queryParams"))("routerLinkActive", "p-menubar-item-link-active")("routerLinkActiveOptions", ctx_r1.getItemProp(processedItem_r1, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c1))("target", ctx_r1.getItemProp(processedItem_r1, "target"))("fragment", ctx_r1.getItemProp(processedItem_r1, "fragment"))("queryParamsHandling", ctx_r1.getItemProp(processedItem_r1, "queryParamsHandling"))("preserveFragment", ctx_r1.getItemProp(processedItem_r1, "preserveFragment"))("skipLocationChange", ctx_r1.getItemProp(processedItem_r1, "skipLocationChange"))("replaceUrl", ctx_r1.getItemProp(processedItem_r1, "replaceUrl"))("state", ctx_r1.getItemProp(processedItem_r1, "state"))("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemLink"));
    ɵɵattribute("data-automationid", ctx_r1.getItemProp(processedItem_r1, "automationId"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "escape"))("ngIfElse", htmlRouteLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_3_a_1_Template, 7, 12, "a", 11)(2, MenubarSub_ng_template_0_li_1_ng_container_3_a_2_Template, 7, 22, "a", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.getItemProp(processedItem_r1, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r1, "routerLink"));
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function MenubarSub_ng_template_0_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenubarSub_ng_template_0_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenubarSub_ng_template_0_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenubarSub_ng_template_0_li_1_ng_container_4_1_Template, 1, 0, null, 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c2, processedItem_r1.item, ctx_r1.root));
  }
}
function MenubarSub_ng_template_0_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 32);
    ɵɵlistener("itemClick", function MenubarSub_ng_template_0_li_1_ul_5_Template_ul_itemClick_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.itemClick.emit($event));
    })("itemMouseEnter", function MenubarSub_ng_template_0_li_1_ul_5_Template_ul_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("itemTemplate", ctx_r1.itemTemplate)("items", processedItem_r1.items)("mobileActive", ctx_r1.mobileActive)("autoDisplay", ctx_r1.autoDisplay)("menuId", ctx_r1.menuId)("activeItemPath", ctx_r1.activeItemPath)("focusedItemId", ctx_r1.focusedItemId)("level", ctx_r1.level + 1)("inlineStyles", ctx_r1.sx("submenu", true, ɵɵpureFunction2(12, _c0, ctx_r1, processedItem_r1)))("pt", ctx_r1.pt())("pBind", ctx_r1.ptm("submenu"));
    ɵɵattribute("aria-labelledby", ctx_r1.getItemLabelId(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7, 0)(2, "div", 8);
    ɵɵlistener("click", function MenubarSub_ng_template_0_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r3);
      const processedItem_r1 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, processedItem_r1));
    })("mouseenter", function MenubarSub_ng_template_0_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r3);
      const processedItem_r1 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter({
        $event,
        processedItem: processedItem_r1
      }));
    });
    ɵɵtemplate(3, MenubarSub_ng_template_0_li_1_ng_container_3_Template, 3, 2, "ng-container", 9)(4, MenubarSub_ng_template_0_li_1_ng_container_4_Template, 2, 5, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵtemplate(5, MenubarSub_ng_template_0_li_1_ul_5_Template, 1, 15, "ul", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const processedItem_r1 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.getItemProp(processedItem_r1, "style"));
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("item", ɵɵpureFunction2(22, _c0, ctx_r1, processedItem_r1)), ctx_r1.getItemProp(processedItem_r1, "styleClass")));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "item"))("tooltipOptions", ctx_r1.getItemProp(processedItem_r1, "tooltipOptions"));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r1))("data-p-highlight", ctx_r1.isItemActive(processedItem_r1))("data-p-focused", ctx_r1.isItemFocused(processedItem_r1))("data-p-disabled", ctx_r1.isItemDisabled(processedItem_r1))("aria-label", ctx_r1.getItemLabel(processedItem_r1))("aria-disabled", ctx_r1.isItemDisabled(processedItem_r1) || void 0)("aria-haspopup", ctx_r1.isItemGroup(processedItem_r1) && !ctx_r1.getItemProp(processedItem_r1, "to") ? "menu" : void 0)("aria-expanded", ctx_r1.isItemGroup(processedItem_r1) ? ctx_r1.isItemActive(processedItem_r1) : void 0)("aria-setsize", ctx_r1.getAriaSetSize())("aria-posinset", ctx_r1.getAriaPosInset(index_r5));
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.cx("itemContent"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions(processedItem_r1, index_r5, "itemContent"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r1) && ctx_r1.isItemGroup(processedItem_r1));
  }
}
function MenubarSub_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenubarSub_ng_template_0_li_0_Template, 1, 6, "li", 4)(1, MenubarSub_ng_template_0_li_1_Template, 6, 25, "li", 5);
  }
  if (rf & 2) {
    const processedItem_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r1) && ctx_r1.getItemProp(processedItem_r1, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r1) && !ctx_r1.getItemProp(processedItem_r1, "separator"));
  }
}
var _c3 = ["start"];
var _c4 = ["end"];
var _c5 = ["item"];
var _c6 = ["menuicon"];
var _c7 = ["submenuicon"];
var _c8 = ["menubutton"];
var _c9 = ["rootmenu"];
var _c10 = ["*"];
function Menubar_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menubar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, Menubar_div_0_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("start"));
    ɵɵproperty("pBind", ctx_r1.ptm("start"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.startTemplate || ctx_r1._startTemplate);
  }
}
function Menubar_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r1.ptm("buttonIcon"));
  }
}
function Menubar_a_1_3_ng_template_0_Template(rf, ctx) {
}
function Menubar_a_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menubar_a_1_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Menubar_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9, 2);
    ɵɵlistener("click", function Menubar_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuButtonClick($event));
    })("keydown", function Menubar_a_1_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuButtonKeydown($event));
    });
    ɵɵtemplate(2, Menubar_a_1__svg_svg_2_Template, 1, 1, "svg", 10)(3, Menubar_a_1_3_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("button"));
    ɵɵproperty("pBind", ctx_r1.ptm("button"));
    ɵɵattribute("aria-haspopup", ctx_r1.model.length && ctx_r1.model.length > 0 ? true : false)("aria-expanded", ctx_r1.mobileActive)("aria-controls", ctx_r1.id)("aria-label", ctx_r1.config.translation.aria.navigation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.menuIconTemplate && !ctx_r1._menuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.menuIconTemplate || ctx_r1._menuIconTemplate);
  }
}
function Menubar_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menubar_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, Menubar_div_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("end"));
    ɵɵproperty("pBind", ctx_r1.ptm("end"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.endTemplate || ctx_r1._endTemplate);
  }
}
function Menubar_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("end"));
  }
}
var inlineStyles = {
  submenu: ({
    instance,
    processedItem
  }) => ({
    display: instance.isItemActive(processedItem) ? "flex" : "none"
  })
};
var classes = {
  root: ({
    instance
  }) => ["p-menubar p-component", {
    "p-menubar-mobile": instance.queryMatches,
    "p-menubar-mobile-active": instance.mobileActive
  }],
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-menubar-item", {
    "p-menubar-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
};
var MenuBarStyle = class _MenuBarStyle extends BaseStyle {
  name = "menubar";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMenuBarStyle_BaseFactory;
    return function MenuBarStyle_Factory(__ngFactoryType__) {
      return (ɵMenuBarStyle_BaseFactory || (ɵMenuBarStyle_BaseFactory = ɵɵgetInheritedFactory(_MenuBarStyle)))(__ngFactoryType__ || _MenuBarStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuBarStyle,
    factory: _MenuBarStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuBarStyle, [{
    type: Injectable
  }], null, null);
})();
var MenubarClasses;
(function(MenubarClasses2) {
  MenubarClasses2["root"] = "p-menubar";
  MenubarClasses2["start"] = "p-menubar-start";
  MenubarClasses2["button"] = "p-menubar-button";
  MenubarClasses2["rootList"] = "p-menubar-root-list";
  MenubarClasses2["item"] = "p-menubar-item";
  MenubarClasses2["itemContent"] = "p-menubar-item-content";
  MenubarClasses2["itemLink"] = "p-menubar-item-link";
  MenubarClasses2["itemIcon"] = "p-menubar-item-icon";
  MenubarClasses2["itemLabel"] = "p-menubar-item-label";
  MenubarClasses2["submenuIcon"] = "p-menubar-submenu-icon";
  MenubarClasses2["submenu"] = "p-menubar-submenu";
  MenubarClasses2["separator"] = "p-menubar-separator";
  MenubarClasses2["end"] = "p-menubar-end";
})(MenubarClasses || (MenubarClasses = {}));
var MENUBAR_INSTANCE = new InjectionToken("MENUBAR_INSTANCE");
var MenubarService = class _MenubarService {
  autoHide;
  autoHideDelay;
  mouseLeaves = new Subject();
  mouseLeft$ = this.mouseLeaves.pipe(debounce(() => interval(this.autoHideDelay)), filter((mouseLeft) => this.autoHide && mouseLeft));
  static ɵfac = function MenubarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenubarService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MenubarService,
    factory: _MenubarService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenubarService, [{
    type: Injectable
  }], null, null);
})();
var MenubarSub = class _MenubarSub extends BaseComponent {
  items;
  itemTemplate;
  root = false;
  autoZIndex = true;
  baseZIndex = 0;
  mobileActive;
  autoDisplay;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath;
  inlineStyles;
  submenuiconTemplate;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  mouseLeaveSubscriber;
  menubarService = inject(MenubarService);
  _componentStyle = inject(MenuBarStyle);
  hostName = "Menubar";
  onInit() {
    this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? m(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getItemLabelId(processedItem) {
    return `${this.menuId}_${processedItem.key}_label`;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    }
    return false;
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
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemMouseEnter(param) {
    if (this.autoDisplay) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
  }
  getPTOptions(processedItem, index, key) {
    return this.ptm(key, {
      context: {
        item: processedItem.item,
        index,
        active: this.isItemActive(processedItem),
        focused: this.isItemFocused(processedItem),
        disabled: this.isItemDisabled(processedItem),
        level: this.level
      }
    });
  }
  onDestroy() {
    this.mouseLeaveSubscriber?.unsubscribe();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMenubarSub_BaseFactory;
    return function MenubarSub_Factory(__ngFactoryType__) {
      return (ɵMenubarSub_BaseFactory || (ɵMenubarSub_BaseFactory = ɵɵgetInheritedFactory(_MenubarSub)))(__ngFactoryType__ || _MenubarSub);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MenubarSub,
    selectors: [["p-menubarSub"], ["p-menubarsub"], ["", "pMenubarSub", ""]],
    hostAttrs: ["role", "menubar"],
    hostVars: 6,
    hostBindings: function MenubarSub_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx.root ? ctx.menuId : null);
        ɵɵattribute("aria-activedescendant", ctx.focusedItemId);
        ɵɵstyleMap(ctx.inlineStyles);
        ɵɵclassMap(ctx.level === 0 ? ctx.cx("rootList") : ctx.cx("submenu"));
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      root: [2, "root", "root", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      mobileActive: [2, "mobileActive", "mobileActive", booleanAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: "activeItemPath",
      inlineStyles: "inlineStyles",
      submenuiconTemplate: "submenuiconTemplate"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["listItem", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "style", "class", "pBind", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["role", "menuitem", "pTooltip", "", 3, "pBind", "tooltipOptions"], [3, "click", "mouseenter", "pBind"], [4, "ngIf"], ["pMenubarSub", "", 3, "itemTemplate", "items", "mobileActive", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "inlineStyles", "pt", "pBind", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "class", "pBind", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "pBind"], [3, "class", "style", "pBind", 4, "ngIf"], [3, "class", "id", "pBind", 4, "ngIf", "ngIfElse"], [3, "class", "value", "pt", 4, "ngIf"], [3, "pBind"], [3, "id", "pBind"], [3, "innerHTML", "id", "pBind"], [3, "value", "pt"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-down", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "angle-right", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "angle-down", 3, "pBind"], ["data-p-icon", "angle-right", 3, "pBind"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "ngStyle", "pBind"], [3, "innerHTML", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pMenubarSub", "", 3, "itemClick", "itemMouseEnter", "itemTemplate", "items", "mobileActive", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "inlineStyles", "pt", "pBind"]],
    template: function MenubarSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, MenubarSub_ng_template_0_Template, 2, 2, "ng-template", 3);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: [_MenubarSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Tooltip, Bind, AngleDownIcon, AngleRightIcon, BadgeModule, Badge, SharedModule, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenubarSub, [{
    type: Component,
    args: [{
      selector: "p-menubarSub, p-menubarsub, [pMenubarSub]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleDownIcon, AngleRightIcon, BadgeModule, SharedModule, BindModule],
      template: `
        <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
            <li
                *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                [attr.id]="getItemId(processedItem)"
                [style]="getItemProp(processedItem, 'style')"
                [class]="cn(cx('separator'), processedItem?.styleClass)"
                role="separator"
                [pBind]="ptm('separator')"
            ></li>
            <li
                #listItem
                *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                role="menuitem"
                [attr.id]="getItemId(processedItem)"
                [attr.data-p-highlight]="isItemActive(processedItem)"
                [attr.data-p-focused]="isItemFocused(processedItem)"
                [attr.data-p-disabled]="isItemDisabled(processedItem)"
                [attr.aria-label]="getItemLabel(processedItem)"
                [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                [attr.aria-setsize]="getAriaSetSize()"
                [attr.aria-posinset]="getAriaPosInset(index)"
                [style]="getItemProp(processedItem, 'style')"
                [class]="cn(cx('item', { instance: this, processedItem }), getItemProp(processedItem, 'styleClass'))"
                [pBind]="getPTOptions(processedItem, index, 'item')"
                pTooltip
                [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
            >
                <div [class]="cx('itemContent')" [pBind]="getPTOptions(processedItem, index, 'itemContent')" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">
                    <ng-container *ngIf="!itemTemplate">
                        <a
                            *ngIf="!getItemProp(processedItem, 'routerLink')"
                            [attr.href]="getItemProp(processedItem, 'url')"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [attr.target]="getItemProp(processedItem, 'target')"
                            [class]="cx('itemLink')"
                            [attr.tabindex]="-1"
                            [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                            pRipple
                        >
                            <span
                                *ngIf="getItemProp(processedItem, 'icon')"
                                [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'))"
                                [style]="getItemProp(processedItem, 'iconStyle')"
                                [attr.tabindex]="-1"
                                [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                            >
                            </span>
                            <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" [class]="cx('itemLabel')" [id]="getItemLabelId(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')">
                                {{ getItemLabel(processedItem) }}
                            </span>
                            <ng-template #htmlLabel>
                                <span [class]="cx('itemLabel')" [innerHTML]="getItemLabel(processedItem)" [id]="getItemLabelId(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')"></span>
                            </ng-template>
                            <p-badge *ngIf="getItemProp(processedItem, 'badge')" [class]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" [pt]="getPTOptions(processedItem, index, 'pcBadge')" />

                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <ng-container *ngIf="!submenuiconTemplate">
                                    <svg data-p-icon="angle-down" [class]="cx('submenuIcon')" *ngIf="root" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" />
                                    <svg data-p-icon="angle-right" [class]="cx('submenuIcon')" *ngIf="!root" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="submenuiconTemplate"></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="getItemProp(processedItem, 'routerLink')"
                            [routerLink]="getItemProp(processedItem, 'routerLink')"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [attr.tabindex]="-1"
                            [queryParams]="getItemProp(processedItem, 'queryParams')"
                            [routerLinkActive]="'p-menubar-item-link-active'"
                            [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                            [target]="getItemProp(processedItem, 'target')"
                            [class]="cx('itemLink')"
                            [fragment]="getItemProp(processedItem, 'fragment')"
                            [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                            [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                            [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                            [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                            [state]="getItemProp(processedItem, 'state')"
                            [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                            pRipple
                        >
                            <span
                                [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'))"
                                *ngIf="getItemProp(processedItem, 'icon')"
                                [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                [attr.tabindex]="-1"
                                [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                            ></span>
                            <span [class]="cx('itemLabel')" *ngIf="getItemProp(processedItem, 'escape'); else htmlRouteLabel" [pBind]="getPTOptions(processedItem, index, 'itemLabel')">{{ getItemLabel(processedItem) }}</span>
                            <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="getItemLabel(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')"></span></ng-template>
                            <p-badge *ngIf="getItemProp(processedItem, 'badge')" [class]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" [pt]="getPTOptions(processedItem, index, 'pcBadge')" />
                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <ng-container *ngIf="!submenuiconTemplate">
                                    <svg data-p-icon="angle-down" [class]="cx('submenuIcon')" *ngIf="root" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" />
                                    <svg data-p-icon="angle-right" [class]="cx('submenuIcon')" *ngIf="!root" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="submenuiconTemplate"></ng-template>
                            </ng-container>
                        </a>
                    </ng-container>
                    <ng-container *ngIf="itemTemplate">
                        <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item, root: root }"></ng-template>
                    </ng-container>
                </div>
                <ul
                    pMenubarSub
                    *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                    [itemTemplate]="itemTemplate"
                    [items]="processedItem.items"
                    [mobileActive]="mobileActive"
                    [autoDisplay]="autoDisplay"
                    [menuId]="menuId"
                    [activeItemPath]="activeItemPath"
                    [focusedItemId]="focusedItemId"
                    [level]="level + 1"
                    [attr.aria-labelledby]="getItemLabelId(processedItem)"
                    (itemClick)="itemClick.emit($event)"
                    (itemMouseEnter)="onItemMouseEnter($event)"
                    [inlineStyles]="sx('submenu', true, { instance: this, processedItem })"
                    [pt]="pt()"
                    [pBind]="ptm('submenu')"
                ></ul>
            </li>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[id]": "root ? menuId : null",
        "[attr.aria-activedescendant]": "focusedItemId",
        "[class]": "level === 0 ? cx('rootList') : cx('submenu')",
        role: "menubar",
        "[style]": "inlineStyles"
      }
    }]
  }], null, {
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    mobileActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input
    }],
    inlineStyles: [{
      type: Input
    }],
    submenuiconTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }]
  });
})();
var Menubar = class _Menubar extends BaseComponent {
  document;
  platformId;
  el;
  renderer;
  cd;
  menubarService;
  $pcMenubar = inject(MENUBAR_INSTANCE, {
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
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
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
   * Whether to show a root submenu on mouse over.
   * @defaultValue true
   * @group Props
   */
  autoDisplay = true;
  /**
   * Whether to hide a root submenu when mouse leaves.
   * @group Props
   */
  autoHide;
  /**
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Delay to hide the root submenu in milliseconds when mouse leaves.
   * @group Props
   */
  autoHideDelay = 100;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to execute when button is focused.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  menubutton;
  rootmenu;
  mobileActive;
  matchMediaListener;
  query;
  queryMatches;
  outsideClickListener;
  resizeListener;
  mouseLeaveSubscriber;
  dirty = false;
  focused = false;
  activeItemPath = signal([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : []);
  number = signal(0, ...ngDevMode ? [{
    debugName: "number"
  }] : []);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  }, ...ngDevMode ? [{
    debugName: "focusedItemInfo"
  }] : []);
  searchValue = "";
  searchTimeout;
  _processedItems;
  _componentStyle = inject(MenuBarStyle);
  _model;
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${s(focusedItem.parentKey) ? "_" + focusedItem.parentKey : ""}_${focusedItem.index}` : null;
  }
  constructor(document, platformId, el, renderer, cd, menubarService) {
    super();
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.menubarService = menubarService;
    effect(() => {
      const path = this.activeItemPath();
      if (s(path)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  onInit() {
    this.bindMatchMediaListener();
    this.menubarService.autoHide = this.autoHide;
    this.menubarService.autoHideDelay = this.autoHideDelay;
    this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => {
      this.hide();
    });
    this.id = this.id || s2("pn_id_");
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  menuIconTemplate;
  /**
   * Defines template option for submenu icon.
   * @group Templates
   */
  submenuIconTemplate;
  templates;
  _startTemplate;
  _endTemplate;
  _itemTemplate;
  _menuIconTemplate;
  _submenuIconTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "menuicon":
          this._menuIconTemplate = item.template;
          break;
        case "submenuicon":
          this._submenuIconTemplate = item.template;
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
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
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
  bindMatchMediaListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.matchMediaListener) {
        const query = window.matchMedia(`(max-width: ${this.breakpoint})`);
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = () => {
          this.queryMatches = query.matches;
          this.mobileActive = false;
          this.cd.markForCheck();
        };
        query.addEventListener("change", this.matchMediaListener);
      }
    }
  }
  unbindMatchMediaListener() {
    if (this.matchMediaListener) {
      this.query.removeEventListener("change", this.matchMediaListener);
      this.matchMediaListener = null;
    }
  }
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
  }
  menuButtonClick(event) {
    this.toggle(event);
  }
  menuButtonKeydown(event) {
    (event.code === "Enter" || event.code === "Space") && this.menuButtonClick(event);
  }
  onItemClick(event) {
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = l(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p) => key !== p.key && key.startsWith(p.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      this.dirty = !root;
      bt(this.rootmenu?.el.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItemPath().find((p) => p.parentKey === "");
        this.hide(originalEvent);
        this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
        this.mobileActive = false;
        bt(this.rootmenu?.el.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!Yt()) {
      if (this.dirty) {
        this.onItemChange(event, "hover");
      }
    } else {
      this.onItemChange({
        event,
        processedItem: event.processedItem,
        focus: this.autoDisplay
      }, "hover");
    }
  }
  onMouseLeave(event) {
    const autoHideEnabled = this.menubarService.autoHide;
    const autoHideDelay = this.menubarService.autoHideDelay;
    if (autoHideEnabled) {
      setTimeout(() => {
        this.menubarService.mouseLeaves.next(true);
      }, autoHideDelay);
    }
  }
  changeFocusedItemIndex(event, index) {
    const processedItem = this.findVisibleItem(index);
    if (this.focusedItemInfo().index !== index) {
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        item: processedItem.item,
        index
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = z(this.rootmenu?.el.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onItemChange(event, type) {
    const {
      processedItem,
      isFocus
    } = event;
    if (l(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = s(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    grouped && activeItemPath.push(processedItem);
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && bt(this.rootmenu?.el.nativeElement);
    if (type === "hover" && this.queryMatches) {
      return;
    }
    this.activeItemPath.set(activeItemPath);
  }
  toggle(event) {
    if (this.mobileActive) {
      this.mobileActive = false;
      zindexutils.clear(this.rootmenu?.el.nativeElement);
      this.hide();
    } else {
      this.mobileActive = true;
      zindexutils.set("menu", this.rootmenu?.el.nativeElement, this.config.zIndex.menu);
      setTimeout(() => {
        this.show();
      }, 0);
    }
    this.bindOutsideClickListener();
    event.preventDefault();
  }
  hide(event, isFocus) {
    if (this.mobileActive) {
      setTimeout(() => {
        bt(this.menubutton?.nativeElement);
      }, 0);
    }
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    isFocus && bt(this.rootmenu?.el.nativeElement);
    this.dirty = false;
  }
  show() {
    const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
    this.focusedItemInfo.set({
      index: this.findFirstFocusedItemIndex(),
      level: 0,
      parentKey: "",
      item: processedItem?.item
    });
    bt(this.rootmenu?.el.nativeElement);
  }
  onMenuFocus(event) {
    this.focused = true;
    const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
    const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
      index: this.findFirstFocusedItemIndex(),
      level: 0,
      parentKey: "",
      item: processedItem?.item
    };
    this.focusedItemInfo.set(focusedItemInfo);
    this.onFocus.emit(event);
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
    this.onBlur.emit(event);
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
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && J(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  findVisibleItem(index) {
    return s(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
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
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  onArrowDownKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const root = processedItem ? l(processedItem.parent) : null;
    if (root) {
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo.set({
          index: -1,
          parentKey: processedItem.key,
          item: processedItem.item
        });
        this.onArrowRightKey(event);
      }
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = processedItem ? this.activeItemPath().find((p) => p.key === processedItem.parentKey) : null;
    if (parentItem) {
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo.set({
          index: -1,
          parentKey: processedItem.key,
          item: processedItem.item
        });
        this.onArrowDownKey(event);
      }
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowUpKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const root = l(processedItem.parent);
    if (root) {
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo.set({
          index: -1,
          parentKey: processedItem.key,
          item: processedItem.item
        });
        const itemIndex = this.findLastItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
      }
    } else {
      const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
      if (this.focusedItemInfo().index === 0) {
        this.focusedItemInfo.set({
          index: -1,
          parentKey: parentItem ? parentItem.parentKey : "",
          item: processedItem.item
        });
        this.searchValue = "";
        this.onArrowLeftKey(event);
        const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
        this.activeItemPath.set(activeItemPath);
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
      }
    }
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = processedItem ? this.activeItemPath().find((p) => p.key === processedItem.parentKey) : null;
    if (parentItem) {
      this.onItemChange({
        originalEvent: event,
        processedItem: parentItem
      });
      const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
      this.activeItemPath.set(activeItemPath);
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide(event, true);
    this.focusedItemInfo().index = this.findFirstFocusedItemIndex();
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = z(this.rootmenu?.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return M(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? M(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!Yt()) {
            this.hide(event, true);
          }
          this.mobileActive = false;
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.rootmenu?.el.nativeElement !== event.target && !this.rootmenu?.el.nativeElement?.contains(event.target);
          const isOutsideMenuButton = this.mobileActive && this.menubutton?.nativeElement !== event.target && !this.menubutton?.nativeElement?.contains(event.target);
          if (isOutsideContainer) {
            isOutsideMenuButton ? this.mobileActive = false : this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onDestroy() {
    this.mouseLeaveSubscriber?.unsubscribe();
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
  }
  static ɵfac = function Menubar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menubar)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MenubarService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Menubar,
    selectors: [["p-menubar"]],
    contentQueries: function Menubar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menubar_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c8, 5);
        ɵɵviewQuery(_c9, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubutton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function Menubar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      model: "model",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      breakpoint: "breakpoint",
      autoHideDelay: [2, "autoHideDelay", "autoHideDelay", numberAttribute],
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([MenubarService, MenuBarStyle, {
      provide: MENUBAR_INSTANCE,
      useExisting: _Menubar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Menubar
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c10,
    decls: 7,
    vars: 19,
    consts: [["rootmenu", ""], ["legacy", ""], ["menubutton", ""], [3, "class", "pBind", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "pBind", "click", "keydown", 4, "ngIf"], ["pMenubarSub", "", "tabindex", "0", 3, "itemClick", "focus", "blur", "keydown", "itemMouseEnter", "mouseleave", "items", "itemTemplate", "menuId", "root", "baseZIndex", "autoZIndex", "mobileActive", "autoDisplay", "focusedItemId", "submenuiconTemplate", "activeItemPath", "pt", "pBind"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "pBind"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "pBind"], ["data-p-icon", "bars", 3, "pBind", 4, "ngIf"], ["data-p-icon", "bars", 3, "pBind"]],
    template: function Menubar_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵtemplate(0, Menubar_div_0_Template, 2, 4, "div", 3)(1, Menubar_a_1_Template, 4, 9, "a", 4);
        ɵɵelementStart(2, "ul", 5, 0);
        ɵɵlistener("itemClick", function Menubar_Template_ul_itemClick_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event));
        })("focus", function Menubar_Template_ul_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuFocus($event));
        })("blur", function Menubar_Template_ul_blur_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuBlur($event));
        })("keydown", function Menubar_Template_ul_keydown_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("itemMouseEnter", function Menubar_Template_ul_itemMouseEnter_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemMouseEnter($event));
        })("mouseleave", function Menubar_Template_ul_mouseleave_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMouseLeave($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(4, Menubar_div_4_Template, 2, 4, "div", 6)(5, Menubar_ng_template_5_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const legacy_r4 = ɵɵreference(6);
        ɵɵproperty("ngIf", ctx.startTemplate || ctx._startTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model && ctx.model.length > 0);
        ɵɵadvance();
        ɵɵproperty("items", ctx.processedItems)("itemTemplate", ctx.itemTemplate)("menuId", ctx.id)("root", true)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("mobileActive", ctx.mobileActive)("autoDisplay", ctx.autoDisplay)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("submenuiconTemplate", ctx.submenuIconTemplate || ctx._submenuIconTemplate)("activeItemPath", ctx.activeItemPath())("pt", ctx.pt())("pBind", ctx.ptm("rootList"));
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.endTemplate || ctx._endTemplate)("ngIfElse", legacy_r4);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, RouterModule, MenubarSub, TooltipModule, Bind, BarsIcon, BadgeModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menubar, [{
    type: Component,
    args: [{
      selector: "p-menubar",
      standalone: true,
      imports: [CommonModule, RouterModule, MenubarSub, TooltipModule, BarsIcon, BadgeModule, SharedModule, BindModule],
      template: `
        <div [class]="cx('start')" *ngIf="startTemplate || _startTemplate" [pBind]="ptm('start')">
            <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
        </div>
        <a
            #menubutton
            tabindex="0"
            role="button"
            [attr.aria-haspopup]="model.length && model.length > 0 ? true : false"
            [attr.aria-expanded]="mobileActive"
            [attr.aria-controls]="id"
            [attr.aria-label]="config.translation.aria.navigation"
            *ngIf="model && model.length > 0"
            [class]="cx('button')"
            [pBind]="ptm('button')"
            (click)="menuButtonClick($event)"
            (keydown)="menuButtonKeydown($event)"
        >
            <svg data-p-icon="bars" *ngIf="!menuIconTemplate && !_menuIconTemplate" [pBind]="ptm('buttonIcon')" />
            <ng-template *ngTemplateOutlet="menuIconTemplate || _menuIconTemplate"></ng-template>
        </a>
        <ul
            pMenubarSub
            #rootmenu
            [items]="processedItems"
            [itemTemplate]="itemTemplate"
            tabindex="0"
            [menuId]="id"
            [root]="true"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [mobileActive]="mobileActive"
            [autoDisplay]="autoDisplay"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [submenuiconTemplate]="submenuIconTemplate || _submenuIconTemplate"
            [activeItemPath]="activeItemPath()"
            (itemClick)="onItemClick($event)"
            (focus)="onMenuFocus($event)"
            (blur)="onMenuBlur($event)"
            (keydown)="onKeyDown($event)"
            (itemMouseEnter)="onItemMouseEnter($event)"
            (mouseleave)="onMouseLeave($event)"
            [pt]="pt()"
            [pBind]="ptm('rootList')"
        ></ul>
        <div [class]="cx('end')" *ngIf="endTemplate || _endTemplate; else legacy" [pBind]="ptm('end')">
            <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
        </div>
        <ng-template #legacy>
            <div [class]="cx('end')">
                <ng-content></ng-content>
            </div>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenubarService, MenuBarStyle, {
        provide: MENUBAR_INSTANCE,
        useExisting: Menubar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Menubar
      }],
      host: {
        "[class]": 'cn(cx("root"), styleClass)'
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: MenubarService
  }], {
    model: [{
      type: Input
    }],
    styleClass: [{
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
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoint: [{
      type: Input
    }],
    autoHideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    menubutton: [{
      type: ViewChild,
      args: ["menubutton"]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    menuIconTemplate: [{
      type: ContentChild,
      args: ["menuicon", {
        descendants: false
      }]
    }],
    submenuIconTemplate: [{
      type: ContentChild,
      args: ["submenuicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenubarModule = class _MenubarModule {
  static ɵfac = function MenubarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenubarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MenubarModule,
    imports: [Menubar, SharedModule],
    exports: [Menubar, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Menubar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenubarModule, [{
    type: NgModule,
    args: [{
      imports: [Menubar, SharedModule],
      exports: [Menubar, SharedModule]
    }]
  }], null, null);
})();
export {
  MenuBarStyle,
  Menubar,
  MenubarClasses,
  MenubarModule,
  MenubarService,
  MenubarSub
};
//# sourceMappingURL=primeng_menubar.js.map
