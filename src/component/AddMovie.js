import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({handleAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [rate, setRate] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
        id:Math.random(),
        title,
        description,
        posterUrl:url,
        rate
    }
   if(title && description && rate && url){
    handleAdd(newMovie)
    setTitle("")
    setUrl("")
    setRate()
    setDescription("")
    handleClose()
   }
   else alert("Fill all the fields")
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Title :{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Enter movie name"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="Enter description movie"
              onChange={e => setDescription(e.target.value)}
              value={description}

            />
            Image:
            <input
              type="url"
              className="form-control"
              placeholder="Enter movie poster"
              onChange={e => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="Enter movie rate"
              onChange={e => setRate(e.target.value)}
              value={rate}
            />
               <Button variant="primary" type="submit">
            Save Changes
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
