import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import { Spinner, Layout } from './components';
const HomePage = React.lazy(() => import('./pages/home'));
const ProductsPage = React.lazy(() => import('./pages/products'));
const TechnologyPage = React.lazy(() => import('./pages/technology'));
const BusinessDetialsPage = React.lazy(() => import(`./pages/businessDetails`));
const BusinessPage = React.lazy(() => import('./pages/business'));
const SupportPage = React.lazy(() => import('./pages/support'));
const FinancePage = React.lazy(() => import('./pages/finance'));
const NewsAndEventsPage = React.lazy(() => import('./pages/news_events'));
const AboutUsPage = React.lazy(() => import('./pages/about_us'));
const ContactPage = React.lazy(() => import('./pages/contact'));

export const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<Spinner>Loading data ...</Spinner>}>
        <Layout>
          <Switch>
            <Route path={ROUTES.PRODUCTS}>
              <ProductsPage />
            </Route>
            <Route path={ROUTES.TECHNOLOGY}>
              <TechnologyPage />
            </Route>
            <Route path={ROUTES.YOUR_BUSINESS_ID}>
              <BusinessDetialsPage />
            </Route>
            <Route path={ROUTES.YOUR_BUSINESS}>
              <BusinessPage />
            </Route>
            <Route path={ROUTES.SUPPORT}>
              <SupportPage />
            </Route>
            <Route path={ROUTES.FINANCE}>
              <FinancePage />
            </Route>
            <Route path={ROUTES.NEWS_EVENTS}>
              <NewsAndEventsPage />
            </Route>
            <Route path={ROUTES.ABOUT_US}>
              <AboutUsPage />
            </Route>
            <Route path={ROUTES.CONTACT}>
              <ContactPage />
            </Route>
            <Route path={ROUTES.HOME}>
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </React.Suspense>
    </Router>
  );
};

export default App;
