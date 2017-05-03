/**
 * Created by lipeishang on 17-5-3.
 */
import { PropTypes } from 'react'

export default PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
})