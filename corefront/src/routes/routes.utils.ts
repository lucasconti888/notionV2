export const customMatchRoutes = (
    routePath: string,
    urlPath: string,
    exact = true
  ) => {
    const routeMatcher = new RegExp(
      routePath.replace(/:[^\s/]+/g, "(\\w-]+)").replace(/\//g, "\\/").replace(/\/?$/, "/?") +
        (exact ? "$" : "/?")
    );
    return urlPath.concat("/").match(routeMatcher);
  };

// export const customMatchRoutes = (
//   routePath: string,
//   urlPath: string,
//   exact = true
// ) => {
//   const routeMatcher = new RegExp(
//     routePath.replace(/:[^\s/]+/g, "(\\w-]+)").replace(/\/?*/g, ".*") +
//       (exact ? "/$" : "/")
//   );
//   return urlPath.concat("/").match(routeMatcher);
// };
  