import React from 'react';
import { fetchPost } from '../actions/PostActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; // Corrected import: removed { Connect }

const ButtonComponent = (props) => { // Passed props as argument
  return (
    <div>
      <button onClick={() => props.fetchPost()}>Click Me</button> {/* Changed 'this.props' to 'props' */}
    </div>
  );
};

function mapDispatchToProps(dispatch) { // Corrected function name to mapDispatchToProps
  return bindActionCreators({ fetchPost: fetchPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonComponent); // Corrected function name to mapDispatchToProps
