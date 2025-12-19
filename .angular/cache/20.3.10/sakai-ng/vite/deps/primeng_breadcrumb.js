import {
  Tooltip,
  TooltipModule
} from "./chunk-ZVLLQLHS.js";
import "./chunk-P6SMTJBG.js";
import "./chunk-CMVOE67Z.js";
import {
  ChevronRightIcon,
  HomeIcon
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
  Router,
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
  NgTemplateOutlet
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
  ViewEncapsulation,
  inject,
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
  ɵɵtextInterpolate
} from "./chunk-QWPRYKF3.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-OTTARZB5.js";
import "./chunk-U4LT4ZJN.js";
import "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/breadcrumb/index.mjs
var style = "\n    .p-breadcrumb {\n        background: dt('breadcrumb.background');\n        padding: dt('breadcrumb.padding');\n        overflow-x: auto;\n    }\n\n    .p-breadcrumb-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        display: flex;\n        align-items: center;\n        flex-wrap: nowrap;\n        gap: dt('breadcrumb.gap');\n    }\n\n    .p-breadcrumb-separator {\n        display: flex;\n        align-items: center;\n        color: dt('breadcrumb.separator.color');\n    }\n\n    .p-breadcrumb-separator-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-breadcrumb::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-breadcrumb-item-link {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        gap: dt('breadcrumb.item.gap');\n        transition:\n            background dt('breadcrumb.transition.duration'),\n            color dt('breadcrumb.transition.duration'),\n            outline-color dt('breadcrumb.transition.duration'),\n            box-shadow dt('breadcrumb.transition.duration');\n        border-radius: dt('breadcrumb.item.border.radius');\n        outline-color: transparent;\n        color: dt('breadcrumb.item.color');\n    }\n\n    .p-breadcrumb-item-link:focus-visible {\n        box-shadow: dt('breadcrumb.item.focus.ring.shadow');\n        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');\n        outline-offset: dt('breadcrumb.item.focus.ring.offset');\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {\n        color: dt('breadcrumb.item.hover.color');\n    }\n\n    .p-breadcrumb-item-label {\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.color');\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.hover.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var _c0 = ["item"];
var _c1 = ["separator"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  menuitem: a0
});
function Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_2_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_2_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.home));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon));
    ɵɵproperty("ngStyle", ctx_r0.home == null ? null : ctx_r0.home.style)("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cx("itemIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.ptm("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.home.label, ɵɵsanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template, 2, 4, "span", 18)(2, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeLabel_r3 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeLabel_r3);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("click", function Breadcrumb_li_2_Conditional_2_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_0_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("href", ctx_r0.home.url ? ctx_r0.home.url : null, ɵɵsanitizeUrl)("target", ctx_r0.home.target)("pBind", ctx_r0.ptm("itemLink"));
    ɵɵattribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵstyleMap(ctx_r0.home.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon));
    ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cx("itemIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.ptm("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.home.label, ɵɵsanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template, 2, 4, "span", 18)(2, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeRouteLabel_r5 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeRouteLabel_r5);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 20);
    ɵɵlistener("click", function Breadcrumb_li_2_Conditional_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_1_span_1_Template, 1, 5, "span", 21)(2, Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r0.home.routerLink)("queryParams", ctx_r0.home.queryParams)("routerLinkActiveOptions", ctx_r0.home.routerLinkActiveOptions || ɵɵpureFunction0(19, _c3))("target", ctx_r0.home.target)("fragment", ctx_r0.home.fragment)("queryParamsHandling", ctx_r0.home.queryParamsHandling)("preserveFragment", ctx_r0.home.preserveFragment)("skipLocationChange", ctx_r0.home.skipLocationChange)("replaceUrl", ctx_r0.home.replaceUrl)("state", ctx_r0.home.state)("pBind", ctx_r0.ptm("itemLink"));
    ɵɵattribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_2_Conditional_2_a_0_Template, 4, 11, "a", 10)(1, Breadcrumb_li_2_Conditional_2_a_1_Template, 4, 20, "a", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r0.home.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.home.routerLink);
  }
}
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵconditionalCreate(1, Breadcrumb_li_2_Conditional_1_Template, 1, 4)(2, Breadcrumb_li_2_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("homeItem"), ctx_r0.home.styleClass));
    ɵɵproperty("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions)("pBind", ctx_r0.ptm("homeItem"));
    ɵɵattribute("id", ctx_r0.home.id);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_li_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵtemplate(1, Breadcrumb_li_3__svg_svg_1_Template, 1, 1, "svg", 22)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("separator"));
    ɵɵproperty("pBind", ctx_r0.ptm("separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, menuitem_r6));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template, 2, 4, "span", 18)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r10 = ɵɵreference(3);
    const menuitem_r6 = ɵɵnextContext(5).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlLabel_r10);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template, 1, 5, "span", 21)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 28);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const menuitem_r6 = ɵɵnextContext(3).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template, 3, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("target", menuitem_r6 == null ? null : menuitem_r6.target)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    ɵɵattribute("href", (menuitem_r6 == null ? null : menuitem_r6.url) ? menuitem_r6 == null ? null : menuitem_r6.url : null, ɵɵsanitizeUrl)("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.itemTemplate && !ctx_r0._itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(4);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template, 2, 4, "span", 18)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template, 1, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r12 = ɵɵreference(3);
    const menuitem_r6 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlRouteLabel_r12);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 20);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r11);
      const menuitem_r6 = ɵɵnextContext(3).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template, 1, 5, "span", 21)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("routerLink", menuitem_r6 == null ? null : menuitem_r6.routerLink)("queryParams", menuitem_r6 == null ? null : menuitem_r6.queryParams)("routerLinkActiveOptions", (menuitem_r6 == null ? null : menuitem_r6.routerLinkActiveOptions) || ɵɵpureFunction0(17, _c3))("target", menuitem_r6 == null ? null : menuitem_r6.target)("fragment", menuitem_r6 == null ? null : menuitem_r6.fragment)("queryParamsHandling", menuitem_r6 == null ? null : menuitem_r6.queryParamsHandling)("preserveFragment", menuitem_r6 == null ? null : menuitem_r6.preserveFragment)("skipLocationChange", menuitem_r6 == null ? null : menuitem_r6.skipLocationChange)("replaceUrl", menuitem_r6 == null ? null : menuitem_r6.replaceUrl)("state", menuitem_r6 == null ? null : menuitem_r6.state)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    ɵɵattribute("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template, 2, 8, "a", 27)(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template, 3, 18, "a", 11);
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngIf", !(menuitem_r6 == null ? null : menuitem_r6.routerLink));
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.routerLink);
  }
}
function Breadcrumb_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 26);
    ɵɵconditionalCreate(1, Breadcrumb_ng_template_4_li_0_Conditional_1_Template, 1, 4)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6.style);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("item", ɵɵpureFunction1(8, _c4, menuitem_r6)), menuitem_r6.styleClass));
    ɵɵproperty("tooltipOptions", menuitem_r6.tooltipOptions)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "item"));
    ɵɵattribute("id", menuitem_r6.id);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_ng_template_4_li_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_1__svg_svg_1_Template, 1, 1, "svg", 22)(2, Breadcrumb_ng_template_4_li_1_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("separator"));
    ɵɵproperty("pBind", ctx_r0.ptm("separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Template, 3, 10, "li", 25)(1, Breadcrumb_ng_template_4_li_1_Template, 3, 5, "li", 6);
  }
  if (rf & 2) {
    const menuitem_r6 = ctx.$implicit;
    const end_r13 = ctx.last;
    ɵɵproperty("ngIf", menuitem_r6.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !end_r13 && menuitem_r6.visible !== false);
  }
}
var classes = {
  root: () => ["p-breadcrumb p-component"],
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  item: ({
    menuitem
  }) => ["p-breadcrumb-item", {
    "p-disabled": menuitem.disabled
  }],
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
};
var BreadCrumbStyle = class _BreadCrumbStyle extends BaseStyle {
  name = "breadcrumb";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBreadCrumbStyle_BaseFactory;
    return function BreadCrumbStyle_Factory(__ngFactoryType__) {
      return (ɵBreadCrumbStyle_BaseFactory || (ɵBreadCrumbStyle_BaseFactory = ɵɵgetInheritedFactory(_BreadCrumbStyle)))(__ngFactoryType__ || _BreadCrumbStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _BreadCrumbStyle,
    factory: _BreadCrumbStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbStyle, [{
    type: Injectable
  }], null, null);
})();
var BreadcrumbClasses;
(function(BreadcrumbClasses2) {
  BreadcrumbClasses2["root"] = "p-breadcrumb";
  BreadcrumbClasses2["list"] = "p-breadcrumb-list";
  BreadcrumbClasses2["homeItem"] = "p-breadcrumb-home-item";
  BreadcrumbClasses2["separator"] = "p-breadcrumb-separator";
  BreadcrumbClasses2["item"] = "p-breadcrumb-item";
  BreadcrumbClasses2["itemLink"] = "p-breadcrumb-item-link";
  BreadcrumbClasses2["itemIcon"] = "p-breadcrumb-item-icon";
  BreadcrumbClasses2["itemLabel"] = "p-breadcrumb-item-label";
})(BreadcrumbClasses || (BreadcrumbClasses = {}));
var BREADCRUMB_INSTANCE = new InjectionToken("BREADCRUMB_INSTANCE");
var Breadcrumb = class _Breadcrumb extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
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
   * MenuItem configuration for the home icon.
   * @group Props
   */
  home;
  /**
   * Defines a string that labels the home icon for accessibility.
   * @group Props
   */
  homeAriaLabel;
  /**
   * Fired when an item is selected.
   * @param {BreadcrumbItemClickEvent} event - custom click event.
   * @group Emits
   */
  onItemClick = new EventEmitter();
  _componentStyle = inject(BreadCrumbStyle);
  router = inject(Router);
  onClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item
    });
  }
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  /**
   * Defines template option for separator.
   * @group Templates
   */
  separatorTemplate;
  templates;
  _separatorTemplate;
  _itemTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "separator":
          this._separatorTemplate = item.template;
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
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  getPTOptions(item, index, key) {
    return this.ptm(key, {
      context: {
        item,
        index
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBreadcrumb_BaseFactory;
    return function Breadcrumb_Factory(__ngFactoryType__) {
      return (ɵBreadcrumb_BaseFactory || (ɵBreadcrumb_BaseFactory = ɵɵgetInheritedFactory(_Breadcrumb)))(__ngFactoryType__ || _Breadcrumb);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Breadcrumb,
    selectors: [["p-breadcrumb"]],
    contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 5);
        ɵɵcontentQuery(dirIndex, _c1, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.separatorTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      home: "home",
      homeAriaLabel: "homeAriaLabel"
    },
    outputs: {
      onItemClick: "onItemClick"
    },
    features: [ɵɵProvidersFeature([BreadCrumbStyle, {
      provide: BREADCRUMB_INSTANCE,
      useExisting: _Breadcrumb
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Breadcrumb
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 11,
    consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "pBind"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "href", "class", "target", "pBind", "click", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", "click", 4, "ngIf"], [3, "click", "href", "target", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], ["data-p-icon", "home", 3, "class", "pBind", 4, "ngIf"], [4, "ngIf"], [3, "ngStyle", "pBind"], ["data-p-icon", "home", 3, "pBind"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "innerHTML", "pBind"], ["routerLinkActive", "p-menuitem-link-active", 3, "click", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "class", "style", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-right", 3, "pBind"], ["pTooltip", "", 3, "class", "style", "tooltipOptions", "pBind", 4, "ngIf"], ["pTooltip", "", 3, "tooltipOptions", "pBind"], [3, "class", "target", "pBind", "click", 4, "ngIf"], [3, "click", "target", "pBind"]],
    template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "nav", 4)(1, "ol", 4);
        ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 7, "li", 5)(3, Breadcrumb_li_3_Template, 3, 5, "li", 6)(4, Breadcrumb_ng_template_4_Template, 2, 2, "ng-template", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.style);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        ɵɵproperty("pBind", ctx.ptm("root"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("list"));
        ɵɵproperty("pBind", ctx.ptm("list"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.home && ctx.home.visible !== false);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model && ctx.home);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, TooltipModule, Tooltip, Bind, ChevronRightIcon, HomeIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "p-breadcrumb",
      standalone: true,
      imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule, Bind],
      template: `
        <nav [pBind]="ptm('root')" [class]="cn(cx('root'), styleClass)" [style]="style">
            <ol [class]="cx('list')" [pBind]="ptm('list')">
                <li [attr.id]="home.id" [class]="cn(cx('homeItem'), home.styleClass)" [ngStyle]="home.style" *ngIf="home && home.visible !== false" pTooltip [tooltipOptions]="home.tooltipOptions" [pBind]="ptm('homeItem')">
                    @if (itemTemplate || _itemTemplate) {
                        <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: home }"></ng-template>
                    } @else {
                        <a
                            [href]="home.url ? home.url : null"
                            *ngIf="!home.routerLink"
                            [attr.aria-label]="homeAriaLabel"
                            [class]="cx('itemLink')"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : '0'"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon)" [ngStyle]="home?.style" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeLabel" [class]="cx('itemLabel')" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="home.routerLink"
                            [routerLink]="home.routerLink"
                            routerLinkActive="p-menuitem-link-active"
                            [attr.aria-label]="homeAriaLabel"
                            [queryParams]="home.queryParams"
                            [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                            [class]="cx('itemLink')"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : '0'"
                            [fragment]="home.fragment"
                            [queryParamsHandling]="home.queryParamsHandling"
                            [preserveFragment]="home.preserveFragment"
                            [skipLocationChange]="home.skipLocationChange"
                            [replaceUrl]="home.replaceUrl"
                            [state]="home.state"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon)" [style]="home.iconStyle" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" [class]="cx('itemLabel')" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                        </a>
                    }
                </li>
                <li *ngIf="model && home" [class]="cx('separator')" [pBind]="ptm('separator')">
                    <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                    <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-menuitem let-end="last" let-i="index" [ngForOf]="model">
                    <li
                        *ngIf="menuitem.visible !== false"
                        [class]="cn(cx('item', { menuitem }), menuitem.styleClass)"
                        [attr.id]="menuitem.id"
                        [style]="menuitem.style"
                        pTooltip
                        [tooltipOptions]="menuitem.tooltipOptions"
                        [pBind]="getPTOptions(menuitem, i, 'item')"
                    >
                        @if (itemTemplate || _itemTemplate) {
                            <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: menuitem }"></ng-template>
                        } @else {
                            <a
                                *ngIf="!menuitem?.routerLink"
                                [attr.href]="menuitem?.url ? menuitem?.url : null"
                                [class]="cx('itemLink')"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : '0'"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <ng-container *ngIf="!itemTemplate && !_itemTemplate">
                                    <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon)" [style]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                    <ng-container *ngIf="menuitem?.label">
                                        <span *ngIf="menuitem?.escape !== false; else htmlLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem?.label }}</span>
                                        <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span></ng-template>
                                    </ng-container>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="menuitem?.routerLink"
                                [routerLink]="menuitem?.routerLink"
                                routerLinkActive="p-menuitem-link-active"
                                [queryParams]="menuitem?.queryParams"
                                [routerLinkActiveOptions]="menuitem?.routerLinkActiveOptions || { exact: false }"
                                [class]="cx('itemLink')"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : '0'"
                                [fragment]="menuitem?.fragment"
                                [queryParamsHandling]="menuitem?.queryParamsHandling"
                                [preserveFragment]="menuitem?.preserveFragment"
                                [skipLocationChange]="menuitem?.skipLocationChange"
                                [replaceUrl]="menuitem?.replaceUrl"
                                [state]="menuitem?.state"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon)" [style]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                <ng-container *ngIf="menuitem?.label">
                                    <span *ngIf="menuitem?.escape !== false; else htmlRouteLabel" [class]="cx('itemLabel')" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem?.label }}</span>
                                    <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span></ng-template>
                                </ng-container>
                            </a>
                        }
                    </li>
                    <li *ngIf="!end && menuitem.visible !== false" [class]="cx('separator')" [pBind]="ptm('separator')">
                        <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                        <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BreadCrumbStyle, {
        provide: BREADCRUMB_INSTANCE,
        useExisting: Breadcrumb
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Breadcrumb
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    home: [{
      type: Input
    }],
    homeAriaLabel: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item"]
    }],
    separatorTemplate: [{
      type: ContentChild,
      args: ["separator"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var BreadcrumbModule = class _BreadcrumbModule {
  static ɵfac = function BreadcrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BreadcrumbModule,
    imports: [Breadcrumb, SharedModule],
    exports: [Breadcrumb, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Breadcrumb, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [Breadcrumb, SharedModule],
      exports: [Breadcrumb, SharedModule]
    }]
  }], null, null);
})();
export {
  BreadCrumbStyle,
  Breadcrumb,
  BreadcrumbClasses,
  BreadcrumbModule
};
//# sourceMappingURL=primeng_breadcrumb.js.map
