import React, { useEffect, useState } from "react";
import "../../Styles/Contact.css";
import { Button, Form, Input, DatePicker, Select, Result, message} from "antd";
import axios from "axios";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [service, setservice] = useState("");
  const [packages, setPackage] = useState("none");
  const [details, setdetails] = useState("");
  const [isAdded, setisAdded] = useState("");
  const { Option } = Select;
  const [messageApi, contextHolder] = message.useMessage();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };

  useEffect(() => {
    const worksSection = document.getElementById("contact");
    const worksTitle = document.querySelector(".contMain h1");
    const cardsDiv = document.querySelector("#form");

    function checkScroll() {
      // Get the position of the bottom of the viewport
      const bottomOfViewport = window.scrollY + window.innerHeight;

      // Check if the bottom of the about section is visible
      if (
        bottomOfViewport >
        worksSection.offsetTop + worksSection.offsetHeight / 7
      ) {
        // Add the visible class to the about title and cards div
        worksTitle.classList.add("visibleP");
        cardsDiv.classList.add("visibleF");

        // Remove the event listener to prevent unnecessary checks
        window.removeEventListener("scroll", checkScroll);
      }
    }

    // Add event listener to check for scroll
    window.addEventListener("scroll", checkScroll);

    // Call the checkScroll function initially in case the section is already in view
    checkScroll();

    // Clean up function to remove event listener when the component unmounts
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const config = {
    rules: [
      { type: "object", required: true, message: "Please select a date!" },
    ],
  };

  /* logic for package style if the service's value is wedding then package will be visible */

  const packageS = {
    display: service === 'wedding' ? '' : 'none',
    transition: "0.5s ease",
  }

  /* error message popup */

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Try again later',
      style: {marginTop:"120px"}
    });
  };

  const errorEmpty = () => {
    messageApi.open({
      type: 'error',
      content: 'Inputs cannot be empty',
      style: {marginTop:"120px"}
    });
  };

  const all = { name, email, number, address, date, service, packages, details };

  const handleSubmit = () => {
    if(name && number && address && date && service && details) {
      axios
      .post("http://localhost:8000/contacts", all, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        setisAdded("added");
        setname("");
        setemail("");
        setnumber("");
        setaddress("");
        setdate("");
        setservice("");
        setPackage("");
        setdetails("");
      })
      .catch((err) => {
        console.log(all, err.message);
        error()
      });
    } else {
      errorEmpty()
    }

  };

  const handleGet = () => {
    setisAdded("");
  };

  return (
    <div id="contact" className="contMain">
      {contextHolder}
      <h1 className="contTxt hiddenP">Contact Us</h1>
      <h3 className="conth3">We'll Contact you back in 24 hours</h3>
      {!isAdded ? (
        <Form
          {...layout}
          onSubmitCapture={handleSubmit}
          id="form"
          className="formM"
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            className="labelF"
            label="Name"
            style={{ color: "white" }}
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              placeholder="your name"
            />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              placeholder="OPTIONAL"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              onChange={(e) => {
                setnumber(e.target.value);
              }}
              value={number}
              style={{ width: "100%" }}
              minLength={11}
              maxLength={11}
              placeholder="03*******"
            />
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            label="Address"
            rules={[{ required: true, message: "address is required" }]}
          >
            <Input
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              value={address}
              placeholder="Input address"
            />
          </Form.Item>
          <Form.Item name="date-picker" label="Session Date" {...config}>
            <DatePicker
              onChange={(selectedDate) => {
                setdate(selectedDate);
              }}
              value={date}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="services"
            label="Services"
            hasFeedback
            rules={[{ required: true, message: "Please select your service!" }]}
          >
            <Select
              onChange={(value) => {
                setservice(value);
              }}
              value={service}
              placeholder="Please select a service"
            >
              <Option value="wedding">Wedding</Option>
              <Option value="fashion">Fashion</Option>
              <Option value="family">Family</Option>
              <Option value="couple">Couple</Option>
              <Option value="newborn">NewBorn</Option>
              <Option value="individual">Individual</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="packages"
            label="Packages"
            style={packageS}
            hasFeedback
            rules={[{ required: true, message: "Please select your package!" }]}
          >
            <Select
              onChange={(value) => {
                setPackage(value);
              }}
              value={packages}
              placeholder="Please select a package"
            >
              <Option value="Silver">Silver</Option>
              <Option value="Gold">Gold</Option>
              <Option value="Diamond">Diamond</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="intro"
            label="Details"
            rules={[{ required: true, message: "Please input details" }]}
          >
            <Input.TextArea
              showCount
              onChange={(e) => {
                setdetails(e.target.value);
              }}
              value={details}
              maxLength={200}
              placeholder="Tell us about your Event..."
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        // <form
        //   {...layout}
        //    id="form"
        //    className="formM"
        //    name="nest-messages"
        //    onClick={handleSubmit}
        //    validateMessages={validateMessages}>
        //   <Form.Item
        //     name={["user", "name"]}
        //     className="labelF"
        //     label="Name"
        //     style={{ color: "white" }}
        //     rules={[{ required: true }]}
        //   >
        //     <Input
        //       onChange={(e) => {
        //         setname(e.target.value);
        //       }}
        //       value={name}
        //       className="inputField"
        //       placeholder="your name"
        //     />
        //   </Form.Item>
        //   <Form.Item
        //     name={["user", "email"]}
        //     rules={[{ type: "email" }]}
        //   >
        //     <label>Email</label>
        //     <Input
        //       onChange={(e) => {
        //         setemail(e.target.value);
        //       }}
        //       value={email}
        //       placeholder="OPTIONAL"
        //     />
        //   </Form.Item>
        //   <Form.Item
        //     name="phone"
        //     label="Phone Number"
        //     rules={[
        //       { required: true, message: "Please input your phone number!" },
        //     ]}
        //   >
        //     <Input
        //       onChange={(e) => {
        //         setnumber(e.target.value);
        //       }}
        //       value={number}
        //       style={{ width: "100%" }}
        //       minLength={11}
        //       maxLength={11}
        //       placeholder="03*******"
        //     />
        //   </Form.Item>
        //   <Form.Item
        //     name={["address", "street"]}
        //     label="Address"
        //     rules={[{ required: true, message: "address is required" }]}
        //   >
        //     <Input
        //       onChange={(e) => {
        //         setaddress(e.target.value);
        //       }}
        //       value={address}
        //       placeholder="Input address"
        //     />
        //   </Form.Item>
        //   <Form.Item name="date-picker" label="Session Date" {...config}>
        //     <DatePicker
        //       onChange={(selectedDate) => {
        //         setdate(selectedDate);
        //       }}
        //       value={date}
        //       style={{ width: "100%" }}
        //     />
        //   </Form.Item>
        //   <Form.Item
        //     name="services"
        //     label="Services"
        //     hasFeedback
        //     rules={[{ required: true, message: "Please select your service!" }]}
        //   >
        //     <Select
        //       onChange={(value) => {
        //         setservice(value);
        //       }}
        //       value={service}
        //       placeholder="Please select a service"
        //     >
        //       <Option value="wedding">Wedding</Option>
        //       <Option value="fashion">Fashion</Option>
        //       <Option value="family">Family</Option>
        //       <Option value="couple">Couple</Option>
        //       <Option value="newborn">NewBorn</Option>
        //       <Option value="individual">Individual</Option>
        //     </Select>
        //   </Form.Item>
        //   <Form.Item
        //     name="packages"
        //     label="Packages"
        //     style={packageS}
        //     hasFeedback
        //     rules={[{ required: true, message: "Please select your package!" }]}
        //   >
        //     <Select
        //       onChange={(value) => {
        //         setPackage(value);
        //       }}
        //       value={packages}
        //       placeholder="Please select a package"
        //     >
        //       <Option value="Silver">Silver</Option>
        //       <Option value="Gold">Gold</Option>
        //       <Option value="Diamond">Diamond</Option>
        //     </Select>
        //   </Form.Item>
        //   <Form.Item
        //     name="intro"
        //     label="Details"
        //     rules={[{ required: true, message: "Please input details" }]}
        //   >
        //     <Input.TextArea
        //       showCount
        //       onChange={(e) => {
        //         setdetails(e.target.value);
        //       }}
        //       value={details}
        //       maxLength={200}
        //       placeholder="Tell us about your Event..."
        //     />
        //   </Form.Item>
        //   <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        //     <Button type="primary" htmlType="submit">
        //       Submit
        //     </Button>
        //   </Form.Item>
        // </form>
      ) : (
        <Result
          status="success"
          style={{ color: "white" }}
          title={
            <span style={{ color: "white" }}>Form Submitted Successfully</span>
          }
          extra={[
            <Button onClick={handleGet} key="buy">
              get Another service
            </Button>,
          ]}
        />
      )}
    </div>
  );
}
