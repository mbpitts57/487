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
            <span>
                <div>
                    <label className="p-text">Do you have any hobbies/activities outside of work you dedicate a
                        significant amount of time to? If Yes, please list them.</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer1': e.target.value })}
                        placeholder=""
                        value={formData.p_answer1}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">If you answered yes to the previous question, do you consider
                        yourself "great" at any of them? If yes, please detail why. If no, please write N/A.</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer2': e.target.value })}
                        placeholder=""
                        value={formData.p_answer2}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">Tell us about a time you were singled out by a co-worker/team member
                        or superior for the quality of your work, and what effect it had on you. If this has happened more than
                        once, you can provide multiple examples.</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer3': e.target.value })}
                        placeholder=""
                        value={formData.p_answer3}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">Do you find yourself often speaking too quickly or too
                        slowly?</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer4': e.target.value })}
                        placeholder=""
                        value={formData.p_answer4}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">How many hours do you sleep on average during weeknights?</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer5': e.target.value })}
                        placeholder=""
                        value={formData.p_answer5}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">Do you have any "vices?" If so, please elaborate.</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'p_answer6': e.target.value })}
                        placeholder=""
                        value={formData.p_answer6}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">Please Enter Your Full Name:</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'visName': e.target.value })}
                        placeholder=""
                        value={formData.visName}
                    />
                    <br></br>
                </div>
                <div>
                    <label className="p-text">Also Kindly Enter Your Email:</label>
                    <input required
                        onChange={e => setFormData({ ...formData, 'visEmail': e.target.value })}
                        placeholder=""
                        value={formData.visEmail}
                    />
                    <br></br>
                </div>

                <button type="submit" onClick={createEntry}>Submit Assessment</button>
            </span>
        </div>
    );
}

reportWebVitals();