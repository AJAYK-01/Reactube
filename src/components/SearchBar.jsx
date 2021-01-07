import { Button } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';

function SearchBar(props) {

    const { onSearch } = props;
    const [ term, setTerm ] = useState('');

    return(
        <div>
            {/* <Button > */}
            <Search 
                placeholder='Search youtube...'
                enterButton
                onSearch={ () => onSearch(term) }
                value={ term }
                onChange={ (e) => setTerm(e.target.value) }
                style={{verticalAlign: 'center'}}
            />
            {/* </Button> */}
            
        </div>
    );
}

export default SearchBar;