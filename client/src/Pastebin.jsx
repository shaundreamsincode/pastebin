import React, { useState } from 'react';
import axios from "axios";

const Pastebin = () => {
    const [body, setBody] = useState("");
    const [created, setCreated] = useState(false);
    const [documentURL, setDocumentURL] = useState("");

    // const fetchTestDatas = function () {
    //     axios.get({url: '/api/v1/tests', headers: { "Access-Control-Allow-Origin": "http://localhost:3000" }})
    //         .then(res => res.json())
    //         .then((response) => { console.log("Test datas response", response); }).catch((error) => {
    //         debugger;
    //     })}


    const onSubmit = () => {
        const url = `/documents`;
        axios.post(
            url,
            {body: body},
            {headers: {"Access-Control-Allow-Origin": "*" }}
        )
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    return(<div className="pastebin">
        <h1>
            Pastebin
        </h1>

        {
            created && <div>
                Document successfully created.
            </div>
        }

        {
            !created &&
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
