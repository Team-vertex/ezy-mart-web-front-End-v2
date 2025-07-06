import publicRoute from "@/configs/routes/publicRoute";
import AppLayout from "@/layouts/AppLayout";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<AppLayout />}>
          {publicRoute.map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
