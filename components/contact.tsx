"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkroaww", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("⚠️ An error occurred. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "inyarko98@gmail.com",
      href: "mailto:inyarko98@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+233 (54) 503-1572",
      href: "tel:+233545031572",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amasaman, Accra",
      href: "https://www.google.com/maps/place/Amasaman+Police+Divisional+Headquarters/@5.7061922,-0.304526,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9f8a68b63d7b:0x5f05e7c92646228f!8m2!3d5.7061869!4d-0.3019511!16s%2Fg%2F11clwdb7jp?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Lets discuss how we can work together to
              bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Lets Talk</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I am always interested in hearing about new projects and
                  opportunities. Whether youre a company looking to hire, or
                  youre someone with an idea, I would love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={info.title}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover:scale-105 transition-transform"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
