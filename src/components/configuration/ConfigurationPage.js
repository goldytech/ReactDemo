import React,{ PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configActions from '../../actions/configurationActions';
import ConfigurationsList from './ConfigurationList';

class ConfigurationPage extends React.Component{
  constructor(props, context){
    super(props,context);
  }


  render() {
    const {configurations} = this.props;

    return (
      <div>
        <h1>Configuration</h1>
        <ConfigurationsList configurations={configurations} />
      </div>
    );
  }
}

ConfigurationPage.propTypes ={
  configurations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    configurations : state.configurations
  };


}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(configActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfigurationPage);



