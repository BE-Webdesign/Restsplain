import React, { PropTypes } from 'react'
import { getTypeString, getDefault } from '../../helpers/transform'

const Parameters = ({ args }) => {
  return args && (
    <div className="restsplain-endpoint-parameters">
      <h3>Parameters</h3>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        { Object.keys( args ).map( arg => {
          arg = { name: arg, ...args[arg] }

          return (
            <tr key={arg.name}>
              <td>{arg.name}</td>
              <td>
                <pre><code>{getTypeString(arg)}</code></pre>
              </td>
              <td>
                {arg.required && <p className="restsplain-endpoint-arg-required">Required</p>}
                {getDefault(arg.default) && <p className="restsplain-endpoint-arg-default">Default: <code>{getDefault(arg.default, arg.type)}</code></p>}
                {arg.description && <p className="restsplain-endpoint-arg-description">{arg.description}</p>}
              </td>
            </tr>
          )
        } ) }
        </tbody>
      </table>
    </div>
  )
}

Parameters.proptypes = {
  args: PropTypes.object.isRequired
}

export default Parameters
