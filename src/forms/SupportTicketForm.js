import React from "react";
import Component from "mson-react/lib/component";

import "./forms.css";

const definition = {
  component: "Form",
  fields: [
    {
      name: "name",
      label: "In game name",
      component: "TextField",
      required: true
    },
    {
      name: "issue",
      label: "Describe your issue in detail.",
      component: "TextField",
      required: true
    },
    {
      name: "email",
      component: "EmailField",
      label: "Email"
    }
  ]
};

class TKPassForm extends React.Component {
  render() {
    return (
      <div className="form-outside">
        <div className="form-container">
          <h1>Support Ticket Form</h1>
          <Component
            definition={definition}
            onSubmit={({ component }) => {
              alert(JSON.stringify(component.getValues()));
            }}
          />
        </div>
      </div>
    );
  }
}

export default TKPassForm;
