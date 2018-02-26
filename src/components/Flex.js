import React from 'react';

class Flex extends React.Component {
  render() {
    return <div className="flexContainer">
      <div style={{backgroundColor: 'red', flex: '0 0 100px'}}>eins</div>
      <div style={{backgroundColor: 'blue', flex: '0 0 100px'}}>drie</div>
      <div style={{backgroundColor: 'orange', flex: '0 0 100px'}}>drie</div>
      <div style={{backgroundColor: 'green', flex: '10 10 400px'}}>zwie</div>
    </div>;

  }
}

export default Flex;