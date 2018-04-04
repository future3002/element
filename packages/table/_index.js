import ElTableColumn from './src/table-column';
import ElTable from './src/table';
import ElTableCell from './src/cell';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElTable.name, ElTable);
  Vue.component(ElTableColumn.name, ElTableColumn);
  Vue.component(ElTableCell.name, ElTableCell);
};

export { ElTable, ElTableColumn,ElTableCell };
