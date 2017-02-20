import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as settingsActions from '../../actions/settingsActions';
import SettingsForm from './SettingsForm';
import toastr from 'toastr';

class SettingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      settings: Object.assign({}, props.settings),
      errors: {},
      saving: false
    };

    this.updateSettingsState = this.updateSettingsState.bind(this);
    this.saveSettings = this.saveSettings.bind(this);

  }

  updateSettingsState(event) {
    debugger;
    const field = event.target.name;
    let settings = this.state.settings;
    settings[field] = event.target.value;
    return this.setState({settings: settings});
  }

  saveSettings(event) {
    event.preventDefault();
    this.setState({saving: true});
    debugger;
    this.props.actions.saveSettings(this.state.settings)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });

  }

  redirect() {
    debugger;
    this.setState({saving: false});
    toastr.success('Settings saved');
    //this.context.router.push('/configuration');
  }


  render() {
    debugger;
    return (
      <div>
        <h1>API Settings </h1>

        <SettingsForm settings={this.state.settings} onChange={this.updateSettingsState}
                      onSave={this.saveSettings} errors={this.state.errors} saving={this.state.saving}/>
      </div>
    );
  }

}

SettingsPage.propTypes = {
  settings: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    settings: state.settings
  };


}

function mapDispatchToProps(dispatch) {
  return {

    actions: bindActionCreators(settingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);


