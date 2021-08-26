import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteAClass } from "../Actions/classes";

const DeleteMovieModal = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const cancelHandler = () => {
    props.modalHandler();
  };

  const deleteHandler = () => {
    dispatch(deleteAClass(props.id));
  };
  return (
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Cancel Class</h4>
          <button
            onClick={cancelHandler}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to cancel this class?</p>
          <p className="text-warning">
            <small>This action cannot be undone.</small>
          </p>
        </div>
        <div className="modal-footer">
          <input
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
            value="Cancel"
            onClick={cancelHandler}
          />
          <input
            type="submit"
            className="btn btn-danger"
            value="Delete"
            onClick={deleteHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteMovieModal;
