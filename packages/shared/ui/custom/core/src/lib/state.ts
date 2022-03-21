import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { CustomElement } from './render'

export abstract class CustomState<T> extends CustomElement {
  protected destroy = new Subject<void>()

  private state$: BehaviorSubject<T>
  protected get state(): T {
    return this.state$.getValue()
  }

  constructor(initialState: T) {
    super()
    this.state$ = new BehaviorSubject<T>(initialState)
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    )
  }

  protected setState(newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState,
    })
  }

  abstract disconnectedCallback(): void
}
