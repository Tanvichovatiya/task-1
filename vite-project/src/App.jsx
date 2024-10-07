import React, { useState } from "react";

function App() {
  // State for form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    Time: "",
    Numofguests: "",
    specialReq: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // State to track edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // State to hold the index of the data being edited
  const [editIndex, setEditIndex] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update the existing record if in edit mode
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      // Add new record
      setSubmittedData([...submittedData, formData]);
    }

    // Clear form fields after submission
    setFormData({ name: "", email: "", age: "" });
  };

  // Handle delete action
  const handleDelete = (index) => {
    const filteredData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(filteredData);
  };

  // Handle edit action
  const handleEdit = (index) => {
    const dataToEdit = submittedData[index];
    setFormData(dataToEdit);
    setIsEditMode(true);
    setEditIndex(index);
  };

  return (
    <div className="container mx-auto p-4">
        <h1 className="font-bold text-2xl w-full text-center bg-gray-700 p-2  mb-3">Restaturant Table Booking</h1>
      {/* Form */}
      <h1 className="text-2xl font-bold mb-4">
        {isEditMode ? "Edit User" : "Add User"}
      </h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <p className="font-semibold">Make a Reservation</p>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border  border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border  border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border border-gray-700 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time:
          </label>
          <input
            type="time"
            name="Time"
            value={formData.Time}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border border-gray-700 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of guests:
          </label>
          <input
            type="text"
            name="Numofguests"
            value={formData.Numofguests}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border border-gray-700 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Special Requests :
          </label>
          <input
            type="text"
            name="specialReq"
            value={formData.specialReq}
            onChange={handleChange}
            className="mt-1 block w-[30%] p-2 border border-gray-700 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`px-4 py-2 ${
            isEditMode ? "bg-blue-500" : "bg-gray-700"
          } text-white rounded-md hover:bg-opacity-75`}
        >
          {isEditMode ? "Update" : "Book Now"}
        </button>
      </form>

      {/* Table */}
      {submittedData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 w-full font-bold p-5 mt-5 bg-gray-700">
            Admin-Manage Booking
          </h2>
          <h3 className="mb-4 font-semibold">Bokking</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4  border bg-gray-700">Phone</th>
                <th className="py-2 px-4  border bg-gray-700">Date</th>
                <th className="py-2 px-4  border bg-gray-700">time</th>
                <th className="py-2 px-4  border bg-gray-700">Number of Guests</th>
                <th className="py-2 px-4  border bg-gray-700">Special Requests</th>
                <th className="py-2 px-4  border bg-gray-700">Status</th>
                <th className="py-2 px-4 border bg-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-center">{data.name}</td>
                  <td className="py-2 px-4 border-b text-center">{data.email}</td>
                  <td className="py-2 px-4 border-b text-center">{data.phone}</td>
                  <td className="py-2 px-4 border-b text-center">{data.date}</td>
                  <td className="py-2 px-4 border-b text-center">{data.Time}</td>
                  <td className="py-2 px-4 border-b text-center">{data.Numofguests}</td>
                  <td className="py-2 px-4 border-b text-center">{data.specialReq}</td>
                  <td className="py-2 px-4 border-b text-center">occupied</td>  
                  <td className="py-2 px-4 border-b space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-3 py-1 bg-blue-500 text-center ml-3 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 bg-red-600 text-center  ml-3 mt-2 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
