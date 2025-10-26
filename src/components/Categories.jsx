const Categories = ({categories, selectedCategory, setSelectedCategory}) => {

    const handleClick = (category) => {
        if(selectedCategory == category)return setSelectedCategory(null)
        setSelectedCategory(category)
    }

    return (
        <div className="flex gap-2 items-center overflow-auto thin-scrollbar py-2">
            {Object.keys(categories).map((category,i) => {
                return (
                    <div 
                        style={{ 
                            color: selectedCategory == category ? 'white' : categories[category],
                            border:`2px solid ${categories[category]}`,
                            whiteSpace: 'nowrap',
                            backgroundColor: selectedCategory == category ? categories[category] : ''
                         }}
                        className={`rounded-[50px] p-3 py-2 cursor-pointer`} 
                        key={i}
                        onClick={() => handleClick(category)}
                    >
                        {category}
                    </div>
                )
            })}
        </div>
    )
};
export default Categories