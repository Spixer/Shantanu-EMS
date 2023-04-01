import Contact from "../models/contact.model.js";

const addContact = async (req, res) => {
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
  } = req.body;
  if (
    (!name,
    !birthDate ||
      !joinDate ||
      !gender ||
      !fatherName ||
      !husbandName ||
      !relationship ||
      !address2 ||
      !qualification ||
      !married ||
      !basicSalary ||
      !uan ||
      !esi ||
      !address1 ||
      phoneNo < 1)
  ) {
    res.status(400).json({ message: "Please Provide valid details" });
    throw new Error("Please provide valid details");
  }

  const contact = new Contact({
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
  });
  await contact.save();

  res.status(201).json({ contact, message: "Contact created successfully" });
};
const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ contacts, message: "Fetched Successfully" });
};

const deleteAllContacts = async (req, res) => {
  await Contact.deleteMany();
  res.status(200).json({ message: "Contacts Deleted Successfully" });
};

export { addContact, getAllContacts, deleteAllContacts };
