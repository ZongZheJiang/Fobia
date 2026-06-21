/* empty css                 */
import { Links, Meta, Outlet, Scripts, ScrollRestoration, UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/root.tsx
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
});
//#endregion
export { root_default as default };
