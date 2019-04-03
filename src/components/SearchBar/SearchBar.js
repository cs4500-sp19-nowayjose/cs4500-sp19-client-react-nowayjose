import React from 'react'

const SearchBar = React.memo(({ history, onSubmit, onChange, providerValue, zipValue }) => {
    if (!onChange) onChange = () => {}
    return (
        <form onSubmit={onSubmit}>
            <div className="input-group input-group-lg">
                <input
                    placeholder="Search for providers"
                    type="text"
                    onChange={(e) => onChange(e, 'provider')}
                    value={providerValue}
                    className="form-control"/>
                <input
                    placeholder="Zip code"
                    type="text"
                    onChange={(e) => onChange(e, 'zip')}
                    value={zipValue}
                    className="form-control"/>
                <div className="input-group-append">
                    <button
                        onClick={onSubmit}
                        className="btn btn-primary"
                        type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
})

export default SearchBar