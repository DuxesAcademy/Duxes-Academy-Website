import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    // Collect form data
    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwmzs22kR20a5kHVf4sWfdLicG9EFRxmxa3DitKZn9H94LiS9-IV8DZqi4lPmIEdBUAAA/exec", 
         //deployed Apps Script Web App link
        {
          method: "POST",
          mode: "no-cors", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 fade-in px-4">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with any questions or inquiries.
        </p>
      </motion.section>

      <section className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Information</h2>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-muted-foreground">Bengaluru</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:+918183032638" className="text-muted-foreground hover:text-primary">
                +91 8183032638
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium">WhatsApp</h3>
              <a
                href="https://wa.me/918183032638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                Chat with us
              </a>
            </div>
          </div>

          {/* Google Map 
          <div className="mt-8">
            <h3 className="font-medium mb-2">Our Location</h3>
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                title="Our Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.385028104044!2d77.546576!3d12.8829456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150917afeaa3%3A0xecdc6c3253bc3636!2sDuxes%20labs%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1746194993152!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          */}
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 bg-card border rounded-lg shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit phone number"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" type="text" placeholder="Subject of your message" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Write your message here..." rows={5} required />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
