import React from 'react';

const SearchForm = props =>{
    return(
        <form className="searchForm">
            <input
                type="text"
                onChange={props.searchList}
                value={props.search} />
        </form>
    )
}

export default SearchForm;