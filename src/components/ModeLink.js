import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'



function mapModeLinkDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    }
 }


const ModeLink = (props) =>{
        let {actions, mode, children} = props;
        return (<span className="level" onClick={()=> actions.SetMode(mode)}>{children}</span>);
}

export default connect(null, mapModeLinkDispatchToProps)(ModeLink)