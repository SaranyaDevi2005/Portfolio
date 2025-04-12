import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here if we had a backend
    // For now, just reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert("Thank you for your message! This form doesn't actually submit anywhere yet as it's just a portfolio demo.");
  };

  const contactInfoItems = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "saranyadevi974@gmail.com",
      href: "mailto:saranyadevi974@gmail.com"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91 6381379974",
      href: "tel:6381379974"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/saranya-devi2005",
      href: "https://www.linkedin.com/in/saranya-devi2005/"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/SaranyaDevi2005",
      href: "https://github.com/SaranyaDevi2005"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Feel free to reach out to me for collaboration opportunities, questions, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfoItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <i className={`${item.icon} text-primary-500`}></i>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">{item.label}</p>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-secondary-800 hover:text-primary-500 transition duration-300">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  // This would trigger the download in a real implementation
                  alert("In a real implementation, this would download the resume");
                }}
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-secondary-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition duration-300"
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
