import { useState } from "react";
import Song from "./Song";
import { SongType } from "./SongTypes";


const SongList = (): JSX.Element => {

    const initialSongs: SongType[] = [
        {title: 'Last thing on my mind', artist: 'steps', votes: 0},
        {title: "If you're over me", artist: 'Years and years', votes: 0},
        {title: 'Top of the world', artist: 'Carpenters', votes: 0},
        {title: 'Sometimes', artist: 'Erasure', votes: 0},
    ];

    const [songs, setSongs] = useState<SongType[]>(initialSongs);
    const [visible, setVisible] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(true);


    const toggleVisibility = (): void => {
        setVisible(!visible);
    }

    const toggleShowAll = (): void => {
        setShowAll(!showAll);
    }

    const addVote = (id: number) :void => {
        debugger;
        const newSongs = songs.map((song, index) => index === id ? {...song, votes: song.votes + 1}: song);
        setSongs(newSongs);
    }

    const displaySongs : JSX.Element[] = songs.map ( (song, index) => {
        return (<Song key={index} song={song} recordVote={() => addVote(index)} />);
   });

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <ul>

            {showAll &&
                    songs.map((song, index) => <Song key={index} song={song} recordVote={() => addVote(index)}  />)
                }

                {!showAll &&
                    songs.filter(it => it.votes >=2).map((song, index) => <Song key={index} song={song} recordVote={() => addVote(index)}  />)
                }                 
            </ul>
            {/* <button onClick={toggleVisibility}>{visible ? 'Hide Songs' : 'Show Songs' }</button> */}

            <h3>Currently showing {showAll ? 'all' : '2 or more rated'} songs</h3>
            <button onClick={toggleShowAll}>Show {showAll ? 'all songs' : 'only songs with 2 or more votes'}</button>
        </div>
    );
}

export default SongList;