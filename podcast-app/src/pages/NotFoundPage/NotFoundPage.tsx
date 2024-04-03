import Header from "../../components/Header";
export const NotFoundPage = () => {
    return (
        <div className='w-100 m-10'>
            <Header isLoading={false} />
            <h2>Something went wrong... you can go back to Home pressing the APP logo </h2>
        </div>

    );
};

export default NotFoundPage;