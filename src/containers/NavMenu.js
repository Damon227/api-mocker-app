import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";

const mapStateToProps = state => {
  return {
    collapsed: state.navMenu.collapsed
  };
};

export default connect(mapStateToProps)(NavMenu);
