import Container from './Container/Container';
import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import AppBar from './AppBar';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  function MissingRoute() {
    if (isLoggedIn) {
      return <Navigate to="/contacts" />;
    }
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="*" element={<MissingRoute />} />
              <Route path="/" element={<HomeView />} />
              <Route
                path="/register"
                restricted
                element={
                  !isLoggedIn ? <RegisterView /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="/login"
                restricted
                element={
                  !isLoggedIn ? <LoginView /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="/contacts"
                element={
                  isLoggedIn ? <ContactsView /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
      <ToastContainer />
    </Container>
  );
}
