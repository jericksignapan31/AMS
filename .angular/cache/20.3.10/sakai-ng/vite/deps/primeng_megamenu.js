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
  Bind
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
  effect,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
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
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/megamenu/index.mjs
var style = "\n    .p-megamenu {\n        position: relative;\n        display: flex;\n        align-items: center;\n        background: dt('megamenu.background');\n        border: 1px solid dt('megamenu.border.color');\n        border-radius: dt('megamenu.border.radius');\n        color: dt('megamenu.color');\n        gap: dt('megamenu.gap');\n    }\n\n    .p-megamenu-start,\n    .p-megamenu-end {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-megamenu-root-list {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        outline: 0 none;\n        align-items: center;\n        display: flex;\n        flex-wrap: wrap;\n        gap: dt('megamenu.gap');\n    }\n\n    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {\n        border-radius: dt('megamenu.base.item.border.radius');\n    }\n\n    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {\n        padding: dt('megamenu.base.item.padding');\n    }\n\n    .p-megamenu-item-content {\n        transition:\n            background dt('megamenu.transition.duration'),\n            color dt('megamenu.transition.duration');\n        border-radius: dt('megamenu.item.border.radius');\n        color: dt('megamenu.item.color');\n    }\n\n    .p-megamenu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('megamenu.item.padding');\n        gap: dt('megamenu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-megamenu-item-label {\n        line-height: 1;\n    }\n\n    .p-megamenu-item-icon {\n        color: dt('megamenu.item.icon.color');\n    }\n\n    .p-megamenu-submenu-icon {\n        color: dt('megamenu.submenu.icon.color');\n        font-size: dt('megamenu.submenu.icon.size');\n        width: dt('megamenu.submenu.icon.size');\n        height: dt('megamenu.submenu.icon.size');\n    }\n\n    .p-megamenu-item.p-focus > .p-megamenu-item-content {\n        color: dt('megamenu.item.focus.color');\n        background: dt('megamenu.item.focus.background');\n    }\n\n    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {\n        color: dt('megamenu.item.icon.focus.color');\n    }\n\n    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {\n        color: dt('megamenu.submenu.icon.focus.color');\n    }\n\n    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {\n        color: dt('megamenu.item.focus.color');\n        background: dt('megamenu.item.focus.background');\n    }\n\n    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {\n        color: dt('megamenu.item.icon.focus.color');\n    }\n\n    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {\n        color: dt('megamenu.submenu.icon.focus.color');\n    }\n\n    .p-megamenu-item-active > .p-megamenu-item-content {\n        color: dt('megamenu.item.active.color');\n        background: dt('megamenu.item.active.background');\n    }\n\n    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {\n        color: dt('megamenu.item.icon.active.color');\n    }\n\n    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {\n        color: dt('megamenu.submenu.icon.active.color');\n    }\n\n    .p-megamenu-overlay {\n        display: none;\n        position: absolute;\n        width: auto;\n        z-index: 1;\n        left: 0;\n        min-width: 100%;\n        padding: dt('megamenu.overlay.padding');\n        background: dt('megamenu.overlay.background');\n        color: dt('megamenu.overlay.color');\n        border: 1px solid dt('megamenu.overlay.border.color');\n        border-radius: dt('megamenu.overlay.border.radius');\n        box-shadow: dt('megamenu.overlay.shadow');\n    }\n\n    .p-megamenu-overlay:dir(rtl) {\n        left: auto;\n        right: 0;\n    }\n\n    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {\n        display: block;\n    }\n\n    .p-megamenu-submenu {\n        margin: 0;\n        list-style: none;\n        padding: dt('megamenu.submenu.padding');\n        min-width: 12.5rem;\n        display: flex;\n        flex-direction: column;\n        gap: dt('megamenu.submenu.gap');\n    }\n\n    .p-megamenu-submenu-label {\n        padding: dt('megamenu.submenu.label.padding');\n        color: dt('megamenu.submenu.label.color');\n        font-weight: dt('megamenu.submenu.label.font.weight');\n        background: dt('megamenu.submenu.label.background');\n    }\n\n    .p-megamenu-separator {\n        border-block-start: 1px solid dt('megamenu.separator.border.color');\n    }\n\n    .p-megamenu-horizontal {\n        align-items: center;\n        padding: dt('megamenu.horizontal.orientation.padding');\n    }\n\n    .p-megamenu-horizontal .p-megamenu-root-list {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: dt('megamenu.horizontal.orientation.gap');\n    }\n\n    .p-megamenu-horizontal .p-megamenu-end {\n        margin-left: auto;\n        align-self: center;\n    }\n\n    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-megamenu-vertical {\n        display: inline-flex;\n        min-width: 12.5rem;\n        flex-direction: column;\n        align-items: stretch;\n        padding: dt('megamenu.vertical.orientation.padding');\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list {\n        align-items: stretch;\n        flex-direction: column;\n        gap: dt('megamenu.vertical.orientation.gap');\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {\n        left: 100%;\n        top: 0;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {\n        left: auto;\n        right: 100%;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {\n        margin-left: auto;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n        transform: rotate(180deg);\n    }\n\n    .p-megamenu-grid {\n        display: flex;\n    }\n\n    .p-megamenu-col-2,\n    .p-megamenu-col-3,\n    .p-megamenu-col-4,\n    .p-megamenu-col-6,\n    .p-megamenu-col-12 {\n        flex: 0 0 auto;\n        padding: dt('megamenu.overlay.gap');\n    }\n\n    .p-megamenu-col-2 {\n        width: 16.6667%;\n    }\n\n    .p-megamenu-col-3 {\n        width: 25%;\n    }\n\n    .p-megamenu-col-4 {\n        width: 33.3333%;\n    }\n\n    .p-megamenu-col-6 {\n        width: 50%;\n    }\n\n    .p-megamenu-col-12 {\n        width: 100%;\n    }\n\n    .p-megamenu-button {\n        display: none;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        width: dt('megamenu.mobile.button.size');\n        height: dt('megamenu.mobile.button.size');\n        position: relative;\n        color: dt('megamenu.mobile.button.color');\n        border: 0 none;\n        background: transparent;\n        border-radius: dt('megamenu.mobile.button.border.radius');\n        transition:\n            background dt('megamenu.transition.duration'),\n            color dt('megamenu.transition.duration'),\n            outline-color dt('megamenu.transition.duration'),\n            box-shadow dt('megamenu.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-megamenu-button:hover {\n        color: dt('megamenu.mobile.button.hover.color');\n        background: dt('megamenu.mobile.button.hover.background');\n    }\n\n    .p-megamenu-button:focus-visible {\n        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');\n        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');\n        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');\n    }\n\n    .p-megamenu-mobile {\n        display: flex;\n    }\n\n    .p-megamenu-mobile .p-megamenu-button {\n        display: flex;\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list {\n        position: absolute;\n        display: none;\n        flex-direction: column;\n        top: 100%;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        padding: dt('megamenu.submenu.padding');\n        gap: dt('megamenu.submenu.gap');\n        background: dt('megamenu.overlay.background');\n        border: 1px solid dt('megamenu.overlay.border.color');\n        box-shadow: dt('megamenu.overlay.shadow');\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {\n        left: auto;\n        right: 0;\n    }\n\n    .p-megamenu-mobile-active .p-megamenu-root-list {\n        display: block;\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {\n        width: 100%;\n        position: static;\n    }\n\n    .p-megamenu-mobile .p-megamenu-overlay {\n        position: static;\n        border: 0 none;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    .p-megamenu-mobile .p-megamenu-grid {\n        flex-wrap: wrap;\n        overflow: auto;\n        max-height: 90%;\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {\n        margin-left: auto;\n        transition: transform 0.2s;\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {\n        transform: rotate(-180deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-megamenu.mjs
var _c0 = (a0) => ({
  processedItem: a0
});
var _c1 = () => ({
  exact: false
});
var _c2 = (a0) => ({
  $implicit: a0
});
function MegaMenuSub_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.getItemProp(ctx_r0.submenu, "style"));
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("submenuLabel"), ctx_r0.getItemProp(ctx_r0.submenu, "class")));
    ɵɵproperty("pBind", ctx_r0.ptm("submenuLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.getItemLabel(ctx_r0.submenu), " ");
  }
}
function MegaMenuSub_ng_template_1_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.getItemProp(processedItem_r2, "style"));
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("separator"), ctx_r0.getItemProp(processedItem_r2, "class")));
    ɵɵproperty("pBind", ctx_r0.ptm("separator"));
    ɵɵattribute("id", ctx_r0.getItemId(processedItem_r2));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r0.getItemProp(processedItem_r2, "iconStyle"))("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemIcon"));
    ɵɵattribute("tabindex", -1);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.getItemLabel(processedItem_r2), " ");
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.getItemLabel(processedItem_r2), ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLabel"));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 22);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵproperty("value", ctx_r0.getItemProp(processedItem_r2, "badge"));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 26);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 28);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(7);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2__svg_svg_0_Template, 1, 4, "svg", 27);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(7);
    ɵɵproperty("ngIf", ctx_r0.orientation === "vertical");
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_1_Template, 1, 4, ":svg:svg", 24)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_Template, 1, 1, ":svg:svg", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.orientation === "horizontal" || ctx_r0.mobileActive ? 1 : 2);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵariaProperty("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 1, "ng-container", 11)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.megaMenu.submenuIconTemplate && !ctx_r0.megaMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.megaMenu.submenuIconTemplate || ctx_r0.megaMenu._submenuIconTemplate);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 16)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_span_2_Template, 2, 4, "span", 17)(3, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_p_badge_5_Template, 1, 3, "p-badge", 18)(6, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext(3);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("target", ctx_r0.getItemProp(processedItem_r2, "target"))("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLink"));
    ɵɵattribute("href", ctx_r0.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r0.getItemProp(processedItem_r2, "automationId"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isItemGroup(processedItem_r2));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r0.getItemProp(processedItem_r2, "iconStyle"))("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemIcon"));
    ɵɵattribute("tabindex", -1);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getItemLabel(processedItem_r2));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.getItemLabel(processedItem_r2), ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLabel"));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 32);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("styleClass", ctx_r0.getItemProp(processedItem_r2, "badgeStyleClass"))("value", ctx_r0.getItemProp(processedItem_r2, "badge"));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 26);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 28);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(6);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_1_Template, 1, 4, "svg", 33)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1__svg_svg_2_Template, 1, 4, "svg", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.orientation === "vertical");
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵariaProperty("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 11)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.megaMenu.submenuIconTemplate && !ctx_r0.megaMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.megaMenu.submenuIconTemplate || ctx_r0.megaMenu._submenuIconTemplate);
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 30);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 16)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_span_2_Template, 2, 4, "span", 17)(3, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_p_badge_5_Template, 1, 2, "p-badge", 31)(6, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext(3);
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r0.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r0.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-megamenu-item-link-active")("routerLinkActiveOptions", ctx_r0.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c1))("target", ctx_r0.getItemProp(processedItem_r2, "target"))("fragment", ctx_r0.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r0.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r0.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r0.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r0.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r0.getItemProp(processedItem_r2, "state"))("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemLink"));
    ɵɵattribute("data-automationid", ctx_r0.getItemProp(processedItem_r2, "automationId"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlRouteLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isItemGroup(processedItem_r2));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_1_Template, 7, 12, "a", 13)(2, MegaMenuSub_ng_template_1_li_1_ng_container_3_a_2_Template, 7, 22, "a", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getItemProp(processedItem_r2, "routerLink"));
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ng_template_1_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ng_template_1_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MegaMenuSub_ng_template_1_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_ng_container_4_1_Template, 1, 0, null, 34);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, processedItem_r2.item));
  }
}
function MegaMenuSub_ng_template_1_li_1_div_5_div_2_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 37);
    ɵɵlistener("itemClick", function MegaMenuSub_ng_template_1_li_1_div_5_div_2_ul_1_Template_ul_itemClick_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r0.itemClick.emit($event));
    })("itemMouseEnter", function MegaMenuSub_ng_template_1_li_1_div_5_div_2_ul_1_Template_ul_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r0.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r9 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("id", ctx_r0.getSubListId(submenu_r9))("submenu", submenu_r9)("items", submenu_r9.items)("itemTemplate", ctx_r0.itemTemplate)("mobileActive", ctx_r0.mobileActive)("menuId", ctx_r0.menuId)("focusedItemId", ctx_r0.focusedItemId)("level", ctx_r0.level + 1)("root", false)("pt", ctx_r0.pt());
  }
}
function MegaMenuSub_ng_template_1_li_1_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, MegaMenuSub_ng_template_1_li_1_div_5_div_2_ul_1_Template, 1, 10, "ul", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("column", ɵɵpureFunction1(4, _c0, processedItem_r2)));
    ɵɵproperty("pBind", ctx_r0.ptm("column"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", col_r10);
  }
}
function MegaMenuSub_ng_template_1_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20)(1, "div", 20);
    ɵɵtemplate(2, MegaMenuSub_ng_template_1_li_1_div_5_div_2_Template, 2, 6, "div", 35);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("overlay"));
    ɵɵproperty("pBind", ctx_r0.ptm("overlay"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("grid"));
    ɵɵproperty("pBind", ctx_r0.ptm("grid"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", processedItem_r2.items);
  }
}
function MegaMenuSub_ng_template_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9, 0)(2, "div", 10);
    ɵɵlistener("click", function MegaMenuSub_ng_template_1_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r3);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onItemClick($event, processedItem_r2));
    })("mouseenter", function MegaMenuSub_ng_template_1_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r3);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onItemMouseEnter({
        $event,
        processedItem: processedItem_r2
      }));
    });
    ɵɵtemplate(3, MegaMenuSub_ng_template_1_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, MegaMenuSub_ng_template_1_li_1_ng_container_4_Template, 2, 4, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵtemplate(5, MegaMenuSub_ng_template_1_li_1_div_5_Template, 3, 7, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const processedItem_r2 = ctx_r3.$implicit;
    const index_r5 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("item", ɵɵpureFunction1(22, _c0, processedItem_r2)), ctx_r0.getItemProp(processedItem_r2, "styleClass")));
    ɵɵproperty("ngStyle", ctx_r0.getItemProp(processedItem_r2, "style"))("tooltipOptions", ctx_r0.getItemProp(processedItem_r2, "tooltipOptions"))("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "item"));
    ɵɵattribute("id", ctx_r0.getItemId(processedItem_r2))("data-p-active", ctx_r0.isItemActive(processedItem_r2))("data-p-focused", ctx_r0.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r0.isItemDisabled(processedItem_r2))("aria-label", ctx_r0.getItemLabel(processedItem_r2))("aria-disabled", ctx_r0.isItemDisabled(processedItem_r2) || void 0)("aria-haspopup", ctx_r0.isItemGroup(processedItem_r2) && !ctx_r0.getItemProp(processedItem_r2, "to") ? "menu" : void 0)("aria-expanded", ctx_r0.isItemGroup(processedItem_r2) ? ctx_r0.isItemActive(processedItem_r2) : void 0)("aria-level", ctx_r0.level + 1)("aria-setsize", ctx_r0.getAriaSetSize())("aria-posinset", ctx_r0.getAriaPosInset(index_r5));
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r0.cx("itemContent"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(processedItem_r2, index_r5, "itemContent"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isItemVisible(processedItem_r2) && ctx_r0.isItemGroup(processedItem_r2));
  }
}
function MegaMenuSub_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ng_template_1_li_0_Template, 1, 6, "li", 6)(1, MegaMenuSub_ng_template_1_li_1_Template, 6, 24, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.isItemVisible(processedItem_r2) && ctx_r0.getItemProp(processedItem_r2, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isItemVisible(processedItem_r2) && !ctx_r0.getItemProp(processedItem_r2, "separator"));
  }
}
var _c3 = ["start"];
var _c4 = ["end"];
var _c5 = ["menuicon"];
var _c6 = ["submenuicon"];
var _c7 = ["item"];
var _c8 = ["button"];
var _c9 = ["buttonicon"];
var _c10 = ["menubutton"];
var _c11 = ["rootmenu"];
function MegaMenu_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MegaMenu_div_0_ng_container_1_Template, 1, 0, "ng-container", 4);
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
function MegaMenu_ng_container_1_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r1.ptm("buttonIcon"));
  }
}
function MegaMenu_ng_container_1_a_1_3_ng_template_0_Template(rf, ctx) {
}
function MegaMenu_ng_container_1_a_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenu_ng_container_1_a_1_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MegaMenu_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8, 1);
    ɵɵlistener("click", function MegaMenu_ng_container_1_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.menuButtonClick($event));
    })("keydown", function MegaMenu_ng_container_1_a_1_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.menuButtonKeydown($event));
    });
    ɵɵtemplate(2, MegaMenu_ng_container_1_a_1__svg_svg_2_Template, 1, 1, "svg", 9)(3, MegaMenu_ng_container_1_a_1_3_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("button"));
    ɵɵproperty("pBind", ctx_r1.ptm("button"));
    ɵɵattribute("aria-haspopup", ctx_r1.model.length && ctx_r1.model.length > 0 ? true : false)("aria-expanded", ctx_r1.mobileActive)("aria-controls", ctx_r1.id)("aria-label", ctx_r1.config.translation.aria.navigation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.buttonIconTemplate && !ctx_r1._buttonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.buttonIconTemplate || ctx_r1._buttonIconTemplate);
  }
}
function MegaMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenu_ng_container_1_a_1_Template, 4, 9, "a", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.model && ctx_r1.model.length > 0);
  }
}
function MegaMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MegaMenu_div_5_ng_container_1_Template, 1, 0, "ng-container", 4);
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
var inlineStyles = {
  rootList: ({
    instance
  }) => ({
    "max-height": instance.scrollHeight,
    overflow: "auto"
  })
};
var classes = {
  root: ({
    instance
  }) => ["p-megamenu p-component", {
    "p-megamenu-mobile": instance.queryMatches,
    "p-megamenu-mobile-active": instance.mobileActive,
    "p-megamenu-horizontal": instance.orientation === "horizontal",
    "p-megamenu-vertical": instance.orientation === "vertical"
  }],
  start: "p-megamenu-start",
  button: "p-megamenu-button",
  rootList: "p-megamenu-root-list",
  submenuLabel: ({
    instance,
    processedItem
  }) => ["p-megamenu-submenu-label", {
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  item: ({
    instance,
    processedItem
  }) => ["p-megamenu-item", instance.getItemProp(processedItem, "styleClass"), instance.getItemProp(processedItem, "class"), {
    "p-megamenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-megamenu-item-content",
  itemLink: "p-megamenu-item-link",
  itemIcon: "p-megamenu-item-icon",
  itemLabel: "p-megamenu-item-label",
  submenuIcon: "p-megamenu-submenu-icon",
  overlay: "p-megamenu-overlay",
  grid: "p-megamenu-grid",
  column: ({
    instance,
    processedItem
  }) => {
    let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    if (instance.megaMenu.queryMatches) columnClass = "p-megamenu-col-12";
    else {
      switch (length) {
        case 2:
          columnClass = "p-megamenu-col-6";
          break;
        case 3:
          columnClass = "p-megamenu-col-4";
          break;
        case 4:
          columnClass = "p-megamenu-col-3";
          break;
        case 6:
          columnClass = "p-megamenu-col-2";
          break;
        default:
          columnClass = "p-megamenu-col-12";
          break;
      }
    }
    return columnClass;
  },
  submenu: "p-megamenu-submenu",
  separator: "p-megamenu-separator",
  end: "p-megamenu-end"
};
var MegaMenuStyle = class _MegaMenuStyle extends BaseStyle {
  name = "megamenu";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMegaMenuStyle_BaseFactory;
    return function MegaMenuStyle_Factory(__ngFactoryType__) {
      return (ɵMegaMenuStyle_BaseFactory || (ɵMegaMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_MegaMenuStyle)))(__ngFactoryType__ || _MegaMenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MegaMenuStyle,
    factory: _MegaMenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MegaMenuClasses;
(function(MegaMenuClasses2) {
  MegaMenuClasses2["root"] = "p-megamenu";
  MegaMenuClasses2["start"] = "p-megamenu-start";
  MegaMenuClasses2["button"] = "p-megamenu-button";
  MegaMenuClasses2["rootList"] = "p-megamenu-root-list";
  MegaMenuClasses2["submenuItem"] = "p-megamenu-submenu-item";
  MegaMenuClasses2["item"] = "p-megamenu-item";
  MegaMenuClasses2["itemContent"] = "p-megamenu-item-content";
  MegaMenuClasses2["itemLink"] = "p-megamenu-item-link";
  MegaMenuClasses2["itemIcon"] = "p-megamenu-item-icon";
  MegaMenuClasses2["itemLabel"] = "p-megamenu-item-label";
  MegaMenuClasses2["submenuIcon"] = "p-megamenu-submenu-icon";
  MegaMenuClasses2["panel"] = "p-megamenu-panel";
  MegaMenuClasses2["grid"] = "p-megamenu-grid";
  MegaMenuClasses2["submenu"] = "p-megamenu-submenu";
  MegaMenuClasses2["submenuItemLabel"] = "p-megamenu-submenu-item-label";
  MegaMenuClasses2["separator"] = "p-megamenu-separator";
  MegaMenuClasses2["end"] = "p-megamenu-end";
})(MegaMenuClasses || (MegaMenuClasses = {}));
var MEGAMENU_INSTANCE = new InjectionToken("MEGAMENU_INSTANCE");
var MEGAMENU_SUB_INSTANCE = new InjectionToken("MEGAMENU_SUB_INSTANCE");
var MegaMenuSub = class _MegaMenuSub extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcMegaMenu = inject(MEGAMENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $pcMegaMenuSub = inject(MEGAMENU_SUB_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  id;
  items;
  itemTemplate;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  disabled = false;
  orientation;
  activeItem;
  submenu;
  queryMatches = false;
  mobileActive = false;
  scrollHeight;
  tabindex = 0;
  root = false;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  megaMenu = inject(forwardRef(() => MegaMenu));
  _componentStyle = inject(MegaMenuStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm(this.root ? "rootList" : "submenu"));
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
  getSubListId(processedItem) {
    return `${this.getItemId(processedItem)}_list`;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isSubmenuVisible(submenu) {
    if (this.submenu && !this.root) {
      return this.isItemVisible(submenu);
    } else {
      return true;
    }
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    return s(this.activeItem) ? this.activeItem.key === processedItem.key : false;
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
    return this.items?.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - (this.items?.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length || 0) + 1;
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
  getPTOptions(processedItem, index, key) {
    const ptContext = {
      context: {
        item: processedItem.item,
        index,
        active: this.isItemActive(processedItem),
        focused: this.isItemFocused(processedItem),
        disabled: this.isItemDisabled(processedItem)
      }
    };
    return this.ptm(key, ptContext);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMegaMenuSub_BaseFactory;
    return function MegaMenuSub_Factory(__ngFactoryType__) {
      return (ɵMegaMenuSub_BaseFactory || (ɵMegaMenuSub_BaseFactory = ɵɵgetInheritedFactory(_MegaMenuSub)))(__ngFactoryType__ || _MegaMenuSub);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenuSub,
    selectors: [["p-megaMenuSub"], ["p-megamenu-sub"], ["ul", "pMegaMenuSub", ""]],
    hostVars: 12,
    hostBindings: function MegaMenuSub_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function MegaMenuSub_keydown_HostBindingHandler($event) {
          return ctx.menuKeydown.emit($event);
        })("focus", function MegaMenuSub_focus_HostBindingHandler($event) {
          return ctx.menuFocus.emit($event);
        })("blur", function MegaMenuSub_blur_HostBindingHandler($event) {
          return ctx.menuBlur.emit($event);
        });
      }
      if (rf & 2) {
        ɵɵdomProperty("tabIndex", ctx.tabindex);
        ɵɵattribute("role", ctx.root ? "menubar" : "menu")("id", ctx.id)("aria-orientation", ctx.orientation)("aria-activedescendant", ctx.focusedItemId)("data-pc-section", ctx.root ? "rootlist" : "submenu");
        ɵɵstyleMap(ctx.sx("rootList"));
        ɵɵclassMap(ctx.root ? ctx.cx("rootList") : ctx.cx("submenu"));
        ɵɵstyleProp("display", ctx.isSubmenuVisible(ctx.submenu) ? null : "none");
      }
    },
    inputs: {
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      orientation: "orientation",
      activeItem: "activeItem",
      submenu: "submenu",
      queryMatches: [2, "queryMatches", "queryMatches", booleanAttribute],
      mobileActive: [2, "mobileActive", "mobileActive", booleanAttribute],
      scrollHeight: "scrollHeight",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      root: [2, "root", "root", booleanAttribute]
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵProvidersFeature([{
      provide: MEGAMENU_SUB_INSTANCE,
      useExisting: _MegaMenuSub
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MegaMenuSub
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [["listItem", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["role", "presentation", 3, "class", "style", "pBind", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", 3, "pBind"], ["role", "separator", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "pBind", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "tooltipOptions", "pBind"], [3, "click", "mouseenter", "pBind"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "class", "pBind", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "class", "value", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "pBind"], [3, "innerHTML", "pBind"], [3, "value"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-down", 3, "class", "pBind"], ["data-p-icon", "angle-right", 3, "class", "pBind"], ["data-p-icon", "angle-down", 3, "pBind"], ["data-p-icon", "angle-right", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "angle-right", 3, "pBind"], [3, "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "styleClass", "value", 4, "ngIf"], [3, "styleClass", "value"], ["data-p-icon", "angle-down", 3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind", 4, "ngFor", "ngForOf"], ["pMegaMenuSub", "", 3, "id", "submenu", "items", "itemTemplate", "mobileActive", "menuId", "focusedItemId", "level", "root", "pt", "itemClick", "itemMouseEnter", 4, "ngFor", "ngForOf"], ["pMegaMenuSub", "", 3, "itemClick", "itemMouseEnter", "id", "submenu", "items", "itemTemplate", "mobileActive", "menuId", "focusedItemId", "level", "root", "pt"]],
    template: function MegaMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, MegaMenuSub_li_0_Template, 2, 6, "li", 3)(1, MegaMenuSub_ng_template_1_Template, 2, 2, "ng-template", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.submenu);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: [_MegaMenuSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Tooltip, Bind, AngleDownIcon, AngleRightIcon, BadgeModule, Badge, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuSub, [{
    type: Component,
    args: [{
      selector: "p-megaMenuSub, p-megamenu-sub, ul[pMegaMenuSub]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleDownIcon, AngleRightIcon, BadgeModule, SharedModule, Bind],
      template: `
        <li *ngIf="submenu" [class]="cn(cx('submenuLabel'), getItemProp(submenu, 'class'))" [style]="getItemProp(submenu, 'style')" role="presentation" [pBind]="ptm('submenuLabel')">
            {{ getItemLabel(submenu) }}
        </li>
        <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
            <li
                *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                [attr.id]="getItemId(processedItem)"
                [style]="getItemProp(processedItem, 'style')"
                [class]="cn(cx('separator'), this.getItemProp(processedItem, 'class'))"
                role="separator"
                [pBind]="ptm('separator')"
            ></li>
            <li
                #listItem
                *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                role="menuitem"
                [attr.id]="getItemId(processedItem)"
                [attr.data-p-active]="isItemActive(processedItem)"
                [attr.data-p-focused]="isItemFocused(processedItem)"
                [attr.data-p-disabled]="isItemDisabled(processedItem)"
                [attr.aria-label]="getItemLabel(processedItem)"
                [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                [attr.aria-level]="level + 1"
                [attr.aria-setsize]="getAriaSetSize()"
                [attr.aria-posinset]="getAriaPosInset(index)"
                [ngStyle]="getItemProp(processedItem, 'style')"
                [class]="cn(cx('item', { processedItem }), getItemProp(processedItem, 'styleClass'))"
                pTooltip
                [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                [pBind]="getPTOptions(processedItem, index, 'item')"
            >
                <div [class]="cx('itemContent')" [pBind]="getPTOptions(processedItem, index, 'itemContent')" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">
                    <ng-container *ngIf="!itemTemplate">
                        <a
                            *ngIf="!getItemProp(processedItem, 'routerLink')"
                            [attr.href]="getItemProp(processedItem, 'url')"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [target]="getItemProp(processedItem, 'target')"
                            [class]="cx('itemLink')"
                            [attr.tabindex]="-1"
                            [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                            pRipple
                        >
                            <span
                                *ngIf="getItemProp(processedItem, 'icon')"
                                [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'))"
                                [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                [attr.tabindex]="-1"
                                [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                            >
                            </span>
                            <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(processedItem, index, 'itemLabel')">
                                {{ getItemLabel(processedItem) }}
                            </span>
                            <ng-template #htmlLabel>
                                <span [class]="cx('itemLabel')" [innerHTML]="getItemLabel(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')"></span>
                            </ng-template>
                            <p-badge *ngIf="getItemProp(processedItem, 'badge')" [class]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" />
                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <ng-container *ngIf="!megaMenu.submenuIconTemplate && !megaMenu._submenuIconTemplate">
                                    @if (orientation === 'horizontal' || mobileActive) {
                                        <svg data-p-icon="angle-down" [class]="cx('submenuIcon')" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" [attr.aria-hidden]="true" />
                                    } @else {
                                        <svg data-p-icon="angle-right" [class]="cx('submenuIcon')" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                    }
                                </ng-container>
                                <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate || megaMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="getItemProp(processedItem, 'routerLink')"
                            [routerLink]="getItemProp(processedItem, 'routerLink')"
                            [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                            [attr.tabindex]="-1"
                            [queryParams]="getItemProp(processedItem, 'queryParams')"
                            [routerLinkActive]="'p-megamenu-item-link-active'"
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
                            <p-badge *ngIf="getItemProp(processedItem, 'badge')" [styleClass]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" />
                            <ng-container *ngIf="isItemGroup(processedItem)">
                                <ng-container *ngIf="!megaMenu.submenuIconTemplate && !megaMenu._submenuIconTemplate">
                                    <svg data-p-icon="angle-down" [class]="cx('submenuIcon')" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" *ngIf="orientation === 'horizontal'" [attr.aria-hidden]="true" />
                                    <svg data-p-icon="angle-right" [class]="cx('submenuIcon')" [pBind]="getPTOptions(processedItem, index, 'submenuIcon')" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate || megaMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                            </ng-container>
                        </a>
                    </ng-container>
                    <ng-container *ngIf="itemTemplate">
                        <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                    </ng-container>
                </div>
                <div *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)" [class]="cx('overlay')" [pBind]="ptm('overlay')">
                    <div [class]="cx('grid')" [pBind]="ptm('grid')">
                        <div *ngFor="let col of processedItem.items" [class]="cx('column', { processedItem })" [pBind]="ptm('column')">
                            <ul
                                pMegaMenuSub
                                *ngFor="let submenu of col"
                                [id]="getSubListId(submenu)"
                                [submenu]="submenu"
                                [items]="submenu.items"
                                [itemTemplate]="itemTemplate"
                                [mobileActive]="mobileActive"
                                [menuId]="menuId"
                                [focusedItemId]="focusedItemId"
                                [level]="level + 1"
                                [root]="false"
                                (itemClick)="itemClick.emit($event)"
                                (itemMouseEnter)="onItemMouseEnter($event)"
                                [pt]="pt()"
                            ></ul>
                        </div>
                    </div>
                </div>
            </li>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MEGAMENU_SUB_INSTANCE,
        useExisting: MegaMenuSub
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MegaMenuSub
      }],
      host: {
        "[class]": 'root ? cx("rootList") : cx("submenu")',
        "[style]": 'sx("rootList")',
        "[style.display]": 'isSubmenuVisible(submenu) ? null : "none"',
        "[attr.role]": 'root ? "menubar" : "menu"',
        "[attr.id]": "id",
        "[attr.aria-orientation]": "orientation",
        "[tabindex]": "tabindex",
        "[attr.aria-activedescendant]": "focusedItemId",
        "[attr.data-pc-section]": 'root ? "rootlist" : "submenu"',
        "(keydown)": "menuKeydown.emit($event)",
        "(focus)": "menuFocus.emit($event)",
        "(blur)": "menuBlur.emit($event)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
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
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    orientation: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    submenu: [{
      type: Input
    }],
    queryMatches: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mobileActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
var MegaMenu = class _MegaMenu extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
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
   * Defines the orientation.
   * @group Props
   */
  orientation = "horizontal";
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
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "20rem";
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
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
   * Defines template option for menu icon.
   * @group Templates
   */
  menuIconTemplate;
  /**
   * Defines template option for submenu icon.
   * @group Templates
   */
  submenuIconTemplate;
  /**
   * Defines template option for submenu icon.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom menu button template on responsive mode.
   * @group Templates
   */
  buttonTemplate;
  /**
   * Custom menu button icon template on responsive mode.
   * @group Templates
   */
  buttonIconTemplate;
  templates;
  menubuttonViewChild;
  rootmenu;
  _startTemplate;
  _endTemplate;
  _menuIconTemplate;
  _submenuIconTemplate;
  _itemTemplate;
  _buttonTemplate;
  _buttonIconTemplate;
  outsideClickListener;
  resizeListener;
  dirty = false;
  focused = false;
  activeItem = signal(null, ...ngDevMode ? [{
    debugName: "activeItem"
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
  _model;
  _componentStyle = inject(MegaMenuStyle);
  matchMediaListener;
  query;
  queryMatches = false;
  mobileActive = false;
  get visibleItems() {
    const processedItem = s(this.activeItem()) ? this.activeItem() : null;
    return processedItem ? processedItem.items.reduce((items, col) => {
      col.forEach((submenu) => {
        submenu.items.forEach((a) => {
          items.push(a);
        });
      });
      return items;
    }, []) : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem?.item && focusedItem.item?.id ? focusedItem.item.id : s(focusedItem.key) ? `${this.id}_${focusedItem.key}` : null;
  }
  constructor() {
    super();
    effect(() => {
      const activeItem = this.activeItem();
      if (s(activeItem)) {
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
    this.id = this.id || s2("pn_id_");
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
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
        case "button":
          this._buttonTemplate = item.template;
          break;
        case "buttonicon":
          this._buttonIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
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
  createProcessedItems(items, level = 0, parent = {}, parentKey = "", columnIndex) {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + (columnIndex !== void 0 ? columnIndex + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey,
        columnIndex: columnIndex !== void 0 ? columnIndex : parent.columnIndex !== void 0 ? parent.columnIndex : index
      };
      newItem["items"] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
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
        parentKey,
        item
      } = processedItem;
      this.activeItem.set(null);
      this.focusedItemInfo.set({
        index,
        key,
        parentKey,
        item
      });
      this.dirty = !root;
      if (!this.mobileActive) {
        bt(this.rootmenu?.el?.nativeElement, {
          preventScroll: true
        });
      }
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        this.hide(originalEvent);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!this.mobileActive && this.dirty) {
      this.onItemChange(event);
    }
  }
  menuButtonClick(event) {
    this.toggle(event);
  }
  menuButtonKeydown(event) {
    (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && this.menuButtonClick(event);
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
  show() {
    this.focusedItemInfo.set({
      index: this.findFirstFocusedItemIndex(),
      level: 0,
      parentKey: ""
    });
    bt(this.rootmenu?.el.nativeElement);
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    let element;
    if (id === null && this.queryMatches) {
      element = this.menubuttonViewChild?.nativeElement;
    } else {
      element = z(this.rootmenu?.el?.nativeElement, `li[id="${id}"]`);
    }
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
      });
    }
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (l(processedItem)) return;
    const {
      index,
      key,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = s(items);
    if (grouped) {
      this.activeItem.set(processedItem);
    }
    this.focusedItemInfo.set({
      index,
      key,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && bt(this.rootmenu?.el?.nativeElement);
  }
  hide(event, isFocus) {
    if (this.mobileActive) {
      this.mobileActive = false;
      setTimeout(() => {
        bt(this.menubuttonViewChild?.nativeElement);
        this.scrollInView();
      }, 100);
    }
    this.activeItem.set(null);
    this.focusedItemInfo.set({
      index: -1,
      key: "",
      parentKey: "",
      item: null
    });
    isFocus && bt(this.rootmenu?.el?.nativeElement);
    this.dirty = false;
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1) {
      const index = this.findFirstFocusedItemIndex();
      const processedItem = this.findVisibleItem(index);
      this.focusedItemInfo.set({
        index,
        key: processedItem.key,
        parentKey: processedItem.parentKey,
        item: processedItem.item
      });
    }
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
    return s(this.activeItem()) ? this.activeItem().key === processedItem.key : false;
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
      this.changeFocusedItemInfo(event, itemIndex);
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
  changeFocusedItemInfo(event, index) {
    const processedItem = this.findVisibleItem(index);
    if (s(processedItem)) {
      const {
        key,
        parentKey,
        item
      } = processedItem;
      this.focusedItemInfo.set({
        index,
        key: key ? key : "",
        parentKey,
        item
      });
    }
    this.scrollInView();
  }
  onArrowDownKey(event) {
    if (this.orientation === "horizontal") {
      if (s(this.activeItem()) && this.activeItem().key === this.focusedItemInfo().key) {
        const {
          key,
          item
        } = this.activeItem();
        this.focusedItemInfo.set({
          index: -1,
          key: "",
          parentKey: key,
          item
        });
      } else {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          const {
            parentKey,
            key,
            item
          } = processedItem;
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            key,
            parentKey,
            item
          });
          this.searchValue = "";
        }
      }
    }
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemInfo(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "vertical") {
        if (s(this.activeItem()) && this.activeItem().key === processedItem.key) {
          this.focusedItemInfo.set({
            index: -1,
            key: "",
            parentKey: this.activeItem().key,
            item: processedItem.item
          });
        } else {
          const processedItem2 = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped2 = this.isProccessedItemGroup(processedItem2);
          if (grouped2) {
            this.onItemChange({
              originalEvent: event,
              processedItem: processedItem2
            });
            this.focusedItemInfo.set({
              index: -1,
              key: processedItem2.key,
              parentKey: processedItem2.parentKey,
              item: processedItem2.item
            });
            this.searchValue = "";
          }
        }
      }
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
    } else {
      const columnIndex = processedItem.columnIndex + 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.orientation === "horizontal") {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (!grouped && s(this.activeItem)) {
          if (this.focusedItemInfo().index === 0) {
            this.focusedItemInfo.set({
              index: this.activeItem().index,
              key: this.activeItem().key,
              parentKey: this.activeItem().parentKey,
              item: processedItem.item
            });
            this.activeItem.set(null);
          } else {
            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
          }
        }
      }
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "horizontal") {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      }
    } else {
      if (this.orientation === "vertical" && s(this.activeItem())) {
        if (processedItem.columnIndex === 0) {
          this.focusedItemInfo.set({
            index: this.activeItem().index,
            key: this.activeItem().key,
            parentKey: this.activeItem().parentKey,
            item: processedItem.item
          });
          this.activeItem.set(null);
        }
      }
      const columnIndex = processedItem.columnIndex - 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemInfo(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemInfo(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    if (s(this.activeItem())) {
      this.focusedItemInfo.set({
        index: this.activeItem().index,
        key: this.activeItem().key,
        item: this.activeItem().item
      });
      this.activeItem.set(null);
    }
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
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
      const element = z(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
    }
    event.preventDefault();
  }
  findVisibleItem(index) {
    return s(this.visibleItems) ? this.visibleItems[index] : null;
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
    if (!this.resizeListener) {
      this.resizeListener = (event) => {
        if (!Yt()) {
          this.hide(event, true);
        }
        this.mobileActive = false;
      };
      window.addEventListener("resize", this.resizeListener);
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.el?.nativeElement !== event.target && !this.el?.nativeElement.contains(event.target);
          if (isOutsideContainer) {
            this.hide();
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
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  onDestroy() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
  }
  static ɵfac = function MegaMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MegaMenu)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenu,
    selectors: [["p-megaMenu"], ["p-megamenu"], ["p-mega-menu"]],
    contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MegaMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 5);
        ɵɵviewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubuttonViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MegaMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx.id);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      model: "model",
      styleClass: "styleClass",
      orientation: "orientation",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      breakpoint: "breakpoint",
      scrollHeight: "scrollHeight",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    features: [ɵɵProvidersFeature([MegaMenuStyle, {
      provide: MEGAMENU_INSTANCE,
      useExisting: _MegaMenu
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MegaMenu
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 21,
    consts: [["rootmenu", ""], ["menubutton", ""], [3, "class", "pBind", 4, "ngIf"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["pMegaMenuSub", "", 3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "itemTemplate", "items", "menuId", "root", "orientation", "ariaLabel", "disabled", "tabindex", "activeItem", "level", "ariaLabelledBy", "focusedItemId", "mobileActive", "queryMatches", "scrollHeight", "pt"], [3, "pBind"], ["role", "button", "tabindex", "0", 3, "class", "pBind", "click", "keydown", 4, "ngIf"], ["role", "button", "tabindex", "0", 3, "click", "keydown", "pBind"], ["data-p-icon", "bars", 3, "pBind", 4, "ngIf"], ["data-p-icon", "bars", 3, "pBind"]],
    template: function MegaMenu_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, MegaMenu_div_0_Template, 2, 4, "div", 2)(1, MegaMenu_ng_container_1_Template, 2, 1, "ng-container", 3)(2, MegaMenu_ng_container_2_Template, 1, 0, "ng-container", 4);
        ɵɵelementStart(3, "ul", 5, 0);
        ɵɵlistener("itemClick", function MegaMenu_Template_ul_itemClick_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event));
        })("menuFocus", function MegaMenu_Template_ul_menuFocus_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuFocus($event));
        })("menuBlur", function MegaMenu_Template_ul_menuBlur_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuBlur($event));
        })("menuKeydown", function MegaMenu_Template_ul_menuKeydown_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("itemMouseEnter", function MegaMenu_Template_ul_itemMouseEnter_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemMouseEnter($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(5, MegaMenu_div_5_Template, 2, 4, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.startTemplate || ctx._startTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.buttonTemplate && !ctx._buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.buttonTemplate || ctx._buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("itemTemplate", ctx.itemTemplate || ctx._itemTemplate)("items", ctx.processedItems)("menuId", ctx.id)("root", true)("orientation", ctx.orientation)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("activeItem", ctx.activeItem())("level", 0)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("mobileActive", ctx.mobileActive)("queryMatches", ctx.queryMatches)("scrollHeight", ctx.scrollHeight)("pt", ctx.pt());
        ɵɵattribute("id", ctx.id + "_list");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.endTemplate || ctx._endTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, RouterModule, MegaMenuSub, TooltipModule, Bind, BarsIcon, BadgeModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenu, [{
    type: Component,
    args: [{
      selector: "p-megaMenu, p-megamenu, p-mega-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MegaMenuSub, TooltipModule, BarsIcon, BadgeModule, SharedModule, Bind],
      template: `
        <div [class]="cx('start')" *ngIf="startTemplate || _startTemplate" [pBind]="ptm('start')">
            <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
        </div>
        <ng-container *ngIf="!buttonTemplate && !_buttonTemplate">
            <a
                *ngIf="model && model.length > 0"
                #menubutton
                role="button"
                tabindex="0"
                [class]="cx('button')"
                [attr.aria-haspopup]="model.length && model.length > 0 ? true : false"
                [attr.aria-expanded]="mobileActive"
                [attr.aria-controls]="id"
                [attr.aria-label]="config.translation.aria.navigation"
                [pBind]="ptm('button')"
                (click)="menuButtonClick($event)"
                (keydown)="menuButtonKeydown($event)"
            >
                <svg data-p-icon="bars" *ngIf="!buttonIconTemplate && !_buttonIconTemplate" [pBind]="ptm('buttonIcon')" />
                <ng-template *ngTemplateOutlet="buttonIconTemplate || _buttonIconTemplate"></ng-template>
            </a>
        </ng-container>
        <ng-container *ngTemplateOutlet="buttonTemplate || _buttonTemplate"></ng-container>
        <ul
            pMegaMenuSub
            #rootmenu
            [itemTemplate]="itemTemplate || _itemTemplate"
            [items]="processedItems"
            [attr.id]="id + '_list'"
            [menuId]="id"
            [root]="true"
            [orientation]="orientation"
            [ariaLabel]="ariaLabel"
            [disabled]="disabled"
            [tabindex]="!disabled ? tabindex : -1"
            [activeItem]="activeItem()"
            [level]="0"
            [ariaLabelledBy]="ariaLabelledBy"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [mobileActive]="mobileActive"
            (itemClick)="onItemClick($event)"
            (menuFocus)="onMenuFocus($event)"
            (menuBlur)="onMenuBlur($event)"
            (menuKeydown)="onKeyDown($event)"
            (itemMouseEnter)="onItemMouseEnter($event)"
            [queryMatches]="queryMatches"
            [scrollHeight]="scrollHeight"
            [pt]="pt()"
        ></ul>
        <div [class]="cx('end')" *ngIf="endTemplate || _endTemplate" [pBind]="ptm('end')">
            <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MegaMenuStyle, {
        provide: MEGAMENU_INSTANCE,
        useExisting: MegaMenu
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MegaMenu
      }],
      host: {
        "[class]": 'cn(cx("root"), styleClass)',
        "[id]": "id"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    model: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    orientation: [{
      type: Input
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
    breakpoint: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    disabled: [{
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
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    buttonTemplate: [{
      type: ContentChild,
      args: ["button", {
        descendants: false
      }]
    }],
    buttonIconTemplate: [{
      type: ContentChild,
      args: ["buttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    menubuttonViewChild: [{
      type: ViewChild,
      args: ["menubutton"]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }]
  });
})();
var MegaMenuModule = class _MegaMenuModule {
  static ɵfac = function MegaMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MegaMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MegaMenuModule,
    imports: [MegaMenu, SharedModule],
    exports: [MegaMenu, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MegaMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MegaMenu, SharedModule],
      exports: [MegaMenu, SharedModule]
    }]
  }], null, null);
})();
export {
  MegaMenu,
  MegaMenuClasses,
  MegaMenuModule,
  MegaMenuStyle,
  MegaMenuSub
};
//# sourceMappingURL=primeng_megamenu.js.map
