import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';


const SnackBars = (props) => {

    return(
        <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              open={props.open}
              onClose={props.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span>props.massage</span>}
            />
          )
}

export default SnackBars
