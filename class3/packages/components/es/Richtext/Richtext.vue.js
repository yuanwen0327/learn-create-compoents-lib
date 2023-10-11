import { defineComponent as m, inject as _, ref as s, computed as f, openBlock as h, createElementBlock as v, createElementVNode as x } from "vue";
import { formItemContextKey as V } from "element-plus";
const g = { class: "gie-richtext" }, R = ["innerHTML"], H = /* @__PURE__ */ m({
  name: "GieRichtext",
  __name: "Richtext",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: i }) {
    const o = r, t = _(V), c = s(o.modelValue || ""), a = f({
      get: () => o.modelValue,
      set: (e) => {
        i("update:modelValue", e);
      }
    }), l = s(), u = () => {
      var e, n;
      a.value = ((e = l.value) == null ? void 0 : e.innerHTML) || "", (n = t.validate) == null || n.call(t, "change").catch((p) => console.warn(p));
    }, d = () => {
      var e;
      c.value = a.value, (e = t.validate) == null || e.call(t, "blur").catch((n) => console.warn(n));
    };
    return (e, n) => (h(), v("div", g, [
      x("div", {
        ref_key: "contentRef",
        ref: l,
        innerHTML: c.value,
        contenteditable: "true",
        onInput: u,
        onBlur: d,
        class: "gie-richtext__control"
      }, null, 40, R)
    ]));
  }
});
export {
  H as default
};
