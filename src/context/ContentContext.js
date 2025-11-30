// src/context/ContentContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};

// Default content structure
const defaultContent = {
  hero: {
    title: "Transform Your Digital Vision",
    subtitle: "Global talent hub for any task. We promise quality and on-time delivery.",
    buttonText: "Explore"
  },
  portfolioHero: {
    title: "Innovate. Create. Elevate.",
    subtitle: "Your vision, our expertise - building digital solutions that propel your business forward"
  },
  products: [
    {
      id: 1,
      title: 'Custom Web Applications',
      icon: '🌐',
      description: 'Powerful, scalable web applications tailored to your business needs',
      features: ['Responsive Design', 'Cloud Deployment', 'Security Built-in', 'Ongoing Support']
    },
    {
      id: 2,
      title: 'Mobile App Solutions',
      icon: '📱',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Deployment']
    },
    {
      id: 3,
      title: 'E-Commerce Platforms',
      icon: '🛒',
      description: 'Complete online store solutions with payment integration',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'SEO Optimized']
    },
    {
      id: 4,
      title: 'AI & ML Solutions',
      icon: '🤖',
      description: 'Intelligent automation and data-driven insights',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Custom Models']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      icon: '☁️',
      description: 'Secure, scalable cloud architecture and deployment',
      features: ['AWS/Azure Setup', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring']
    },
    {
      id: 6,
      title: 'Consulting & Strategy',
      icon: '💡',
      description: 'Expert guidance for your digital transformation',
      features: ['Technology Assessment', 'Roadmap Planning', 'Team Training', 'Best Practices']
    }
  ],
  services: [
    {
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies',
      image: 'Webapplication.jpg'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      image: 'mobileapps.jpg'
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solutions',
      image: 'ecomerce.jpg'
    },
    {
      title: 'Business Solutions',
      description: 'Tailored solutions for your business growth',
      image: 'business.jpg'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages',
      image: 'landingpage.jpg'
    },
    {
      title: 'Portfolio Sites',
      description: 'Showcase your work professionally',
      image: 'portfoilo.jpg'
    }
  ],
  clients: [
    { id: 1, name: 'Moonlit', image: 'Moonlit.jpg' },
    { id: 2, name: 'Nukta', image: 'Nukta.png' },
    { id: 3, name: 'CombactCare', image: 'New1.PNG' },
    { id: 4, name: 'Big Boss Style', image: 'Big Boss Style.jfif' },
    { id: 5, name: 'Sir Plus Size Menswear', image: 'Sir+plus- Size Menswear.jfif' },
    { id: 6, name: 'Tecrix', image: 'Tecrix.jfif' },
    { id: 7, name: 'UAN', image: 'UAN.png' },
    { id: 8, name: 'AV Global Path', image: 'AV Global Path.png' }
  ],
  whyChooseUs: [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quality work delivered on time'
    },
    {
      icon: '🏆',
      title: 'Expert Team',
      description: 'Experienced professionals'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Creative and modern approaches'
    },
    {
      icon: '🤝',
      title: 'Client-Focused',
      description: 'Your success is our priority'
    }
  ],
  contact: {
    addressMalaysia: "Jalan Bangsar Utama 1, Bangsar, 59000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
    addressBangladesh: "Suite-342, Level-3, R H Home Centre, Green Rd, Dhaka, Bangladesh",
    phone1: "+880 1958-483962",
    phone2: "+880 01896-318091",
    email: "avtechkm@gmail.com",
    whatsapp: "8801958483962"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/infouias/",
    youtube: "https://www.youtube.com/@youtubuias",
    linkedin: "https://www.linkedin.com/company/universal-institute-for-advanced-studies%C2%A0-uias/",
    snapchat: "https://www.snapchat.com/@infouias"
  }
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(false);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  // Save content to localStorage
  const saveContent = (newContent) => {
    try {
      localStorage.setItem('siteContent', JSON.stringify(newContent));
      return true;
    } catch (error) {
      console.error('Error saving content:', error);
      return false;
    }
  };

  // Update content by section and field
  const updateContent = (section, field, value, index = null) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      
      if (index !== null) {
        // Update array item
        newContent[section] = [...prevContent[section]];
        newContent[section][index] = {
          ...newContent[section][index],
          [field]: value
        };
      } else if (field) {
        // Update object property
        newContent[section] = {
          ...prevContent[section],
          [field]: value
        };
      } else {
        // Replace entire section
        newContent[section] = value;
      }
      
      saveContent(newContent);
      return newContent;
    });
  };

  // Bulk update entire content
  const bulkUpdate = (newContent) => {
    setContent(newContent);
    saveContent(newContent);
  };

  // Reset to default content
  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('siteContent');
  };

  // Add item to array section
  const addItem = (section, item) => {
    setContent(prevContent => {
      const newContent = {
        ...prevContent,
        [section]: [...prevContent[section], item]
      };
      saveContent(newContent);
      return newContent;
    });
  };

  // Remove item from array section
  const removeItem = (section, index) => {
    setContent(prevContent => {
      const newContent = {
        ...prevContent,
        [section]: prevContent[section].filter((_, i) => i !== index)
      };
      saveContent(newContent);
      return newContent;
    });
  };

  const value = {
    content,
    loading,
    updateContent,
    bulkUpdate,
    resetContent,
    addItem,
    removeItem
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};