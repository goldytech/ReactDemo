import React from 'react';
import TextInput from '../common/TextInput';
debugger;
const EmailConfigForm = ({emailConfig, onSave, onChange, saving, errors}) => {
  return (

    <form>
      <TextInput name="emailProvider" label="Email Provider" onChange={onChange}
                 value={emailConfig.emailProvider}/>
      <TextInput name="apiKey" label="Send Grid Api Key" onChange={onChange}
                 value={emailConfig.emailProviderSettings.SendGrid.ApiKey}/>
      <TextInput name="fromName" label="From Name" onChange={onChange}
                 value={emailConfig.emailProviderSettings.SendGrid.FromName}/>
      <TextInput name="fromAddress" label="From Address" onChange={onChange}
                 value={emailConfig.emailProviderSettings.SendGrid.FromAddress}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );

};
EmailConfigForm.propTypes = {
  emailConfig: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default EmailConfigForm;
