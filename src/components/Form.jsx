"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formdata.email,
          subject: `Message from ${formdata.name}`,
          message: formdata.message,
        }),
      });

      const result = await response.json();
      if (result.error) {
        console.error("Error sending email:", result.errors);
        toast.error("Failed to send the message. Please try again.");
      } else {
        console.log("Email sent successfully:", result.response);
        toast.success("Message sent successfully!");
        setFormdata({ name: "", email: "", message: "" }); // Reset the form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="bg-[#030014] text-white border-slate-600">
        <CardHeader>
          <h1 className="text-2xl font-bold">Drop a Message</h1>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="bg-[#030014] text-white border-slate-600"
              onChange={handleChange}
              value={formdata.name}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="bg-[#030014] text-white border-slate-600"
              onChange={handleChange}
              value={formdata.email}
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              className="bg-[#030014] text-white border-slate-600"
              onChange={handleChange}
              value={formdata.message}
            />
          </div>
        </CardContent>
        <div className="flex justify-center items-center">
          <Button variant="classic" type="submit">
            Submit
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default Form;
