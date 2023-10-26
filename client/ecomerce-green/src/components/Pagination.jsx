

const Pagination = ({page,  totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
    <div className="container mx-auto px-4">
    <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
    {/* Previous Page Button */}
    <button
          className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          title="Previous Page"
        >
          <span className="sr-only">Previous Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* <!-- Page Buttons (1 to 5) --> */}

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`w-10 h-10 mx-1 justify-center items-center rounded-full border ${pageNumber === page ? 'border-black dark:border-white dark:bg-black dark:text-white' : 'border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600'}`}
            onClick={() => onPageChange(pageNumber)}
            title={`Page ${pageNumber}`}
          >
            {pageNumber}
          </button>
        ))}
    
      {/* Next Page Button */}
      <button
      className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
      title="Next Page"
    >
      <span className="sr-only">Next Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    </nav>
</div>
  )
}

export default Pagination