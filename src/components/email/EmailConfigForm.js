import React from 'react';
import TextInput from '../common/TextInput';
debugger;
const EmailConfigForm = ({emailConfig, onSave, onChange, saving, errors}) => {
  return (
    /* <div>
     <h3>Test</h3>
     <h1>{emailConfig.emailProvider}</h1>
     </div>*/

    <form>
      <TextInput name="emailProviderSettings.emailProvider" label="Email Provider" onChange={onChange}
                 value={emailConfig.emailProvider}/>
      <TextInput name="emailProviderSettings.SendGrid.ApiKey" label="Send Grid Api Key" onChange={onChange}
                 value={emailConfig.emailProviderSettings.SendGrid.ApiKey}/>
      <TextInput name="emailProviderSettings.SendGrid.FromName" label="From Name" onChange={onChange}
                 value={emailConfig.emailProviderSettings.SendGrid.FromName}/>
      <TextInput name="emailProviderSettings.SendGrid.FromAddress" label="From Address" onChange={onChange}
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
