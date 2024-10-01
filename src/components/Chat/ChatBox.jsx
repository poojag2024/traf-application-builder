import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const ChatBox = () => {
  const [uiTheme, setUITheme] = useState('');
  const [uiFramework, setUIFramework] = useState('');
  const [backendFramework, setBackendFramework] = useState('');
  const [database, setDatabase] = useState('');

  const UITheme = [
    {id: "", value: "Select Theme"},
    {id: "Bootstrap", value: "Bootstrap"},
    {id: "Foundation", value: "Foundation"},
    {id: "Material UI", value: "Material UI"}
  ];

  const UIFramework = [
    {id: "", value: "Select UI Framework"},
    {id: "Angular", value: "Angular"},
    {id: "React", value: "React"},
    {id: "Vue", value: "Vue"}
  ];

  const BackendFramework = [
    {id: "", value: "Select Backend Framework"},
    {id: "Node Express", value: "Node Express"},
    {id: "Java Spring boot", value: "Java Spring boot"},
    {id: "PHP Laravel", value: "PHP Laravel"},
    {id: "PHP Yii", value: "PHP Yii"},
    {id: "PHP Symfony", value: "PHP Symfony"}
  ];

  const Databases = [
    {id: "", value: "Select Database"},
    {id: "Oracle", value: "Oracle"},
    {id: "MySQL", value: "MySQL"},
    {id: "MongoDB", value: "MongoDB"}
  ];

  const selectTheme = (theme) => {
    setUITheme(theme);
  };

  const selectUIFramework = (UIFramework) => {
    setUIFramework(UIFramework);
  };

  const selectBackendFramework = (BackendFramework) =>{
    setBackendFramework(BackendFramework);
  }

  const selectDatabase = (db) => {
    setDatabase(db);
  }

  const generateCode = (e) => {
    e.preventDefault();
    // LLM API Call
    console.log({
      uiTheme,
      uiFramework,
      backendFramework,
      database
    })
  }

  return (
    <Form onSubmit={(e) => generateCode(e)}>
      <FormGroup>
        <Label htmlFor='theme'>Select Theme</Label>
        <Input 
          id="selectTheme"
          name="select"
          type="select"
          onChange={(e) => selectTheme(e.target.value)}
        >
          {UITheme.map(theme => 
            <option key={theme.id} value={theme.value}>
              {theme.value}
            </option>
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='UIFramework'>Select UI framework</Label>
        <Input 
          id="selectUIFramework"
          name="select"
          type="select"
          onChange={(e) => selectUIFramework(e.target.value)}
        >
          {UIFramework.map(framework => 
            <option key={framework.id} value={framework.value}>
              {framework.value}
            </option>
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='BackendFramework'>Select Backend framework</Label>
        <Input 
          id="selectBackendFramework"
          name="select"
          type="select"
          onChange={(e) => selectBackendFramework(e.target.value)}
        >
          {BackendFramework.map(framework => 
            <option key={framework.id} value={framework.value}>
              {framework.value}
            </option>
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='databases'>Select Database</Label>
        <Input 
          id="selectDatabase"
          name="select"
          type="select"
          onChange={(e) => selectDatabase(e.target.value)}
        >
          {Databases.map(db => 
            <option key={db.id} value={db.value}>
              {db.value}
            </option>
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        
          <Button color="primary">
            Submit
          </Button>
        
      </FormGroup>
    </Form>
  );
};

export default ChatBox;
