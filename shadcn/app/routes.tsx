// app/routes.ts
import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  // index() defines the "/" route
  index("pages/home.tsx"), 

  // route() defines other paths
  route("download", "pages/download.tsx"),
] satisfies RouteConfig;