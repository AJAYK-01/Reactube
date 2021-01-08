import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';

function SearchBar(props) {

    const { onSearch } = props;
    const [ term, setTerm ] = useState('');

    return(
        <div>
            <Search 
                placeholder='Search youtube...'
                enterButton
                onSearch={ () => onSearch(term) }
                value={ term }
                onChange={ (e) => setTerm(e.target.value) }
            />   
        </div>
    );
}

export default SearchBar;