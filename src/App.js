import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header"
import Body  from "./components/Body"
import Footer from "./components/Footer";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import useOnline from "./utils/useOnline";
import { Provider } from "react-redux";
import store from "./utils/store";
import offline from "./assets/offline.svg"
 
const Menu = lazy(()=> import("./components/Menu"));  //this will do lazy-loading / Chunking / Dynamic Bundling / Code Spplitting / Dynamic Importing
const About = lazy(()=> import("./components/About"));

const AppLayout = () =>{

  const isOnline = useOnline();  //971740

      if(! isOnline){
        return <div>
                <img src={offline} alt="offline" width={400} height={400}/>
               <p className="text-9xl font-bold">Oops!</p>
               <p className="text-4xl font-semibold"> It seems that you're offline. Please check your Internet Connection</p>
        </div>
       
      }
  return (
    <Provider store={store}>
    <Auth0Provider
    domain="dev-zvn1lpetooc03mqh.us.auth0.com"
    clientId="D3OgJv60z5qtdxZ5hyuwpAGtutmmwuKn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <>
      <Header/> 
      <Outlet/>
      <Footer/>
    </>
    </Auth0Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
   {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
       {
        path: "/",
        element: <Body/>,
        errorElement: <Error/>
      },
      {
        path: "/about",
        element: <Suspense><About/></Suspense>,
        errorElement: <Error/>,
      },
       {
        path: "/contact",
        element: <ContactUs/>,
        errorElement: <Error/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>,
        errorElement: <Error/>
      },
      {
        path: "/menu", 
        element: <Suspense><Menu/></Suspense>,
        errorElement: <Error/>
      },
      {
        path: "/cart", 
        element: <Cart/>,
        errorElement: <Error/>
      }
    ]
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);