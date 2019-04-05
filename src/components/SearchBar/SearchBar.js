import React from 'react'

const SearchBar = React.memo(({ history, onSubmit, onChange, providerValue, zipValue, className }) => {
    if (!onChange) onChange = () => {}
    return (
        <div className={className}>
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
        </div>
    )
})

export default SearchBar