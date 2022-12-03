import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ query, onQueryChange }) => {

    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="query" id="query" value={query}
                    onChange={(event) => { onQueryChange(event.target.value) }}
                    className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search Events or Artists" size={"30"} />
                <label htmlFor="query" className="sr-only">
                    &nbsp;<SearchIcon fontSize='medium' style={{ color: 'white' }} />
                </label>
            </div>
        </div>
    )
}

export default SearchBar
