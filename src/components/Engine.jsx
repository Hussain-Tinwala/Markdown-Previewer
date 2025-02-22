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
            <div className="container font-mono flex border-2 h-1/3 max-h-screen gap-10 p-[20px] m-10 mx-auto mb-0  bg-transparent w-300 rounded-lg shadow-lg shadow-blue-500/50 ring-1"
                            
            // style={{
            //     display: 'flex',
            //     gap: '10px',
            //     margin: '25px'
            // }}
            >
                <div className="container1 m-3 p-5 w-1/2 h-120 border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900"
                    >
                    <h2 className="border-2 bg-[#172554] text-white rounded-md

h-8 ">Input</h2>
                    <textarea
                        name="textarea"
                        id="editor"
                        value={markdown}
                        onChange={handleChange}
                        placeholder="Enter markdown here..."
                        className="w-full h-96 m-2 mx-auto p-2"

                    // style={{
                    //     width: 700,
                    //     height: 500,
                    //     resize: false,
                    //     border: 'none',
                    //     outline: 'none',
                    //     border: '2px solid black',
                    //     padding: '30px'
                    // }}
                    >

                    </textarea>
                </div>


                <div className="container2 m-3 p-5 w-1/2 h-120 border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900"
                
                // style={{
                //     width: 700,
                //     height: 500,
                //     border: '2px solid black',
                //     padding: '30px',
                //     marginTop: '28px'
                // }}
                >
                    <h2 className="border-2 bg-[#172554] text-white rounded-md

h-8">Preview</h2>
                    <div
                        id="preview"
                        className="w-full h-96 m-2 p-4 prose"
                        dangerouslySetInnerHTML={renderMarkdown()}
                    />


                </div>
            </div>
        </>
    )
}

export default Engine