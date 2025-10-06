import {
  Tooltip,
  TooltipModule
} from "./chunk-H6RZA5GF.js";
import "./chunk-C5DLRIHR.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-WZWEIIDP.js";
import "./chunk-UQLQBFGK.js";
import {
  ChevronRightIcon,
  HomeIcon
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
  ViewEncapsulation,
  inject,
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
} from "./chunk-ONJW5VE5.js";
import "./chunk-YVXMBCE5.js";
import "./chunk-G6ECYYJH.js";
import "./chunk-RTGP7ALM.js";
import "./chunk-ZLMKASLL.js";
import "./chunk-ICG2ZITK.js";
import "./chunk-WDMUDEB6.js";

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
    ɵɵtemplate(0, Breadcrumb_li_2_Conditional_1_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.home));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon));
    ɵɵproperty("ngStyle", ctx_r0.home == null ? null : ctx_r0.home.style);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cx("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template, 2, 3, "span", 17)(2, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
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
    ɵɵelementStart(0, "a", 11);
    ɵɵlistener("click", function Breadcrumb_li_2_Conditional_2_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_0_span_1_Template, 1, 3, "span", 12)(2, Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template, 1, 2, "svg", 13)(3, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template, 4, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("href", ctx_r0.home.url ? ctx_r0.home.url : null, ɵɵsanitizeUrl)("target", ctx_r0.home.target);
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
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵstyleMap(ctx_r0.home.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r0.cx("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", ctx_r0.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template, 2, 3, "span", 17)(2, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template, 1, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
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
    ɵɵelementStart(0, "a", 19);
    ɵɵlistener("click", function Breadcrumb_li_2_Conditional_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_Conditional_2_a_1_span_1_Template, 1, 4, "span", 20)(2, Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template, 1, 2, "svg", 13)(3, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("routerLink", ctx_r0.home.routerLink)("queryParams", ctx_r0.home.queryParams)("routerLinkActiveOptions", ctx_r0.home.routerLinkActiveOptions || ɵɵpureFunction0(18, _c3))("target", ctx_r0.home.target)("fragment", ctx_r0.home.fragment)("queryParamsHandling", ctx_r0.home.queryParamsHandling)("preserveFragment", ctx_r0.home.preserveFragment)("skipLocationChange", ctx_r0.home.skipLocationChange)("replaceUrl", ctx_r0.home.replaceUrl)("state", ctx_r0.home.state);
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
    ɵɵtemplate(0, Breadcrumb_li_2_Conditional_2_a_0_Template, 4, 10, "a", 9)(1, Breadcrumb_li_2_Conditional_2_a_1_Template, 4, 19, "a", 10);
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
    ɵɵelementStart(0, "li", 7);
    ɵɵconditionalCreate(1, Breadcrumb_li_2_Conditional_1_Template, 1, 4)(2, Breadcrumb_li_2_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("homeItem"), ctx_r0.home.styleClass));
    ɵɵproperty("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions);
    ɵɵattribute("id", ctx_r0.home.id)("data-pc-section", "home");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_li_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
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
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, Breadcrumb_li_3__svg_svg_1_Template, 1, 0, "svg", 21)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("separator"));
    ɵɵattribute("data-pc-section", "separator");
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
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, menuitem_r6));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(5).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(6).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(6).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template, 2, 3, "span", 17)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template, 1, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(3);
    const menuitem_r6 = ɵɵnextContext(5).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlLabel_r8);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template, 1, 4, "span", 20)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 14);
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
    ɵɵelementStart(0, "a", 27);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const menuitem_r6 = ɵɵnextContext(3).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(3).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("target", menuitem_r6 == null ? null : menuitem_r6.target);
    ɵɵattribute("href", (menuitem_r6 == null ? null : menuitem_r6.url) ? menuitem_r6 == null ? null : menuitem_r6.url : null, ɵɵsanitizeUrl)("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.itemTemplate && !ctx_r0._itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(4).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6 == null ? null : menuitem_r6.iconStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(5).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(5).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLabel"));
    ɵɵproperty("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template, 2, 3, "span", 17)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template, 1, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r10 = ɵɵreference(3);
    const menuitem_r6 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlRouteLabel_r10);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 19);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const menuitem_r6 = ɵɵnextContext(3).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template, 1, 4, "span", 20)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext(3).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("itemLink"));
    ɵɵproperty("routerLink", menuitem_r6 == null ? null : menuitem_r6.routerLink)("queryParams", menuitem_r6 == null ? null : menuitem_r6.queryParams)("routerLinkActiveOptions", (menuitem_r6 == null ? null : menuitem_r6.routerLinkActiveOptions) || ɵɵpureFunction0(16, _c3))("target", menuitem_r6 == null ? null : menuitem_r6.target)("fragment", menuitem_r6 == null ? null : menuitem_r6.fragment)("queryParamsHandling", menuitem_r6 == null ? null : menuitem_r6.queryParamsHandling)("preserveFragment", menuitem_r6 == null ? null : menuitem_r6.preserveFragment)("skipLocationChange", menuitem_r6 == null ? null : menuitem_r6.skipLocationChange)("replaceUrl", menuitem_r6 == null ? null : menuitem_r6.replaceUrl)("state", menuitem_r6 == null ? null : menuitem_r6.state);
    ɵɵattribute("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template, 2, 7, "a", 26)(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template, 3, 17, "a", 10);
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
    ɵɵelementStart(0, "li", 25);
    ɵɵconditionalCreate(1, Breadcrumb_ng_template_4_li_0_Conditional_1_Template, 1, 4)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(menuitem_r6.style);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("item", ɵɵpureFunction1(8, _c4, menuitem_r6)), menuitem_r6.styleClass));
    ɵɵproperty("tooltipOptions", menuitem_r6.tooltipOptions);
    ɵɵattribute("id", menuitem_r6.id)("data-pc-section", "menuitem");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_ng_template_4_li_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
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
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_1__svg_svg_1_Template, 1, 0, "svg", 21)(2, Breadcrumb_ng_template_4_li_1_2_Template, 1, 0, null, 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("separator"));
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_0_Template, 3, 10, "li", 24)(1, Breadcrumb_ng_template_4_li_1_Template, 3, 5, "li", 5);
  }
  if (rf & 2) {
    const menuitem_r6 = ctx.$implicit;
    const end_r11 = ctx.last;
    ɵɵproperty("ngIf", menuitem_r6.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !end_r11 && menuitem_r6.visible !== false);
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
  theme = style;
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
var Breadcrumb = class _Breadcrumb extends BaseComponent {
  router;
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
  constructor(router) {
    super();
    this.router = router;
  }
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
  ngAfterContentInit() {
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
  static ɵfac = function Breadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Breadcrumb)(ɵɵdirectiveInject(Router));
  };
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
    features: [ɵɵProvidersFeature([BreadCrumbStyle]), ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 12,
    consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", 4, "ngIf"], [3, "class", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "href", "class", "target", "click", 4, "ngIf"], [3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "click", "href", "target"], [3, "class", "ngStyle", 4, "ngIf"], ["data-p-icon", "home", 3, "class", 4, "ngIf"], [4, "ngIf"], [3, "ngStyle"], ["data-p-icon", "home"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [3, "click", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", "style", 4, "ngIf"], ["data-p-icon", "chevron-right", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-right"], ["pTooltip", "", 3, "class", "style", "tooltipOptions", 4, "ngIf"], ["pTooltip", "", 3, "tooltipOptions"], [3, "class", "target", "click", 4, "ngIf"], [3, "click", "target"]],
    template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "nav")(1, "ol");
        ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 7, "li", 4)(3, Breadcrumb_li_3_Template, 3, 5, "li", 5)(4, Breadcrumb_ng_template_4_Template, 2, 2, "ng-template", 6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.style);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        ɵɵattribute("data-pc-name", "breadcrumb")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("list"));
        ɵɵattribute("data-pc-section", "menu");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.home && ctx.home.visible !== false);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model && ctx.home);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, TooltipModule, Tooltip, ChevronRightIcon, HomeIcon, SharedModule],
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
      imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
      template: `
        <nav [class]="cn(cx('root'), styleClass)" [style]="style" [attr.data-pc-name]="'breadcrumb'" [attr.data-pc-section]="'root'">
            <ol [attr.data-pc-section]="'menu'" [class]="cx('list')">
                <li [attr.id]="home.id" [class]="cn(cx('homeItem'), home.styleClass)" [ngStyle]="home.style" *ngIf="home && home.visible !== false" pTooltip [tooltipOptions]="home.tooltipOptions" [attr.data-pc-section]="'home'">
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
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon)" [ngStyle]="home?.style"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeLabel" [class]="cx('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label"></span></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="home.routerLink"
                            [routerLink]="home.routerLink"
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
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon)" [style]="home.iconStyle"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" [class]="cx('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="home.label"></span></ng-template>
                            </ng-container>
                        </a>
                    }
                </li>
                <li *ngIf="model && home" [class]="cx('separator')" [attr.data-pc-section]="'separator'">
                    <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" />
                    <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-menuitem let-end="last" [ngForOf]="model">
                    <li
                        *ngIf="menuitem.visible !== false"
                        [class]="cn(cx('item', { menuitem }), menuitem.styleClass)"
                        [attr.id]="menuitem.id"
                        [style]="menuitem.style"
                        pTooltip
                        [tooltipOptions]="menuitem.tooltipOptions"
                        [attr.data-pc-section]="'menuitem'"
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
                            >
                                <ng-container *ngIf="!itemTemplate && !_itemTemplate">
                                    <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon)" [style]="menuitem?.iconStyle"></span>
                                    <ng-container *ngIf="menuitem?.label">
                                        <span *ngIf="menuitem?.escape !== false; else htmlLabel" [class]="cx('itemLabel')">{{ menuitem?.label }}</span>
                                        <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label"></span></ng-template>
                                    </ng-container>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="menuitem?.routerLink"
                                [routerLink]="menuitem?.routerLink"
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
                            >
                                <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon)" [style]="menuitem?.iconStyle"></span>
                                <ng-container *ngIf="menuitem?.label">
                                    <span *ngIf="menuitem?.escape !== false; else htmlRouteLabel" [class]="cx('itemLabel')">{{ menuitem?.label }}</span>
                                    <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="menuitem?.label"></span></ng-template>
                                </ng-container>
                            </a>
                        }
                    </li>
                    <li *ngIf="!end && menuitem.visible !== false" [class]="cx('separator')" [attr.data-pc-section]="'separator'">
                        <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" />
                        <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BreadCrumbStyle]
    }]
  }], () => [{
    type: Router
  }], {
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
