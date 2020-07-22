import React, { Component } from "react";
import { connect } from "react-redux";
import Vote from "./vote";
import FrontPage from "./pages/frontpage";
//import { increaseCount, decreaseCount } from "../store/actions";

import "./app.css";

class App extends Component {
  componentDidMount() {
    // make request for saved
    // save to redux
  }

  render() {
    return (
      <div>
        Welcome to Reddit! Frontpage:
        {console.log(<FrontPage />)}
        <FrontPage />
      </div>
    );
  }
}
export default App;

// const App = (props) => {
//   return (
//     <div>
//       <Vote count={this.props.count} />
//     </div>
//   );
// };

// const mapStateToProps = ({ count }) => ({
//   count,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increaseCount: (payload) => dispatch(increaseCount(payload)),
//   decreaseCount: (payload) => dispatch(decreaseCount(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
