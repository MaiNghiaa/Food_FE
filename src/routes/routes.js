import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../Pages/HomePage/LandingPage";
import {
  PATH_ABOUT,
  PATH_HOME,
  PATH_LOGIN,
  PATH_NEWS,
  PATH_PRODUCTS_LIST,
  PATH_REGISTER,
} from "./path";
import LoginPage from "../Pages/LoginPage/LoginPage";
import About from "../Pages/About/About";
import News from "../Pages/News/News";
import ListProducts from "../Pages/ListProducts/ListProducts";
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
        { path: PATH_PRODUCTS_LIST, element: <ListProducts /> },
        { path: PATH_ABOUT, element: <About /> },
        { path: PATH_NEWS, element: <News /> },
        { path: PATH_REGISTER, element: <LoginPage /> },
      ],
    },
  ];

  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(Router);
