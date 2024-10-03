import React from 'react';

const AddTaskForm = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <label>
                    Task title:
                    <br />
                    <input type="text" name="title" onChange={(event) => props.change(event)} required />
                </label>
                <br />
                <label>
                    Due date:
                    <br />
                    <input type="date" name="deadline" onChange={(event) => props.change(event)} required />
                </label>
                <br />
                <label>
                    Details:
                    <br />
                    <input type="text" name="description" onChange={(event) => props.change(event)} required />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default AddTaskForm;