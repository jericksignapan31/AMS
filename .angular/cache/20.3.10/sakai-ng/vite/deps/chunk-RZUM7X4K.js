import {
  Checkbox
} from "./chunk-5JOF7CKY.js";
import {
  InputIcon
} from "./chunk-TX7QNBPM.js";
import {
  IconField
} from "./chunk-YN3CW5YR.js";
import {
  Scroller
} from "./chunk-P23VO7CN.js";
import {
  InputText
} from "./chunk-AG42BXM6.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-RVGJXB7F.js";
import {
  Ripple
} from "./chunk-2NNT3GX6.js";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  SpinnerIcon
} from "./chunk-PZZHTSKZ.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-HN3FT5WE.js";
import {
  BaseStyle
} from "./chunk-WXGRKYUQ.js";
import {
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService
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
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-R2OVIKVM.js";
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
  Optional,
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
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QWPRYKF3.js";
import {
  C2 as C,
  R,
  X,
  Y2 as Y,
  bt,
  p,
  v,
  z2 as z
} from "./chunk-U4LT4ZJN.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@primeuix/styles/dist/tree/index.mjs
var style = `
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node-content[data-p-dragging] {
        outline: 1px dashed dt('primary.color');
        outline-offset: -1px;
    }

    .p-tree-node-content[data-pc-section="drag-image"] {
        background: dt('tree.background');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-content.p-tree-node-dragover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-drop-point {
		outline: 1px solid dt('primary.color');
	}

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading {
        position: relative;
        height: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`;

// node_modules/primeng/fesm2022/primeng-tree.mjs
var _c0 = (a0) => ({
  height: a0
});
var _c1 = (a0, a1) => ({
  $implicit: a0,
  loading: a1
});
var _c2 = (a0, a1, a2) => ({
  $implicit: a0,
  partialSelected: a1,
  class: a2
});
var _c3 = (a0) => ({
  $implicit: a0
});
function UITreeNode_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("dropPoint"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("dropPoint"));
    ɵɵattribute("aria-hidden", true);
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("nodeToggleIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("nodeToggleIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 11)(2, UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.expanded);
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("nodeToggleIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_Conditional_0_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 6)(2, UITreeNode_Conditional_0_ng_container_4_ng_container_2_Template, 2, 3, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.node.loading);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.loadingMode === "icon" && ctx_r1.node.loading);
  }
}
function UITreeNode_Conditional_0_span_5_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_Conditional_0_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_Conditional_0_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_Conditional_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, UITreeNode_Conditional_0_span_5_1_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("nodeToggleIcon"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tree.togglerIconTemplate || ctx_r1.tree._togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c1, ctx_r1.node.expanded, ctx_r1.node.loading));
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_Template, 1, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tree.checkboxIconTemplate || ctx_r1.tree._checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c2, ctx_r1.isSelected(), ctx_r1.node.partialSelected, ctx_r1.cx("nodeCheckbox")));
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_Template, 1, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-checkbox", 17);
    ɵɵlistener("click", function UITreeNode_Conditional_0_p_checkbox_6_Template_p_checkbox_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(1, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_Template, 3, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r1.isSelected())("styleClass", ctx_r1.cx("nodeCheckbox"))("binary", true)("indeterminate", ctx_r1.node.partialSelected)("disabled", ctx_r1.node.selectable === false)("variant", (ctx_r1.tree == null ? null : ctx_r1.tree.config.inputStyle()) === "filled" || (ctx_r1.tree == null ? null : ctx_r1.tree.config.inputVariant()) === "filled" ? "filled" : "outlined")("tabindex", -1)("pt", ctx_r1.getPTOptions("pcNodeCheckbox"));
    ɵɵattribute("data-p-partialchecked", ctx_r1.node.partialSelected);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.tree.checkboxIconTemplate || ctx_r1.tree._checkboxIconTemplate);
  }
}
function UITreeNode_Conditional_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.getIcon());
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeIcon"));
  }
}
function UITreeNode_Conditional_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.node.label);
  }
}
function UITreeNode_Conditional_0_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UITreeNode_Conditional_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, UITreeNode_Conditional_0_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tree.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r1.node));
  }
}
function UITreeNode_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("dropPoint"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("dropPoint"));
    ɵɵattribute("aria-hidden", true);
  }
}
function UITreeNode_Conditional_0_ul_12_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 20);
  }
  if (rf & 2) {
    const childNode_r4 = ctx.$implicit;
    const firstChild_r5 = ctx.first;
    const lastChild_r6 = ctx.last;
    const index_r7 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("node", childNode_r4)("parentNode", ctx_r1.node)("firstChild", firstChild_r5)("lastChild", lastChild_r6)("index", index_r7)("itemSize", ctx_r1.itemSize)("level", ctx_r1.level + 1)("loadingMode", ctx_r1.loadingMode);
  }
}
function UITreeNode_Conditional_0_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 18);
    ɵɵtemplate(1, UITreeNode_Conditional_0_ul_12_p_treeNode_1_Template, 1, 8, "p-treeNode", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("nodeChildren"));
    ɵɵproperty("pBind", ctx_r1.ptm("nodeChildren"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.node.children)("ngForTrackBy", ctx_r1.tree.trackBy.bind(ctx_r1));
  }
}
function UITreeNode_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("keydown", function UITreeNode_Conditional_0_Template_li_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    });
    ɵɵconditionalCreate(1, UITreeNode_Conditional_0_Conditional_1_Template, 1, 4, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵlistener("click", function UITreeNode_Conditional_0_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeClick($event));
    })("contextmenu", function UITreeNode_Conditional_0_Template_div_contextmenu_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeRightClick($event));
    })("dblclick", function UITreeNode_Conditional_0_Template_div_dblclick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDblClick($event));
    })("touchend", function UITreeNode_Conditional_0_Template_div_touchend_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeTouchEnd());
    })("drop", function UITreeNode_Conditional_0_Template_div_drop_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDrop($event));
    })("dragstart", function UITreeNode_Conditional_0_Template_div_dragstart_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDragStart($event));
    })("dragover", function UITreeNode_Conditional_0_Template_div_dragover_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDragOver($event));
    })("dragleave", function UITreeNode_Conditional_0_Template_div_dragleave_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDragLeave($event));
    })("dragend", function UITreeNode_Conditional_0_Template_div_dragend_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeDragEnd($event));
    });
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function UITreeNode_Conditional_0_Template_button_click_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggle($event));
    });
    ɵɵtemplate(4, UITreeNode_Conditional_0_ng_container_4_Template, 3, 2, "ng-container", 6)(5, UITreeNode_Conditional_0_span_5_Template, 2, 8, "span", 7);
    ɵɵelementEnd();
    ɵɵtemplate(6, UITreeNode_Conditional_0_p_checkbox_6_Template, 2, 10, "p-checkbox", 8)(7, UITreeNode_Conditional_0_span_7_Template, 1, 3, "span", 7);
    ɵɵelementStart(8, "span", 9);
    ɵɵtemplate(9, UITreeNode_Conditional_0_span_9_Template, 2, 1, "span", 6)(10, UITreeNode_Conditional_0_span_10_Template, 2, 4, "span", 6);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(11, UITreeNode_Conditional_0_Conditional_11_Template, 1, 4, "div", 3);
    ɵɵtemplate(12, UITreeNode_Conditional_0_ul_12_Template, 2, 5, "ul", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.node.style);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("node"), ctx_r1.node.styleClass));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(36, _c0, ctx_r1.itemSize + "px"))("pBind", ctx_r1.getPTOptions("node"));
    ɵɵattribute("aria-label", ctx_r1.node.label)("aria-checked", ctx_r1.checked)("aria-setsize", ctx_r1.node.children ? ctx_r1.node.children.length : 0)("aria-selected", ctx_r1.selected)("aria-expanded", ctx_r1.node.expanded)("aria-posinset", ctx_r1.index + 1)("aria-level", ctx_r1.level + 1)("tabindex", ctx_r1.index === 0 ? 0 : -1)("data-id", ctx_r1.node.key);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isPrevDropPointActive() ? 1 : -1);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("nodeContent"));
    ɵɵstyleProp("padding-left", ctx_r1.level * ctx_r1.indentation + "rem");
    ɵɵproperty("draggable", ctx_r1.tree.draggableNodes)("pBind", ctx_r1.getPTOptions("nodeContent"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("nodeToggleButton"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeToggleButton"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.tree.togglerIconTemplate && !ctx_r1.tree._togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.tree.togglerIconTemplate || ctx_r1.tree._togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.tree.selectionMode == "checkbox");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.icon || ctx_r1.node.expandedIcon || ctx_r1.node.collapsedIcon);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("nodeLabel"));
    ɵɵproperty("pBind", ctx_r1.getPTOptions("nodeLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isNextDropPointActive() ? 11 : -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.tree.virtualScroll && ctx_r1.node.children && ctx_r1.node.expanded);
  }
}
var _c4 = ["filter"];
var _c5 = ["node"];
var _c6 = ["header"];
var _c7 = ["footer"];
var _c8 = ["loader"];
var _c9 = ["empty"];
var _c10 = ["togglericon"];
var _c11 = ["checkboxicon"];
var _c12 = ["loadingicon"];
var _c13 = ["filtericon"];
var _c14 = ["scroller"];
var _c15 = ["wrapper"];
var _c16 = ["content"];
var _c17 = (a0) => ({
  options: a0
});
function Tree_div_0_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin" + ctx_r0.loadingIcon));
    ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Tree_div_0_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("loadingIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Tree_div_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, Tree_div_0_ng_container_2_span_2_1_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("loadingIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Tree_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_div_0_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 12)(2, Tree_div_0_ng_container_2_span_2_Template, 2, 4, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Tree_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, Tree_div_0_i_1_Template, 1, 3, "i", 7)(2, Tree_div_0_ng_container_2_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("mask"));
    ɵɵproperty("pBind", ctx_r0.ptm("mask"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIcon);
  }
}
function Tree_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Tree_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Tree_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r0.filterOptions));
  }
}
function Tree_Conditional_3_p_iconfield_0__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 19);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("filterIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterIcon"));
  }
}
function Tree_Conditional_3_p_iconfield_0_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Tree_Conditional_3_p_iconfield_0_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_Conditional_3_p_iconfield_0_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_Conditional_3_p_iconfield_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, Tree_Conditional_3_p_iconfield_0_span_5_1_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("filterIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Tree_Conditional_3_p_iconfield_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-iconfield", 16)(1, "input", 17, 0);
    ɵɵlistener("keydown.enter", function Tree_Conditional_3_p_iconfield_0_Template_input_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r2);
      return ɵɵresetView($event.preventDefault());
    })("input", function Tree_Conditional_3_p_iconfield_0_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0._filter($event.target == null ? null : $event.target.value));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "p-inputicon", 16);
    ɵɵtemplate(4, Tree_Conditional_3_p_iconfield_0__svg_svg_4_Template, 1, 3, "svg", 18)(5, Tree_Conditional_3_p_iconfield_0_span_5_Template, 2, 4, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("pcFilterContainer"));
    ɵɵproperty("pt", ctx_r0.ptm("pcFilterContainer"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("pcFilterInput"));
    ɵɵproperty("pAutoFocus", ctx_r0.filterInputAutoFocus)("pt", ctx_r0.ptm("pcFilterInput"));
    ɵɵattribute("placeholder", ctx_r0.filterPlaceholder);
    ɵɵadvance(2);
    ɵɵproperty("pt", ctx_r0.ptm("pcFilterIconContainer"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Tree_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_Conditional_3_p_iconfield_0_Template, 6, 11, "p-iconfield", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.filter);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 25, 3);
  }
  if (rf & 2) {
    const rowNode_r4 = ctx.$implicit;
    const firstChild_r5 = ctx.first;
    const lastChild_r6 = ctx.last;
    const index_r7 = ctx.index;
    const scrollerOptions_r8 = ɵɵnextContext(2).options;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("level", rowNode_r4.level)("rowNode", rowNode_r4)("node", rowNode_r4.node)("parentNode", rowNode_r4.parent)("firstChild", firstChild_r5)("lastChild", lastChild_r6)("index", ctx_r0.getIndex(scrollerOptions_r8, index_r7))("itemSize", scrollerOptions_r8.itemSize)("indentation", ctx_r0.indentation)("loadingMode", ctx_r0.loadingMode)("pt", ctx_r0.pt);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 23, 2);
    ɵɵtemplate(2, Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_2_Template, 2, 11, "p-treeNode", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const items_r10 = ctx_r8.$implicit;
    const scrollerOptions_r8 = ctx_r8.options;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵstyleMap(scrollerOptions_r8.contentStyle);
    ɵɵclassMap(ctx_r0.cx("rootChildren"));
    ɵɵproperty("ngClass", scrollerOptions_r8.contentStyleClass)("pBind", ctx_r0.ptm("rootChildren"));
    ɵɵattribute("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r10)("ngForTrackBy", ctx_r0.trackBy);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template, 3, 10, "ul", 22);
  }
  if (rf & 2) {
    const items_r10 = ctx.$implicit;
    ɵɵproperty("ngIf", items_r10);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const scrollerOptions_r11 = ctx.options;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loaderTemplate || ctx_r0._loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c17, scrollerOptions_r11));
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function Tree_ng_container_4_p_scroller_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 21, 1);
    ɵɵlistener("onScroll", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onScroll_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onScroll.emit($event));
    })("onScrollIndexChange", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onScrollIndexChange.emit($event));
    })("onLazyLoad", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Tree_ng_container_4_p_scroller_1_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(4, Tree_ng_container_4_p_scroller_1_ng_container_4_Template, 3, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(11, _c0, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r0.serializedValue)("tabindex", -1)("styleClass", ctx_r0.cx("wrapper"))("scrollHeight", ctx_r0.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r0.virtualScrollItemSize)("lazy", ctx_r0.lazy)("options", ctx_r0.virtualScrollOptions)("pt", ctx_r0.ptm("virtualScroller"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r0.loaderTemplate || ctx_r0._loaderTemplate);
  }
}
function Tree_ng_container_4_ng_container_2_ul_3_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-treeNode", 29);
  }
  if (rf & 2) {
    const node_r12 = ctx.$implicit;
    const firstChild_r13 = ctx.first;
    const lastChild_r14 = ctx.last;
    const index_r15 = ctx.index;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("node", node_r12)("firstChild", firstChild_r13)("lastChild", lastChild_r14)("index", index_r15)("level", 0)("loadingMode", ctx_r0.loadingMode)("pt", ctx_r0.pt);
  }
}
function Tree_ng_container_4_ng_container_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 27, 2);
    ɵɵtemplate(2, Tree_ng_container_4_ng_container_2_ul_3_p_treeNode_2_Template, 1, 7, "p-treeNode", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("rootChildren"));
    ɵɵproperty("pBind", ctx_r0.ptm("rootChildren"));
    ɵɵattribute("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.getRootNode())("ngForTrackBy", ctx_r0.trackBy.bind(ctx_r0));
  }
}
function Tree_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11, 5);
    ɵɵtemplate(3, Tree_ng_container_4_ng_container_2_ul_3_Template, 3, 7, "ul", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("wrapper"));
    ɵɵstyleProp("max-height", ctx_r0.scrollHeight);
    ɵɵproperty("pBind", ctx_r0.ptm("wrapper"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.getRootNode());
  }
}
function Tree_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tree_ng_container_4_p_scroller_1_Template, 5, 13, "p-scroller", 20)(2, Tree_ng_container_4_ng_container_2_Template, 4, 6, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.virtualScroll);
  }
}
function Tree_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function Tree_div_5_2_ng_template_0_Template(rf, ctx) {
}
function Tree_div_5_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tree_div_5_2_ng_template_0_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
  }
}
function Tree_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, Tree_div_5_ng_container_1_Template, 2, 1, "ng-container", 30)(2, Tree_div_5_2_Template, 2, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("emptyMessage"));
    ɵɵproperty("pBind", ctx_r0.ptm("emptyMessage"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.emptyMessageTemplate && !ctx_r0._emptyMessageTemplate)("ngIfElse", ctx_r0.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.emptyMessageTemplate || ctx_r0._emptyMessageTemplate);
  }
}
function Tree_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-tree p-component", {
    "p-tree-selectable": instance.selectionMode != null,
    "p-tree-loading": instance.loading,
    "p-tree-flex-scrollable": instance.scrollHeight === "flex",
    "p-tree-node-dragover": instance.dragHover
  }],
  mask: "p-tree-mask p-overlay-mask",
  loadingIcon: "p-tree-loading-icon",
  pcFilterInput: "p-tree-filter-input",
  wrapper: "p-tree-root",
  rootChildren: "p-tree-root-children",
  node: ({
    instance
  }) => ({
    "p-tree-node": true,
    "p-tree-node-leaf": instance.isLeaf()
  }),
  nodeContent: ({
    instance
  }) => ({
    "p-tree-node-content": true,
    "p-tree-node-selectable": instance.selectable,
    "p-tree-node-dragover": instance.isNodeDropActive(),
    "p-tree-node-selected": instance.selectionMode === "checkbox" && instance.tree.highlightOnSelect ? instance.checked : instance.selected
  }),
  nodeToggleButton: "p-tree-node-toggle-button",
  nodeToggleIcon: "p-tree-node-toggle-icon",
  nodeCheckbox: "p-tree-node-checkbox",
  nodeIcon: "p-tree-node-icon",
  nodeLabel: "p-tree-node-label",
  nodeChildren: "p-tree-node-children",
  emptyMessage: "p-tree-empty-message",
  dropPoint: "p-tree-node-drop-point"
};
var TreeStyle = class _TreeStyle extends BaseStyle {
  name = "tree";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTreeStyle_BaseFactory;
    return function TreeStyle_Factory(__ngFactoryType__) {
      return (ɵTreeStyle_BaseFactory || (ɵTreeStyle_BaseFactory = ɵɵgetInheritedFactory(_TreeStyle)))(__ngFactoryType__ || _TreeStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeStyle,
    factory: _TreeStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeStyle, [{
    type: Injectable
  }], null, null);
})();
var TreeClasses;
(function(TreeClasses2) {
  TreeClasses2["root"] = "p-tree";
  TreeClasses2["mask"] = "p-tree-mask";
  TreeClasses2["loadingIcon"] = "p-tree-loading-icon";
  TreeClasses2["pcFilterInput"] = "p-tree-filter-input";
  TreeClasses2["wrapper"] = "p-tree-root";
  TreeClasses2["rootChildren"] = "p-tree-root-children";
  TreeClasses2["node"] = "p-tree-node";
  TreeClasses2["nodeContent"] = "p-tree-node-content";
  TreeClasses2["nodeToggleButton"] = "p-tree-node-toggle-button";
  TreeClasses2["nodeToggleIcon"] = "p-tree-node-toggle-icon";
  TreeClasses2["nodeCheckbox"] = "p-tree-node-checkbox";
  TreeClasses2["nodeIcon"] = "p-tree-node-icon";
  TreeClasses2["nodeLabel"] = "p-tree-node-label";
  TreeClasses2["nodeChildren"] = "p-tree-node-children";
  TreeClasses2["emptyMessage"] = "p-tree-empty-message";
  TreeClasses2["dropPoint"] = "p-tree-node-droppoint";
})(TreeClasses || (TreeClasses = {}));
var TREE_INSTANCE = new InjectionToken("TREE_INSTANCE");
var TREENODE_INSTANCE = new InjectionToken("TREENODE_INSTANCE");
var UITreeNode = class _UITreeNode extends BaseComponent {
  $pcTreeNode = inject(TREENODE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  static ICON_CLASS = "p-tree-node-icon ";
  rowNode;
  node;
  parentNode;
  root;
  index;
  firstChild;
  lastChild;
  level;
  indentation;
  itemSize;
  loadingMode;
  tree = inject(forwardRef(() => Tree));
  timeout;
  isPrevDropPointHovered = signal(false, ...ngDevMode ? [{
    debugName: "isPrevDropPointHovered"
  }] : []);
  isNextDropPointHovered = signal(false, ...ngDevMode ? [{
    debugName: "isNextDropPointHovered"
  }] : []);
  isNodeDropHovered = signal(false, ...ngDevMode ? [{
    debugName: "isNodeDropHovered"
  }] : []);
  isPrevDropPointActive = computed(() => this.isPrevDropPointHovered() && this.isDroppable(), ...ngDevMode ? [{
    debugName: "isPrevDropPointActive"
  }] : []);
  isNextDropPointActive = computed(() => this.isNextDropPointHovered() && this.isDroppable(), ...ngDevMode ? [{
    debugName: "isNextDropPointActive"
  }] : []);
  isNodeDropActive = computed(() => this.isNodeDropHovered() && this.isNodeDroppable(), ...ngDevMode ? [{
    debugName: "isNodeDropActive"
  }] : []);
  dropPosition = computed(() => this.isPrevDropPointActive() ? -1 : this.isNextDropPointActive() ? 1 : 0, ...ngDevMode ? [{
    debugName: "dropPosition"
  }] : []);
  _componentStyle = inject(TreeStyle);
  get selected() {
    return this.tree.selectionMode === "single" || this.tree.selectionMode === "multiple" ? this.isSelected() : void 0;
  }
  get checked() {
    return this.tree.selectionMode === "checkbox" ? this.isSelected() : void 0;
  }
  get nodeClass() {
    return this.tree._componentStyle.classes.node({
      instance: this
    });
  }
  get selectable() {
    return this.node?.selectable === false ? false : this.tree?.selectionMode != null;
  }
  get subNodes() {
    return this.node?.parent ? this.node.parent.children : this.tree.value;
  }
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        node: this.node,
        index: this.index,
        expanded: this.node?.expanded,
        selected: this.selected,
        checked: this.checked,
        partialChecked: this.node?.partialSelected,
        leaf: this.isLeaf()
      }
    });
  }
  onInit() {
    this.node.parent = this.parentNode;
    const nativeElement = this.tree.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (this.parentNode && !pDialogWrapper) {
      this.setAllNodesTabIndexes();
      this.tree.syncNodeOption(this.node, this.tree.value, "parent", this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
    }
  }
  getIcon() {
    let icon;
    if (this.node.icon) icon = this.node.icon;
    else icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
    return _UITreeNode.ICON_CLASS + " " + icon + " p-tree-node-icon";
  }
  isLeaf() {
    return this.tree.isNodeLeaf(this.node);
  }
  isSelected() {
    return this.tree.isSelected(this.node);
  }
  isSameNode(event) {
    return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
  }
  isDraggable() {
    return this.tree.draggableNodes;
  }
  isDroppable() {
    return this.tree.droppableNodes && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope);
  }
  isNodeDroppable() {
    return this.node?.droppable !== false && this.isDroppable();
  }
  isNodeDraggable() {
    return this.node?.draggable !== false && this.isDraggable();
  }
  toggle(event) {
    if (this.node.expanded) this.collapse(event);
    else this.expand(event);
    event.stopPropagation();
  }
  expand(event) {
    this.node.expanded = true;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
  }
  collapse(event) {
    this.node.expanded = false;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
  }
  onNodeClick(event) {
    this.tree.onNodeClick(event, this.node);
  }
  onNodeKeydown(event) {
    if (event.key === "Enter") {
      this.tree.onNodeClick(event, this.node);
    }
  }
  onNodeTouchEnd() {
    this.tree.onNodeTouchEnd();
  }
  onNodeRightClick(event) {
    this.tree.onNodeRightClick(event, this.node);
  }
  onNodeDblClick(event) {
    this.tree.onNodeDblClick(event, this.node);
  }
  insertNodeOnDrop() {
    const {
      dragNode,
      dragNodeIndex,
      dragNodeSubNodes
    } = this.tree;
    if (!this.node || dragNodeIndex == null || !dragNode || !dragNodeSubNodes) {
      return;
    }
    const position = this.dropPosition();
    const subNodes = this.subNodes || [];
    const index = this.index || 0;
    const dropIndex = dragNodeSubNodes === subNodes ? dragNodeIndex > index ? index : index - 1 : index;
    dragNodeSubNodes.splice(dragNodeIndex, 1);
    if (position < 0) {
      subNodes.splice(dropIndex, 0, dragNode);
    } else if (position > 0) {
      subNodes.splice(dropIndex + 1, 0, dragNode);
    } else {
      this.node.children = this.node.children || [];
      this.node.children.push(dragNode);
    }
    this.tree.dragDropService.stopDrag({
      node: dragNode,
      subNodes,
      index: dragNodeIndex
    });
  }
  onNodeDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isDroppable()) {
      const {
        dragNode
      } = this.tree;
      const position = this.dropPosition();
      const isValidDrop = position !== 0 || position === 0 && this.isNodeDroppable();
      if (isValidDrop) {
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index,
            accept: () => {
              this.insertNodeOnDrop();
            }
          });
        } else {
          this.insertNodeOnDrop();
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index
          });
        }
      }
    }
    this.isPrevDropPointHovered.set(false);
    this.isNextDropPointHovered.set(false);
    this.isNodeDropHovered.set(false);
  }
  onNodeDragStart(event) {
    if (this.isNodeDraggable()) {
      event.dataTransfer.effectAllowed = "all";
      event.dataTransfer?.setData("text", "data");
      const target = event.currentTarget;
      const dragEl = target.cloneNode(true);
      const toggler = dragEl.querySelector('[data-pc-section="nodetogglebutton"]');
      const checkbox = dragEl.querySelector('[data-pc-name="pcnodecheckbox"]');
      target.setAttribute("data-p-dragging", "true");
      dragEl.style.width = v(target) + "px";
      dragEl.style.height = C(target) + "px";
      dragEl.setAttribute("data-pc-section", "drag-image");
      toggler.style.visibility = "hidden";
      checkbox?.remove();
      document.body.appendChild(dragEl);
      event.dataTransfer?.setDragImage(dragEl, 0, 0);
      setTimeout(() => document.body.removeChild(dragEl), 0);
      this.tree.dragDropService.startDrag({
        tree: this,
        node: this.node,
        subNodes: this.subNodes,
        index: this.index,
        scope: this.tree.draggableScope
      });
    } else {
      event.preventDefault();
    }
  }
  onNodeDragOver(event) {
    if (this.isDroppable()) {
      event.dataTransfer.dropEffect = "copy";
      const nodeElement = event.currentTarget;
      const rect = nodeElement.getBoundingClientRect();
      const y = event.clientY - parseInt(rect.top);
      this.isPrevDropPointHovered.set(false);
      this.isNextDropPointHovered.set(false);
      this.isNodeDropHovered.set(false);
      if (y < rect.height * 0.25) {
        this.isPrevDropPointHovered.set(true);
      } else if (y > rect.height * 0.75) {
        this.isNextDropPointHovered.set(true);
      } else if (this.isNodeDroppable()) {
        this.isNodeDropHovered.set(true);
      }
    } else {
      event.dataTransfer.dropEffect = "none";
    }
    if (this.tree.droppableNodes) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onNodeDragLeave() {
    this.isPrevDropPointHovered.set(false);
    this.isNextDropPointHovered.set(false);
    this.isNodeDropHovered.set(false);
  }
  onNodeDragEnd(event) {
    event.currentTarget?.removeAttribute("data-p-dragging");
    this.tree.dragDropService.stopDrag({
      node: this.node,
      subNodes: this.subNodes,
      index: this.index
    });
  }
  onKeyDown(event) {
    if (!this.isSameNode(event) || this.tree.contextMenu && this.tree.contextMenu.containerViewChild?.nativeElement.style.display === "block") {
      return;
    }
    switch (event.code) {
      //down arrow
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      //up arrow
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      //right arrow
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      //left arrow
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      //enter
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnter(event);
        break;
      //tab
      case "Tab":
        this.setAllNodesTabIndexes();
        break;
      default:
        break;
    }
  }
  onArrowUp(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target.parentElement;
    if (nodeElement?.previousElementSibling) {
      this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
    } else {
      let parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        this.focusRowChange(nodeElement, parentNodeElement);
      }
    }
    event.preventDefault();
  }
  onArrowDown(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target;
    const listElement = nodeElement?.children[1];
    if (listElement && listElement.children.length > 0) {
      this.focusRowChange(nodeElement, listElement.children[0]);
    } else {
      if (nodeElement?.parentElement?.nextElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.parentElement.nextElementSibling);
      } else {
        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement?.parentElement);
        if (nextSiblingAncestor) {
          this.focusRowChange(nodeElement, nextSiblingAncestor);
        }
      }
    }
    event.preventDefault();
  }
  onArrowRight(event) {
    if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
      this.expand(event);
      event.currentTarget.tabIndex = -1;
      setTimeout(() => {
        this.onArrowDown(event);
      }, 1);
    }
    event.preventDefault();
  }
  onArrowLeft(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target;
    if (this.level === 0 && !this.node?.expanded) {
      return false;
    }
    if (this.node?.expanded) {
      this.collapse(event);
      return;
    }
    let parentNodeElement = this.getParentNodeElement(nodeElement?.parentElement);
    if (parentNodeElement) {
      this.focusRowChange(event.currentTarget, parentNodeElement);
    }
    event.preventDefault();
  }
  onEnter(event) {
    this.tree.onNodeClick(event, this.node);
    this.setTabIndexForSelectionMode(event, this.tree.nodeTouched);
    event.preventDefault();
  }
  setAllNodesTabIndexes() {
    const nodes = Y(this.tree.el.nativeElement, ".p-tree-node");
    const hasSelectedNode = [...nodes].some((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
    [...nodes].forEach((node) => {
      node.tabIndex = -1;
    });
    if (hasSelectedNode) {
      const selectedNodes = [...nodes].filter((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
      selectedNodes[0].tabIndex = 0;
      return;
    }
    if (nodes.length) {
      [...nodes][0].tabIndex = 0;
    }
  }
  setTabIndexForSelectionMode(event, nodeTouched) {
    if (this.tree.selectionMode !== null) {
      const elements = [...Y(this.tree.el.nativeElement, '[role="treeitem"]')];
      event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
      if (elements.every((element) => element.tabIndex === -1)) {
        elements[0].tabIndex = 0;
      }
    }
  }
  findNextSiblingOfAncestor(nodeElement) {
    let parentNodeElement = this.getParentNodeElement(nodeElement);
    if (parentNodeElement) {
      if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;
      else return this.findNextSiblingOfAncestor(parentNodeElement);
    } else {
      return null;
    }
  }
  findLastVisibleDescendant(nodeElement) {
    const listElement = Array.from(nodeElement.children).find((el) => R(el, "p-tree-node"));
    const childrenListElement = listElement?.children[1];
    if (childrenListElement && childrenListElement.children.length > 0) {
      const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return this.findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  }
  getParentNodeElement(nodeElement) {
    const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
    return parentNodeElement?.tagName === "P-TREENODE" ? parentNodeElement : null;
  }
  focusNode(element) {
    if (this.tree.droppableNodes) element.children[1].focus();
    else element.children[0].focus();
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.children[0].tabIndex = "0";
    this.focusNode(lastVisibleDescendant || currentFocusedRow);
  }
  focusVirtualNode() {
    this.timeout = setTimeout(() => {
      let node = z(this.tree?.contentViewChild?.nativeElement, `[data-id="${this.node?.key ?? this.node?.data}"]`);
      bt(node);
    }, 1);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵUITreeNode_BaseFactory;
    return function UITreeNode_Factory(__ngFactoryType__) {
      return (ɵUITreeNode_BaseFactory || (ɵUITreeNode_BaseFactory = ɵɵgetInheritedFactory(_UITreeNode)))(__ngFactoryType__ || _UITreeNode);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _UITreeNode,
    selectors: [["p-treeNode"]],
    inputs: {
      rowNode: "rowNode",
      node: "node",
      parentNode: "parentNode",
      root: [2, "root", "root", booleanAttribute],
      index: [2, "index", "index", numberAttribute],
      firstChild: [2, "firstChild", "firstChild", booleanAttribute],
      lastChild: [2, "lastChild", "lastChild", booleanAttribute],
      level: [2, "level", "level", numberAttribute],
      indentation: [2, "indentation", "indentation", numberAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      loadingMode: "loadingMode"
    },
    features: [ɵɵProvidersFeature([TreeStyle, {
      provide: TREENODE_INSTANCE,
      useExisting: _UITreeNode
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _UITreeNode
    }]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["icon", ""], ["role", "treeitem", 3, "class", "ngStyle", "style", "pBind"], ["role", "treeitem", 3, "keydown", "ngStyle", "pBind"], [3, "class", "pBind"], [3, "click", "contextmenu", "dblclick", "touchend", "drop", "dragstart", "dragover", "dragleave", "dragend", "draggable", "pBind"], ["type", "button", "pRipple", "", "tabindex", "-1", 3, "click", "pBind"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "ngModel", "styleClass", "binary", "indeterminate", "disabled", "variant", "tabindex", "pt", "click", 4, "ngIf"], [3, "pBind"], ["role", "group", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"], ["data-p-icon", "spinner", "spin", "", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click", "ngModel", "styleClass", "binary", "indeterminate", "disabled", "variant", "tabindex", "pt"], ["role", "group", 3, "pBind"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode"]],
    template: function UITreeNode_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, UITreeNode_Conditional_0_Template, 13, 38, "li", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.node ? 0 : -1);
      }
    },
    dependencies: [_UITreeNode, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, Checkbox, FormsModule, NgControlStatus, NgModel, ChevronRightIcon, ChevronDownIcon, SpinnerIcon, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UITreeNode, [{
    type: Component,
    args: [{
      selector: "p-treeNode",
      standalone: true,
      imports: [CommonModule, Ripple, Checkbox, FormsModule, ChevronRightIcon, ChevronDownIcon, SpinnerIcon, SharedModule, BindModule],
      template: `
        @if (node) {
            <li
                [class]="cn(cx('node'), node.styleClass)"
                [ngStyle]="{ height: itemSize + 'px' }"
                [style]="node.style"
                [attr.aria-label]="node.label"
                [attr.aria-checked]="checked"
                [attr.aria-setsize]="node.children ? node.children.length : 0"
                [attr.aria-selected]="selected"
                [attr.aria-expanded]="node.expanded"
                [attr.aria-posinset]="index + 1"
                [attr.aria-level]="level + 1"
                [attr.tabindex]="index === 0 ? 0 : -1"
                [attr.data-id]="node.key"
                role="treeitem"
                (keydown)="onKeyDown($event)"
                [pBind]="getPTOptions('node')"
            >
                @if (isPrevDropPointActive()) {
                    <div [class]="cx('dropPoint')" [attr.aria-hidden]="true" [pBind]="getPTOptions('dropPoint')"></div>
                }
                <div
                    [class]="cx('nodeContent')"
                    [style.paddingLeft]="level * indentation + 'rem'"
                    (click)="onNodeClick($event)"
                    (contextmenu)="onNodeRightClick($event)"
                    (dblclick)="onNodeDblClick($event)"
                    (touchend)="onNodeTouchEnd()"
                    (drop)="onNodeDrop($event)"
                    (dragstart)="onNodeDragStart($event)"
                    (dragover)="onNodeDragOver($event)"
                    (dragleave)="onNodeDragLeave($event)"
                    (dragend)="onNodeDragEnd($event)"
                    [draggable]="tree.draggableNodes"
                    [pBind]="getPTOptions('nodeContent')"
                >
                    <button type="button" [class]="cx('nodeToggleButton')" (click)="toggle($event)" pRipple tabindex="-1" [pBind]="getPTOptions('nodeToggleButton')">
                        <ng-container *ngIf="!tree.togglerIconTemplate && !tree._togglerIconTemplate">
                            <ng-container *ngIf="!node.loading">
                                <svg data-p-icon="chevron-right" *ngIf="!node.expanded" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')" />
                                <svg data-p-icon="chevron-down" *ngIf="node.expanded" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')" />
                            </ng-container>
                            <ng-container *ngIf="loadingMode === 'icon' && node.loading">
                                <svg data-p-icon="spinner" [class]="cx('nodeToggleIcon')" spin [pBind]="getPTOptions('nodeToggleIcon')" />
                            </ng-container>
                        </ng-container>
                        <span *ngIf="tree.togglerIconTemplate || tree._togglerIconTemplate" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')">
                            <ng-template *ngTemplateOutlet="tree.togglerIconTemplate || tree._togglerIconTemplate; context: { $implicit: node.expanded, loading: node.loading }"></ng-template>
                        </span>
                    </button>

                    <p-checkbox
                        [ngModel]="isSelected()"
                        [styleClass]="cx('nodeCheckbox')"
                        [binary]="true"
                        [indeterminate]="node.partialSelected"
                        *ngIf="tree.selectionMode == 'checkbox'"
                        [disabled]="node.selectable === false"
                        [variant]="tree?.config.inputStyle() === 'filled' || tree?.config.inputVariant() === 'filled' ? 'filled' : 'outlined'"
                        [attr.data-p-partialchecked]="node.partialSelected"
                        [tabindex]="-1"
                        (click)="$event.preventDefault()"
                        [pt]="getPTOptions('pcNodeCheckbox')"
                    >
                        <ng-container *ngIf="tree.checkboxIconTemplate || tree._checkboxIconTemplate">
                            <ng-template #icon>
                                <ng-template
                                    *ngTemplateOutlet="
                                        tree.checkboxIconTemplate || tree._checkboxIconTemplate;
                                        context: {
                                            $implicit: isSelected(),
                                            partialSelected: node.partialSelected,
                                            class: cx('nodeCheckbox')
                                        }
                                    "
                                ></ng-template>
                            </ng-template>
                        </ng-container>
                    </p-checkbox>

                    <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon" [pBind]="getPTOptions('nodeIcon')"></span>
                    <span [class]="cx('nodeLabel')" [pBind]="getPTOptions('nodeLabel')">
                        <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                        <span *ngIf="tree.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </span>
                    </span>
                </div>
                @if (isNextDropPointActive()) {
                    <div [class]="cx('dropPoint')" [attr.aria-hidden]="true" [pBind]="getPTOptions('dropPoint')"></div>
                }
                <ul [class]="cx('nodeChildren')" *ngIf="!tree.virtualScroll && node.children && node.expanded" role="group" [pBind]="ptm('nodeChildren')">
                    <p-treeNode
                        *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; let index = index; trackBy: tree.trackBy.bind(this)"
                        [node]="childNode"
                        [parentNode]="node"
                        [firstChild]="firstChild"
                        [lastChild]="lastChild"
                        [index]="index"
                        [itemSize]="itemSize"
                        [level]="level + 1"
                        [loadingMode]="loadingMode"
                    ></p-treeNode>
                </ul>
            </li>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeStyle, {
        provide: TREENODE_INSTANCE,
        useExisting: UITreeNode
      }, {
        provide: PARENT_INSTANCE,
        useExisting: UITreeNode
      }]
    }]
  }], null, {
    rowNode: [{
      type: Input
    }],
    node: [{
      type: Input
    }],
    parentNode: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    firstChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lastChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingMode: [{
      type: Input
    }]
  });
})();
var Tree = class _Tree extends BaseComponent {
  dragDropService;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTree = inject(TREE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * An array of treenodes.
   * @group Props
   */
  value;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Loading mode display.
   * @group Props
   */
  loadingMode = "mask";
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  selection;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Context menu instance.
   * @group Props
   */
  contextMenu;
  /**
   * Scope of the draggable nodes to match a droppableScope.
   * @group Props
   */
  draggableScope;
  /**
   * Scope of the droppable nodes to match a draggableScope.
   * @group Props
   */
  droppableScope;
  /**
   * Whether the nodes are draggable.
   * @group Props
   */
  draggableNodes;
  /**
   * Whether the nodes are droppable.
   * @group Props
   */
  droppableNodes;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @group Props
   */
  propagateSelectionUp = true;
  /**
   * Whether checkbox selections propagate to descendant nodes.
   * @group Props
   */
  propagateSelectionDown = true;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Text to display when there is no data.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Used to define a string that labels the tree.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the toggler icon for accessibility.
   * @group Props
   */
  togglerAriaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
   * @group Props
   */
  validateDrop;
  /**
   * When specified, displays an input field to filter the items.
   * @group Props
   */
  filter;
  /**
   * Determines whether the filter input should be automatically focused when the component is rendered.
   * @group Props
   */
  filterInputAutoFocus = false;
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
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterOptions;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Values after the tree nodes are filtered.
   * @group Props
   */
  filteredNodes;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Height of the scrollable viewport.
   * @group Props
   */
  scrollHeight;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
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
   * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
   * @group Props
   */
  indentation = 1.5;
  /**
   * Custom templates of the component.
   * @group Props
   */
  _templateMap;
  /**
   * Function to optimize the node list rendering, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Highlights the node on select.
   * @group Props
   */
  highlightOnSelect = false;
  /**
   * Callback to invoke on selection change.
   * @param {(TreeNode<any> | TreeNode<any>[] | null)} event - Custom selection change event.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeNodeSelectEvent} event - Node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeNodeUnSelectEvent} event - Node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {onNodeContextMenuSelect} event - Node context menu select event.
   * @group Emits
   */
  onNodeContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is double clicked.
   * @param {TreeNodeDoubleClickEvent} event - Node double click event.
   * @group Emits
   */
  onNodeDoubleClick = new EventEmitter();
  /**
   * Callback to invoke when a node is dropped.
   * @param {TreeNodeDropEvent} event - Node drop event.
   * @group Emits
   */
  onNodeDrop = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {TreeLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position changes.
   * @param {TreeScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
   * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Filter template.
   * @group Templates
   */
  filterTemplate;
  /**
   * Node template.
   * @group Templates
   */
  nodeTemplate;
  /**
   * Header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Loader template.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Empty message template.
   * @group Templates
   */
  emptyMessageTemplate;
  /**
   * Toggler icon template.
   * @group Templates
   */
  togglerIconTemplate;
  /**
   * Checkbox icon template.
   * @group Templates
   */
  checkboxIconTemplate;
  /**
   * Loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  filterViewChild;
  scroller;
  wrapperViewChild;
  contentViewChild;
  templates;
  _headerTemplate;
  _emptyMessageTemplate;
  _footerTemplate;
  _loaderTemplate;
  _togglerIconTemplate;
  _checkboxIconTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _filterTemplate;
  onAfterContentInit() {
    if (this.templates.length) {
      this._templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "empty":
          this._emptyMessageTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "togglericon":
          this._togglerIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        default:
          this._templateMap[item.name] = item.template;
          break;
      }
    });
  }
  serializedValue;
  nodeTouched;
  dragNodeTree;
  dragNode;
  dragNodeSubNodes;
  dragNodeIndex;
  dragNodeScope;
  dragHover;
  dragStartSubscription;
  dragStopSubscription;
  _componentStyle = inject(TreeStyle);
  handleDropEvent(event) {
    this.onDrop(event);
  }
  handleDragOverEvent(event) {
    this.onDragOver(event);
  }
  handleDragEnterEvent() {
    this.onDragEnter();
  }
  handleDragLeaveEvent(event) {
    this.onDragLeave(event);
  }
  constructor(dragDropService) {
    super();
    this.dragDropService = dragDropService;
  }
  onInit() {
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this._filter(value),
        reset: () => this.resetFilter()
      };
    }
    if (this.droppableNodes) {
      this.dragStartSubscription = this.dragDropService.dragStart$.subscribe((event) => {
        this.dragNodeTree = event.tree;
        this.dragNode = event.node;
        this.dragNodeSubNodes = event.subNodes;
        this.dragNodeIndex = event.index;
        this.dragNodeScope = event.scope;
      });
      this.dragStopSubscription = this.dragDropService.dragStop$.subscribe((event) => {
        this.dragNodeTree = null;
        this.dragNode = null;
        this.dragNodeSubNodes = null;
        this.dragNodeIndex = null;
        this.dragNodeScope = null;
        this.dragHover = false;
      });
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.value) {
      this.updateSerializedValue();
      if (this.hasFilterActive()) {
        this._filter(this.filterViewChild?.nativeElement?.value);
      }
    }
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  updateSerializedValue() {
    this.serializedValue = [];
    this.serializeNodes(null, this.getRootNode(), 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (R(eventTarget, "p-tree-toggler") || R(eventTarget, "p-tree-toggler-icon")) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        node.style = "--p-focus-ring-color: none;";
        return;
      } else {
        if (!node.style?.includes("--p-focus-ring-color")) {
          node.style = node.style ? `${node.style}--p-focus-ring-color: var(--primary-color)` : "--p-focus-ring-color: var(--primary-color)";
        }
      }
      if (this.hasFilteredNodes()) {
        node = this.getNodeWithKey(node.key, this.filteredNodes);
        if (!node) {
          return;
        }
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown) this.propagateDown(node, false);
          else this.selection = this.selection.filter((val, i) => i != index);
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          if (this.propagateSelectionDown) this.propagateDown(node, true);
          else this.selection = [...this.selection || [], node];
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else {
        let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
        if (metaSelection) {
          let metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(null);
            } else {
              this.selection = this.selection.filter((val, i) => i != index);
              this.selectionChange.emit(this.selection);
            }
            this.onNodeUnselect.emit({
              originalEvent: event,
              node
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = !metaKey ? [] : this.selection || [];
              this.selection = [...this.selection, node];
              this.selectionChange.emit(this.selection);
            }
            this.onNodeSelect.emit({
              originalEvent: event,
              node
            });
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection = null;
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = node;
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          } else {
            if (selected) {
              this.selection = this.selection.filter((val, i) => i != index);
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = [...this.selection || [], node];
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          }
          this.selectionChange.emit(this.selection);
        }
      }
    }
    this.nodeTouched = false;
  }
  onNodeTouchEnd() {
    this.nodeTouched = true;
  }
  onNodeRightClick(event, node) {
    if (this.contextMenu) {
      let eventTarget = event.target;
      if (eventTarget.className && eventTarget.className.indexOf("p-tree-toggler") === 0) {
        return;
      } else {
        let index = this.findIndexInSelection(node);
        let selected = index >= 0;
        if (!selected) {
          if (this.isSingleSelectionMode()) this.selectionChange.emit(node);
          else this.selectionChange.emit([node]);
        }
        this.contextMenu.show(event);
        this.onNodeContextMenuSelect.emit({
          originalEvent: event,
          node
        });
      }
    }
  }
  onNodeDblClick(event, node) {
    this.onNodeDoubleClick.emit({
      originalEvent: event,
      node
    });
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.isSingleSelectionMode()) {
        let areNodesEqual = this.selection.key && this.selection.key === node.key || this.selection == node;
        index = areNodesEqual ? 0 : -1;
      } else {
        for (let i = 0; i < this.selection.length; i++) {
          let selectedNode = this.selection[i];
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
  syncNodeOption(node, parentNodes, option, value) {
    const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
    if (_node) {
      _node[option] = value || node[option];
    }
  }
  hasFilteredNodes() {
    return this.filter && this.filteredNodes && this.filteredNodes.length;
  }
  hasFilterActive() {
    return this.filter && this.filterViewChild?.nativeElement?.value.length > 0;
  }
  getNodeWithKey(key, nodes) {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }
  propagateUp(node, select) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (let child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }
      if (select && selectedCount == node.children.length) {
        this.selection = [...this.selection || [], node];
        node.partialSelected = false;
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection = this.selection.filter((val, i) => i != index);
          }
        }
        if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;
        else node.partialSelected = false;
      }
      this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }
  propagateDown(node, select) {
    let index = this.findIndexInSelection(node);
    if (select && index == -1) {
      this.selection = [...this.selection || [], node];
    } else if (!select && index > -1) {
      this.selection = this.selection.filter((val, i) => i != index);
    }
    node.partialSelected = false;
    this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode == "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode == "multiple";
  }
  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode == "checkbox";
  }
  isNodeLeaf(node) {
    return node.leaf == false ? false : !(node.children && node.children.length);
  }
  getRootNode() {
    return this.filteredNodes ? this.filteredNodes : this.value;
  }
  getTemplateForNode(node) {
    if (this._templateMap) return node.type ? this._templateMap[node.type] : this._templateMap["default"];
    else return null;
  }
  onDragOver(event) {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      event.dataTransfer.dropEffect = "copy";
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.droppableNodes) {
      event.preventDefault();
      let dragNode = this.dragNode;
      if (this.isSameTreeScope(this.dragNodeScope)) {
        return;
      }
      if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
        let dragNodeIndex = this.dragNodeIndex;
        this.value = this.value || [];
        if (this.validateDrop) {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex,
            accept: () => {
              this.processTreeDrop(dragNode, dragNodeIndex);
            }
          });
        } else {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex
          });
          this.processTreeDrop(dragNode, dragNodeIndex);
        }
      }
    }
  }
  processTreeDrop(dragNode, dragNodeIndex) {
    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
    this.value.push(dragNode);
    this.dragDropService.stopDrag({
      node: dragNode
    });
  }
  onDragEnter() {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      this.dragHover = true;
    }
  }
  onDragLeave(event) {
    if (this.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > parseInt(rect.left) + rect.width || event.x < parseInt(rect.left) || event.y > parseInt(rect.top) + rect.height || event.y < parseInt(rect.top)) {
        this.dragHover = false;
      }
    }
  }
  allowDrop(dragNode, dropNode, dragNodeScope) {
    if (!dragNode) {
      return false;
    } else if (this.isValidDragScope(dragNodeScope)) {
      let allow = true;
      if (dropNode) {
        if (dragNode === dropNode) {
          allow = false;
        } else {
          let parent = dropNode.parent;
          while (parent != null) {
            if (parent === dragNode) {
              allow = false;
              break;
            }
            parent = parent.parent;
          }
        }
      }
      return allow;
    } else {
      return false;
    }
  }
  hasCommonScope(dragScope, dropScope) {
    if (typeof dropScope === "string") {
      if (typeof dragScope === "string") return dropScope === dragScope;
      else if (Array.isArray(dragScope)) return dragScope.indexOf(dropScope) != -1;
    } else if (Array.isArray(dropScope)) {
      if (typeof dragScope === "string") {
        return dropScope.indexOf(dragScope) != -1;
      } else if (Array.isArray(dragScope)) {
        for (let s of dropScope) {
          for (let ds of dragScope) {
            if (s === ds) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  isSameTreeScope(dragScope) {
    return this.hasCommonScope(dragScope, this.draggableScope);
  }
  isValidDragScope(dragScope) {
    let dropScope = this.droppableScope;
    if (dropScope) {
      return this.hasCommonScope(dragScope, dropScope);
    } else {
      return true;
    }
  }
  _filter(value) {
    let filterValue = value;
    if (filterValue === "") {
      this.filteredNodes = null;
    } else {
      this.filteredNodes = [];
      const searchFields = this.filterBy.split(",");
      const filterText = X(filterValue).toLocaleLowerCase(this.filterLocale);
      const isStrictMode = this.filterMode === "strict";
      for (let node of this.value) {
        let copyNode = __spreadValues({}, node);
        let paramsWithoutNode = {
          searchFields,
          filterText,
          isStrictMode
        };
        if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
          this.filteredNodes.push(copyNode);
        }
      }
    }
    this.updateSerializedValue();
    this.onFilter.emit({
      filter: filterValue,
      filteredValue: this.filteredNodes
    });
  }
  /**
   * Resets filter.
   * @group Method
   */
  resetFilter() {
    this.filteredNodes = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  /**
   * Scrolls to virtual index.
   * @param {number} number - Index to be scrolled.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller?.scrollToIndex(index);
  }
  /**
   * Scrolls to virtual index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  }
  isFilterMatched(node, params) {
    let {
      searchFields,
      filterText,
      isStrictMode
    } = params;
    let matched = false;
    for (let field of searchFields) {
      let fieldValue = X(String(p(node, field))).toLocaleLowerCase(this.filterLocale);
      if (fieldValue.indexOf(filterText) > -1) {
        matched = true;
      }
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        searchFields,
        filterText,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  getIndex(options, index) {
    const getItemOptions = options["getItemOptions"];
    return getItemOptions ? getItemOptions(index).index : index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onDestroy() {
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragStopSubscription) {
      this.dragStopSubscription.unsubscribe();
    }
  }
  static ɵfac = function Tree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tree)(ɵɵdirectiveInject(TreeDragDropService, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Tree,
    selectors: [["p-tree"]],
    contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
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
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyMessageTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.togglerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkboxIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Tree_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c14, 5);
        ɵɵviewQuery(_c15, 5);
        ɵɵviewQuery(_c16, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function Tree_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function Tree_drop_HostBindingHandler($event) {
          return ctx.handleDropEvent($event);
        })("dragover", function Tree_dragover_HostBindingHandler($event) {
          return ctx.handleDragOverEvent($event);
        })("dragenter", function Tree_dragenter_HostBindingHandler() {
          return ctx.handleDragEnterEvent();
        })("dragleave", function Tree_dragleave_HostBindingHandler($event) {
          return ctx.handleDragLeaveEvent($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      selectionMode: "selectionMode",
      loadingMode: "loadingMode",
      selection: "selection",
      styleClass: "styleClass",
      contextMenu: "contextMenu",
      draggableScope: "draggableScope",
      droppableScope: "droppableScope",
      draggableNodes: [2, "draggableNodes", "draggableNodes", booleanAttribute],
      droppableNodes: [2, "droppableNodes", "droppableNodes", booleanAttribute],
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      propagateSelectionUp: [2, "propagateSelectionUp", "propagateSelectionUp", booleanAttribute],
      propagateSelectionDown: [2, "propagateSelectionDown", "propagateSelectionDown", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      emptyMessage: "emptyMessage",
      ariaLabel: "ariaLabel",
      togglerAriaLabel: "togglerAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      validateDrop: [2, "validateDrop", "validateDrop", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterInputAutoFocus: [2, "filterInputAutoFocus", "filterInputAutoFocus", booleanAttribute],
      filterBy: "filterBy",
      filterMode: "filterMode",
      filterOptions: "filterOptions",
      filterPlaceholder: "filterPlaceholder",
      filteredNodes: "filteredNodes",
      filterLocale: "filterLocale",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      indentation: [2, "indentation", "indentation", numberAttribute],
      _templateMap: "_templateMap",
      trackBy: "trackBy",
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onNodeContextMenuSelect: "onNodeContextMenuSelect",
      onNodeDoubleClick: "onNodeDoubleClick",
      onNodeDrop: "onNodeDrop",
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange",
      onFilter: "onFilter"
    },
    features: [ɵɵProvidersFeature([TreeStyle, {
      provide: TREE_INSTANCE,
      useExisting: _Tree
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tree
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 7,
    vars: 6,
    consts: [["filter", ""], ["scroller", ""], ["content", ""], ["treeNode", ""], ["loader", ""], ["wrapper", ""], ["emptyFilter", ""], [3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "class", "pt"], [4, "ngIf"], [3, "pBind"], ["data-p-icon", "spinner", "spin", "", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "spinner", "spin", "", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pt", 4, "ngIf"], [3, "pt"], ["pInputText", "", "type", "search", "autocomplete", "off", 3, "keydown.enter", "input", "pAutoFocus", "pt"], ["data-p-icon", "search", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], ["hostName", "tree", 3, "items", "tabindex", "styleClass", "style", "scrollHeight", "itemSize", "lazy", "options", "pt", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], ["hostName", "tree", 3, "onScroll", "onScrollIndexChange", "onLazyLoad", "items", "tabindex", "styleClass", "scrollHeight", "itemSize", "lazy", "options", "pt"], ["role", "tree", 3, "class", "ngClass", "style", "pBind", 4, "ngIf"], ["role", "tree", 3, "ngClass", "pBind"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode", "pt", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode", "pt"], ["role", "tree", 3, "class", "pBind", 4, "ngIf"], ["role", "tree", 3, "pBind"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode", "pt", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode", "pt"], [4, "ngIf", "ngIfElse"]],
    template: function Tree_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Tree_div_0_Template, 3, 5, "div", 7)(1, Tree_ng_container_1_Template, 1, 0, "ng-container", 8);
        ɵɵconditionalCreate(2, Tree_Conditional_2_Template, 1, 4, "ng-container")(3, Tree_Conditional_3_Template, 1, 1, "p-iconfield", 9);
        ɵɵtemplate(4, Tree_ng_container_4_Template, 3, 2, "ng-container", 10)(5, Tree_div_5_Template, 3, 6, "div", 7)(6, Tree_ng_container_6_Template, 1, 0, "ng-container", 8);
      }
      if (rf & 2) {
        let tmp_3_0;
        ɵɵproperty("ngIf", ctx.loading && ctx.loadingMode === "mask");
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate || ctx._headerTemplate);
        ɵɵadvance();
        ɵɵconditional(ctx.filterTemplate || ctx._filterTemplate ? 2 : 3);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", (tmp_3_0 = ctx.getRootNode()) == null ? null : tmp_3_0.length);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.loading && (ctx.getRootNode() == null || ctx.getRootNode().length === 0));
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, Scroller, SharedModule, SearchIcon, SpinnerIcon, InputText, FormsModule, IconField, InputIcon, UITreeNode, AutoFocusModule, AutoFocus, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree, [{
    type: Component,
    args: [{
      selector: "p-tree",
      standalone: true,
      imports: [CommonModule, Scroller, SharedModule, SearchIcon, SpinnerIcon, InputText, FormsModule, IconField, InputIcon, UITreeNode, AutoFocusModule, Bind],
      template: `
        <div [class]="cx('mask')" *ngIf="loading && loadingMode === 'mask'" [pBind]="ptm('mask')">
            <i *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)" [pBind]="ptm('loadingIcon')"></i>
            <ng-container *ngIf="!loadingIcon">
                <svg data-p-icon="spinner" *ngIf="!loadingIconTemplate && !_loadingIconTemplate" spin [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')" />
                <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        @if (filterTemplate || _filterTemplate) {
            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { $implicit: filterOptions }"></ng-container>
        } @else {
            <p-iconfield *ngIf="filter" [class]="cx('pcFilterContainer')" [pt]="ptm('pcFilterContainer')">
                <input
                    #filter
                    [pAutoFocus]="filterInputAutoFocus"
                    pInputText
                    type="search"
                    autocomplete="off"
                    [class]="cx('pcFilterInput')"
                    [attr.placeholder]="filterPlaceholder"
                    (keydown.enter)="$event.preventDefault()"
                    (input)="_filter($event.target?.value)"
                    [pt]="ptm('pcFilterInput')"
                />
                <p-inputicon [pt]="ptm('pcFilterIconContainer')">
                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [class]="cx('filterIcon')" [pBind]="ptm('filterIcon')" />
                    <span *ngIf="filterIconTemplate || _filterIconTemplate" [class]="cx('filterIcon')" [pBind]="ptm('filterIcon')">
                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                    </span>
                </p-inputicon>
            </p-iconfield>
        }

        <ng-container *ngIf="getRootNode()?.length">
            <p-scroller
                #scroller
                *ngIf="virtualScroll"
                [items]="serializedValue"
                [tabindex]="-1"
                [styleClass]="cx('wrapper')"
                [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                [itemSize]="virtualScrollItemSize"
                [lazy]="lazy"
                (onScroll)="onScroll.emit($event)"
                (onScrollIndexChange)="onScrollIndexChange.emit($event)"
                (onLazyLoad)="onLazyLoad.emit($event)"
                [options]="virtualScrollOptions"
                [pt]="ptm('virtualScroller')"
                hostName="tree"
            >
                <ng-template #content let-items let-scrollerOptions="options">
                    <ul
                        *ngIf="items"
                        #content
                        [class]="cx('rootChildren')"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [style]="scrollerOptions.contentStyle"
                        role="tree"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [pBind]="ptm('rootChildren')"
                    >
                        <p-treeNode
                            #treeNode
                            *ngFor="let rowNode of items; let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [level]="rowNode.level"
                            [rowNode]="rowNode"
                            [node]="rowNode.node"
                            [parentNode]="rowNode.parent"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="getIndex(scrollerOptions, index)"
                            [itemSize]="scrollerOptions.itemSize"
                            [indentation]="indentation"
                            [loadingMode]="loadingMode"
                            [pt]="pt"
                        ></p-treeNode>
                    </ul>
                </ng-template>
                <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                    <ng-template #loader let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                    </ng-template>
                </ng-container>
            </p-scroller>
            <ng-container *ngIf="!virtualScroll">
                <div #wrapper [class]="cx('wrapper')" [style.max-height]="scrollHeight" [pBind]="ptm('wrapper')">
                    <ul #content [class]="cx('rootChildren')" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [pBind]="ptm('rootChildren')">
                        <p-treeNode
                            *ngFor="let node of getRootNode(); let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy.bind(this)"
                            [node]="node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="index"
                            [level]="0"
                            [loadingMode]="loadingMode"
                            [pt]="pt"
                        ></p-treeNode>
                    </ul>
                </div>
            </ng-container>
        </ng-container>

        <div [class]="cx('emptyMessage')" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)" [pBind]="ptm('emptyMessage')">
            <ng-container *ngIf="!emptyMessageTemplate && !_emptyMessageTemplate; else emptyFilter">
                {{ emptyMessageLabel }}
            </ng-container>
            <ng-template #emptyFilter *ngTemplateOutlet="emptyMessageTemplate || _emptyMessageTemplate"></ng-template>
        </div>
        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeStyle, {
        provide: TREE_INSTANCE,
        useExisting: Tree
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tree
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: TreeDragDropService,
    decorators: [{
      type: Optional
    }]
  }], {
    value: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    loadingMode: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    draggableScope: [{
      type: Input
    }],
    droppableScope: [{
      type: Input
    }],
    draggableNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    droppableNodes: [{
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
    propagateSelectionUp: [{
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
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    togglerAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    validateDrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterInputAutoFocus: [{
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
    filterOptions: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filteredNodes: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    _templateMap: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onNodeContextMenuSelect: [{
      type: Output
    }],
    onNodeDoubleClick: [{
      type: Output
    }],
    onNodeDrop: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: ["node", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    emptyMessageTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }],
    checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    handleDropEvent: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }],
    handleDragOverEvent: [{
      type: HostListener,
      args: ["dragover", ["$event"]]
    }],
    handleDragEnterEvent: [{
      type: HostListener,
      args: ["dragenter"]
    }],
    handleDragLeaveEvent: [{
      type: HostListener,
      args: ["dragleave", ["$event"]]
    }]
  });
})();
var TreeModule = class _TreeModule {
  static ɵfac = function TreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TreeModule,
    imports: [Tree, SharedModule],
    exports: [Tree, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Tree, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeModule, [{
    type: NgModule,
    args: [{
      imports: [Tree, SharedModule],
      exports: [Tree, SharedModule]
    }]
  }], null, null);
})();

export {
  TreeStyle,
  TreeClasses,
  UITreeNode,
  Tree,
  TreeModule
};
//# sourceMappingURL=chunk-RZUM7X4K.js.map
