import PageWrapper from "../components/PageWrapper";
import routeComponents from "./route-components";

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