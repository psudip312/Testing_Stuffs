const Pagination = ({ currentPage, onPageChange, isNextDisabled }) => {
  const handlePrevButton = () => {
    currentPage > 1 && onPageChange(currentPage - 1);
  };

  const handleNextButton = () => {
    onPageChange(++currentPage);
  };

  return (
    <div className="flex justify-end items-center space-x-2 m-4">
      {/* <!-- Previous Button --> */}
      <button
        className="px-3 py-2 rounded-sm bg-secondary text-white hover:bg-gray-300 hover:text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black"
        onClick={handlePrevButton}
        disabled={currentPage === 1}
      >
        {"< PREV"}
      </button>

      {/* <!-- Next Button --> */}
      <button
        className="px-3 py-2 rounded-sm bg-secondary text-white hover:bg-gray-300 hover:text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black"
        onClick={handleNextButton}
        disabled={isNextDisabled}
      >
        {"NEXT >"}
      </button>
    </div>
  );
};

export default Pagination;
