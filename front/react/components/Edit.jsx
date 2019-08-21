import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap'

const cardo = {
  display: "block"
};

export default ({
  noteChange,
  editSubmit,
  inputValue,
  noteColorChange,
  note
}) => {
  return (
    <div>
      <div
        className="modal fade"
        id="EditModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Edit your note
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={cardo}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={editSubmit}>
              <ButtonGroup aria-label="Basic example">
                <Button onClick={e => noteColorChange(e)} variant="secondary">green</Button>
                <Button onClick={e => noteColorChange(e)} variant="secondary">yellow</Button>
                <Button onClick={e => noteColorChange(e)} variant="secondary">red</Button>
                <Button onClick={e => noteColorChange(e)} variant="secondary">orange</Button>
                <Button onClick={e => noteColorChange(e)} variant="secondary">purple</Button>
              </ButtonGroup>

              {/* <div className="dropdown" style={{ marginTop: "4%" }}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onChange={e => noteColorChange(e)}
                >
                  Choose a note color
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li
                    onClick={e => noteColorChange(e)}
                    className="dropdown-item"
                    value="red"
                  >
                    red
                  </li>
                  <li
                    onClick={e => noteColorChange(e)}
                    className="dropdown-item"
                    value="yellow"
                  >
                    yellow
                  </li>
                  <li
                    onClick={e => noteColorChange(e)}
                    className="dropdown-item"
                    value="green"
                  >
                    green
                  </li>
                </div>
              </div> */}

              {/* <div className="md-form mb-5" style={{ marginTop: "4%" }}>
                <input
                  name="name"
                  type="text"
                  id="form32"
                  placeholder="Topic name"
                  className="form-control validate"
                  onChange={noteChange}
                />
              </div> */}
              <div
                style={{
                  display: "block",
                  marginTop: "7%"
                }}
              >
                <textarea
                  name="text"
                  type="text"
                  placeholder="Topic content"
                  value={inputValue}
                  id="message-text"
                  className="form-control md-textarea"
                  rows="9"
                  onChange={noteChange}
                />
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-unique"
                  data-toggle="modal"
                  data-target="#EditModal"
                >
                  Send <i className="fas fa-paper-plane-o ml-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// <form onSubmit={noteSubmit}>
// <input onChange={noteChange} value={inputValue} />
// </form>
