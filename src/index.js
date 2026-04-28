/**
 * @typedef {Object} PluginOptions
 * @property {string} [name] - The name to say hi to in `x-say-hi` instances. Defaults to "World".
 */

/**
 * Alpine plugin providing hello world functionality.
 * Provides one directive: `x-say-hi`
 * @param {PluginOptions} [options]
 * @returns {(Alpine: import('alpinejs').Alpine) => void}
 */
export default function templatePlugin(options = { name: "World" }) {
    return (Alpine) => {
        Alpine.directive("say-hi", (el, { expression }, { evaluate }) => {
            el.textContent = `Hello, ${options.name}!`;
        });
    }
}
