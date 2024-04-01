import { Link } from "react-router-dom";
export const NotFoundPage = () => {
    return (
        <span>
            <h2>Something went wrong... you can go back to Home pressing the following link </h2>
            <Link to="/"><h2>Go back to Home</h2></Link>
        </span>
    );
};

export default NotFoundPage;