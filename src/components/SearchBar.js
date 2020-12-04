import React, {useState} from 'react'



export default function SearchBar(){

    const [searched, setSearched] = useState("")

    return (
        <form>
            <TextField id="standard-basic" label="Standard" />
        </form>
    );

}