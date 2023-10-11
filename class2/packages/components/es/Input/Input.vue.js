import { defineComponent as p, computed as c, ref as r, openBlock as f, createElementBlock as m, withDirectives as _, createElementVNode as v, vModelText as V } from "vue";
const x = { class: "gie-input" }, b = ["disabled"], k = /* @__PURE__ */ p({
  name: "GieInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { expose: a, emit: u }) {
    const t = s, o = c({
      get: () => t.modelValue,
      set: (e) => {
        u("update:modelValue", e);
      }
    }), l = r();
    function d() {
      var e;
      (e = l.value) == null || e.focus();
    }
    return a({
      focus: d
    }), (e, n) => (f(), m("div", x, [
      _(v("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (i) => o.value = i),
        ref_key: "inputRef",
        ref: l,
        class: "gie-input__control",
        type: "text",
        disabled: t.disabled
      }, null, 8, b), [
        [V, o.value]
      ])
    ]));
  }
});
export {
  k as default
};
