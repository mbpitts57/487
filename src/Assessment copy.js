import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { API } from "aws-amplify";
import { listEntrys } from "./graphql/queries";
// import { listEntrys } from "../../amplify/backend/api/487/build/schema.graphql";
// import '../styles/App.css';

// import * as queries from '../graphql/queries';
// import { withAuthenticator } from "@aws-amplify/ui-react";
import {
    createEntry as createEntryMutation,
} from './graphql/mutations';

const initialFormState = { visName: '', visEmail: '', p_answer1: '', p_answer2: '', p_answer3: '', p_answer4: '', p_answer5: '', p_answer6: '' }

export function InsertEntry() {
    const [Entrys, setEntrys] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchEntrys();
    }, []);

    async function fetchEntrys() {
        const apiData = await API.graphql({ query: listEntrys });
        setEntrys(apiData.data.listEntrys.items);
    }

    async function createEntry() {
        if (!formData.visName || !formData.visEmail) return;
        await API.graphql({ query: createEntryMutation, variables: { input: formData } });
        setEntrys([...Entrys, formData]);
        setFormData(initialFormState);
    }

    return (
        <div className="InsertEntry">
            <div>
                <label className="p-text">question1</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer1': e.target.value })}
                    placeholder=""
                    value={formData.p_answer1}
                />
                <br></br>
                <label className="p-text">question2</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer2': e.target.value })}
                    placeholder=""
                    value={formData.p_answer2}
                />
                <br></br>
                <label className="p-text">question3</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer3': e.target.value })}
                    placeholder=""
                    value={formData.p_answer3}
                />
                <br></br>
                <label className="p-text">question4</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer4': e.target.value })}
                    placeholder=""
                    value={formData.p_answer4}
                />
                <br></br>
                <label className="p-text">question5</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer5': e.target.value })}
                    placeholder=""
                    value={formData.p_answer5}
                />
                <br></br>
                <label className="p-text">question6</label>
                <input
                    onChange={e => setFormData({ ...formData, 'p_answer6': e.target.value })}
                    placeholder=""
                    value={formData.p_answer6}
                />
                <br></br>
                <label className="p-text">Name:</label>
                <input
                    onChange={e => setFormData({ ...formData, 'visName': e.target.value })}
                    placeholder=""
                    value={formData.visName}
                />
                <br></br>
                <label className="p-text">Email:</label>
                <input
                    onChange={e => setFormData({ ...formData, 'visEmail': e.target.value })}
                    placeholder=""
                    value={formData.visEmail}
                />
                <br></br>

                <button type="submit" onClick={createEntry}>Submit Assessment</button>
            </div>
        </div>
    );
}

reportWebVitals();