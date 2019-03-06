import React from 'react'
import { connect } from 'react-redux'
import { Snackbar as ISnackbar, SnackbarType } from '../store/snackbar/types'

const colors = {
  [SnackbarType.Success]: 'green',
  [SnackbarType.Warning]: 'orange',
  [SnackbarType.Error]: 'red'
}

const Snackbar: React.FC<{snacks: ISnackbar[]}> = ({snacks}) => {
  return (
    <ul>
    {snacks.map((snack, index) => (
      <li key={index} style={{color: colors[snack.type]}}>
        {snack.message}
      </li>
    ))}
    </ul>
  )
}

export default connect(
  (state: any) => ({
    snacks: state.snackbar
  })
)(Snackbar)
