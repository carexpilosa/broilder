import React from 'react';

class DnD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPos: '0px',
      topPos: '0px',
      dragging: false
    };
    document.addEventListener('mouseup', () => {
      this.setState({dragging: false});
    });
  }

  render() {
    const divStyle = {
      position: 'absolute',
      left: `${this.state.leftPos}px`,
      top: `${this.state.topPos}px`,
      backgroundColor: 'red'
    };
    return <div style={divStyle}
      onMouseDown={e => this.grab(e)} onMouseUp={e => this.release(e)}
      onMouseMove={e => this.move(e)}>
      CONTENT
    </div>;
  }

  grab(e) {
    const leftOff = e.clientX - e.target.offsetLeft;
    const topOff = e.clientY - e.target.offsetTop;
    this.setState({
      dragging: true,
      leftOff,
      topOff,
      leftPos: e.clientX - leftOff,
      topPos: e.clientY - topOff
    });
  }

  release(e) {
    /*this.setState({
      dragging: false,
      leftPos: e.clientX - this.state.leftOff,
      topPos: e.clientY - this.state.topOff
    });*/
  }

  move(e) {
    if (this.state.dragging) {
      this.setState({
        leftPos: e.clientX - this.state.leftOff,
        topPos: e.clientY - this.state.topOff
      });
    }
    
  }
}

export default DnD;