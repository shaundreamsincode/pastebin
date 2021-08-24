import React, { useState } from 'react';
import axios from "axios";

const Pastebin = () => {
    const [body, setBody] = useState("");
    const [documentSlug, setDocumentSlug] = useState("");

    const onSubmit = () => {
        const url = `/api/v1/documents`;
        axios.post(
            url,
            {body: body},
            {headers: {"Access-Control-Allow-Origin": "*" }}
        ).then((response) => {
            setDocumentSlug(response.data.slug);
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
            !!documentSlug && <div>
                Document successfully created.  Document ID is { documentSlug }
            </div>
        }

        {
            !documentSlug &&
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
