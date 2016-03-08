import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ counterActions }, dispatch);
}

function mapStateToProps({ counter }) {
  return { counter };
}

class Grid extends React.Component {
  renderCards(data) {
    return(
      <div>
        <Cards />
      </div>
      );
  }

  render() {
    return (
      <div>
        mothafucka jones

      </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
