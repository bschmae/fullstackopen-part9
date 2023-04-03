import { Entry } from "../types";

const Diary = ({ entry }: {entry: Entry}) => {
    return (
        <div>
            <h3>{entry.date}</h3>
            <p>visibility: {entry.visibility}</p>
            <p>weather: {entry.weather}</p>
        </div>
    )
}

export default Diary;