import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../../pages/Login";
import { Logout } from "../../pages/Logout";
import { Register } from "../../pages/Register";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { BlogPost } from "../../pages/BlogPost";
import { Feed } from '../../pages/Feed';
import { AuthLayout } from "../../layouts/Auth";
import { AppLayout } from "../../layouts/App";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='' element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          } />
          <Route path='blog-post/:slug' element={
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}