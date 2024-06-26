import { FC } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/loading.gif'

interface Props {
    isLoading: boolean;
}


export const Header: FC<Props> = ({ isLoading }) => {
    return (
        <>
            <div className='flex items-center justify-between mb-2'>
                <Link to="/"><h1 className='ml-2 text-3xl font-medium text-blue-600 dark:text-blue-500 hover:underline'>Podcaster</h1></Link>
                {isLoading && <img src={logo} className='mr-2 w-9 h-9' alt="loading" />}

            </div>
            <hr className='w-full mb-10 border-gray-300 shadow-md'></hr></>
    );
};

export default Header;