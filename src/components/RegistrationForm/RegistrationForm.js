import React from 'react';
import { Form, TextInput, TextArea, Select, SelectItem, Button } from 'carbon-components-react';
import '../RegistrationForm/RegistrationForm.scss'

function RegistrationForm() {
  return (
    <div className="RegistrationFormMain">
      <Form>
        <div class="bx--grid">
          <div class="bx--row " style={{marginBottom:'3rem'}}>
            <div class="bx--col">
              <TextInput
              name="txtFirstName"
              helperText="(~100 character count maximum)"
              id="txtFirstName"
              invalidText="Invalid error message."
              labelText="First Name"
              placeholder="Type First Name here!"
            /></div>
            <div class="bx--col">
              <TextInput
                helperText="(~100 character count maximum)"
                id="txtLastName"
                invalidText="Invalid error message."
                labelText="Last Name"
                placeholder="Type Last Name here!"
              />
            </div>
          </div>
          <div class="bx--row " style={{marginBottom:'3rem'}}>
            <div class="bx--col">
              <TextInput
              helperText="(~10 character count maximum)"
              id="txtMobile"
              invalidText="Invalid error message."
              labelText="Mobile Number"
              placeholder="Type Mobile Number here!"
            /></div>
            <div class="bx--col">
              <TextInput
                helperText="(~200 character count maximum)"
                id="txtEmail"
                invalidText="Invalid error message."
                labelText="Email ID"
                placeholder="Type Email ID here!"
              />
            </div>
          </div>
          <div class="bx--row" style={{marginBottom:'3rem'}}>
            <div class="bx--col">
              <TextArea
                cols={50}
                helperText="(~4000 character count maximum)"
                id="txtDescription"
                invalidText="Invalid error message."
                labelText="Description"
                placeholder="Type Description here!"
                rows={2}
              /></div>
          </div>
          <div class="bx--row" style={{marginBottom:'3rem'}}>
            <div class="bx--col">
              <Select
                defaultValue="placeholder-item"
                id="ddlGender"
                invalidText="This is an invalid error message."
                labelText="Select Gender"
              >
                <SelectItem
                  text="Select"
                  value="0"
                />
                <SelectItem
                  text="Male"
                  value="1"
                />
                <SelectItem
                  text="Female"
                  value="2"
                />
                <SelectItem
                  text="Other"
                  value="3"
                />
              </Select>
            </div>
          </div>
          <div class="bx--row" style={{marginBottom:'3rem'}}>
            <div class="bx--col">
              <Button
                kind="primary"
                tabIndex={0}
                type="submit" 
              >
                Submit
            </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )

}
export default RegistrationForm;