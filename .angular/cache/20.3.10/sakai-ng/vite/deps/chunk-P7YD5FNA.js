import {
  Tooltip,
  TooltipModule
} from "./chunk-ZVLLQLHS.js";
import {
  ConnectedOverlayScrollHandler
} from "./chunk-P6SMTJBG.js";
import {
  Ripple
} from "./chunk-2NNT3GX6.js";
import {
  zindexutils
} from "./chunk-CMVOE67Z.js";
import {
  AngleRightIcon
} from "./chunk-PZZHTSKZ.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-HN3FT5WE.js";
import {
  BaseStyle
} from "./chunk-WXGRKYUQ.js";
import {
  OverlayService,
  PrimeTemplate,
  SharedModule
} from "./chunk-AEUBHVGT.js";
import {
  Bind,
  BindModule
} from "./chunk-SSPEJKN4.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-GGMOGVES.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-CIMRSYG7.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-R2OVIKVM.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
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
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
import {
  D,
  I,
  J,
  M,
  S,
  Yt,
  bt,
  l,
  m,
  s,
  s3 as s2,
  ut,
  v,
  z2 as z,
  zt
} from "./chunk-U4LT4ZJN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/tieredmenu/index.mjs
var style2 = "\n    .p-tieredmenu {\n        background: dt('tieredmenu.background');\n        color: dt('tieredmenu.color');\n        border: 1px solid dt('tieredmenu.border.color');\n        border-radius: dt('tieredmenu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-tieredmenu-root-list,\n    .p-tieredmenu-submenu {\n        margin: 0;\n        padding: dt('tieredmenu.list.padding');\n        list-style: none;\n        outline: 0 none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('tieredmenu.list.gap');\n    }\n\n    .p-tieredmenu-submenu {\n        position: absolute;\n        min-width: 100%;\n        z-index: 1;\n        background: dt('tieredmenu.background');\n        color: dt('tieredmenu.color');\n        border: 1px solid dt('tieredmenu.border.color');\n        border-radius: dt('tieredmenu.border.radius');\n        box-shadow: dt('tieredmenu.shadow');\n    }\n\n    .p-tieredmenu-item {\n        position: relative;\n    }\n\n    .p-tieredmenu-item-content {\n        transition:\n            background dt('tieredmenu.transition.duration'),\n            color dt('tieredmenu.transition.duration');\n        border-radius: dt('tieredmenu.item.border.radius');\n        color: dt('tieredmenu.item.color');\n    }\n\n    .p-tieredmenu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('tieredmenu.item.padding');\n        gap: dt('tieredmenu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-tieredmenu-item-label {\n        line-height: 1;\n    }\n\n    .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.color');\n    }\n\n    .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.color');\n        margin-left: auto;\n        font-size: dt('tieredmenu.submenu.icon.size');\n        width: dt('tieredmenu.submenu.icon.size');\n        height: dt('tieredmenu.submenu.icon.size');\n    }\n\n    .p-tieredmenu-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {\n        color: dt('tieredmenu.item.focus.color');\n        background: dt('tieredmenu.item.focus.background');\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.focus.color');\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.focus.color');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {\n        color: dt('tieredmenu.item.focus.color');\n        background: dt('tieredmenu.item.focus.background');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.focus.color');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.focus.color');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content {\n        color: dt('tieredmenu.item.active.color');\n        background: dt('tieredmenu.item.active.background');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.active.color');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.active.color');\n    }\n\n    .p-tieredmenu-separator {\n        border-block-start: 1px solid dt('tieredmenu.separator.border.color');\n    }\n\n    .p-tieredmenu-overlay {\n        box-shadow: dt('tieredmenu.shadow');\n    }\n\n    .p-tieredmenu-enter-from,\n    .p-tieredmenu-leave-active {\n        opacity: 0;\n    }\n\n    .p-tieredmenu-enter-active {\n        transition: opacity 250ms;\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu {\n        position: static;\n        box-shadow: none;\n        border: 0 none;\n        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');\n        padding-inline-end: 0;\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {\n        padding-inline-start: 0;\n        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {\n        transition: transform 0.2s;\n        transform: rotate(90deg);\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        transform: rotate(-90deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-tieredmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0) => ({
  processedItem: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  hasSubmenu: a1
});
var _c4 = (a0) => ({
  display: a0
});
function TieredMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r2.getItemProp(processedItem_r2, "style"));
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("separator"), ctx_r2.getItemProp(processedItem_r2, "class"), ctx_r2.getItemProp(processedItem_r2, "styleClass")));
    ɵɵproperty("pBind", ctx_r2._ptm("separator"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("itemIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"))("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemIcon"));
    ɵɵattribute("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml)("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLabel"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("itemBadge"), ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass")));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(5);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    ɵɵariaProperty("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 21)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate && !ctx_r2.tieredMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate || ctx_r2.tieredMenu._submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 4, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 3, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r7 = ɵɵreference(4);
    const ctx_r4 = ɵɵnextContext(3);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLink"));
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r2, "target"))("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLink"));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("itemIcon"), ctx_r2.getItemProp(processedItem_r2, "icon")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"))("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemIcon"));
    ɵɵattribute("aria-hidden", true)("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(4);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml)("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLabel"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("itemBadge"), ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass")));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(5);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("submenuIcon"));
    ɵɵproperty("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "submenuIcon"));
    ɵɵattribute("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    ɵɵariaProperty("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 21)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate && !ctx_r2.tieredMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate || ctx_r2.tieredMenu._submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 25);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 6, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 4, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 3, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(4);
    const ctx_r4 = ɵɵnextContext(3);
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-tieredmenu-item-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c2))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"))("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemLink"));
    ɵɵattribute("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r8);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 12, "a", 12)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 22, "a", 13);
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
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, processedItem_r2.item, ctx_r2.getItemProp(processedItem_r2, "items")));
  }
}
function TieredMenuSub_ng_template_2_li_1_p_tieredmenusub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-tieredmenusub", 27);
    ɵɵlistener("itemClick", function TieredMenuSub_ng_template_2_li_1_p_tieredmenusub_5_Template_p_tieredmenusub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function TieredMenuSub_ng_template_2_li_1_p_tieredmenusub_5_Template_p_tieredmenusub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", processedItem_r2.items)("itemTemplate", ctx_r2.itemTemplate)("autoDisplay", ctx_r2.autoDisplay)("menuId", ctx_r2.menuId)("activeItemPath", ctx_r2.activeItemPath())("focusedItemId", ctx_r2.focusedItemId)("ariaLabelledBy", ctx_r2.getItemId(processedItem_r2))("level", ctx_r2.level + 1)("inlineStyles", ɵɵpureFunction1(10, _c4, ctx_r2.isItemActive(processedItem_r2) ? "flex" : "none"))("pt", ctx_r2.pt());
  }
}
function TieredMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 1)(2, "div", 9);
    ɵɵlistener("click", function TieredMenuSub_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r2));
    })("mouseenter", function TieredMenuSub_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemMouseEnter({
        $event,
        processedItem: processedItem_r2
      }));
    });
    ɵɵtemplate(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 10)(4, TieredMenuSub_ng_template_2_li_1_ng_container_4_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, TieredMenuSub_ng_template_2_li_1_p_tieredmenusub_5_Template, 1, 12, "p-tieredmenusub", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const processedItem_r2 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("item", ɵɵpureFunction1(21, _c1, processedItem_r2)), ctx_r2.getItemProp(processedItem_r2, "styleClass")));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "item"))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("data-p-highlight", ctx_r2.isItemActive(processedItem_r2))("data-p-focused", ctx_r2.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2))("aria-label", ctx_r2.getItemLabel(processedItem_r2))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r2) || void 0)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "to") ? "menu" : void 0)("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : void 0)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r6));
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r2.cx("itemContent"));
    ɵɵproperty("pBind", ctx_r2.getPTOptions(processedItem_r2, index_r6, "itemContent"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_0_Template, 1, 6, "li", 5)(1, TieredMenuSub_ng_template_2_li_1_Template, 6, 23, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.getItemProp(processedItem_r2, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "separator"));
  }
}
var _c5 = ["submenuicon"];
var _c6 = ["item"];
var _c7 = ["rootmenu"];
var _c8 = ["container"];
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function TieredMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("click", function TieredMenu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function TieredMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function TieredMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "p-tieredMenuSub", 4, 1);
    ɵɵlistener("itemClick", function TieredMenu_div_0_Template_p_tieredMenuSub_itemClick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("menuFocus", function TieredMenu_div_0_Template_p_tieredMenuSub_menuFocus_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function TieredMenu_div_0_Template_p_tieredMenuSub_menuBlur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function TieredMenu_div_0_Template_p_tieredMenuSub_menuKeydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function TieredMenu_div_0_Template_p_tieredMenuSub_itemMouseEnter_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵproperty("id", ctx_r1.id)("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"))("@overlayAnimation", ɵɵpureFunction1(24, _c10, ɵɵpureFunction2(21, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵadvance(2);
    ɵɵproperty("root", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("autoDisplay", ctx_r1.autoDisplay)("popup", ctx_r1.popup)("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath())("pt", ctx_r1.pt());
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
  }) => ["p-tieredmenu p-component", {
    "p-tieredmenu-overlay": instance.popup,
    "p-tieredmenu-mobile": instance.queryMatches
  }],
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-tieredmenu-item", {
    "p-tieredmenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  itemBadge: "p-menuitem-badge",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
};
var TieredMenuStyle = class _TieredMenuStyle extends BaseStyle {
  name = "tieredmenu";
  style = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTieredMenuStyle_BaseFactory;
    return function TieredMenuStyle_Factory(__ngFactoryType__) {
      return (ɵTieredMenuStyle_BaseFactory || (ɵTieredMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_TieredMenuStyle)))(__ngFactoryType__ || _TieredMenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TieredMenuStyle,
    factory: _TieredMenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var TieredMenuClasses;
(function(TieredMenuClasses2) {
  TieredMenuClasses2["root"] = "p-tieredmenu";
  TieredMenuClasses2["start"] = "p-tieredmenu-start";
  TieredMenuClasses2["rootList"] = "p-tieredmenu-root-list";
  TieredMenuClasses2["item"] = "p-tieredmenu-item";
  TieredMenuClasses2["itemContent"] = "p-tieredmenu-item-content";
  TieredMenuClasses2["itemLink"] = "p-tieredmenu-item-link";
  TieredMenuClasses2["itemIcon"] = "p-tieredmenu-item-icon";
  TieredMenuClasses2["itemLabel"] = "p-tieredmenu-item-label";
  TieredMenuClasses2["submenuIcon"] = "p-tieredmenu-submenu-icon";
  TieredMenuClasses2["submenu"] = "p-tieredmenu-submenu";
  TieredMenuClasses2["separator"] = "p-tieredmenu-separator";
  TieredMenuClasses2["end"] = "p-tieredmenu-end";
})(TieredMenuClasses || (TieredMenuClasses = {}));
var TIEREDMENU_INSTANCE = new InjectionToken("TIEREDMENU_INSTANCE");
var TIEREDMENUSUB_INSTANCE = new InjectionToken("TIEREDMENUSUB_INSTANCE");
var TieredMenuSub = class _TieredMenuSub extends BaseComponent {
  el;
  renderer;
  tieredMenu;
  items;
  itemTemplate;
  root = false;
  autoDisplay;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath = input([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : []);
  tabindex = 0;
  inlineStyles;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  _componentStyle = inject(TieredMenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTieredMenu = inject(TIEREDMENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $pcTieredMenuSub = inject(TIEREDMENUSUB_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  constructor(el, renderer, tieredMenu) {
    super();
    this.el = el;
    this.renderer = renderer;
    this.tieredMenu = tieredMenu;
  }
  positionSubmenu() {
    if (isPlatformBrowser(this.tieredMenu.platformId)) {
      const sublist = this.sublistViewChild && this.sublistViewChild.nativeElement;
      if (sublist) {
        zt(sublist, this.level);
      }
    }
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? m(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-tieredmenu-item": true,
      "p-tieredmenu-item-active": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-tieredmenu-separator": true
    });
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => {
      const isItemVisible = this.isItemVisible(processedItem);
      const isVisibleSeparator = isItemVisible && this.getItemProp(processedItem, "separator");
      return !isItemVisible || isVisibleSeparator;
    }).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath()) {
      this.positionSubmenu();
      return this.activeItemPath().some((path) => path.key === processedItem.key);
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
  // TODO: will be removed later. Helper method to get PT from parent ContextMenu if available, otherwise use own PT
  _ptm(section, options) {
    return this.$pcTieredMenu ? this.$pcTieredMenu.ptm(section, options) : this.ptm(section, options);
  }
  getPTOptions(processedItem, index, key) {
    return this._ptm(key, {
      context: {
        item: processedItem.item,
        index,
        active: this.isItemActive(processedItem),
        focused: this.isItemFocused(processedItem),
        disabled: this.isItemDisabled(processedItem)
      }
    });
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
  static ɵfac = function TieredMenuSub_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuSub)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(forwardRef(() => TieredMenu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TieredMenuSub,
    selectors: [["p-tieredMenuSub"], ["p-tieredmenusub"]],
    viewQuery: function TieredMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      root: [2, "root", "root", booleanAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: [1, "activeItemPath"],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inlineStyles: "inlineStyles"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵProvidersFeature([{
      provide: TIEREDMENUSUB_INSTANCE,
      useExisting: forwardRef(() => _TieredMenuSub)
    }, {
      provide: PARENT_INSTANCE,
      useExisting: forwardRef(() => _TieredMenuSub)
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 12,
    consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "keydown", "focus", "blur", "id", "tabindex", "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "class", "pBind", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "pBind", "tooltipOptions"], [3, "click", "mouseenter", "pBind"], [4, "ngIf"], [3, "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "inlineStyles", "pt", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "class", "pBind", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "pBind"], [3, "innerHTML", "pBind"], ["data-p-icon", "angle-right", 3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-right", 3, "pBind"], [3, "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "inlineStyles", "pt"]],
    template: function TieredMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 3, 0);
        ɵɵlistener("keydown", function TieredMenuSub_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuKeydown.emit($event));
        })("focus", function TieredMenuSub_Template_ul_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuFocus.emit($event));
        })("blur", function TieredMenuSub_Template_ul_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuBlur.emit($event));
        });
        ɵɵtemplate(2, TieredMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.inlineStyles);
        ɵɵclassMap(ctx.root ? ctx.cx("rootList") : ctx.cx("submenu"));
        ɵɵproperty("id", ctx.menuId + "_list")("tabindex", ctx.tabindex)("pBind", ctx._ptm(ctx.root ? "rootList" : "submenu"));
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-activedescendant", ctx.focusedItemId)("aria-orientation", "vertical");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: [_TieredMenuSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Tooltip, Bind, AngleRightIcon, SharedModule, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuSub, [{
    type: Component,
    args: [{
      selector: "p-tieredMenuSub, p-tieredmenusub",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleRightIcon, SharedModule, BindModule],
      template: `
        <ul
            #sublist
            role="menu"
            [class]="root ? cx('rootList') : cx('submenu')"
            [id]="menuId + '_list'"
            [tabindex]="tabindex"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.aria-orientation]="'vertical'"
            [pBind]="_ptm(root ? 'rootList' : 'submenu')"
            (keydown)="menuKeydown.emit($event)"
            (focus)="menuFocus.emit($event)"
            (blur)="menuBlur.emit($event)"
            [style]="inlineStyles"
        >
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [attr.id]="getItemId(processedItem)"
                    [style]="getItemProp(processedItem, 'style')"
                    [class]="cn(cx('separator'), getItemProp(processedItem, 'class'), getItemProp(processedItem, 'styleClass'))"
                    role="separator"
                    [pBind]="_ptm('separator')"
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
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [class]="cn(cx('item', { processedItem }), getItemProp(processedItem, 'styleClass'))"
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
                                    [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(processedItem, index, 'itemLabel')">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span [class]="cx('itemLabel')" [innerHTML]="getItemLabel(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')"></span>
                                </ng-template>
                                <span *ngIf="getItemProp(processedItem, 'badge')" [class]="cn(cx('itemBadge'), getItemProp(processedItem, 'badgeStyleClass'))">{{ getItemProp(processedItem, 'badge') }}</span>

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <svg
                                        data-p-icon="angle-right"
                                        *ngIf="!tieredMenu.submenuIconTemplate && !tieredMenu._submenuIconTemplate"
                                        [class]="cx('submenuIcon')"
                                        [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                        [attr.aria-hidden]="true"
                                    />
                                    <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate || tieredMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.tabindex]="-1"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-tieredmenu-item-link-active'"
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
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'))"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(processedItem, index, 'itemLabel')">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span [class]="cx('itemLabel')" [innerHTML]="getItemLabel(processedItem)" [pBind]="getPTOptions(processedItem, index, 'itemLabel')"></span>
                                </ng-template>
                                <span *ngIf="getItemProp(processedItem, 'badge')" [class]="cn(cx('itemBadge'), getItemProp(processedItem, 'badgeStyleClass'))">{{ getItemProp(processedItem, 'badge') }}</span>

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <svg
                                        data-p-icon="angle-right"
                                        *ngIf="!tieredMenu.submenuIconTemplate && !tieredMenu._submenuIconTemplate"
                                        [class]="cx('submenuIcon')"
                                        [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                        [attr.aria-hidden]="true"
                                    />
                                    <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate || tieredMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item, hasSubmenu: getItemProp(processedItem, 'items') }"></ng-template>
                        </ng-container>
                    </div>

                    <p-tieredmenusub
                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        [items]="processedItem.items"
                        [itemTemplate]="itemTemplate"
                        [autoDisplay]="autoDisplay"
                        [menuId]="menuId"
                        [activeItemPath]="activeItemPath()"
                        [focusedItemId]="focusedItemId"
                        [ariaLabelledBy]="getItemId(processedItem)"
                        [level]="level + 1"
                        (itemClick)="itemClick.emit($event)"
                        (itemMouseEnter)="onItemMouseEnter($event)"
                        [inlineStyles]="{ display: isItemActive(processedItem) ? 'flex' : 'none' }"
                        [pt]="pt()"
                    ></p-tieredmenusub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: TIEREDMENUSUB_INSTANCE,
        useExisting: forwardRef(() => TieredMenuSub)
      }, {
        provide: PARENT_INSTANCE,
        useExisting: forwardRef(() => TieredMenuSub)
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: TieredMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TieredMenu)]
    }]
  }], {
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
    autoDisplay: [{
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
    popup: [{
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
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inlineStyles: [{
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
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist", {
        static: true
      }]
    }]
  });
})();
var TieredMenu = class _TieredMenu extends BaseComponent {
  overlayService;
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
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
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
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
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
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
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
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  rootmenu;
  containerViewChild;
  /**
   * Template of the submenu icon.
   * @group Templates
   */
  submenuIconTemplate;
  /**
   * Template of the item.
   * @group Templates
   */
  itemTemplate;
  templates;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  container;
  outsideClickListener;
  resizeListener;
  scrollHandler;
  target;
  relatedTarget;
  visible;
  relativeAlign;
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
  _model;
  _componentStyle = inject(TieredMenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  matchMediaListener;
  query;
  queryMatches;
  _submenuIconTemplate;
  _itemTemplate;
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
    const focusedItemInfo = this.focusedItemInfo();
    return focusedItemInfo.item?.id ? focusedItemInfo.item.id : focusedItemInfo.index !== -1 ? `${this.id}${s(focusedItemInfo.parentKey) ? "_" + focusedItemInfo.parentKey : ""}_${focusedItemInfo.index}` : null;
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
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
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    this.bindMatchMediaListener();
    this.id = this.id || s2("pn_id_");
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
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
  bindMatchMediaListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.matchMediaListener) {
        const query = window.matchMedia(`(max-width: ${this.breakpoint})`);
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = () => {
          this.queryMatches = query.matches;
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
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
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
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
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
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
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
      this.dirty = true;
      bt(this.rootmenu?.sublistViewChild?.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItemPath().find((p) => p.parentKey === "");
        this.hide(originalEvent);
        this.changeFocusedItemIndex(originalEvent, rootProcessedItem?.index ?? -1);
        bt(this.rootmenu?.sublistViewChild?.nativeElement);
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
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    const item = processedItem?.item;
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.popup && this.hide(event, true);
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    if (!processedItem) {
      event.preventDefault();
      return;
    }
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = l(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
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
      const element = z(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
      if (!this.popup) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo().index = this.findFirstFocusedItemIndex());
      }
    }
    event.preventDefault();
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
    isFocus && bt(this.rootmenu?.sublistViewChild?.nativeElement);
    if (type === "hover" && this.queryMatches) {
      return;
    }
    this.activeItemPath.set(activeItemPath);
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1 && !this.popup) {
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
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          S(this.containerViewChild?.nativeElement, {
            position: "absolute",
            top: 0
          });
          this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
          this.appendOverlay();
          this.alignOverlay();
          this.bindOutsideClickListener();
          this.bindResizeListener();
          this.bindScrollListener();
          bt(this.rootmenu?.sublistViewChild?.nativeElement);
          this.scrollInView();
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) I(this.container, this.target);
    else D(this.container, this.target);
    const targetWidth = v(this.target);
    if (targetWidth > v(this.container)) {
      this.container.style.minWidth = v(this.target) + "px";
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") this.renderer.appendChild(this.document.body, this.container);
      else ut(this.$appendTo(), this.container);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide(event, isFocus) {
    if (this.popup) {
      this.onHide.emit({});
      this.visible = false;
    }
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && bt(this.relatedTarget || this.target || this.rootmenu?.sublistViewChild?.nativeElement);
    this.dirty = false;
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    this.visible ? this.hide(event, true) : this.show(event);
  }
  /**
   * Displays the popup menu.
   * @param {Event} even - Browser event.
   * @group Method
   */
  show(event, isFocus) {
    if (this.popup) {
      this.visible = true;
      this.target = this.target || event.currentTarget;
      this.relatedTarget = event.relatedTarget || null;
      this.relativeAlign = event?.relativeAlign || null;
    }
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && bt(this.rootmenu?.sublistViewChild?.nativeElement);
    this.cd.markForCheck();
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
  changeFocusedItemIndex(event, index) {
    if (this.focusedItemInfo().index !== index) {
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        item: this.visibleItems[index].item,
        index
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = z(this.rootmenu?.el?.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
        if (this.visible) {
          this.hide(event, true);
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!Yt()) {
            this.hide(event, true);
          }
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.containerViewChild && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onOverlayHide() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindScrollListener();
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  onDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    this.unbindMatchMediaListener();
  }
  static ɵfac = function TieredMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenu)(ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TieredMenu,
    selectors: [["p-tieredMenu"], ["p-tieredmenu"], ["p-tiered-menu"]],
    contentQueries: function TieredMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TieredMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c7, 5);
        ɵɵviewQuery(_c8, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      breakpoint: "breakpoint",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵProvidersFeature([TieredMenuStyle, {
      provide: TIEREDMENU_INSTANCE,
      useExisting: _TieredMenu
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TieredMenu
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["rootmenu", ""], [3, "id", "class", "ngStyle", "pBind", "click", 4, "ngIf"], [3, "click", "id", "ngStyle", "pBind"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "autoDisplay", "popup", "focusedItemId", "activeItemPath", "pt"]],
    template: function TieredMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TieredMenu_div_0_Template, 4, 26, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgIf, NgStyle, TieredMenuSub, RouterModule, TooltipModule, Bind, SharedModule, BindModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenu, [{
    type: Component,
    args: [{
      selector: "p-tieredMenu, p-tieredmenu, p-tiered-menu",
      standalone: true,
      imports: [CommonModule, TieredMenuSub, RouterModule, TooltipModule, SharedModule, BindModule],
      template: `
        <div
            #container
            [id]="id"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            [pBind]="ptm('root')"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            *ngIf="!popup || visible"
        >
            <p-tieredMenuSub
                #rootmenu
                [root]="true"
                [items]="processedItems"
                [itemTemplate]="itemTemplate || _itemTemplate"
                [menuId]="id"
                [tabindex]="!disabled ? tabindex : -1"
                [ariaLabel]="ariaLabel"
                [ariaLabelledBy]="ariaLabelledBy"
                [baseZIndex]="baseZIndex"
                [autoZIndex]="autoZIndex"
                [autoDisplay]="autoDisplay"
                [popup]="popup"
                [focusedItemId]="focused ? focusedItemId : undefined"
                [activeItemPath]="activeItemPath()"
                (itemClick)="onItemClick($event)"
                (menuFocus)="onMenuFocus($event)"
                (menuBlur)="onMenuBlur($event)"
                (menuKeydown)="onKeyDown($event)"
                (itemMouseEnter)="onItemMouseEnter($event)"
                [pt]="pt()"
            ></p-tieredMenuSub>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TieredMenuStyle, {
        provide: TIEREDMENU_INSTANCE,
        useExisting: TieredMenu
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TieredMenu
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
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
    breakpoint: [{
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
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
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
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
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
var TieredMenuModule = class _TieredMenuModule {
  static ɵfac = function TieredMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TieredMenuModule,
    imports: [TieredMenu, SharedModule],
    exports: [TieredMenu, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TieredMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuModule, [{
    type: NgModule,
    args: [{
      imports: [TieredMenu, SharedModule],
      exports: [TieredMenu, SharedModule]
    }]
  }], null, null);
})();

export {
  TieredMenuStyle,
  TieredMenuClasses,
  TieredMenuSub,
  TieredMenu,
  TieredMenuModule
};
//# sourceMappingURL=chunk-P7YD5FNA.js.map
