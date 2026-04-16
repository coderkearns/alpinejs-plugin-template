//#region src/index.js
function templatePlugin(options = { name: "World" }) {
	return (Alpine) => {
		Alpine.directive("say-hi", (el, { expression }, { evaluate }) => {
			el.textContent = `Hello, ${options.name}!`;
		});
	};
}

//#endregion
export { templatePlugin as default };
//# sourceMappingURL=index.js.map