export type ElementProps<T = Element> = T & { props: Record<string, any> }

export type ElementData<T = Element> = T & { dataset: Record<string, any> }