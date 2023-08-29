import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay absolute top-[-85px] left-[164px] h-[97vh] overflow-auto">
      <div className="modal flex flex-col items-end bg-white">
        <button className="modal-close text-lg w-max h-[30px]" onClick={onClose}>
          ❌
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
