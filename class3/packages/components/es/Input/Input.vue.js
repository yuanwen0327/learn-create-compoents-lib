import { defineComponent as m, computed as i, ref as r, openBlock as f, createElementBlock as c, createVNode as V, unref as _ } from "vue";
import { ElInput as b } from "element-plus";
import "element-plus/theme-chalk/src/base.scss";
import "element-plus/theme-chalk/src/input.scss";
const v = { class: "gie-input" }, I = /* @__PURE__ */ m({
  name: "GieInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { expose: n, emit: d }) {
    const t = a, o = i({
      get: () => t.modelValue,
      set: (e) => {
        d("update:modelValue", e);
      }
    }), l = r();
    function p() {
      var e;
      (e = l.value) == null || e.focus();
    }
    return n({
      focus: p
    }), (e, u) => (f(), c("div", v, [
      V(_(b), {
        modelValue: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (s) => o.value = s),
        ref_key: "inputRef",
        ref: l,
        type: "text",
        disabled: t.disabled
      }, null, 8, ["modelValue", "disabled"])
    ]));
  }
});
export {
  I as default
};
