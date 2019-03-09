import React from 'react'
import { connect } from 'react-redux'
import { SnackbarType } from '../store/snackbar/types'
import { RootState } from '../store/types'

const colors = {
  [SnackbarType.Success]: 'green',
  [SnackbarType.Warning]: 'orange',
  [SnackbarType.Error]: 'red'
}

const mapStateToProps = (state: RootState) => ({
  snacks: state.snackbar
})

type Props = ReturnType<typeof mapStateToProps>

const Snackbar: React.FC<Props> = ({snacks}) => {
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

export default connect(mapStateToProps)(Snackbar)
