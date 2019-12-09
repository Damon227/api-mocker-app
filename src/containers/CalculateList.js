import { connect } from 'react-redux';
import CalculateList from '../components/CalculateList'

function mapStateToProps(state) {
    return {
      data: state.calculator.data
    };
  }

export default connect(
    mapStateToProps,
)(CalculateList);