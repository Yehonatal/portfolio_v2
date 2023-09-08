import Header from "./component/Header";

import { Suspense } from "react";
import LazyHero from "./component/Lazy";

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading ... </div>}>
                <LazyHero />
            </Suspense>
        </>
    );
}

export default App;
