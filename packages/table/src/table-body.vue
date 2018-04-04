<template>
	<table 
		class="el-table__body"
		cellspacing="0"
		cellpadding="0"
		border="0">
		<colgroup>
          <col v-for="col in columns" 
          	:key="col.id"
          	:name="col.id"
          	:width="col.width"/>
        </colgroup>
        <tbody
        	@click="handleClick"
        	@dblclick="handleDoubleClick"
        	@contextmenu="handleContextMenu">
        	<tr v-for="(row,$index) in data"
        		:style="trStyle(row, $index)"
        		:key="trKey(row, $index)"
        		@mouseenter="handleMouseEnter($index)"
        		@mouseleave="handleMouseLeave"
        		:class="trClass(row, $index)"
        		:index="$index">
        		<td v-for="(column,cellIndex) in columns"
        			v-if="getSpan(row, column, $index, cellIndex)"
        			:style="getCellStyle($index, cellIndex, row, column)"
        			:class="getCellClass($index, cellIndex, row, column)"
        			:rowspan="column._rowspan"
        			:colspan="column._colspan"
        			@mouseenter="handleCellMouseEnter($event, row)"
        			@mouseleave="handleCellMouseLeave">
        			<ElTableCell
        				:store="store"
        				:config="config(row,column,$index)"></ElTableCell>
        		</td>
        	</tr>
        </tbody>
	</table>
</template>

