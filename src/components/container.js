import React, { Component } from 'react';
import Message from './message';

export default class Container extends Component {
  constructor(){
    super();
    this.state={value:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.refs.form.onsubmit = () => this.sendMessage();
  }
  sendMessage(){
    this.props.saveMessge(this.state.value);
    this.setState({value: '' });
    return false;
  }
  handleChange(event) {
    this.setState({value: event.target.value });
   }
   handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col s8">
        <h5 style={{fontFamily: 'Titillium Web'}}>Message Board</h5>
        <form ref="form" onSubmit={this.handleSubmit}>
          	<input
              value={this.state.value}
              style={{fontFamily: 'Titillium Web'}}
              onChange={this.handleChange} />
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
        <Message message={this.props} />
      </div>
      </div>
      </div>
    );
  }
}
