import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import './Styles/AWstyle.css'

export default function AddWork() {
  let [imgSrc, setImgSrc] = useState("");
  const [serverError, setServerError] = useState(null);
  let navigate = useNavigate();

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    const file = e.fileList[0].originFileObj;
    const reader = new FileReader();
    reader.onload = () => {
      setImgSrc(reader.result);
      setServerError(null)
    };
    reader.readAsDataURL(file);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/works",
        { imgSrc }
      )
      .then(() => {
        navigate("/dashboard/viewworks");
      })
      .catch(err=>{
        if (err.response.status === 413) {
          setServerError("Image size must be smaller then 20mb");
        }
      })
  };

  const ErrorMessage = ({ error }) => {
    if (!error) {
      return null;
    }

    return <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>;
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ margin: "auto", width: "800px", backgroundColor: "#C6D8E4" }}
      >
        <div className="card-header bg-dark awDiv">
          <h3 className="card-title">Add work</h3>
        </div>
        <form className="addwork" onSubmit={handleSubmit}>
          <div className="card-body">
            <Form.Item>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag image to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </div>
          <ErrorMessage error={serverError} />
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary awBtn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
