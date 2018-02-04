import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from './../actions/';


export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  render() {
    console.log(this.props.cheeses);
    const jsxCheeses = this.props.cheeses
      .map((cheese, index) => (
        <li key={index}>{cheese}</li>
      ));
    console.log(jsxCheeses);
    return (
      <ul className="cheese-list">
        {jsxCheeses}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
});

export default connect(mapStateToProps)(CheeseList);
