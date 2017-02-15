import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as emailConfigActions from '../../actions/emailConfigActions';
import EmailConfigForm from './EmailConfigForm';


class EmailPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    debugger;


    this.state = {
      emailConfig: Object.assign({}, props.emailConfig),
      errors: {},
      saving: false
    };

    this.updateemailConfigState = this.updateemailConfigState.bind(this);
    this.saveEmailConfig = this.saveEmailConfig.bind(this);

  }

  componentDidMount() {
    // raise the action to load email configuration
    debugger;
    this.props.actions.loadEmailConfiguration();


  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.props.emailConfig != nextProps.emailConfig) {
      this.setState({emailConfig: Object.assign({}, nextProps.emailConfig)});
    }
  }

  updateemailConfigState(event) {
    const field = event.target.name;
    let emailConfig = this.state.emailConfig;
    emailConfig[field] = event.target.value;
    return this.setState({emailConfig: emailConfig});
  }

  emailConfigFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.emailConfig.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveEmailConfig(event) {
    event.preventDefault();

  }

  render() {
    debugger;
    const {emailConfig} = this.props;

    return (
      <div>
        <h1> Email Configuration</h1>

        <EmailConfigForm emailConfig={this.state.emailConfig} onChange={this.updateemailConfigState}
                         onSave={this.saveEmailConfig} errors={this.state.errors} saving={this.state.saving}/>
      </div>
    );
  }
}


EmailPage.propTypes = {
  emailConfig: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  let initialemailConfig =
    {
      "emailProviderSettings": {
        "SendGrid": {
          "ApiKey": "",
          "FromName": "",
          "FromAddress": ""
        }
      },
      "emailProvider": ""
    };
  if (state.emailConfig.emailProvider) {
    initialemailConfig = state.emailConfig;
  }
  return {
    emailConfig: initialemailConfig
  };


}

function mapDispatchToProps(dispatch) {
  debugger;
  return {

    actions: bindActionCreators(emailConfigActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailPage);

