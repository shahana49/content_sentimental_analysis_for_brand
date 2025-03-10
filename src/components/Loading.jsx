import React from "react";
import "../styles.scss"; // Import SCSS file

const Bookshelf = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="bookshelf_wrapper ">
        <ul className="books_list">
          <li className="book_item first"></li>
          <li className="book_item second"></li>
          <li className="book_item third"></li>
          <li className="book_item fourth"></li>
          <li className="book_item fifth"></li>
          <li className="book_item sixth"></li>
        </ul>
        <div className="shelf"></div>
      </div>
      <div className="absolute bottom-34 gap-y-3 left-0 right-0 mx-auto w-fit flex flex-col items-center ">
        <h4 className="text-[#0057A4] font-semibold text-2xl ">
          Content Sentiment Analysing...
        </h4>
        <p className="text-sm text-gray-600">
          This may take a few moments. Please wait while we gather the necessary
          information
        </p>
      </div>
    </div>
  );
};

export default Bookshelf;
