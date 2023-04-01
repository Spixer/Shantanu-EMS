import mongoose from "mongoose";
import { Schema } from "mongoose";

const ContactModel = new Schema(
  {
    serialNumber: {
      type: Number,
      unique: true,
    },
    token: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      default: Date.now,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    gender: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },
    husbandName: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    married: {
      type: String,
      required: true,
    },
    basicSalary: {
      type: Number,
      required: true,
    },
    uan: {
      type: Number,
      required: true,
    },
    esi: {
      type: Number,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ContactModel.pre("save", async function (next) {
  if (!this.token) {
    // Find the highest token value in the collection
    const highestTokenContact = await Contact.findOne({}, { token: 1 }).sort({
      token: -1,
    });

    // Generate a token that is 1 greater than the highest token value
    const token = (
      highestTokenContact ? parseInt(highestTokenContact.token) + 1 : 1000
    )
      .toString()
      .padStart(4, "0");

    this.token = token;
  }
  if (!this.serialNumber) {
    // Find the highest serialNumber value in the collection
    const highestSerialNumber = await Contact.findOne()
      .sort("-serialNumber")
      .select("serialNumber")
      .lean();

    // If no documents exist, start with serialNumber 1
    let nextSerialNumber = 1;

    // If documents exist, increment the highest serialNumber value and use that as the next serialNumber
    if (highestSerialNumber) {
      nextSerialNumber = highestSerialNumber.serialNumber + 1;
    }

    this.serialNumber = nextSerialNumber;
  }
  next();
});

const Contact = mongoose.model("Contact", ContactModel);

export default Contact;
