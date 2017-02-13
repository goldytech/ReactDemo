import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as emailConfigActions from '../../actions/emailConfigActions'

class EmailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    debugger;
    emailConfigActions.loadEmailConfiguration();
  }

  render() {
    const {emailConfig} = this.props;

    return (
      <div>
        <h1> Email Configuration</h1>

      </div>
    );
  }
}
EmailPage.propTypes = {
  emailConfig: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    emailConfig: state.emailConfig
  };


}

function mapDispatchToProps(dispatch) {
  debugger;
  return {

    actions: bindActionCreators(emailConfigActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailPage);

