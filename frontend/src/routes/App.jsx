import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@containers/Home';
import Layout from '@components/Layout';
import NotFound from '@containers/NotFound';
import AppContext from '@context/appContext';
import useInitialState from '@hooks/useInitialState';
import { hot } from 'react-hot-loader/root';

const AsyncCheckoutContainer = React.lazy(() => {
  return import('@containers/Checkout');
});

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;

  return (
    <>
      {isEmpty > 0 ? (
        <Suspense fallback={<div>Loading</div>}>
          <AppContext.Provider value={initialState}>
            <BrowserRouter>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/checkout" component={AsyncCheckoutContainer} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default hot(App);
