import React, { Suspense } from 'react';
import Loading from './Loading';

const PageWrapper = (Component, props) => {
    return (
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Component {...props }/>
      </Suspense>
    )
}

export default PageWrapper