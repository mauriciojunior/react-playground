'use strict'

import React from 'react'
import { Link } from 'react-router'

const Examples = () => (
  <div>
    <h1 className='text-center page-title'>Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
      </li>
      <li>
        <Link to='/?location=Rio de Janeiro'>Rio de Janeiro, BR</Link>
      </li>
    </ol>
  </div>
)

export default Examples
