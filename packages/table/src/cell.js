export default {
  name: 'ElTableCell',

  render(h) {
    return this.config.column.renderCell.call(
        this.config.renderProxy,
        h,
        {
          row:this.config.row,
          column:this.config.column,
          $index:this.config.$index,
          store: this.store,
          _self: this.config._self
        },
        this.config.columnsHidden
    )
  },

  props: {
    store: {
      required: true
    },
    config: Object
  }
};