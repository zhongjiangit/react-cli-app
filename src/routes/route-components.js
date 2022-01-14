import React from 'react'

const routeComponents = {
    StatePromotion: React.lazy(() =>
        import ('../pages/state-promotion')),
    UseHooks: React.lazy(() =>
        import ('../pages/use-hooks')),
    UseRef: React.lazy(() =>
        import ('../pages/use-ref'))
}

export default routeComponents;