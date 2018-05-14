<template>
  <div class="el-table"
    :class="[{
      'el-table--fit': fit,
      'el-table--striped': stripe,
      'el-table--border': border || isGroup,
      'el-table--hidden': isHidden,
      'el-table--group': isGroup,
      'el-table--fluid-height': maxHeight,
      'el-table--scrollable-x': layout.scrollX,
      'el-table--scrollable-y': layout.scrollY,
      'el-table--enable-row-hover': !store.states.isComplex,
      'el-table--enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
    }, tableSize ? `el-table--${ tableSize }` : '']"
    @mouseleave="handleMouseLeave($event)">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div
      v-if="showHeader"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__header-wrapper"
      ref="headerWrapper">
      <table-header
        ref="tableHeader"
        :store="store"
        :border="border"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }">
      </table-header>
    </div>
    <div
      class="el-table__body-wrapper"
      ref="bodyWrapper"
      :class="[layout.scrollX ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
      :style="[bodyHeight]">
      <table-body
        :context="context"
        :store="store"
        :stripe="stripe"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :highlight="highlightCurrentRow"
        :style="{
           width: bodyWidth
        }">
      </table-body>
      <div
        v-if="!data || data.length === 0"
        class="el-table__empty-block"
        ref="emptyBlock"
        :style="{
          width: bodyWidth
        }">
        <span class="el-table__empty-text">
          <slot name="empty">{{ emptyText || t('el.table.emptyText') }}</slot>
        </span>
      </div>
      <div
        v-if="$slots.append"
        class="el-table__append-wrapper"
        ref="appendWrapper">
        <slot name="append"></slot>
      </div>
    </div>
    <div class="el-table__body-scrollbar" ref="scrollBar" :style="[bodyHeight]">
	  	<div class="scroll_block" @mousedown="mouseDown"></div>
	  </div>
    <div
      v-if="showSummary"
      v-show="data && data.length > 0"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__footer-wrapper"
      ref="footerWrapper">
      <table-footer
        :store="store"
        :border="border"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }">
      </table-footer>
    </div>
    <div
      v-if="fixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed"
      ref="fixedWrapper"
      :style="[{
        width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
      },
      fixedHeight]">
      <div
        v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="fixedHeaderWrapper" >
        <table-header
          ref="fixedTableHeader"
          fixed="left"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="fixedBodyWrapper"
        :style="[{
          top: layout.headerHeight + 'px'
        },
        fixedBodyHeight]">
        <table-body
          fixed="left"
          :store="store"
          :stripe="stripe"
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :style="{
            width: bodyWidth
          }">
        </table-body>
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{
            height: layout.appendHeight + 'px'
          }"></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="fixedFooterWrapper">
        <table-footer
          fixed="left"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-footer>
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed-right"
      ref="rightFixedWrapper"
      :style="[{
        width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
        right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
      },
      fixedHeight]">
      <div v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="rightFixedHeaderWrapper">
        <table-header
          ref="rightFixedTableHeader"
          fixed="right"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="rightFixedBodyWrapper"
        :style="[{
          top: layout.headerHeight + 'px'
        },
        fixedBodyHeight]">
        <table-body
          fixed="right"
          :store="store"
          :stripe="stripe"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{
            width: bodyWidth
          }">
        </table-body>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="rightFixedFooterWrapper">
        <table-footer
          fixed="right"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-footer>
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      class="el-table__fixed-right-patch"
      ref="rightFixedPatch"
      :style="{
        width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight + 'px'
      }"></div>
    <div class="el-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
  </div>
</template>

