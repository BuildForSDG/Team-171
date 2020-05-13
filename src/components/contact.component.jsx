import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('/hire')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { data } = this.state;
    let mydata;
    if (data == null) {
      mydata = 'null';
    } else {
      mydata = data.message;
    }
    return (
      <div className="home">
        <h1>Contact</h1>
        <h3>{ mydata }</h3>
      </div>
    );
  }
}

export default Contact;
