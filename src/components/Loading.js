import { useDispatch, useSelector } from "react-redux";
import { loading, stopLoading } from "../reducers/IsLoadingSlice";
import {FaSpinner} from 'react-icons/fa'

function Loading() {
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(stopLoading());
  }, 3000);

  return (
    isLoading && (
      <div className="page-loading">
        <h1><FaSpinner /></h1>
      </div>
    )
  );
}

export default Loading;
