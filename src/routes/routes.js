import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/HomePage/LandingPage";
import { PATH_ABOUT, PATH_HOME, PATH_LOGIN, PATH_PRODUCTS } from "./path";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
export const normalRoutes = [PATH_HOME];
export const authRoutes = [];

const PageLayout = lazy(() => import("../Layouts/Layouts"));

function Router() {
  const location = useLocation();

  const routes = [
    {
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <TransitionGroup>
            <CSSTransition
              key={location.key || ""}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <PageLayout>
                <LandingPage />
              </PageLayout>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      ),
      children: [
        { path: PATH_HOME, element: <LandingPage /> },
        { path: PATH_LOGIN, element: <LoginPage /> },
        { path: PATH_PRODUCTS, element: <Products /> },
        { path: PATH_ABOUT, element: <About /> },
      ],
    },
  ];

  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(Router);
