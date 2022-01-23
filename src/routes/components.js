import React from 'react'
import PageWrapper from "../components/PageWrapper";
import { testFunction } from '../e2e'

const routeComponents = {
    StatePromotion: React.lazy(() =>
        import ('../pages/state-promotion')),
    UseHooks: React.lazy(() =>
        testFunction.slowImport(
            import ('../pages/use-hooks'), 2000)),
    UseRef: React.lazy(() =>
        import ('../pages/use-ref'))
}

const routerArray = [{
    path: 'promotion',
    component: props => PageWrapper(routeComponents.StatePromotion, props),
}, {
    path: 'hooks',
    component: props => PageWrapper(routeComponents.UseHooks, props),
}, {
    path: 'ref',
    component: props => PageWrapper(routeComponents.UseRef, props),
}]

export default routerArray