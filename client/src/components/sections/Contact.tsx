import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here if backend was implemented
    // Since we're using HTML only, this is a placeholder
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This form is not currently connected to a backend server.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className="md:w-2/5">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:saranyadevi974@gmail.com" 
                      className="text-gray-700 hover:text-primary"
                    >
                      saranyadevi974@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:6381379974" 
                      className="text-gray-700 hover:text-primary"
                    >
                      +91 6381379974
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/saranya-devi2005" 
                      className="text-gray-700 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/saranya-devi2005
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/SaranyaDevi2005" 
                      className="text-gray-700 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/SaranyaDevi2005
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <form className="bg-white rounded-lg shadow-sm p-6" onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
