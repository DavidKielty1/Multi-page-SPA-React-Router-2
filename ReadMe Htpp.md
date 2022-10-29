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
    npm run build

- - Uploading - -
    React SPA is a 'Static Website' - only comprises HTML, CSS, JS. No server-side code.
    . Require a Static Site Host. Do not need a host which accopmmodates server-side code (NodeJS, PHP etc.)

Why upload as a single-page app (rewrite all URLs to /index.html)?
_Server-side Routing vs. Client-side Routing_
. Request is sent from client(user) to server including URL. Server returns response (production-ready react code) depending on URL in request.
. We do not want this on a SPA, we want the same response HTML, CSS, JS, regardless of what URL/path the user navigated to.
. React and react-router will get feedback(URL) and _then_ deliver the content on the screen. Server needs to ignore path.
. . This needs to be configured. Look up docs for different hosts to see how we can get server to ignore path.
. . . Firebase asks us 'configure as SPA? (rewrite all urls to /index.html). This accomplished the goal of server ignoring URLS.
. . . All server responses will return index.html.

- - Configure Server - -
    Path must be ignored on the server, rewrite to /index.html; SPA.
