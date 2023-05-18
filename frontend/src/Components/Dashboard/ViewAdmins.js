import axios from "axios";
import React, { useEffect, useState } from "react";
import { Result } from "antd";

export default function ViewAdmins() {
    let [update, setupdate] = useState('')
    let [data, setdata] = useState('')
    let [pending, setpending] = useState(true)
    let [error, seterror] = useState('')

    useEffect(() => {
      axios.get("http://localhost:8000/admins")
      .then((res)=>{
        setdata(res.data)
        setpending(false)
      })
      .catch((err)=>{
        setpending(false)
        seterror(err.message)
      })
    }, [update])

    let handleDelete = (id) => {
      setupdate("");
      axios.delete(`http://localhost:8000/admins/${id}`)
          .then((del) => {
              setupdate("changed");
          })
          .catch((error) => {
              alert(error.message);
          })
  };
  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">All Admins</h3>
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
                        title="No Admins at the moment"
                      />
                    ) : (
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((admin) => (
                          <tr className="w-100">
                            <td>{admin._id}</td>
                            <td>{admin.email}</td>
                            <td>
                              <button
                                onClick={() => {
                                  handleDelete(admin._id);
                                }}
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>)}
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
        {error && <h1>{error}</h1>}
      </>
    </div>
  )
}
