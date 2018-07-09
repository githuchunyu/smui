import Vue from 'vue';
import indicatorTem from './indicator.vue'

const Indicator = Vue.extend(indicatorTem);
let instance;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        // el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.vm = instance.$mount();
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.icon = options.icon==undefined?'spinner':options.icon;
    document.body.appendChild(instance.vm.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
    }
  }
};