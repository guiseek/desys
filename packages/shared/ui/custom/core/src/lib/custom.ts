import BoundTemplate from './template/bound'
import { noop } from './noop'

export type CustomOptions<T> = {
  name: string
  html?: HTMLTemplateElement
  style?: HTMLStyleElement
  mode?: ShadowRootInit['mode']
  handler?: (element: T) => void
}

export function Custom<T>(options: CustomOptions<T>) {
  const { name, html, style, mode = 'open' } = options
  return function <T extends CustomElementConstructor>(target: T) {
    const connected = target.prototype.connectedCallback ?? noop

    target.prototype.connectedCallback = function () {
      const shadow: ShadowRoot = this.attachShadow({ mode })
      if (style) shadow.appendChild(style)

      if (html) {
        const bound = new BoundTemplate(html)
        const [instance, bindings] = bound.create(this)

        target.prototype.bind = (data: T) => {
          bindings.setData(data)
        }
        target.prototype.swap = (name: string, value: any) => {
          bindings.set(name, value)
        }

        shadow.appendChild(instance)
      }

      connected.call(this)
    }

    customElements.define(name, target)
  }
}
