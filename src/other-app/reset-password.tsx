import React from 'react'

class ResetPassForm extends React.Component<{}, { email: string }> {
    constructor(props: any) {
      super(props);
      this.state = {email: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event: any) {    
        this.setState({email: event.target.value});  
    }
    
    handleSubmit(event: any) {
      console.log('EMail to reset : ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
                Email:
                <input type="email" value={this.state.email} onChange={this.handleChange} />        
            </label>
            <input type="submit" value="Reset" />
        </form>
      );
    }
  }

export default ResetPassForm;