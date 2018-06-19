import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TravelDealsView from './travel-deals.view';
import { exampleAction, exampleAsyncAction } from './travel-deals.reducer';

export function mapStateToProps({ travelDealsReducer }) {
  return {
    exampleVariable: travelDealsReducer.exampleVariable
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      exampleAction,
      exampleAsyncAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelDealsView);