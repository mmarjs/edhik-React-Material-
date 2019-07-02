/**
 * currency component
 */
/* eslint-disable */
import React from 'react';

//connect to store
import { connect } from 'react-redux';

class CurrencyIcon extends React.Component {

   render() {
      const { selectedCurrency, currencyUnicode } = this.props;
      return (
         <span>{currencyUnicode[selectedCurrency.unicode]}</span>
      )
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   const { selectedCurrency, currencyUnicode } = appSettings;
   return { selectedCurrency, currencyUnicode }
}

export default connect(mapStateToProps)(CurrencyIcon);