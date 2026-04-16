(function() {


//#region src/index.js
	function templatePlugin(options = { name: "World" }) {
		return (Alpine) => {
			Alpine.directive("say-hi", (el, { expression }, { evaluate }) => {
				el.textContent = `Hello, ${options.name}!`;
			});
		};
	}

//#endregion
//#region src/cdn.js
	document.addEventListener("alpine:init", () => {
		window.Alpine.plugin(templatePlugin());
	});

//#endregion
})();
//# sourceMappingURL=cdn.js.map