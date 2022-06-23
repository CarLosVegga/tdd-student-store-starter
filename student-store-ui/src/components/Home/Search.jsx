import "./Search.css"

export default function App(props) {
    const isSearching = props.searchStatus.length===0?false:true;
    const buttonClassName =isSearching?'buttonSearchs':'buttonWaits';
    return (
        <>
            <div className="search">
                <input type="text" value={props.searchStatus} onChange={(e) => props.handleSearchChange(e.target.value)} placeholder="Find your product here!"/>
                <button type="submit" className={buttonClassName} disabled={!isSearching}>Find</button>
            </div>
            <div className="categories">
                <h3>Categories</h3>
                <div className="options">
                    {props.categories.map((category, index) => { 
                        return (
                            <Categories
                                isActive={props.categoryStatus===category?'active':''}
                                name={category}
                                handleCategoriesClick={props.handleCategoriesClick}
                            />
                        )
                        })}
                </div>
            </div>
        </>
    ) 
}

export function Categories({handleCategoriesClick, name, isActive}) {
    return (
            <button onClick={()=>handleCategoriesClick(name)} className={isActive}>{name}</button>
    )
}