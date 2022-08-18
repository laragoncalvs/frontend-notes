import React, { useState, useEffect } from "react";

import api from "./services/api";

import './app.css'
import './global.css'
import './sidebar.css'
import './main.css'


import Notes from "./components/Notes";


function App() {

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitle('');
    setNotes('');

    setAllNotes([...allNotes, response.data])

  }

  useEffect(() => {
    
    getAllNotes();
    
  }, [])
  
  async function getAllNotes() {
    const response = await api.get('/annotations',)

    setAllNotes(response.data)
  }

  async function handleDelete(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);

    if(deletedNote) {
      setAllNotes(allNotes.filter(n => n._id !== id));
    }
  } 

  async function handleChangePriority(id){
    const note = await api.post(`/priorities/${id}`);

    if (note) {
      getAllNotes();
    }
  }


  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#ffd3ca'

      if (title && notes) {
        btn.style.background = "#eb8f7a"
      }
    }

    enableSubmitButton();

  }, [title, notes])


  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>

        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input
              required
              maxLength="30"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          <button type="submit" id="btn_submit">Salvar</button>

        </form>


      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes 
            data={data}
            handleDelete={handleDelete} 
            handleChangePriority={handleChangePriority}/>
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
