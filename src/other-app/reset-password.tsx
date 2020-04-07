import React from 'react'

class ResetPassForm extends React.Component<{}, { email: string }> {
    constructor(props: any) {
      super(props);
      // this.state = {email: ''};
      this.state = {
        email: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event: any) {    
        this.setState({email: event.target.value});  
    }
    
    handleSubmit(event: any) {
      // console.log(this.state);
      event.preventDefault();

      fetch('http://localhost:4000/reset-password', 
      {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
      }
  
    render() {
      const { email } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
                Email:
                <input type="email" value={email} onChange={this.handleChange} />        
            </label>
            <input type="submit" value="Reset" />
        </form>
      );
    };
  }

export default ResetPassForm;