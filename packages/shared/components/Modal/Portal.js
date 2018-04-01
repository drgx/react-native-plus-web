import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
class Portal extends Component {
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.props.selector || document.body,
    );
  }
}

Portal.propTypes ={
  selector: PropTypes.string
}

export default Portal;