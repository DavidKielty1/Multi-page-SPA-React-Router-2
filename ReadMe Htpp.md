Added 2folders use-http.js reducer, as well as api.js firebase fetch requests.

_Deploying React Apps_

Test code,
Optimize,
Build,
Upload,

- - Optimize - -
    import React, { Suspense } from "react";
    . Performance improvements using React Memo to avoid unnecessary component render cycles.
    . _Lazy loading_ instead. Load code only when needed.
    . Easy to implement when using Routing. Route code information only downloaded when route visited.
    . Import React to use React.lazy()
    . . . const NewQuote = React.lazy(() => import("./pages/NewQuote"));
    . Wrap Routes in <Suspense> tag.
    . . . fallback prop required in Suspense tag.

- - Build - -
