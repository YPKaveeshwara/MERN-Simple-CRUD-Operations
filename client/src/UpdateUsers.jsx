import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUsers() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/getUser/${id}`);
                console.log("Result data:", result.data);
                setName(result.data.name !== undefined ? result.data.name : "");
                setEmail(result.data.email || "");  
                setAge(result.data.age || "");  
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [id]);

    const Update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age });
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"
                            value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" placeholder="Enter Age" 
                            value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    
                    <button className="btn btn-success" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUsers;
