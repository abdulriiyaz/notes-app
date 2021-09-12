import React from 'react'
import * as AiIcons from 'react-icons/ai'

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
        <AiIcons.AiOutlineSearch className="icon-search" size="1.3em" />
            <input onChange={(event)=>
                 handleSearchNote(event.target.value)
                // console.log(event.target.value)
            }
            type="text" placeholder="type to search..." />
        </div>
    )
}

export default Search
