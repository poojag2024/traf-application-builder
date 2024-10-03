import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodePreview = () => {
  const [copy,setCopy]=useState(false);

  const codeString = `import React from 'react';
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

export default CodePreview`;

  return (
    <div className="bg-secondary d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-secondary rounded overflow-hidden" style={{ maxWidth: '40rem', minWidth: '25rem' }}>

        <div className='d-flex justify-content-between align-items-center px-4 text-white small'>
          <p className='mb-0 text-sm'> Example-code</p>
          {
            copy?(
              <button className='py-1 inline-flex items-center gap-1'>
              <span className="btn-inner--icon">
              <ion-icon name="checkmark-sharp"></ion-icon>
                    </span>
                    Copied
                    </button>
            ):(
            <button className='py-1 inline-flex items-center gap-1'
            onClick={()=>{
              navigator.clipboard.writeText(codeString);
              setCopy(true);
              setTimeout(()=>{
                setCopy(false);
              },3000)
              }}>
            <span className="btn-inner--icon">
            <ion-icon name="clipboard-outline"></ion-icon>
                  </span>
                  Copy code
                  </button>
            )
          }
         
        </div>
        <SyntaxHighlighter language="jsx" showLineNumbers={true} CodePreview={true}  style={atomOneDarkReasonable} customStyle={{padding:"25px"}}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodePreview