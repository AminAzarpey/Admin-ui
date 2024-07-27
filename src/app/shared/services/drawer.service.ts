import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  hasFormOpen = false;
  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {}

  private _isOpen = new BehaviorSubject<boolean>(false);

  isOpen$ = this._isOpen.asObservable();

  get isOpen(): boolean {
    return this._isOpen.value;
  }

  open<T>(
    component: Type<T>,
    size: 'md' | 'lg' | 'xl' = 'md',
    position: 'left' | 'right' = 'right',
    injectorData?: {
      [key: string]: unknown;
    },
  ): ComponentRef<T> {
    if (this.isOpen) {
      this.close();
    }

    this._isOpen.next(true);

    const factory = this.resolver.resolveComponentFactory(component);
    const injector = Injector.create({
      providers: [
        {
          provide: 'drawerData',
          useValue: {
            size,
            position,
            component,
            injector: Injector.create({ providers: [] }),
          },
        },
      ],
    });
    this.componentRef = factory.create(injector);
    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as any)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    domElem.classList.add('drawer', size, position, 'open');

    return this.componentRef;
  }

  close() {
    if (
      this.hasFormOpen &&
      !confirm('You have unsaved changes. Do you really want to close?')
    ) {
      return;
    }

    if (this.componentRef) {
      const domElem = (this.componentRef.hostView as any)
        .rootNodes[0] as HTMLElement;
      domElem.classList.remove('open');
      domElem.classList.add('close');
      setTimeout(() => {
        if (this.componentRef) {
          this.appRef.detachView(this.componentRef.hostView);
          this.componentRef.destroy();
          this.componentRef = null;
        }
        this._isOpen.next(false);
      }, 200);
    } else {
      this._isOpen.next(false);
    }
  }
}
