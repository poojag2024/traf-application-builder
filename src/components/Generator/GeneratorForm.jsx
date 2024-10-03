import { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Row, Col} from 'reactstrap';
const GeneratorForm = () => {
    const [uiTheme, setUITheme] = useState('');
    const [uiFramework, setUIFramework] = useState('');
    const [backendFramework, setBackendFramework] = useState('');
    const [database, setDatabase] = useState('');
    const [description, setDescription] = useState('');

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

    const addDescription = (appDescription) => {
        setDescription(appDescription);
    }

    const generateCode = (e) => {
        e.preventDefault();
        // LLM API Call
        console.log({
        description,
        uiTheme,
        uiFramework,
        backendFramework,
        database
        })
    }

    return <Form onSubmit={(e) => generateCode(e)}>
        <Row>
            <Col lg="12">
                <FormGroup>
                    <Label for="descriptionText" className="form-control-label">
                        Application description
                    </Label>
                    <Input
                    id="descriptionText"
                    name="text"
                    type="textarea"
                    placeholder='Generate UI, ask questions, debug, execute code, and much more.'
                    onChange={(e) => addDescription(e.target.value)}
                    className="form-control-alternative"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='theme' className="form-control-label">Select Theme</Label>
                    <Input 
                     className="form-control-alternative"
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
                    <Label htmlFor='UIFramework' className="form-control-label">Select UI framework</Label>
                    <Input 
                    className="form-control-alternative"
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
                    <Label htmlFor='BackendFramework' className="form-control-label">Select Backend framework</Label>
                    <Input
                    className="form-control-alternative"
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
                    <Label htmlFor='databases' className="form-control-label">Select Database</Label>
                    <Input 
                    className="form-control-alternative"
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
            </Col>
        </Row>
    </Form>
}

export default GeneratorForm