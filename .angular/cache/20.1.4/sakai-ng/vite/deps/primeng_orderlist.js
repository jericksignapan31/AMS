import {
  DragDropModule,
  Listbox,
  moveItemInArray
} from "./chunk-OTVNW3KW.js";
import "./chunk-NAJOJ7Z3.js";
import "./chunk-ZMJNMRXZ.js";
import "./chunk-GWFFAOPD.js";
import "./chunk-TMHLVPXF.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonModule
} from "./chunk-W4DKXC6N.js";
import "./chunk-E6FPN3HG.js";
import "./chunk-6PBBDZZF.js";
import "./chunk-IYROJ4GS.js";
import "./chunk-ESZ6GHOX.js";
import "./chunk-C5DLRIHR.js";
import "./chunk-LRURT4DZ.js";
import "./chunk-YMTVRPAN.js";
import "./chunk-26TQ5AY7.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-R7JFBUJZ.js";
import {
  Ripple
} from "./chunk-H6WYE3VW.js";
import {
  AngleDoubleDownIcon,
  AngleDoubleUpIcon,
  AngleDownIcon,
  AngleUpIcon
} from "./chunk-DGNGYPKO.js";
import "./chunk-D7BNBSZQ.js";
import {
  BaseComponent
} from "./chunk-UE3YHGFK.js";
import {
  BaseStyle
} from "./chunk-SFZHRILD.js";
import {
  FilterService,
  PrimeTemplate,
  SharedModule
} from "./chunk-YZA7OKIW.js";
import {
  CommonModule,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
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
  inject,
  numberAttribute,
  setClassMetadata,
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
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ONJW5VE5.js";
import "./chunk-YVXMBCE5.js";
import "./chunk-G6ECYYJH.js";
import "./chunk-RTGP7ALM.js";
import "./chunk-ZLMKASLL.js";
import {
  C,
  Kt,
  s3 as s
} from "./chunk-ICG2ZITK.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@primeuix/styles/dist/orderlist/index.mjs
var style = "\n    .p-orderlist {\n        display: flex;\n        gap: dt('orderlist.gap');\n    }\n\n    .p-orderlist .p-listbox {\n        flex: 1 1 auto;\n    }\n\n    .p-orderlist-controls {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: dt('orderlist.controls.gap');\n    }\n";

// node_modules/primeng/fesm2022/primeng-orderlist.mjs
var _c0 = ["item"];
var _c1 = ["empty"];
var _c2 = ["emptyfilter"];
var _c3 = ["filter"];
var _c4 = ["header"];
var _c5 = ["moveupicon"];
var _c6 = ["movetopicon"];
var _c7 = ["movedownicon"];
var _c8 = ["movebottomicon"];
var _c9 = ["filtericon"];
var _c10 = ["listelement"];
var _c11 = (a0, a1, a2) => ({
  $implicit: a0,
  selected: a1,
  index: a2
});
function OrderList__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 13);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "moveupicon");
  }
}
function OrderList_3_ng_template_0_Template(rf, ctx) {
}
function OrderList_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 14);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movetopicon");
  }
}
function OrderList_6_ng_template_0_Template(rf, ctx) {
}
function OrderList_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 15);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movedownicon");
  }
}
function OrderList_9_ng_template_0_Template(rf, ctx) {
}
function OrderList_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movebottomicon");
  }
}
function OrderList_12_ng_template_0_Template(rf, ctx) {
}
function OrderList_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_12_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_ng_container_15_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function OrderList_ng_container_15_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_15_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_15_ng_template_1_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function OrderList_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_15_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function OrderList_ng_container_16_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function OrderList_ng_container_16_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_16_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_ng_container_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_16_ng_template_1_0_Template, 1, 0, null, 17);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const selected_r4 = ctx.selected;
    const index_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c11, option_r3, selected_r4, index_r5));
  }
}
function OrderList_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_16_ng_template_1_Template, 1, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function OrderList_ng_container_17_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function OrderList_ng_container_17_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_17_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_ng_container_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_17_ng_template_1_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyMessageTemplate || ctx_r1._emptyMessageTemplate);
  }
}
function OrderList_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_17_ng_template_1_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function OrderList_ng_container_18_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function OrderList_ng_container_18_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_18_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_ng_container_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_container_18_ng_template_1_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyFilterMessageTemplate || ctx_r1._emptyFilterMessageTemplate);
  }
}
function OrderList_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_18_ng_template_1_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
var classes = {
  root: () => ["p-orderlist p-component"],
  controls: "p-orderlist-controls"
};
var OrderListStyle = class _OrderListStyle extends BaseStyle {
  name = "orderlist";
  theme = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵOrderListStyle_BaseFactory;
    return function OrderListStyle_Factory(__ngFactoryType__) {
      return (ɵOrderListStyle_BaseFactory || (ɵOrderListStyle_BaseFactory = ɵɵgetInheritedFactory(_OrderListStyle)))(__ngFactoryType__ || _OrderListStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _OrderListStyle,
    factory: _OrderListStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListStyle, [{
    type: Injectable
  }], null, null);
})();
var OrderListClasses;
(function(OrderListClasses2) {
  OrderListClasses2["root"] = "p-orderlist";
  OrderListClasses2["controls"] = "p-orderlist-controls";
})(OrderListClasses || (OrderListClasses = {}));
var OrderList = class _OrderList extends BaseComponent {
  /**
   * Text for the caption.
   * @group Props
   */
  header;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Inline style of the list element.
   * @group Props
   */
  listStyle;
  /**
   * A boolean value that indicates whether the component should be responsive.
   * @group Props
   */
  responsive;
  /**
   * When specified displays an input field to filter the items on keyup and decides which fields to search against.
   * @group Props
   */
  filterBy;
  /**
   * Placeholder of the filter input.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
  /**
   * Defines the location of the buttons with respect to the list.
   * @group Props
   */
  controlsPosition = "left";
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Indicates the width of the screen at which the component should change its behavior.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Whether to displays rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
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
   * A list of values that are currently selected.
   * @group Props
   */
  set selection(val) {
    this.d_selection = val;
  }
  get selection() {
    return this.d_selection;
  }
  /**
   * Array of values to be displayed in the component.
   * It represents the data source for the list of items.
   * @group Props
   */
  set value(val) {
    this._value = val;
    if (this.filterValue) {
      this.filter();
    }
  }
  get value() {
    return this._value;
  }
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
   * Used to pass all properties of the ButtonProps to the move top button inside the component.
   * @group Props
   */
  moveTopButtonProps;
  /**
   * Used to pass all properties of the ButtonProps to the move down button inside the component.
   * @group Props
   */
  moveDownButtonProps;
  /**
   * Used to pass all properties of the ButtonProps to the move bottom button inside the component.
   * @group Props
   */
  moveBottomButtonProps;
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selection instance.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when list is reordered.
   * @param {*} any - list instance.
   * @group Emits
   */
  onReorder = new EventEmitter();
  /**
   * Callback to invoke when selection changes.
   * @param {OrderListSelectionChangeEvent} event - Custom change event.
   * @group Emits
   */
  onSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when filtering occurs.
   * @param {OrderListFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilterEvent = new EventEmitter();
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
  listViewChild;
  filterViewChild;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom empty template.
   * @group Templates
   */
  emptyMessageTemplate;
  /**
   * Custom empty filter template.
   * @group Templates
   */
  emptyFilterMessageTemplate;
  /**
   * Custom filter template.
   * @group Templates
   */
  filterTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
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
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  get moveUpAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveUp : void 0;
  }
  get moveTopAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveTop : void 0;
  }
  get moveDownAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveDown : void 0;
  }
  get moveBottomAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveBottom : void 0;
  }
  _componentStyle = inject(OrderListStyle);
  filterOptions;
  d_selection = [];
  movedUp;
  movedDown;
  itemTouched;
  styleElement;
  id = s("pn_id_");
  filterValue;
  visibleOptions;
  _value;
  filterService = inject(FilterService);
  getButtonProps(direction) {
    switch (direction) {
      case "up":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveUpButtonProps);
      case "top":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveTopButtonProps);
      case "down":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveDownButtonProps);
      case "bottom":
        return __spreadValues(__spreadValues({}, this.buttonProps), this.moveBottomButtonProps);
      default:
        return this.buttonProps;
    }
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.responsive) {
      this.createStyle();
    }
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterKeyup(value),
        reset: () => this.resetFilter()
      };
    }
  }
  templates;
  _itemTemplate;
  _emptyMessageTemplate;
  _emptyFilterMessageTemplate;
  _filterTemplate;
  _headerTemplate;
  _moveUpIconTemplate;
  _moveTopIconTemplate;
  _moveDownIconTemplate;
  _moveBottomIconTemplate;
  _filterIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "empty":
          this._emptyMessageTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterMessageTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
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
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onChangeSelection(e) {
    this.d_selection = e.value;
    this.selectionChange.emit(e.value);
    this.onSelectionChange.emit({
      originalEvent: e.originalEvent,
      value: e.value
    });
  }
  onFilterKeyup(event) {
    this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter();
    this.onFilterEvent.emit({
      originalEvent: event,
      value: this.visibleOptions
    });
  }
  filter() {
    let searchFields = this.filterBy.split(",");
    this.visibleOptions = this.filterService.filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this.filterValue = null;
    this.filterViewChild && (this.filterViewChild.nativeElement.value = "");
  }
  isItemVisible(item) {
    if (this.filterValue && this.filterValue.trim().length) {
      for (let i = 0; i < this.visibleOptions.length; i++) {
        if (item == this.visibleOptions[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  isSelected(item) {
    return C(item, this.d_selection) !== -1;
  }
  isEmpty() {
    return this.filterValue ? !this.visibleOptions || this.visibleOptions.length === 0 : !this.value || this.value.length === 0;
  }
  moveUp() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = C(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex - 1];
          this.value[selectedItemIndex - 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedUp = true;
      this.onReorder.emit(this.selection);
    }
    this.listViewChild?.cd?.markForCheck();
  }
  moveTop() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = C(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      setTimeout(() => {
        this.listViewChild.scrollInView(0);
      });
    }
    this.listViewChild?.cd?.markForCheck();
  }
  moveDown() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = C(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex + 1];
          this.value[selectedItemIndex + 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedDown = true;
      this.onReorder.emit(this.selection);
    }
    this.listViewChild?.cd?.markForCheck();
  }
  moveBottom() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = C(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.scrollInView(this.value?.length - 1);
    }
    this.listViewChild?.cd?.markForCheck();
  }
  onDrop(event) {
    let previousIndex = event.previousIndex;
    let currentIndex = event.currentIndex;
    if (previousIndex !== currentIndex) {
      if (this.visibleOptions) {
        if (this.filterValue) {
          previousIndex = C(event.item.data, this.value);
          currentIndex = C(this.visibleOptions[currentIndex], this.value);
        }
        moveItemInArray(this.visibleOptions, event.previousIndex, event.currentIndex);
      }
      moveItemInArray(this.value, previousIndex, currentIndex);
      this.onReorder.emit([event.item.data]);
    }
  }
  onListFocus(event) {
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.onBlur.emit(event);
  }
  getVisibleOptions() {
    return this.visibleOptions && this.visibleOptions.length > 0 ? this.visibleOptions : this.value && this.value.length > 0 ? this.value : null;
  }
  moveDisabled() {
    if (this.disabled || !this.selection.length) {
      return true;
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, "");
        this.styleElement = this.renderer.createElement("style");
        this.renderer.setAttribute(this.styleElement, "type", "text/css");
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = `
                    @media screen and (max-width: ${this.breakpoint}) {
                        .p-orderlist[${this.attrSelector}] {
                            flex-direction: column;
                        }

                        .p-orderlist[${this.attrSelector}] .p-orderlist-controls {
                            padding: var(--content-padding);
                            flex-direction: row;
                        }

                        .p-orderlist[${this.attrSelector}] .p-orderlist-controls .p-button {
                            margin-right: var(--inline-spacing);
                            margin-bottom: 0;
                        }

                        .p-orderlist[${this.attrSelector}] .p-orderlist-controls .p-button:last-child {
                            margin-right: 0;
                        }
                    }
                `;
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  destroyStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.styleElement) {
        this.renderer.removeChild(this.document, this.styleElement);
        this.styleElement = null;
        ``;
      }
    }
  }
  ngOnDestroy() {
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵOrderList_BaseFactory;
    return function OrderList_Factory(__ngFactoryType__) {
      return (ɵOrderList_BaseFactory || (ɵOrderList_BaseFactory = ɵɵgetInheritedFactory(_OrderList)))(__ngFactoryType__ || _OrderList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _OrderList,
    selectors: [["p-orderList"], ["p-orderlist"], ["p-order-list"]],
    contentQueries: function OrderList_ContentQueries(rf, ctx, dirIndex) {
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
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyMessageTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyFilterMessageTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moveUpIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moveTopIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moveDownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moveBottomIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function OrderList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 5);
        ɵɵviewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function OrderList_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-section", "root");
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      header: "header",
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      listStyle: "listStyle",
      responsive: [2, "responsive", "responsive", booleanAttribute],
      filterBy: "filterBy",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      dragdrop: [2, "dragdrop", "dragdrop", booleanAttribute],
      controlsPosition: "controlsPosition",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      breakpoint: "breakpoint",
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      trackBy: "trackBy",
      scrollHeight: "scrollHeight",
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      selection: "selection",
      value: "value",
      buttonProps: "buttonProps",
      moveUpButtonProps: "moveUpButtonProps",
      moveTopButtonProps: "moveTopButtonProps",
      moveDownButtonProps: "moveDownButtonProps",
      moveBottomButtonProps: "moveBottomButtonProps"
    },
    outputs: {
      selectionChange: "selectionChange",
      onReorder: "onReorder",
      onSelectionChange: "onSelectionChange",
      onFilterEvent: "onFilterEvent",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([OrderListStyle]), ɵɵInheritDefinitionFeature],
    decls: 19,
    vars: 48,
    consts: [["listelement", ""], ["header", ""], ["item", ""], ["empty", ""], ["emptyfilter", ""], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "disabled", "buttonProps"], ["data-p-icon", "angle-up", "pButtonIcon", "", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-double-up", "pButtonIcon", "", 4, "ngIf"], ["data-p-icon", "angle-down", "pButtonIcon", "", 4, "ngIf"], ["data-p-icon", "angle-double-down", "pButtonIcon", "", 4, "ngIf"], ["optionLabel", "name", 3, "ngModelChange", "onFocus", "onBlur", "onChange", "onDrop", "multiple", "options", "ngModel", "id", "listStyle", "striped", "tabindex", "ariaLabel", "disabled", "metaKeySelection", "scrollHeight", "autoOptionFocus", "filter", "filterBy", "filterLocale", "filterPlaceHolder", "dragdrop"], [4, "ngIf"], ["data-p-icon", "angle-up", "pButtonIcon", ""], ["data-p-icon", "angle-double-up", "pButtonIcon", ""], ["data-p-icon", "angle-down", "pButtonIcon", ""], ["data-p-icon", "angle-double-down", "pButtonIcon", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function OrderList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div")(1, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveUp());
        });
        ɵɵtemplate(2, OrderList__svg_svg_2_Template, 1, 1, "svg", 6)(3, OrderList_3_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveTop());
        });
        ɵɵtemplate(5, OrderList__svg_svg_5_Template, 1, 1, "svg", 8)(6, OrderList_6_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_7_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveDown());
        });
        ɵɵtemplate(8, OrderList__svg_svg_8_Template, 1, 1, "svg", 9)(9, OrderList_9_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_10_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveBottom());
        });
        ɵɵtemplate(11, OrderList__svg_svg_11_Template, 1, 1, "svg", 10)(12, OrderList_12_Template, 1, 0, null, 7);
        ɵɵelementEnd()();
        ɵɵelementStart(13, "p-listbox", 11, 0);
        ɵɵtwoWayListener("ngModelChange", function OrderList_Template_p_listbox_ngModelChange_13_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.d_selection, $event) || (ctx.d_selection = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onFocus", function OrderList_Template_p_listbox_onFocus_13_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event));
        })("onBlur", function OrderList_Template_p_listbox_onBlur_13_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event));
        })("onChange", function OrderList_Template_p_listbox_onChange_13_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChangeSelection($event));
        })("onDrop", function OrderList_Template_p_listbox_onDrop_13_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDrop($event));
        });
        ɵɵtemplate(15, OrderList_ng_container_15_Template, 3, 0, "ng-container", 12)(16, OrderList_ng_container_16_Template, 3, 0, "ng-container", 12)(17, OrderList_ng_container_17_Template, 3, 0, "ng-container", 12)(18, OrderList_ng_container_18_Template, 3, 0, "ng-container", 12);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("controls"));
        ɵɵattribute("data-pc-section", "controls");
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled())("buttonProps", ctx.getButtonProps("up"));
        ɵɵattribute("aria-label", ctx.moveUpAriaLabel)("data-pc-section", "moveUpButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveUpIconTemplate && !ctx._moveUpIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveUpIconTemplate || ctx._moveUpIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled())("buttonProps", ctx.getButtonProps("top"));
        ɵɵattribute("aria-label", ctx.moveTopAriaLabel)("data-pc-section", "moveTopButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveTopIconTemplate && !ctx._moveTopIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveTopIconTemplate || ctx._moveTopIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled())("buttonProps", ctx.getButtonProps("down"));
        ɵɵattribute("aria-label", ctx.moveDownAriaLabel)("data-pc-section", "moveDownButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveDownIconTemplate && !ctx._moveDownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveDownIconTemplate || ctx._moveDownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled())("buttonProps", ctx.getButtonProps("bottom"));
        ɵɵattribute("aria-label", ctx.moveBottomAriaLabel)("data-pc-section", "moveBottomButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveBottomIconTemplate && !ctx._moveBottomIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveBottomIconTemplate || ctx._moveBottomIconTemplate);
        ɵɵadvance();
        ɵɵproperty("multiple", true)("options", ctx.value);
        ɵɵtwoWayProperty("ngModel", ctx.d_selection);
        ɵɵproperty("id", ctx.id + "_list")("listStyle", ctx.listStyle)("striped", ctx.stripedRows)("tabindex", ctx.tabindex)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("metaKeySelection", ctx.metaKeySelection)("scrollHeight", ctx.scrollHeight)("autoOptionFocus", ctx.autoOptionFocus)("filter", ctx.filterBy)("filterBy", ctx.filterBy)("filterLocale", ctx.filterLocale)("filterPlaceHolder", ctx.filterPlaceholder)("dragdrop", ctx.dragdrop);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.headerTemplate || ctx._headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate || ctx._itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyMessageTemplate || ctx._emptyMessageTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.emptyFilterMessageTemplate || ctx._emptyFilterMessageTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ButtonModule, ButtonDirective, ButtonIcon, Ripple, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, Listbox, FormsModule, NgControlStatus, NgModel, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderList, [{
    type: Component,
    args: [{
      selector: "p-orderList, p-orderlist, p-order-list",
      standalone: true,
      imports: [CommonModule, ButtonModule, Ripple, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, Listbox, FormsModule, SharedModule],
      template: `
        <div [class]="cx('controls')" [attr.data-pc-section]="'controls'">
            <button type="button" [disabled]="moveDisabled()" pButton pRipple (click)="moveUp()" [attr.aria-label]="moveUpAriaLabel" [attr.data-pc-section]="'moveUpButton'" [buttonProps]="getButtonProps('up')">
                <svg data-p-icon="angle-up" *ngIf="!moveUpIconTemplate && !_moveUpIconTemplate" [attr.data-pc-section]="'moveupicon'" pButtonIcon />
                <ng-template *ngTemplateOutlet="moveUpIconTemplate || _moveUpIconTemplate"></ng-template>
            </button>
            <button type="button" [disabled]="moveDisabled()" pButton pRipple (click)="moveTop()" [attr.aria-label]="moveTopAriaLabel" [attr.data-pc-section]="'moveTopButton'" [buttonProps]="getButtonProps('top')">
                <svg data-p-icon="angle-double-up" *ngIf="!moveTopIconTemplate && !_moveTopIconTemplate" [attr.data-pc-section]="'movetopicon'" pButtonIcon />
                <ng-template *ngTemplateOutlet="moveTopIconTemplate || _moveTopIconTemplate"></ng-template>
            </button>
            <button type="button" [disabled]="moveDisabled()" pButton pRipple (click)="moveDown()" [attr.aria-label]="moveDownAriaLabel" [attr.data-pc-section]="'moveDownButton'" [buttonProps]="getButtonProps('down')">
                <svg data-p-icon="angle-down" *ngIf="!moveDownIconTemplate && !_moveDownIconTemplate" [attr.data-pc-section]="'movedownicon'" pButtonIcon />
                <ng-template *ngTemplateOutlet="moveDownIconTemplate || _moveDownIconTemplate"></ng-template>
            </button>
            <button type="button" [disabled]="moveDisabled()" pButton pRipple (click)="moveBottom()" [attr.aria-label]="moveBottomAriaLabel" [attr.data-pc-section]="'moveBottomButton'" [buttonProps]="getButtonProps('bottom')">
                <svg data-p-icon="angle-double-down" *ngIf="!moveBottomIconTemplate && !_moveBottomIconTemplate" [attr.data-pc-section]="'movebottomicon'" pButtonIcon />
                <ng-template *ngTemplateOutlet="moveBottomIconTemplate || _moveBottomIconTemplate"></ng-template>
            </button>
        </div>
        <p-listbox
            #listelement
            [multiple]="true"
            [options]="value"
            [(ngModel)]="d_selection"
            optionLabel="name"
            [id]="id + '_list'"
            [listStyle]="listStyle"
            [striped]="stripedRows"
            [tabindex]="tabindex"
            (onFocus)="onListFocus($event)"
            (onBlur)="onListBlur($event)"
            (onChange)="onChangeSelection($event)"
            [ariaLabel]="ariaLabel"
            [disabled]="disabled"
            [metaKeySelection]="metaKeySelection"
            [scrollHeight]="scrollHeight"
            [autoOptionFocus]="autoOptionFocus"
            [filter]="filterBy"
            [filterBy]="filterBy"
            [filterLocale]="filterLocale"
            [filterPlaceHolder]="filterPlaceholder"
            [dragdrop]="dragdrop"
            (onDrop)="onDrop($event)"
        >
            <ng-container *ngIf="headerTemplate || _headerTemplate">
                <ng-template #header>
                    <ng-template *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-template>
                </ng-template>
            </ng-container>
            <ng-container *ngIf="itemTemplate || _itemTemplate">
                <ng-template #item let-option let-selected="selected" let-index="index">
                    <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, selected: selected, index: index }"></ng-template>
                </ng-template>
            </ng-container>
            <ng-container *ngIf="emptyMessageTemplate || _emptyMessageTemplate">
                <ng-template #empty>
                    <ng-template *ngTemplateOutlet="emptyMessageTemplate || _emptyMessageTemplate"></ng-template>
                </ng-template>
            </ng-container>
            <ng-container *ngIf="emptyFilterMessageTemplate || _emptyFilterMessageTemplate">
                <ng-template #emptyfilter>
                    <ng-template *ngTemplateOutlet="emptyFilterMessageTemplate || _emptyFilterMessageTemplate"></ng-template>
                </ng-template>
            </ng-container>
        </p-listbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OrderListStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    header: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    listStyle: [{
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
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
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
    controlsPosition: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trackBy: [{
      type: Input
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
    selection: [{
      type: Input
    }],
    value: [{
      type: Input
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
    selectionChange: [{
      type: Output
    }],
    onReorder: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    onFilterEvent: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["listelement"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    emptyMessageTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    emptyFilterMessageTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
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
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var OrderListModule = class _OrderListModule {
  static ɵfac = function OrderListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OrderListModule,
    imports: [OrderList, SharedModule],
    exports: [OrderList, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [OrderList, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListModule, [{
    type: NgModule,
    args: [{
      imports: [OrderList, SharedModule],
      exports: [OrderList, SharedModule]
    }]
  }], null, null);
})();
export {
  OrderList,
  OrderListClasses,
  OrderListModule,
  OrderListStyle
};
//# sourceMappingURL=primeng_orderlist.js.map
