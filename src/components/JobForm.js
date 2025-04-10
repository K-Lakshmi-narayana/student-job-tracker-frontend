import React, { useState } from 'react';
import "../App.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialFormState = {
  company: '',
  role: '',
  status: 'Applied',
  date: '',
  link: ''
};

function JobForm({ onAdd }) {
  const [formData, setFormData] = useState(initialFormState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role || !formData.date) {
      alert('Please fill all required fields.');
      return;
    }
    onAdd(formData);
    setFormData(initialFormState);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
    <div className='nav-con'>
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            🎓 Student Job Tracker
        </h1>
        <Button className='add-btn' onClick={handleShow}>
            Add Job
        </Button>
    </div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new applied job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
      onSubmit={handleSubmit}
      className="bg-white d-flex flex-column align-items-center shadow-md rounded px-6 py-4 mb-6 space-y-4 border"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className='m-2'>
            <>Company Name: </>
            <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company *"
            className="border p-2 rounded w-full"
            required
            />
        </div>
        <div className='m-2'>
            <>Role Applied for: </>
            <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role *"
            className="border p-2 rounded w-full"
            required
            />
        </div>
        <div className='m-2'>
            <>Applied Date: </>
            <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            max={today}
            required
            />
        </div>
        <div className='m-2'>
            <>Applied Link: </>
            <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Job Link"
            className="border p-2 rounded w-full"
            />
        </div>
      </div>
      <div className="flex items-center gap-2 m-2">
        <label>Status: </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <button
        type="submit"
        className="add-btn"
      >
        Add Job
      </button>
    </form>
        </Modal.Body>
        
      </Modal>
    
   
    </>
  );
}

export default JobForm;
