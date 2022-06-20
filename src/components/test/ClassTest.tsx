import React from 'react';

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};

class ClassTest extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };

  handleClick() {
    this.setState(() => ({ ...this.state, count: this.state.count + 1 }));
  }

  componentDidMount() {
    console.log('*********');
    console.log('componentDidMount', this.props, this.state);
    console.log('########');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('*********');
    console.log('componentDidUpdate', this.props, this.state);
    console.log('########');
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return {
      name: 'hello',
    };
  }

  render() {
    console.log('Render');
    return (
      <div className='font-bold'>
        {this.props.message}
        <span className='mx-4'>{this.state.count}</span>
        <button
          className='py-4 px-4 bg-green-400 text-white'
          onClick={() => this.handleClick()}
        >
          Add One
        </button>
      </div>
    );
  }
}

export default ClassTest;
