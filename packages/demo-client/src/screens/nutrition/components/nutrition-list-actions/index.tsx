import React from 'react';

interface NutritionListActionsProps {
  statusText: string;
  onAddClick?: () => void;
  onDeleteClick?: () => void;
}

export const NutritionListActions = (props: NutritionListActionsProps) => {
  const { statusText, onAddClick, onDeleteClick } = props;

  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onAddClick?.();
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onDeleteClick?.();
  };

  return (
    <div className="ba b--white bg-washed-red">
      <div className="flex justify-between items-center w-100 pa3">
        <h4 className="fw6 purple mv0">{statusText}</h4>
        <div>
          <button
            className="no-underline outline-transparent f6 fw6 dim bn bg-white bg-animate dark-green inline-flex items-center ma2 tc br2 pa2"
            title="Add New"
            onClick={handleAddClick}
          >
            <svg
              className="dib h1 w1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span className="f6 ml2 pr2">Add New</span>
          </button>

          <button
            className="no-underline outline-transparent f6 fw6 dim bn bg-white bg-animate dark-red inline-flex items-center ma2 tc br2 pa2"
            title="Delete"
            onClick={handleDeleteClick}
          >
            <svg
              className="dib h1 w1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
            <span className="f6 ml2 pr2">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
