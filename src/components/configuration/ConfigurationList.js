import React, {PropTypes} from 'react';
import ConfigurationRow from './ConfigurationRow';

const ConfigurationsList = ({configurations}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>

      </tr>
      </thead>
      <tbody>
      {configurations.map(configuration =>
          <ConfigurationRow key={configuration.id} configuration={configuration}/>
      )}
      </tbody>
    </table>
  );
};

ConfigurationsList.propTypes = {
  configurations: PropTypes.array.isRequired
};

export default ConfigurationsList;


