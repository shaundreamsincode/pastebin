import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const Document = () => {
    const [documentBody, setDocumentBody] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const slug = window.location.href.split("slug=")[1];
        axios.get(`/api/v1/documents?slug=${slug}`).then((response) => {
            setDocumentBody(response.data.body)
        }).catch((error) => {
            setErrorMessage("Could not find document.")
        })
    }, [0]);


    if (errorMessage) {
        return(<div>{errorMessage}</div>)
    } else {
        return(
            <div>
            {
                !documentBody && <div> Loading</div>
            }

            {
                documentBody
            }
           </div>
        )
    }
}

export default Document;

// const Pastebin = () => {
//     const [body, setBody] = useState("");
//     const [documentSlug, setDocumentSlug] = useState("");
//
//     const onSubmit = () => {
//         const url = `/api/v1/documents`;
//         axios.post(
//             url,
//             {body: body},
//             {headers: {"Access-Control-Allow-Origin": "*" }}
//         ).then((response) => {
//             setDocumentSlug(response.data.slug);
//         })
//     }
//
//     const onBodyChange = (event) => {
//         setBody(event.target.value);
//     }
//
//     return(<div className="pastebin">
//         <h1>
//             Pastebin
//         </h1>
//
//         {
//             !!documentSlug && <div>
//                 Document successfully created.  Document ID is { documentSlug }
//             </div>
//         }
//
//         {
//             !documentSlug &&
//             <div>
//                 <h3>Please put in your text</h3>
//
//                 <div>
//                     <textarea onChange={onBodyChange}/>
//                 </div>
//                 <div>
//                     <button disabled={body.length < 1} onClick={onSubmit}> Submit </button>
//                 </div>
//             </div>
//         }
//     </div>)
// }
