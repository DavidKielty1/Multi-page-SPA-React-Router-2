{ Switch, Route, Redirect } from 'react-router-dom'

Nested routes within components; welcome component route -> /welcome, /welcome/new-user

'exact' after Route to take in to consideration exact url path.

{ useParams } from 'react-router-dom' for dynamic routing

      const params = useParams();

      <p>{params.productId}</p>

{ Link } from 'react-douter-dom'

    <Link to="/products/p1">Link text</Link>

    Can use after list elements, also mapable.
