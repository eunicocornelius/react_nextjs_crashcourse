import React from 'react';

class Prices extends React.Component {
  state = {
    currency: 'USD',
  };

  render() {
    const CUR = this.props.bpi[this.state.currency];
    let list = (
      <li className='list-group-item'>
        Bitcoin rate for {CUR.description}{' '}
        <span className='badge badge-primary'>{CUR.code}</span> :{' '}
        <strong>{CUR.rate}</strong>
      </li>
    );
    return (
      <div>
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className='form-control'
        >
          <option value='USD'>USD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
        </select>
        <br />
        <ul className='list-group'>{list}</ul>
      </div>
    );
  }
}

export default Prices;
