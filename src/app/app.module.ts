import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { NoContentComponent } from './no-content';

// hello
import {HelloWorldComponent} from "./hello/hello.component";

// Nested
import {NestedParentComponent} from "./nested-component/parent.component";
import {NestedChildComponent} from "./nested-component/child.component";
import {NestedGrandsonComponent} from "./nested-component/grandson.component";
import {ParentToChildInputComponent} from "./parent-to-child-input/parent-to-child-input.compontent";
import {ChildInputComponent} from "./parent-to-child-input/child-input.component";
import {AppParentToChildInputsComponent} from "./parent-to-child-input/app-parent-to-child-inputs.compontent";
import {ChildInputsComponent} from "./parent-to-child-input/child-inputs.component";
import {ChildToParentComponent} from "./child-to-parent/child-to-parent.component";
import {ChildComponent} from "./child-to-parent/child.component";
import {ViewChildComponent, ItemComponent, Item} from "./viewchild/viewchild.component";
import {ViewChildrenComponent, ChildCmp} from "./viewchild/viewchildren.component";
import {ContentChildComp, ButtonGroup, GroupTitle, ChildButtonCmp} from "./viewchild/contentchild.component";
import {ContentChildrenComp, WordGroup, Word} from "./viewchild/contentchildren.component";
import {HelloService} from "./hello-service/hello.service";
import {HelloComponent} from "./hello-service/hello.component";
import {SecondChild} from "./import-service/parent.service";
import {Parent} from "./oop-service/parent.service";
import {OopComponent} from "./oop-service/oop.component";
import {User} from "./mock/user";
import {MockComponent} from "./mock/mock.component";
import {PromiseModule} from "./promise/promise.module";
import {ListComponent} from "./promise/list.component";
import {PromiseComponent} from "./promise/promise.component";

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NoContentComponent,
        ListComponent,
        PromiseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {}

    hmrOnInit(store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
          let restoreInputValues = store.restoreInputValues;
          setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues  = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}

