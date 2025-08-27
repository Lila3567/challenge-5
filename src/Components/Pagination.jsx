import React from 'react';

function Pagination({ text, changeUrl }) {
    return (
        <button onClick={changeUrl} className="pagination-button">
            {text}
        </button>
    );
}

export default Pagination;