/* eslint-disable react/react-in-jsx-scope */
import Loader from "./_components/Loader";

export default function Loading() {
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">
        <Loader />
    </div>)
}