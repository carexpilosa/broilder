import React from 'react';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcounter: 0,
      multiInputValues: [],
      searchArray: [],
      list: [
        'Anton Kaiser',
        'Anatoli Sidorov',
        'Bertha',
        'Cord',
        'Conrad',
        'Anna',
        'Selenia',
        'Erhard Müller',
        'Dieter Fischer',
        'Wolfgang Gümpel',
        'Theodor Simons',
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
      ]
    };
  }

  render() {
    return <div className="divStyle}">
      <br/>
      <hr/>
      <br/>
      {
        this.renderMultiple()
      }
    </div>;
  }

  escapeRegExp(str) {
    return str.replace(/[.^$*+?()[{\\|\]-]/g, '\\$&');
  }

  _onChange(e) {
    const value = e.target.value;
    const list = this.state.list; 
    
    const re = new RegExp(this.escapeRegExp(value), 'gi');
    const filtered = list.filter((val, idx) => {
      return val.match(re);
    });
    this.setState({
      searchArray: filtered
    });
    /*const reduced = list.reduce((ze, curVal, curIdx) => {
      if (curVal.match(re)) {
        ze.push(curVal);
      }
      return ze;
    }, []);
    console.log(reduced);*/
  }

  _renderPopup() {
    return <nav role="navigation" aria-label="example with dropdowns">
      <br/><br/><br/><br/>
      Popup:
      <ul className="with-dropdowns">
        <li><a href="#">Home</a></li>
        <li>
          <a href="/about" aria-haspopup="true">About</a>
          <ul aria-hidden="true" aria-label="submenu">
            <li><a href="/about/#who-we-are">Who we are</a></li>
            <li><a href="/about/#what-we-do">What we do</a></li>
            <li><a href="/about/#why">Why</a></li>
          </ul>
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>;
  }

  renderSelectBox() {
    return <div>
      <br/><br/><br/><br/>
      SelectBox:<br/><br/>
      <select multiple tabIntex="-1"
        style={{
          clip: 'rect(0 0 0 0)',
          overflow: 'hidden',
          width: '1px!important'
        }}
      >
        <span>
          <span role="combobox">
            content
          </span>
        </span>
        <option>bla</option>
        <option>ble</option>
        <option>bli</option>
        <option>blo</option>
        <option>blu</option>
      </select>
    </div>;
  }

  renderMultiple() {
    const { list, multiInputValues } = this.state;
    return <div>
      Da geht er:
      <datalist id="myDatalist">
        {
          list.map((entry, idx) => {
            return <option key={idx} value={entry} />;
          })
        }
      </datalist>
      <div>
        <div className="containerDiv">
          {
            multiInputValues.length ?
              multiInputValues.map((val, idx) => {
                return (
                  <span style={{flex: '0 0 150px', padding:  '4px', marginRight: '4px',
                    border: '1px solid black', backgroundColor: '#888888'}}
                    key={idx} id="inputBox">
                      {val}&#160;
                      <span style={{float: 'right', paddingRight: '4px', cursor: 'pointer'}}
                        onClick={ () => this.onX(val) } >
                        X
                      </span>
                  </span>
                );
              })
              : null
          }
          <input style={{flex: '10 10 30px', height: '28px'}}
            type="search" list="myDatalist" onChange={ e => this.multiOnChange(e) }/>
        </div>
      </div>
    </div>;
  }

  onX(val) {
    const newList = this.state.multiInputValues.filter((listVal) => {
      return listVal !== val;
    });
    this.setState({multiInputValues: newList });
  }

  multiOnChange(e)  {
    const val = e.target.value;
    const { multiInputValues, list } = this.state;
    if(list.includes(val) && !multiInputValues.includes(val)) {
      e.target.value = '';
      const newList = [ ...multiInputValues, val ];
      this.setState({multiInputValues: newList });
    }
  }

  renderInputSearch() {
    const { searchArray } = this.state;
    return <div>
      <h3>Sub</h3>
      <a href="#" onClick={() => this.props.callbF()}>callbF</a>
      <input type="search" list="searchList" autoComplete="on" tabIndex="2" 
      placeHolder="schreib was" autoFocus="on" style={{ color: 'red' }}
      onChange={e => this._onChange(e)} />
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

  renderTextField() {
    const { searchArray } = this.state;
    return <div>
      <h3>Sub</h3>
      <a href="#" onClick={() => this.props.callbF()}>callbF</a>
      <input type="text" list="searchList" autoComplete="on" tabIndex="2" 
      placeHolder="schreib was" autoFocus="on" style={{ color: 'red' }}
      onChange={e => this._onChange(e)} />
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
}

export default Sub;