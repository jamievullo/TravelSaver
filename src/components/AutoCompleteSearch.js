import React from 'react'
import Form from 'react-bootstrap/Form';


export default class AutoCompleteSearch extends React.Component {
   constructor(props) {
      super(props);

      this.state = { 
         suggestions: [],
         text: ''
      };
   }

   handleChange = (event) => {
      //destructures and sets props for form 
      const { items } = this.props
      const value = event.target.value
      let suggestions = []
      if(value.length > 0) {
         //set regex variable to what input '^' starts with value and case sensitive 'i'
         const regex = new RegExp(`^${value}`, 'i')
         suggestions = items.map(item => item.city).filter(v => regex.test(v))
      }
      this.setState({ 
         suggestions, 
         text: value 
      });
   };

   handleSelect = (value) => {
      this.setState({
         text:value,
         suggestions: []
      })
   };

   renderSuggestions = () => {
      const { suggestions } = this.state
      if(suggestions.length === 0) {
         return null
      }
      return (
         <ul>
            {suggestions.map((item) => <li onClick={() => this.handleSelect(item)}>{item}</li>)}
         </ul>
      )
   }


   render() {
      const { text } = this.state
      return (
         <Form.Control value={text} onChange={this.handleChange} type='text' placeholder="Try 'Scranton'">
            {this.renderSuggestions()}
         </Form.Control>
      );
   }
}
