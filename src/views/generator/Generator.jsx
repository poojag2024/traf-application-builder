import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
import Header from "../../components/Headers/Header";
import GeneratorForm from "components/Generator/GeneratorForm";
import CodePreview from "components/Generator/CodePreview";
import { useState } from "react";

const Generator = () => {
    const [showCode, setShowCode] = useState(true);
    const [aiResponse, setAIResponse] = useState([
        {
            type: "UI",
            language: "javascript",
            description: "Frontend code for your application,",
            code: `import React from 'react';
                import SyntaxHighlighter from 'react-syntax-highlighter';
                import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

                const CodePreview = () => {
                const codeString = '(num) => num + 1';
                
                return (
                    <div>
                    <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable}>
                    {codeString}
                    </SyntaxHighlighter>
                    </div>
                )
                }

                export default CodePreview`    	
        },
        {
            type: "UI",
            language: "python",
            description: "Backend code for your application",
            code: `# Python Program to convert temperature in celsius to fahrenheit

            # change this value for a different result
            celsius = 37.5

            # calculate fahrenheit
            fahrenheit = (celsius * 1.8) + 32
            print('%0.1f degree Celsius is equal to %0.1f degree Fahrenheit' %(celsius,fahrenheit))
`    	
        },
        {
            type: "Database",
            language: "oracle",
            description: "Database for your application",
            code: `# Python Program to convert temperature in celsius to fahrenheit

            # change this value for a different result
            celsius = 37.5

            # calculate fahrenheit
            fahrenheit = (celsius * 1.8) + 32
            print('%0.1f degree Celsius is equal to %0.1f degree Fahrenheit' %(celsius,fahrenheit))
`    	
        },
      ]);

    return <>
        <Header />
        <Container className="mt--20" fluid>
            <Row>
            <Col  className="order-xl-1 mb-5 mb-xl-0" xl="4">
            {/* Gen forms goes here */}
                <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                    <Col xs="8">
                        <h3 className="mb-0">Generate</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                    </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <GeneratorForm />
                </CardBody>
                </Card>
            </Col>
            <Col className="order-xl-2" xl="8">
                {/* gen code goes here */}
                {showCode && <CodePreview apiResponse={aiResponse} />}
            </Col>
            </Row>
        </Container>
    </>
}

export default Generator