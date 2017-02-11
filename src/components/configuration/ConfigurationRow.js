import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ConfigurationListRow = ({configuration}) => {
  return (
    <tr>
      <td><Link to={ configuration.path}>{configuration.id}</Link></td>
      <td>{configuration.name}</td>

    </tr>
  );
};

ConfigurationListRow.propTypes = {
  configuration: PropTypes.object.isRequired
};

export default ConfigurationListRow;
