import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { NewDiaryEntry, Visibility, Weather } from "../types";

interface Props {
    onSubmit: (values: NewDiaryEntry) => void; 
}

const EntryForm = ({ onSubmit }: Props) => {
    const [ date, setDate ] = useState('');
    const [ visibility, setVisibility ] = useState('');
    const [ weather, setWeather ] = useState('');
    const [ comment, setComment ] = useState('');

    const addEntry = (event: SyntheticEvent) => {
        event.preventDefault();

        onSubmit({
            date,
            visibility,
            weather,
            comment,
        });

        setDate('');
        setVisibility('');
        setWeather('');
        setComment('');
    };


    return (
        <div>
            <h2>Add new entry</h2>
            <form onSubmit={addEntry}>
                date<input value={date} type='date' onChange={({ target }) => setDate(target.value)}></input>
                <br></br>
                <fieldset>
                    visibility: 
                    <input name="visibility" value='great' type='radio' onChange={({ target }) => setVisibility(target.value)}></input>
                    <label>great</label>
                    <input name="visibility" value='good' type='radio' onChange={({ target }) => setVisibility(target.value)}></input>
                    <label>good</label>
                    <input name="visibility" value='ok' type='radio' onChange={({ target }) => setVisibility(target.value)}></input>
                    <label>ok</label>
                    <input name="visibility"value='poor' type='radio' onChange={({ target }) => setVisibility(target.value)}></input>
                    <label>poor</label>
                </fieldset>
                <br></br>
                <fieldset>
                    weather: 
                    <input name="weather" value='sunny' type='radio' onChange={({ target }) => setWeather(target.value)}></input>
                    <label>sunny</label>
                    <input  name="weather" value='rainy' type='radio' onChange={({ target }) => setWeather(target.value)}></input>
                    <label>rainy</label>
                    <input name="weather" value='stormy' type='radio' onChange={({ target }) => setWeather(target.value)}></input>
                    <label>stormy</label>
                    <input name="weather" value='cloudy' type='radio' onChange={({ target }) => setWeather(target.value)}></input>
                    <label>cloudy</label>
                    <input name="weather" value='windy' type='radio' onChange={({ target }) => setWeather(target.value)}></input>
                    <label>windy</label>
                </fieldset>
                <br></br>
                comment<input value={comment} type='text' onChange={({ target }) => setComment(target.value)}></input>
                <br></br>
                <button type='submit'>add</button>
            </form>
        </div>
    );
};

export default EntryForm;