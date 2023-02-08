import {Routes, Route, useRoutes} from "react-router-dom";
import { Home } from "../pages/Home";
import { Album } from "../pages/Album";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
  // return useRoutes([
  //   {path: "/", element: <Home />},
  //   {path: "/album/:id", element: <Album />},
  //   {path: "/photo/:id", element: <Photo />}
  // ]);

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/photo/:id" element={<Photo />} />
        
        {/* <Route path="/private" element={<RequireAuth><About/></RequireAuth>} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  )
}
