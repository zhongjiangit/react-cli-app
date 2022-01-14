import React from 'react'
import PageWrapper from "../components/PageWrapper";

// 测试组件加载延迟
const slowImport = (value, ms = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    })
}

const routeComponents = {
    StatePromotion: React.lazy(() =>
        import ('../pages/state-promotion')),
    UseHooks: React.lazy(() =>
        slowImport(
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