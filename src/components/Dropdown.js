import React from 'react';
import {Dropdown as BootstrapDropdown} from "react-bootstrap";


export default class Dropdown extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         choice: this.props.initialChoice
      };

      this.handleChoice = this.handleChoice.bind(this);
      this.renderChoices = this.renderChoices.bind(this);
   }

   handleChoice(choice) {
      this.setState(() => ({choice}));
      this.props.onSelect(choice);
   }

   renderChoices() {
      return Object.keys(this.props.choices).map(key => {
         const {label, __} = this.props.choices[key];

         return (
            <BootstrapDropdown.Item
               key={label}
               onClick={() => this.handleChoice(this.props.choices[key])}>
               {label}
            </BootstrapDropdown.Item>
         )
      });
   }

   render() {
      const {label, _} = this.state.choice;

      return (
         <BootstrapDropdown className="d-inline-block">
            <BootstrapDropdown.Toggle variant="primary">
               {label}
            </BootstrapDropdown.Toggle>

            <BootstrapDropdown.Menu>
               {this.renderChoices()}
            </BootstrapDropdown.Menu>
         </BootstrapDropdown>
      )
   }
}

