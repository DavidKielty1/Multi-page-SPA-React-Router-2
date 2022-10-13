Adding query paramater values into URL, e.g. sorting by ascending '/quotes?sort=asc' with useHistory, history.push

{ useLocation } from 'react-router-dom' gives us information about the currently loaded URL page.
. . . . const location = useLocation();

new URLSearchParams() default JS constructor function/class built into the browser

Changing URL and text on screen isSortedAscending();

A lot of jiggery pockery was done with sortedQuotes() to sort quotes on screen.

Nested Routes - see quote detail comments route. Conditionally render components based on url/route. <Route path={.../quoteId}>

.

.

.

.

.

Adding Layout and Navigation layer

import {useHistory} from 'react-router-dom' to redicrect programmatically.

      const history = useHistory();

      history.push('/quotes')

Add a not found page in <Route/> with
. <Route path="*">
. . <NotFound />
. </Route>

import { Prompt } from 'react-router-dom' to prompt users whether they are sure they want to navigate away
from a webpage after having started filling out a form.

      Wrap component in Fragment, have prompt adjacent to component,
      <Prompt
        when={isEntering} (//state which confirms user has started using form//)
        message={(location) =>
          "Are you sure you want to leave? All entered data will be lost."
        }
      />

      Remember to add a onClick function at button to setIsEntering(false) so the prompt does not appear when the form has been submitted.
      Must be before submitHandlerFunction

.

.

.

.

.

.

.

.

{ Switch, Route, Redirect } from 'react-router-dom'

Nested routes within components; welcome component route -> /welcome, /welcome/new-user

'exact' after Route to take in to consideration exact url path.

{ useParams } from 'react-router-dom' for dynamic routing

      const params = useParams();

      <p>{params.productId}</p>

{ Link } from 'react-douter-dom'

    <Link to="/products/p1">Link text</Link>

    Can use after list elements, also mapable.
