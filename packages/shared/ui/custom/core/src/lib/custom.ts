import BoundTemplate from './template/bound';
import { noop } from './noop';

export type CustomOptions<T> = {
  name: `${string}-${string}`;
  html?: HTMLTemplateElement;
  style?: HTMLStyleElement;
  mode?: ShadowRootInit['mode'];
  extends?: keyof HTMLElementTagNameMap;
  handler?: (element: T) => void;
};

export function Custom<T>(options: CustomOptions<T>) {
  const { name, html, style, mode = 'open' } = options;
  return function <T extends CustomElementConstructor>(target: T) {
    const connected = target.prototype.connectedCallback ?? noop;

    target.prototype.connectedCallback = function () {
      const shadow: ShadowRoot | HTMLElement = !options.extends
        ? (this.attachShadow({ mode }) as ShadowRoot)
        : (this as HTMLElement);

      if (style) shadow.appendChild(style);

      if (html) {
        const bound = new BoundTemplate(html);
        const [instance, bindings] = bound.create(this);

        target.prototype.bind = (data: T) => {
          bindings.setData(data);
        };
        target.prototype.swap = (name: string, value: any) => {
          bindings.set(name, value);
        };

        shadow.appendChild(instance);
      }

      connected.call(this);
    };

    if (options.extends) {
      customElements.define(name, target, { extends: options.extends });
    } else {
      customElements.define(name, target);
    }
  };
}
