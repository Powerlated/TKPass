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
      name: "heading",
      component: "Text",
      text: "## Describe in detail why you believe you deserve a Team Kill Pass."
    },
    {
      name: "reason",
      component: "TextField",
      label: "Why?",
      required: true
    },
    {
      name: "email",
      component: "EmailField",
      label: "Email"
    },
    {
      name: "submit",
      component: "ButtonField",
      label: "Submit",
      type: "submit",
      icon: "Send"
    }
  ]
};

class TKPassForm extends React.Component {
  render() {
    return (
      <div className="form-outside">
        <div className="form-container">
          <h1>TK Pass Application Form</h1>
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
