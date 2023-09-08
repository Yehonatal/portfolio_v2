import React from "react";

const LazyHero = React.lazy(() => import("./Hero"));

export default LazyHero;
