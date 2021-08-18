import React, { useState } from 'react';
import axios from "axios";

const Pastebin = () => {
    const [body, setBody] = useState("");
    const [documentID, setDocumentID] = useState("");

    const onSubmit = () => {
        const url = `/api/v1/documents`;
        axios.post(
            url,
            {body: body},
            {headers: {"Access-Control-Allow-Origin": "*" }}
        ).then((response) => {
            setDocumentID(response.data.id);
        })
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    return(<div className="pastebin">
        <h1>
            Pastebin
        </h1>

        {
            !!documentID && <div>
                Document successfully created.  Document ID is { documentID }
            </div>
        }

        {
            !documentID &&
                <div>
                    <h3>Please put in your text</h3>

                    <div>
                        <textarea onChange={onBodyChange}/>
                    </div>
                    <div>
                        <button disabled={body.length < 1} onClick={onSubmit}> Submit </button>
                    </div>
                </div>
        }
    </div>)
}

export default Pastebin;
