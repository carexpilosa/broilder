import React from 'react';

class SearchFieldDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcounter: 0,
      multiInputValues: [],
      arrowmouseDown: false,
      darkVal: '',
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
        'Mark',
        'Eberhard Schmitt-Taler'
      ].sort()
    };
  }

  render() {
    return <div>
      <br/>
      <hr/>
      <br/>
      {
        this.renderMultiple()
      }
    </div>;
  }

  renderMultiple() {
    const { list, multiInputValues } = this.state;
    return <div>
      <div className="multipleDivsContainer">
        {
          multiInputValues.length ?
            multiInputValues.map ((val, idx) => {
              return <span className="choice" key={idx}
                onClick={e => this.onX(e)}>{val}</span>;
            })
            : null
        }
        
        <div className="inputDiv">
          <input type="text" />
          <span className="arrow" onClick={e => this.onArrowClick(e)}>&#x25BC;</span>
          </div>
      </div>
      {
        this.state.arrowmouseDown ?
          <div className="listDiv">
            {
              list.length ?
                <ul> {
                  list.map((val, idx) => {
                    return <li key={idx} onClick={(e) => this.addThis(e)}
                      style={
                        this.state.darkVal === val ?
                          {backgroundColor: 'gray'}
                          : {}
                      }
                      onMouseOver={(e) => this.darker(e)}>{val}</li>;
                  })
                }
                </ul>
                : null
            }
          </div>
          : null
      }
    </div>;
  }

  darker(e) {
    const val = e.target.innerHTML;
    this.setState({darkVal: val});
  }

  addThis(e) {
    const val = e.target.innerHTML;
    const newList = this.state.list.filter(v => v !== val);
    this.setState({
      arrowmouseDown: false,
      list: newList.sort(),
      multiInputValues: [ ...this.state.multiInputValues, val ]
    });
  }

  onArrowClick(e) {
    this.setState({arrowmouseDown: !this.state.arrowmouseDown});
  }

  onX(e) {
    const val = e.target.innerHTML;
    const multiInputValues = this.state.multiInputValues.filter((listVal) => {
      return listVal !== val;
    });
    this.setState({
      multiInputValues: multiInputValues,
      list: [ ...this.state.list, val ].sort()
    });
  }

  multiOnChange(e)  {
    const val = e.target.value;
    const { multiInputValues, list } = this.state;
    if(list.includes(val)) {
      e.target.value = '';
      if(!multiInputValues.includes(val)) {
        const newList = [ ...multiInputValues, val ];
        this.setState({multiInputValues: newList.sort() });
      }
    }
  }
}

export default SearchFieldDiv;