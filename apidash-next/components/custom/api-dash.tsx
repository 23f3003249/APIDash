"use client"

import { useState } from "react";
import RequestBar from "./requestGroup";

const requestMethods = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
    { value: "PUT", label: "PUT" },
    { value: "PATCH", label: "PATCH" },
    { value: "DELETE", label: "DELETE" },
    { value: "HEAD", label: "HEAD" },
    { value: "OPTIONS", label: "OPTIONS" },
];

export default function ApiDash() {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");

    const sendRequest = () => {
        console.log({
            method,
            url,
        });
    }

    return (
        <>
            <RequestBar
                request={requestMethods}
                method={method}
                url={url}
                onMethodChange={setMethod}
                onUrlChange={setUrl}
                onSend={sendRequest}
            />
        </>
    )
}