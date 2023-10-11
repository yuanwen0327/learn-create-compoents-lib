const e = (o, s) => {
  if (o.install = (l) => {
    for (const t of [o, ...Object.values(s ?? {})])
      l.component(t.name, t);
  }, s)
    for (const [l, t] of Object.entries(s))
      o[l] = t;
  return o;
}, n = (o = []) => ({
  // version,
  install: (l) => {
    console.log(o), o.forEach((t) => l.use(t));
  }
});
export {
  n as makeInstaller,
  e as withInstall
};
