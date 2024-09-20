import req from "express/lib/request.js";
import Contact from "../model/contact.js";
import connectDB from "./../config/database.js";

connectDB();

export const POST =  async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields (name, email, message)",
        });
      }
  
      const existingContact = await Contact.findOne({ email });
      if (existingContact) {
        return res.status(400).json({
          success: false,
          message: "Email already exists",
        });
      }
  
      const newContact = new Contact({ name, email, message });
      const savedContact = await newContact.save();
  
      return res.status(201).json({
        success: true,
        message: "Contact created successfully",
        contact: savedContact,
      });
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({
        success: false,
        error: error.message,
        message: "Internal server error",
      });
    }
  }

export const GET = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

export const GETSingle = async(req,res) => {
    try {
      const {id} = req.params;
      const contact = await Contact.findById({_id : id});
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
      return res.status(200).json({
        success: true,
        contact,
      });
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({
        success: false,
        error: error.message,
        message: "Internal server error",
      });
    }
}

export const DELETE = async (req, res) => {
    try {
      const {id} = req.params;
      const contact = await Contact.findByIdAndDelete({_id : id});
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
      });
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({
        success: false,
        error: error.message,
        message: "Internal server error",
      });
    }
  
}
