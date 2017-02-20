import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as emailConfigActions from '../../actions/emailConfigActions';
import EmailConfigForm from './EmailConfigForm';
import toastr from 'toastr';

class EmailPage extends React.Component {
  constructor(props, context) {
    super(props, context);
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

    this.props.actions.loadEmailConfiguration();

  }

  componentWillReceiveProps(nextProps) {
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
    this.setState({saving: true});
    this.props.actions.updateEmailConfig(this.state.emailConfig)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });

  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Email Configuration saved');
    this.context.router.push('/configuration');
  }

  render() {

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

EmailPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let initialemailConfig =

    {
      "emailProvider": "",
      "apiKey": "",
      "fromName": "",
      "fromAddress": ""
    };
  debugger;
  if (state.emailConfig.emailProvider) {
    initialemailConfig = state.emailConfig;
  }
  return {
    emailConfig: initialemailConfig
  };


}

function mapDispatchToProps(dispatch) {
  return {

    actions: bindActionCreators(emailConfigActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailPage);

