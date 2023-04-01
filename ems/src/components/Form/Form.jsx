import React, { useState } from "react";
import http from "../../api";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import classes from "./Form.module.css";

const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    birthDate: "",
    joinDate: "",
    gender: "",
    fatherName: "",
    husbandName: "",
    relationship: "",
    phoneNo: "",
    qualification: "",
    married: "",
    basicSalary: "",
    uan: "",
    esi: "",
    address1: "",
    address2: "",
  });

  const {
    name,
    birthDate,
    joinDate,
    gender,
    fatherName,
    husbandName,
    relationship,
    phoneNo,
    qualification,
    married,
    basicSalary,
    uan,
    esi,
    address1,
    address2,
  } = contact;

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setContact((prevcontact) => ({
      ...prevcontact,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      birthDate === "" ||
      joinDate === "" ||
      gender === "" ||
      fatherName === "" ||
      husbandName === "" ||
      relationship === "" ||
      phoneNo === "" ||
      qualification === "" ||
      married === "" ||
      basicSalary === "" ||
      uan === "" ||
      esi === "" ||
      address1 === "" ||
      address2 === ""
    ) {
      // AlertContext.setAlert("Please enter all fields", "danger"); add a state
      alert("Please fill all  the fields");
    }
    try {
      http.post("/contact/createContact", contact);
    } catch (error) {
      console.log(error);
    }
    setContact({
      name: "",
      birthDate: "",
      joinDate: "",
      gender: "",
      fatherName: "",
      husbandName: "",
      relationship: "",
      phoneNo: "",
      qualification: "",
      married: "",
      basicSalary: "",
      uan: "",
      esi: "",
      address1: "",
      address2: "",
    });
  };
  return (
    <>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          onChange={onChangeHandler}
          type="text"
          value={name}
          label="Name"
          name="name"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="date"
          value={birthDate}
          label="Birth Date"
          name="birthDate"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="date"
          value={joinDate}
          label="Join Date"
          name="joinDate"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="radio"
          value="Male"
          label="Male"
          name="gender"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="radio"
          value="Female"
          label="Female"
          name="gender"
          required
        />
        <Input
          onChange={onChangeHandler}
          type="radio"
          value="Trans"
          label="Trans"
          name="gender"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={fatherName}
          label="Father's Name"
          name="fatherName"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={husbandName}
          label="Husband's Name"
          name="husbandName"
          required={!married}
          disabled={!married}
        />

        <Input
          onChange={onChangeHandler}
          type="checkbox"
          value={married}
          label="Married"
          name="married"
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={relationship}
          label="Relationship"
          name="relationship"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="tel"
          value={phoneNo}
          label="Phone No"
          name="phoneNo"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={qualification}
          label="Qualification"
          name="qualification"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="number"
          value={basicSalary}
          label="Basic Salary"
          name="basicSalary"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="number"
          value={uan}
          label="UAN"
          name="uan"
        />

        <Input
          onChange={onChangeHandler}
          type="number"
          value={esi}
          label="ESI"
          name="esi"
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={address1}
          label="Address Line 1"
          name="address1"
          required
        />

        <Input
          onChange={onChangeHandler}
          type="text"
          value={address2}
          label="Address Line 2"
          name="address2"
          required
        />

        {/* <Input
          onChange={onChangeHandler}
          type="select"
          value={contact.relationship}
          label="Relationship"
          name="relationship"
          options={[
            { value: "father", label: "Father" },
            { value: "mother", label: "Mother" },
            { value: "spouse", label: "Spouse" },
            { value: "child", label: "Child" },
          ]}
          required
        /> */}

        <div className={classes.button}>
          <Button
            padding="8px 24px"
            fontSize="18px"
            label="Send"
            bgColor="#7541C8"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
