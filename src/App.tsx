import { MainPage, SignupPage, LoginPage, ProfilePage } from 'view';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: SignupPage,
  },
  {
    path: '/main-page',
    Component: MainPage
  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '/profile/:id',
    Component: ProfilePage
  }
])

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
}

export default App;
