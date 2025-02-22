import React, { useEffect, useState } from "react";
import { marked } from 'marked'
function Engine() {

    const defaultMarkdown = `
# Heading 1
    
## Heading 2
    
[Google](https://www.google.com)

\`inline code\`
        
\`\`\`
code block
\`\`\`

- List item
        
> Blockquote
        
![Image](https://via.placeholder.com/150)
        
**Bold text**
        `;
    const [markdown, setMarkdown] = useState(defaultMarkdown)

    function handleChange(event) {
        const data = event.currentTarget
        setMarkdown(data.value)
    }
    const renderMarkdown = () => {
        return { __html: marked(markdown) }
    }
    marked.use({
        breaks: true
    });

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    margin: '25px'
                }}>
                <div className="container1">
                    <h2>Input</h2>
                    <textarea
                        name="textarea"
                        id="editor"
                        value={markdown}
                        onChange={handleChange}
                        placeholder="Enter markdown here..."
                        style={{
                            width: 700,
                            height: 500,
                            resize: false,
                            border: 'none',
                            outline: 'none',
                            border: '2px solid black',
                            padding: '30px'
                        }}
                    >

                    </textarea>
                </div>

                
                <div className="container2"
                    style={{
                        width: 700,
                        height: 500,
                        border: '2px solid black',
                        padding: '30px',
                        marginTop: '28px'
                    }}>
                    <div
                        id="preview"
                        dangerouslySetInnerHTML={renderMarkdown()}
                    />

                </div>
            </div>
        </>
    )
}

export default Engine