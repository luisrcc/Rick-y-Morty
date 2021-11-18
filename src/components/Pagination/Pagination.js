import { React } from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {

const handlePrevious = () => {
    onPrevious();
  };

const handleNext = () => {
    onNext();
  };
  return (
    <div className='my-5'>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button 
            type="button" 
            class="btn btn-dark"
            onClick={handlePrevious} 
            style={{color: 'white', backgroundColor:'black', marginRight:'5rem'}}>
              Previous Page
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button 
            type="button" s
            class="btn btn-dark" 
            onClick={handleNext} 
            style={{color: 'white', backgroundColor:'black'}}>
              Next Page
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
