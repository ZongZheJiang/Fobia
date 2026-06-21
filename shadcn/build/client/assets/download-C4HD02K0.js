/* empty css                 */
import { UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/pages/download.tsx
function Download() {
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "title",
				children: "Download Shadcn"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "description",
				children: "You can download the latest version of Shadcn from our official website."
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://shadcn.com/download",
				className: "download-button",
				children: "Download Now"
			})
		]
	});
}
var download_default = UNSAFE_withComponentProps(Download);
//#endregion
export { download_default as default };
