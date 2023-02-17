import React from 'react'
import {Helmet} from "react-helmet";

function Meta({head}) {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{head}</title>
        </Helmet>
    </div>
  )
}

export default Meta