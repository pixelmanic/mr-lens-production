import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "antd";
import { Result } from "antd";

export default function ViewContacts() {
  const [data, setdata] = useState("");
  const [error, seterror] = useState("");
  const [pending, setpending] = useState(true);
  const [edit, setedit] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/contacts")
      .then((res) => {
        setdata(res.data);
        setpending(false);
        console.log(res.data);
      })
      .catch((err) => {
        setpending(false);
        seterror(err.message);
      });
  }, [edit]);

  let handleDelete = (id) => {
    setedit("");
    axios
      .delete(`http://localhost:8000/contacts/${id}`)
      .then((del) => {
        setedit("changed");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">All Contacts</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  ></div>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                    {pending && <h1>Loading...</h1>}
                    {data.length === 0 ? (
                      <Result
                        style={{ textAlign: "center" }}
                        title="No contacts at the moment"
                      />
                    ) : (
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>fullname</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Date</th>
                      <th>Service</th>
                      <th>Package</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                      {data &&
                      data.map((contact, index) => (
                        <tr className="w-100">
                          <td>{index}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.number}</td>
                          <td>{contact.address}</td>
                          <td>{contact.date}</td>
                          <td>{contact.service}</td>
                          <td>{contact.packages}</td>
                          <td>
                            <Tooltip title={contact.details}>
                              <span style={{color:"blue"}}>hover to see Details</span>
                            </Tooltip>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleDelete(contact._id);
                              }}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                    )}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
      {error && <h1>{error}</h1>}
    </>
  );
}
