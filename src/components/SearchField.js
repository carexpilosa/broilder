import React from 'react';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcounter: 0,
      searchArray: []
    };
  }

  render() {
    const { searchArray } = this.state;
    return <div>
      <h3>Sub</h3>
      <a href="#" onClick={() => this.props.callbF()}>callbF</a>
      <input type="search" list="searchList" autoComplete="on" tabIndex="2" 
      placeHolder="schreib was" autoFocus="on" style={{ color: 'red' }}
      onChange=
      {
        e => this._onChange(e)
        //e => this.props.callbF(e)
        //console.log(this.props)
        } />
      {
        searchArray.length ?
          <div>
            <datalist id="searchList">
            {
              searchArray.map((entry, idx) => {
                return <option key={idx} value={entry} />;
              })
            }
            </datalist>
          </div>
          : null
      }
    </div>;
  }

  escapeRegExp(str) {
    return str.replace(/[.^$*+?()[{\\|\]-]/g, '\\$&');
  }

  _onChange(e) {
    const value = e.target.value;
    const list = [
      'Anton Kaiser',
      'Anatoli Sidorov',
      'Bertha',
      'Cord',
      'Conrad',
      'Anna',
      'Selenia',
      'Erhard Müller',
      'Günter Müller',
      'Werner',
      'Michael Kunze',
      'Rainer',
      'Bernhard',
      'Julian Genten',
      'Norbert',
      'Yüksel',
      'Egbert',
      'Heike',
      'Joachim',
      'Dirk',
      'Mark'
    ];
    const re = new RegExp(this.escapeRegExp(value), 'gi');
    const filtered = list.filter((val, idx) => {
      return val.match(re);
    });
    this.setState({
      searchArray: filtered
    });
    const reduced = list.reduce((ze, curVal, curIdx) => {
      if (curVal.match(re)) {
        ze.push(curVal);
      }
      return ze;
    }, []);
  }
}

export default Sub;