<script>
	import { getCell, getColumnByCell, getRowIdentity } from './util';
	import { hasClass, addClass, removeClass } from 'element-ui/src/utils/dom';
	import ElCheckbox from 'element-ui/packages/checkbox';
	import ElTooltip from 'element-ui/packages/tooltip';
	import debounce from 'throttle-debounce/debounce';
	import LayoutObserver from './layout-observer';
	import ElTableCell from './cell';
	
	export default {
	  name: 'ElTableBody',
	
	  mixins: [LayoutObserver],
	
	  components: {
	    ElCheckbox,
	    ElTooltip,
	    ElTableCell
	  },
		
	  props: {
	    store: {
	      required: true
	    },
	    stripe: Boolean,
	    context: {},
	    rowClassName: [String, Function],
	    rowStyle: [Object, Function],
	    fixed: String,
	    highlight: Boolean
	  },
	
	  watch: {
	    'store.states.hoverRow'(newVal, oldVal) {
	      if (!this.store.states.isComplex) return;
	      const el = this.$el;
	      if (!el) return;
	      const tr = el.querySelector('tbody').children;
	      const rows = [].filter.call(tr, row => hasClass(row, 'el-table__row'));
	      const oldRow = rows[oldVal];
	      const newRow = rows[newVal];
	      if (oldRow) {
	        removeClass(oldRow, 'hover-row');
	      }
	      if (newRow) {
	        addClass(newRow, 'hover-row');
	      }
	    },
	    'store.states.currentRow'(newVal, oldVal) {
	      if (!this.highlight) return;
	      const el = this.$el;
	      if (!el) return;
	      const data = this.store.states.data;
	      const tr = el.querySelector('tbody').children;
	      const rows = [].filter.call(tr, row => hasClass(row, 'el-table__row'));
	      const oldRow = rows[data.indexOf(oldVal)];
	      const newRow = rows[data.indexOf(newVal)];
	      if (oldRow) {
	        removeClass(oldRow, 'current-row');
	      } else {
	        [].forEach.call(rows, row => removeClass(row, 'current-row'));
	      }
	      if (newRow) {
	        addClass(newRow, 'current-row');
	      }
	    }
	  },
	
	  computed: {
	    table() {
	      return this.$parent;
	    },
	
	    data() {
	      return this.store.states.data;
	    },
	
	    columnsCount() {
	      return this.store.states.columns.length;
	    },
	
	    leftFixedLeafCount() {
	      return this.store.states.fixedLeafColumnsLength;
	    },
	
	    rightFixedLeafCount() {
	      return this.store.states.rightFixedLeafColumnsLength;
	    },
	
	    leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	
	    rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	
	    columns() {
	      return this.store.states.columns;
	    }
	  },
	
	  data() {
	    return {
	      tooltipContent: ''
	    };
	  },
	
	  created() {
	    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
	  },
	
	  methods: {
	  	
	  	config(row,column,$index){
	  		return {
	  			row,
	  			column,
	  			$index,
	            _self: this.context || this.table.$vnode.context,
	            columnsHidden:this.isColumnHidden($index),
	            renderProxy:this._renderProxy
	  		}
	  	},
	  	
	  	trStyle(row, $index){
	  		return this.rowStyle ? this.getRowStyle(row, $index) : null;
	  	},
	  	
	  	trKey(row, $index){
	  		return this.table.rowKey ? this.getKeyOfRow(row, $index) : $index;
	  	},
	  	
	  	trClass(row, $index){
	  		return [this.getRowClass(row, $index)];
	  	},
	  	
	    getKeyOfRow(row, index) {
	      const rowKey = this.table.rowKey;
	      if (rowKey) {
	        return getRowIdentity(row, rowKey);
	      }
	      return index;
	    },
	
	    isColumnHidden(index) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedLeafCount;
	      } else if (this.fixed === 'right') {
	        return index < this.columnsCount - this.rightFixedLeafCount;
	      } else {
	        return (index < this.leftFixedLeafCount) || (index >= this.columnsCount - this.rightFixedLeafCount);
	      }
	    },
	
	    getSpan(row, column, rowIndex, columnIndex) {
	      let rowspan = 1;
	      let colspan = 1;
	
	      const fn = this.table.spanMethod;
	      if (typeof fn === 'function') {
	        const result = fn({
	          row,
	          column,
	          rowIndex,
	          columnIndex
	        });
	
	        if (Array.isArray(result)) {
	          rowspan = result[0];
	          colspan = result[1];
	        } else if (typeof result === 'object') {
	          rowspan = result.rowspan;
	          colspan = result.colspan;
	        }
	      }
	      if (!rowspan || !colspan) {
	      	return false;
	      }else{
	      	if(rowspan!=1||colspan!=1){
	      		column["_colspan"]=colspan;
	      		column["_rowspan"]=rowspan;
	      	}
	      	return true;
	      }
	    },
	
	    getRowStyle(row, rowIndex) {
	      const rowStyle = this.table.rowStyle;
	      if (typeof rowStyle === 'function') {
	        return rowStyle.call(null, {
	          row,
	          rowIndex
	        });
	      }
	      return rowStyle;
	    },
	
	    getRowClass(row, rowIndex) {
	      const classes = ['el-table__row'];
	
	      if (this.stripe && rowIndex % 2 === 1) {
	        classes.push('el-table__row--striped');
	      }
	      const rowClassName = this.table.rowClassName;
	      if (typeof rowClassName === 'string') {
	        classes.push(rowClassName);
	      } else if (typeof rowClassName === 'function') {
	        classes.push(rowClassName.call(null, {
	          row,
	          rowIndex
	        }));
	      }
	
	      if (this.store.states.expandRows.indexOf(row) > -1) {
	        classes.push('expanded');
	      }
	
	      return classes.join(' ');
	    },
	
	    getCellStyle(rowIndex, columnIndex, row, column) {
	      const cellStyle = this.table.cellStyle;
	      if (typeof cellStyle === 'function') {
	        return cellStyle.call(null, {
	          rowIndex,
	          columnIndex,
	          row,
	          column
	        });
	      }
	      return cellStyle;
	    },
	
	    getCellClass(rowIndex, columnIndex, row, column) {
	      const classes = [column.id, column.align, column.className];
	
	      if (this.isColumnHidden(columnIndex)) {
	        classes.push('is-hidden');
	      }
	
	      const cellClassName = this.table.cellClassName;
	      if (typeof cellClassName === 'string') {
	        classes.push(cellClassName);
	      } else if (typeof cellClassName === 'function') {
	        classes.push(cellClassName.call(null, {
	          rowIndex,
	          columnIndex,
	          row,
	          column
	        }));
	      }
	
	      return classes.join(' ');
	    },
	
	    handleCellMouseEnter(event, row) {
	      const table = this.table;
	      const cell = getCell(event);
	
	      if (cell) {
	        const column = getColumnByCell(table, cell);
	        const hoverState = table.hoverState = {cell, column, row};
	        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
	      }
	
	      // 判断是否text-overflow, 如果是就显示tooltip
	      const cellChild = event.target.querySelector('.cell');
	
	      if (hasClass(cellChild, 'el-tooltip') && cellChild.scrollWidth > cellChild.offsetWidth && this.$refs.tooltip) {
	        const tooltip = this.$refs.tooltip;
	        // TODO 会引起整个 Table 的重新渲染，需要优化
	        this.tooltipContent = cell.textContent || cell.innerText;
	        tooltip.referenceElm = cell;
	        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
	        tooltip.doDestroy();
	        tooltip.setExpectedState(true);
	        this.activateTooltip(tooltip);
	      }
	    },
	
	    handleCellMouseLeave(event) {
	      const tooltip = this.$refs.tooltip;
	      if (tooltip) {
	        tooltip.setExpectedState(false);
	        tooltip.handleClosePopper();
	      }
	      const cell = getCell(event);
	      if (!cell) return;
	
	      const oldHoverState = this.table.hoverState || {};
	      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
	    },
	
	    handleMouseEnter(index) {
	      this.store.commit('setHoverRow', index);
	    },
	
	    handleMouseLeave() {
	      this.store.commit('setHoverRow', null);
	    },
	
	    handleContextMenu(event) {
	      this.handleEvent(event, null, 'contextmenu');
	    },
	
	    handleDoubleClick(event) {
	      this.handleEvent(event, null, 'dblclick');
	    },
	
	    handleClick(event) {
	    	var target=this.getTarget(event.path);
	    	if(target){
	    		let index=parseInt(target.getAttribute("index"));
		    	var row=this.data[index];
				this.store.commit('setCurrentRow', row);
				this.handleEvent(event, row, 'click');
	    	}
	    },
		
		getTarget(path){
			for(let i=0,len=path.length;i<len;i++){
				if(path[i].nodeName&&path[i].nodeName.toLowerCase()=="tr"){
					return path[i];
				}
			}
			return null;
		},
		
	    handleEvent(event, row, name) {
		  if(!row){
	    	var target=this.getTarget(event.path);
	    	if(target){
	    		let index=parseInt(target.getAttribute("index"));
		    	row=this.data[index];
	    	}  
		  }
	      const table = this.table;
	      const cell = getCell(event);
	      let column;
	      if (cell) {
	        column = getColumnByCell(table, cell);
	        if (column) {
	          table.$emit(`cell-${name}`, row, column, cell, event);
	        }
	      }
	      table.$emit(`row-${name}`, row, event, column);
	    },
	
	    handleExpandClick(row, e) {
	      e.stopPropagation();
	      this.store.toggleRowExpansion(row);
	    }
	  }
	};
</script>