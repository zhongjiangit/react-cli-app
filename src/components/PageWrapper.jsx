import React, { Suspense } from 'react';
import Loading from './Loading';

const PageWrapper = (Component, props) => {
    return (
      <Suspense
        fallback={
          <div>
            <Loading tip="Loading..." />
          </div>
        }
      >
        <Component {...props }/>
      </Suspense>
    )
}

export default PageWrapper