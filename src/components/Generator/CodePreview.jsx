import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
  } from "reactstrap";
  
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { useEffect, useState } from "react";
  import { BeatLoader } from "react-spinners";
  
  const CodePreview = ({ apiResponse, loading }) => {
    const [aiResponse, setAIResponse] = useState([]);
  
    useEffect(() => {
      setAIResponse(apiResponse);
    }, [apiResponse]);
  
    const handleCopy = (code) => {
      navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    };
  
    return (
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Code</h3>
            </Col>
            <Col className="text-right" xs="4"></Col>
          </Row>
        </CardHeader>
        <CardBody>
          {loading && <BeatLoader />}
          {aiResponse &&
            aiResponse.map((aiData, index) => (
              <Row key={index} className="mb-4">
                <p>{aiData.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <SyntaxHighlighter
                    language={aiData.language}
                    showLineNumbers={true}
                    customStyle={{
                      padding: "25px",
                      width: "100%",
                      marginRight: "20px",
                    }}
                  >
                    {aiData.code}
                  </SyntaxHighlighter>
                  <ion-icon
                    name="clipboard-outline"
                    size="medium"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCopy(aiData.code)}
                  ></ion-icon>
                </div>
              </Row>
            ))}
        </CardBody>
      </Card>
    );
  };
  
  export default CodePreview;
  