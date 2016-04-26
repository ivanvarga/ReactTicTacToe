import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'



function mapModeLinkDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    }
 }


class ModeLink extends React.Component{
    render(){
        let {actions, mode, children} = this.props;
        return (<span className="level" onClick={()=> actions.SetMode(mode)}>{children}</span>);
    }
}

export default connect(null, mapModeLinkDispatchToProps)(ModeLink)