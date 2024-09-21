export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select name="wd-group" id="wd-group">
                            <option value="">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select name="wd-display-grade-as" id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select name="wd-submission-type" id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <p><label>Online Entry Options:</label><br />
                            <input type="checkbox" name="wd-text-entry" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                            <br />
                            <input type="checkbox" name="wd-website-url" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                            <br />
                            <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label>
                            <br />
                            <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label>
                            <br />
                            <input type="checkbox" name="wd-file-upload" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        Assign to<br />
                        <input type="text" id="wd-assign-to" value="Everyone" />
                        <p>Due<br />
                            <input type="date" id="wd-due-date" value="2024-05-13" /></p>
                        <table>
                            <tr>
                                <td>Available from<br />
                                    <input type="date" id="wd-available-from" value="2024-05-06" />
                                </td>
                                <td>Until<br />
                                    <input type="date" id="wd-available-until" value="2024-05-20" /></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <div style={{ textAlign: 'right' }}>
                <button>Cancel</button>&nbsp;
                <button>Save</button>
            </div>
        </div>
    );
}