<script type="text/babel">
  import ElCheckbox from 'element-ui/packages/checkbox';
  import debounce from 'throttle-debounce/debounce';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import Mousewheel from 'element-ui/src/directives/mousewheel';
  import Locale from 'element-ui/src/mixins/locale';
  import Migrating from 'element-ui/src/mixins/migrating';
  import TableStore from './table-store';
  import TableLayout from './table-layout';
  import TableBody from './table-body';
  import TableHeader from './table-header';
  import TableFooter from './table-footer';

  let tableIdSeed = 1;

  export default {
    name: 'ElTable',

    mixins: [Locale, Migrating],

    directives: {
      Mousewheel
    },

    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },
      
      size: String,
      
      rowEdit: {
      	type: Array,
      	default: function() {
          return [];
        }
      },
      
      rowEdit: {
      	type: Array,
      	default: function() {
          return [];
        }
      },
      
      selected:{
      	type: Array,
      	default: function() {
          return [];
        }
      },
      
      total:{
      	type: Number,
      	default: function() {
          return this.data.length;
        }
      },
      
      simulate:{
      	type: Boolean,
      	default: true
      },

      width: [String, Number],

      height: [String, Number],

      maxHeight: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },
			
      stripe: Boolean,

      border: Boolean,

      rowKey: [String, Function],

      context: {},

      showHeader: {
        type: Boolean,
        default: true
      },
			
			isClearSel: {
				type: Boolean,
        default: true
			},
			
      showSummary: Boolean,

      sumText: String,

      summaryMethod: Function,

      rowClassName: [String, Function],

      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,

      currentRowKey: [String, Number],

      emptyText: String,

      expandRowKeys: Array,

      defaultExpandAll: Boolean,

      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,

      selectOnIndeterminate: {
        type: Boolean,
        default: true
      }
    },

    components: {
      TableHeader,
      TableFooter,
      TableBody,
      ElCheckbox
    },

    methods: {
      getMigratingConfig() {
        return {
          events: {
            expand: 'expand is renamed to expand-change'
          }
        };
      },

      setCurrentRow(row) {
        this.store.commit('setCurrentRow', row);
      },

      toggleRowSelection(row, selected) {
        this.store.toggleRowSelection(row, selected);
        this.store.updateAllSelected();
      },

      toggleRowExpansion(row, expanded) {
        this.store.toggleRowExpansion(row, expanded);
      },

      clearSelection() {
        this.store.clearSelection();
      },

      clearFilter() {
        this.store.clearFilter();
      },

      clearSort() {
        this.store.clearSort();
      },

      handleMouseLeave() {
        this.store.commit('setHoverRow', null);
        if (this.hoverState) this.hoverState = null;
      },

      updateScrollY() {
        this.layout.updateScrollY();
      },

      handleFixedMousewheel(event, data) {
        const bodyWrapper = this.bodyWrapper;
        if (Math.abs(data.spinY) > 0) {
          const currentScrollTop = bodyWrapper.scrollTop;
          if (data.pixelY < 0 && currentScrollTop !== 0) {
            event.preventDefault();
          }
          if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
            event.preventDefault();
          }
          bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
        } else {
          bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
        }
      },

      handleHeaderFooterMousewheel(event, data) {
        const { pixelX, pixelY } = data;
        if (Math.abs(pixelX) >= Math.abs(pixelY)) {
          event.preventDefault();
          this.bodyWrapper.scrollLeft += data.pixelX / 5;
        }
      },

      bindEvents() {
        const { headerWrapper, footerWrapper } = this.$refs;
        const refs = this.$refs;
        let self = this;

        this.bodyWrapper.addEventListener('scroll', function() {
          if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
          if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
          if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
          const maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
          const scrollLeft = this.scrollLeft;
          if (scrollLeft >= maxScrollLeftPosition) {
            self.scrollPosition = 'right';
          } else if (scrollLeft === 0) {
            self.scrollPosition = 'left';
          } else {
            self.scrollPosition = 'middle';
          }
        });

        if (this.fit) {
          addResizeListener(this.$el, this.resizeListener);
        }
      },

      resizeListener() {
        if (!this.$ready) return;
        let shouldUpdateLayout = false;
        const el = this.$el;
        const { width: oldWidth, height: oldHeight } = this.resizeState;

        const width = el.offsetWidth;
        if (oldWidth !== width) {
          shouldUpdateLayout = true;
        }

        const height = el.offsetHeight;
        if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
          shouldUpdateLayout = true;
        }

        if (shouldUpdateLayout) {
          this.resizeState.width = width;
          this.resizeState.height = height;
          this.doLayout();
        }
      },

      doLayout() {
        this.layout.updateColumnsWidth();
        if (this.shouldUpdateHeight) {
          this.layout.updateElsHeight();
        }
        this.$nextTick(() => {
          this.scrollBarSet();
        });
      },
      
      scrollBarSet(){
      	var scrollBar=this.$refs.scrollBar;
      	if(scrollBar){
      		var body=this.bodyWrapper,table=body.querySelector(".el-table__body");
      		var bar=scrollBar.children.item(0);
      		if(body.offsetHeight>=table.offsetHeight){
      			scrollBar.style.display="none";
      			bar.style.top="";
      			bar.style.height="";
      			this.adjust(0);
      		}else{
      			scrollBar.style.display="block";
      			var height=(body.offsetHeight*scrollBar.offsetHeight)/table.offsetHeight;
      			if(height<20){
      				height=20;
      			}
      			bar.style.height=height+"px";
      			this.scrollHeight=scrollBar.offsetHeight;
      			this.tableHeight=table.offsetHeight+8;
        		this.barHeight=height;
        		var top=bar.style.top;
        		if(top){
        			top=parseFloat(top.replace("px",""));
        			if((top+height)>this.scrollHeight){
        				top=this.scrollHeight-height;
        			}
        		}else{top=0;}
        		this.adjust(top);
      		}
      	}
      },
      
      mouseDown(e){
      	this.isDrag=true;
  			this.pageY=e.pageY;
  			if(e.stopPropagation) e.stopPropagation();
		    e.cancelBubble=true;
		    e.returnValue=false;
		    return false;
      },
      
      mouseMove(event){
	  		if(this.isDrag){
	  			var tar=this.$refs.scrollBar.children.item(0);
	  			var mv=event.pageY-this.pageY;
	  			var top=tar.style.top;
	  			if(top){
						top=parseFloat(top.replace("px",""));
						if((mv+this.barHeight+top)>this.scrollHeight){mv=this.scrollHeight-this.barHeight;}else if((mv+top)<0){mv=0;}else{mv=top+mv;}
					}else{
						if((mv+this.barHeight)>this.scrollHeight){mv=this.scrollHeight-this.barHeight;}else if(mv<0){mv=0;}
					}
					this.adjust(mv);
	  			this.pageY=event.pageY;
	  			if(!this.simulate){//不可分页
	  				this.$emit('bar-scroll',event,mv,this.barHeight);
	  			}
	  			if(event.stopPropagation) event.stopPropagation();
			    if(event.preventDefault) event.preventDefault();
			    event.cancelBubble=true;
			    event.returnValue=false;
			    return false;
	  		}
      },
      
      adjust(mv){
      	if(typeof mv=='number'){
      		var tar=this.$refs.scrollBar.children.item(0);
	      	var table=this.bodyWrapper.querySelector(".el-table__body");
	      	tar.style.top=mv+"px";
	      	//到了这里mv代表的就是新的top属性  这是常规算法
					table.style.marginTop=-(mv*(this.tableHeight-this.scrollHeight))/(this.scrollHeight-this.barHeight)+"px";
      	}
      },
      
      mouseUp(e){
      	if(this.isDrag){
					this.isDrag = false;
					if (e.stopPropagation) e.stopPropagation();
					e.cancelBubble = true;
					e.returnValue = false;
					return false;  
			  }
      },
      
      mouseLeave(event){
      	this.isDrag=false;
      },
      
      mouseWeel(event){
      	event = event || window.event;
      	var tar=this.bodyWrapper;
      	var target=event.target;
      	if(tar.contains(target)){
      		var scrollBar=this.$refs.scrollBar;
      		var bar=scrollBar.children.item(0);
					var resize=this.simulate?1:(100/this.total);
      		var top=bar.style.top,step=(100*this.scrollHeight*resize)/this.tableHeight;
      		if(scrollBar.style.display!="none"){
      			top=parseFloat(top.replace("px",""));
	      		if (event.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件    
	            //当滑轮向上滚动时
	            if (event.wheelDelta > 0) {
	            	if((top-step)<=0){
	            		this.adjust(0);
	            	}else{
	            		this.adjust(top-step);
	            	}
	            	if(top>0){
	            		if(event.stopPropagation) event.stopPropagation();
							    if(event.preventDefault) event.preventDefault();
							    event.cancelBubble=true;
							    event.returnValue=false;
							    return false;
	            	}
	            }
	            //当滑轮向下滚动时  
	            if (event.wheelDelta < 0) {
	            	if((top+step+this.barHeight)>=this.scrollHeight){
	            		this.adjust(this.scrollHeight-this.barHeight);
	            	}else{
	            		this.adjust(top+step);
	            	}
	            	if((top+this.barHeight)<(this.scrollHeight-0.01)){
	            		if(event.stopPropagation) event.stopPropagation();
							    if(event.preventDefault) event.preventDefault();
							    event.cancelBubble=true;
							    event.returnValue=false;
							    return false;
	            	}
	            }
		        } else if (event.detail) {  //Firefox滑轮事件  
	            if (event.detail< 0) {
	            	if((top-step)<=0){
	            		this.adjust(0);
	            	}else{
	            		this.adjust(top-step);
	            	}
	            	if(top>0){
	            		if(event.stopPropagation) event.stopPropagation();
							    if(event.preventDefault) event.preventDefault();
							    event.cancelBubble=true;
							    event.returnValue=false;
							    return false;
	            	}
	            }
	            if (event.detail> 0) {
	            	if((top+step+this.barHeight)>=this.scrollHeight){
	            		this.adjust(this.scrollHeight-this.barHeight);
	            	}else{
	            		this.adjust(top+step);
	            	}
	            	if((top+this.barHeight)<this.scrollHeight){
	            		if(event.stopPropagation) event.stopPropagation();
							    if(event.preventDefault) event.preventDefault();
							    event.cancelBubble=true;
							    event.returnValue=false;
							    return false;
	            	}
	            }
		        }
      		}
      	}
      }
    },

    created() {
      this.tableId = 'el-table_' + tableIdSeed++;
      this.debouncedUpdateLayout = debounce(50, () => this.doLayout());
    },

    computed: {
      tableSize() {
        return this.size || (this.$ELEMENT || {}).size;
      },

      bodyWrapper() {
        return this.$refs.bodyWrapper;
      },

      shouldUpdateHeight() {
        return this.height ||
          this.maxHeight ||
          this.fixedColumns.length > 0 ||
          this.rightFixedColumns.length > 0;
      },

      selection() {
        return this.store.states.selection;
      },

      columns() {
        return this.store.states.columns;
      },

      tableData() {
        return this.store.states.data;
      },

      fixedColumns() {
        return this.store.states.fixedColumns;
      },

      rightFixedColumns() {
        return this.store.states.rightFixedColumns;
      },

      bodyWidth() {
        const { bodyWidth, scrollY, gutterWidth } = this.layout;
        return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
      },

      bodyHeight() {
        if (this.height) {
          return {
            height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          return {
            'max-height': (this.showHeader
              ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight
              : this.maxHeight - this.layout.footerHeight) + 'px'
          };
        }
        return {};
      },

      fixedBodyHeight() {
        if (this.height) {
          return {
            height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          let maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }

          maxHeight -= this.layout.footerHeight;

          return {
            'max-height': maxHeight + 'px'
          };
        }

        return {};
      },

      fixedHeight() {
        if (this.maxHeight) {
          if (this.showSummary) {
            return {
              bottom: 0
            };
          }
          return {
            bottom: (this.layout.scrollX && this.data.length) ? this.layout.gutterWidth + 'px' : ''
          };
        } else {
          if (this.showSummary) {
            return {
              height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
            };
          }
          return {
            height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
          };
        }
      },
      
      dataDiff(){
      	return null;
      }
    },

    watch: {
      height: {
        immediate: true,
        handler(value) {
          this.layout.setHeight(value);
        }
      },

      maxHeight: {
        immediate: true,
        handler(value) {
          this.layout.setMaxHeight(value);
        }
      },

      currentRowKey(newVal) {
        this.store.setCurrentRowKey(newVal);
      },

      data: {
        immediate: true,
        handler(value) {
          this.store.commit('setData', value);
          if (this.$ready) {
            this.$nextTick(() => {
              this.doLayout();
            });
          }
        }
      },
      
      rowEdit(newVal) {
      	this.store.rowEdit=newVal;
      	if (this.$ready) {
	        this.$nextTick(() => {
	          this.scrollBarSet();
	        });
	      }
      },
      
      selected(newVal) {
      	this.store.states.selection=newVal;
      	this.store.updateAllSelected();
      },
      
      total(newVal){
      	this.store.states.total=newVal;
      },
      
      simulate(newVal){
      	this.store.states.simulate=newVal;
      },

      expandRowKeys: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.store.setExpandRowKeys(newVal);
          }
        }
      }
    },

    destroyed() {
      if (this.resizeListener) removeResizeListener(this.$el, this.resizeListener);
    },

    mounted() {
      this.bindEvents();
      this.store.updateColumns();
      this.doLayout();

      this.resizeState = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };

      // init filters
      this.store.states.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          this.store.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true
          });
        }
      });

      this.$ready = true;
      this.$nextTick(function(){
      	this.$nextTick(function(){
		      this.scrollBarSet();
		      if(mouseEvent){
		      	mouseEvent.addEvent(this,this.mouseMove,"mousemove");
			      mouseEvent.addEvent(this,this.mouseUp,"mouseup");
			      mouseEvent.addEvent(this,this.mouseLeave,"mouseleave");
			      mouseEvent.addEvent(this,this.mouseWeel);
		      }
		    });
	    });
    },

    data() {
      const store = new TableStore(this, {
        rowKey: this.rowKey,
        defaultExpandAll: this.defaultExpandAll,
        selectOnIndeterminate: this.selectOnIndeterminate
      });
      store["rowEdit"]=this.rowEdit;
      store.states["clearSel"]=this.isClearSel;
      store.states["total"]=this.total;
      store.states["simulate"]=this.simulate;
      store.states.selection=this.selected;
      const layout = new TableLayout({
        store,
        table: this,
        fit: this.fit,
        showHeader: this.showHeader
      });
      return {
        layout,
        store,
        isHidden: false,
        renderExpanded: null,
        resizeProxyVisible: false,
        resizeState: {
          width: null,
          height: null
        },
        // 是否拥有多级表头
        isGroup: false,
        scrollPosition: 'left',
        scrollHeight:0,
        tableHeight:0,
        barHeight:0,
        isDrag:false,
        pageY:0
      };
    }
  };
</script>
