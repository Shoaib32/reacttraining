import { SongProps } from "./SongTypes";

const Song = ({song, recordVote}: SongProps): JSX.Element => {
    return (<>
        <li>{song.title} by {song.artist} has {song.votes} votes <button onClick={recordVote}>Vote for this song</button></li>
        </>);
};

export default Song;