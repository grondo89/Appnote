import React from "react";
import InputContainer from "../containers/InputContainer";
import EditContainer from "../containers/EditContainer"

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//     justifyContent: "space-around",
//     paddingLeft: "7%"
//   },
//   gridList: {
//     width: "100vw",
//     height: "100vh"
//   }
// }));

const card = {
  padding: "auto",
  //  display: "block",
  margin: "auto"
};

export default ({ notes, noteDelete, noteEdit }) => {
  //   const classes = useStyles();

  return (
    <div className="row">
      {notes.length < 1 ? (
        <h3> "ESCRIBITE UNA NOTA" </h3>
      ) : (
        notes &&
        notes.map((note, i = 0) => (
          <div
            key={i++}
            className="card"
            style={{
              padding: "auto",
              margin: "auto",
              background: `${note.color}`
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title{i}</h5>
              <p className="card-text">{note.note}</p>
              <button
                onClick={() => noteEdit(i)}
                type="button"
                className="btn btn-outline-secondary"
                data-toggle="modal"
                data-target="#EditModal"
              >
                Edit
              </button>
              <button
                onClick={() => noteDelete(i)}
                type="button"
                className="btn btn-outline-secondary"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add a new note
      </button>
      <InputContainer />
      <EditContainer/>
    </div>
  );
};


