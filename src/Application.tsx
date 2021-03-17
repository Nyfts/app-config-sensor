import React from "react";

import AppRoutes from "./routes/app.routes";
import AuthRoutes from "./routes/auth.routes";

import { useAuth } from "./contexts/auth";

const src: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default src;
