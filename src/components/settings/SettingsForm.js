import React from 'react';
import TextInput from '../common/TextInput';
debugger;
const SettingsForm = ({settings, onSave, onChange, saving, errors}) => {
  return (

    <form>
      <TextInput name="host" label="Host" onChange={onChange}
                 value={settings.host}/>
      <TextInput name="port" label="Port" onChange={onChange}
                 value={settings.port}/>
      <TextInput name="authHdr" label="Authorization Header" onChange={onChange}
                 value={settings.authHdr}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );

};
SettingsForm.propTypes = {
  settings: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SettingsForm;
