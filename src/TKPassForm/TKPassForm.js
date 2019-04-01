import React from "react";
import Component from "mson-react/lib/component";

import "./TKPassForm.css";

const definition = {
  component: "Form",
  fields: [
    {
      name: "fullName",
      component: "PersonFullNameField",
      required: true
    },
    {
      name: "birthday",
      component: "DateField",
      label: "Birthday",
      required: true
    },
    {
      name: "phone",
      component: "PhoneField",
      label: "Phone"
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
      <div className="tkpassform-outside">
        <div className="tkpassform-container">
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
