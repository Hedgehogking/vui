/*
 * @Author: Zz
 * @Date: 2017-02-09 18:03:18
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-09 22:16:18
 */
import './style/index.less';

export default {
  props: {
    class: {
      type: String,
    },
    style: {
      type: String,
    },
    click: {
      type: Function,
    },
    name: {
      type: String,
      required: true,
    },

  },
  data: function() {
    return {};
  },
  computed: {
    text: {
      get: function() {
        return this.$slots.default.length >= 1 ? this.$slots.default[0] : '';
      }
    },
  },
  methods: {
    _onClick: function(e) {
      if (this.click) {
        this.click(this.name, e);
      }
    },
  },
  render: function(h) {
    let classTmp = 'ant-menu-item';
    if (this.class) {
      classTmp += ` ${this.class}`;
    }
    return (<li class={classTmp} onClick={this._onClick} style={this.style || {}}>{this.text}</li>);
  }
}