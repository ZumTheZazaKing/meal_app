import { FaSearch } from 'react-icons/fa';

const Searchbar = ({input, setInput}) => {
    return (
        <div className="w-full flex shadow-lg rounded-[50px]">
            <div className='bg-zinc-100 p-3 rounded-l-[50px] pl-4'>
                <FaSearch size={"24px"} className='text-zinc-500'/>
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                className="outline-none p-3 rounded-r-[50px] bg-zinc-100 w-full"
                placeholder='Search meal...'
            />
        </div>
    )
};
export default Searchbar