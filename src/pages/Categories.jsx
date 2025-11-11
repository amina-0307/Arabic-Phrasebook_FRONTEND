import { useState } from "react";
import axios from "axios";

function Categories() {
    const [input , setInput] = useState("");
    const [result, setResult] = useState("");

    const handleTranslate = async () => {
        try {
            const res = await axios.post("BACKEND URL", {text: input });
            setResult(res.data.result);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Translator</h2>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleTranslate}>Translate</button>
            <p>{result}</p>
        </div>
    );
}

export default Categories;