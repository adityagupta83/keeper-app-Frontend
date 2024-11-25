import React, { useState } from "react";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';  // Add this for navigation

// isLoggedIn=true;
function HomePage({ isLoggedIn, onLogout }) {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!isLoggedIn) {
    navigate("/login");
  }

  const handleAdd = (inputText) => {
    setNotes((prevNotes) => [...prevNotes, inputText]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  };

  return (
    <div>
      <h2>Welcome to Your Notes</h2>
      <button onClick={onLogout}>Logout</button>  {/* Logout Button */}
      <CreateArea onAdd={handleAdd} />
      {notes.map((noteItem, index) => (
        <Note key={index} title={noteItem.title} content={noteItem.content} id={index} delete={deleteNote} />
      ))}
    </div>
  );
}

export default HomePage;
