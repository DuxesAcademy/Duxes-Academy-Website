import React, { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { motion,  AnimatePresence  } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; 
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'; 
import path from "path";
import { FiCopy } from "react-icons/fi";


//Internship data
const internships =   
[
{
    id: 0,
    title: "Embedded Systems Internship",
    path: "/embeddedinternship",
    imageUrl: "/images/internship.jpeg",
    imageAlt: "Embedded internship",
    description:
      "Align with outcome-based education and academic internship requriments",
    status: "Completed",
    reviews: 3402,
    price: 20000,
    originalPrice: 25000,
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ayesha.jpeg",
        linkedin:
          "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin:
          "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
    ],
  }
]

// COURSES data
const courses = [

  {
    id: 0,
    title: "Embedded Product Development Bootcamp",
    path: "/embeddedproduct",
    imageUrl: "/images/embeddedproductdevelopmentbootcamp.jpeg",
    imageAlt: "Embedded System Development",
    description:
      "4-Day Intensive Bootcamp | Theory + Practical Sessions. Learn how real embedded products are designed, built, tested, and launched in industry — not just coded.",
    status: "Completed",
    reviews: 3402,
    price: 50000,
    originalPrice: 70000,
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ayesha.jpeg",
        linkedin:
          "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin:
          "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
    ],
  },


  {
    id: 1,
    title: "Embedded System Development (Generic, IoT, Automotive)",
    path: "/embeddedsystem",
    imageUrl: "/images/embeddedsystem2.png",
    imageAlt: "Embedded System Development",
    description:
      "A practical, project-driven introduction to embedded systems: microcontrollers, peripherals, low-level C, debugging, and embedded software workflow.",
    status: "Completed",
    reviews: 3402,
    price: 30000,
    originalPrice: 80000,
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ayesha.jpeg",
        linkedin:
          "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin:
          "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
    ],
  },

  {
    id: 2,
    title: " IoT & Consumer Electronics Design",
    path: "/iot",
    imageUrl:
      "/images/iot.png",
    imageAlt: "IoT & Consumer Electronics Design",
    description:
      "Covers IoT product development for consumer devices: connectivity, cloud integration, mobile UI, OTA updates, and productization concerns (power, cost, certification).",
    status: "Completed",
    reviews: 324,
     price: 42000,
    originalPrice: 84000,
    team: [
      {
        img: "/images/sidhanth.jpg",
        linkedin: "https://www.linkedin.com/in/siddhanth1809",
      },
      {
        img: "/images/hemanth.jpeg",
        linkedin:
          "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },

  {
    id: 3,
    title: "Linux & Real-Time Operating Systems for Embedded",
    path: "/linuxrtos",
    imageUrl:
      "/images/linuxrtos.png",
    imageAlt: "Linux & Real-Time Operating Systems for Embedded",
    description:
      "Hands-on work with Embedded Linux and RTOS (FreeRTOS, Zephyr): kernel basics, device drivers, cross-compilation, real-time scheduling, and debugging.",
    status: "Completed",
    reviews: 817,
     price: 48000,
    originalPrice: 89000,
    team: [
      {
        img: "/images/shobith.png",
        linkedin:
          "https://www.linkedin.com/in/kc-shobith-gowda-1613651b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ashwini.png",
        linkedin:
          "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },

  {
    id: 4,
    title: "Automotive Embedded Development",
    path: "/automotive",
    imageUrl:
      "/images/automotive.png",
    imageAlt: "Automotive Embedded Development",
    description:
      "Focused on automotive-grade embedded systems: AUTOSAR basics, CAN/CAN-FD, diagnostics, safety (ISO 26262), and real-time requirements.",
    status: "In Progress",
    reviews: 402,
    price: 50000,
    originalPrice: 91000,
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin:
          "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
    ],
  },

  {
    id: 5,
    title: "Low-Power Design & Wireless Systems",
    path: "/lpdws",
    imageUrl: "/images/lpd.png",
    imageAlt: "Low-Power Design & Wireless Systems",
    description:
      "Specialized course on battery-aware firmware, ultra-low-power MCU design, energy harvesting basics, and LPWAN technologies for long-life devices.",
    status: "Prototype Stage",
    reviews: 289,
    price: 55000,
    originalPrice: 94000,
    team: [
      {
        img: "/images/ashwini.png",
        linkedin:
          "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },

  {
    id: 6,
    title: "Embedded Machine Learning & Edge AI",
    path: "/emledgeai",
    imageUrl:
      "/images/edgeai.png",
    imageAlt: "Real-Time Operating Systems (RTOS)",
    description:
      "Teach ML model selection, quantization, and deployment on microcontrollers and edge devices using TensorFlow Lite Micro, CMSIS-NN, and TinyML tools.",
    status: "Prototype Stage",
    reviews: 198,
     price: 45000,
    originalPrice: 96000,
    team: [
      {
        img: "/images/ashwini.png",
        linkedin:
          "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/jeevan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
];




// Ongoing Projects data
const popularCourses = [
  {
    id: 1,
    path: "/frost",
    title: "FROST – Smart Hydration Reminder System",
    imageUrl: "/images/frost.svg",
    imageAlt: "IoT Smart Water Meter",
    description:
      "A wellness-focused IoT device that reminds users to stay hydrated using sensors, audio alerts, and BLE-based communication.",
    status: "Testing Phase",
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ayesha.jpeg",
        linkedin: "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin: "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
    ],
  },
  {
    id: 2,
    title: "Automated Storage Tower",
    path: "/autostore",
    imageUrl: "/images/autostore.jpeg",
    imageAlt: "Automated Storage Tower",
    description:
      "An autonomous,multi-level storage and retrieval system designed to handle luggage of varying sizes.Users can access the tower remotely using a secure OTP-based system ",
    status: "Completed",
    team: [
      {
        img: "/images/sidhanth.jpg",
        linkedin: "https://www.linkedin.com/in/siddhanth1809",
      },
      {
        img: "/images/hemanth.jpeg",
        linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      
    ],
  },
  {
    id: 3,
    title: "Bio-Medical Surgical Glove Pinhole Detection System",
    path: "/biomedical",
    imageUrl: "/images/biomedical.png",
    imageAlt: "Bio-Medical Surgical Glove Pinhole Detection System",
    description:
      "An automated glove-testing system designed to detect micro pinholes in surgical gloves using high-precision pressure sensors and control logic.",
    status: "Completed",
    team: [
      {
        img: "/images/shobith.png",
        linkedin: "https://www.linkedin.com/in/kc-shobith-gowda-1613651b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/ashwini.png",
        linkedin: "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      
    ],
  },

  {
    id: 4,
    title: "Virtual Lab – Remote Hardware Access Platform",
    path: "/virtuallab",
    imageUrl: "/images/virtuallab1.png",
    imageAlt: "Virtual Lab Platform",
    description:
      "A cloud-connected embedded experimentation platform that allows users to access, program, and monitor real hardware setups remotely .",
    status: "In Progress",
    team: [
      {
        img: "/images/jeevan.jpeg",
        linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/varun.jpg",
        linkedin: "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
      },
     
    ],
  },

  {
    id: 5,
    title: "Smart Breadboard",
    path: "/smartbreadboard",
    imageUrl: "/images/smartbreadboard.png",
    imageAlt: "Smart Breadboard",
    description:
      "An educational innovation designed to simplify circuit debugging and prototyping by organizing wiring and highlighting connection errors in real time.",
    status: "Prototype Stage",
    team: [
      {
        img: "/images/ashwini.png",
        linkedin: "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        img: "/images/jeevan.jpeg",
        linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      
    ],
  },

  {
    id: 6,
    title: "ROBOL – Kids Programmable Robot (“RORA”)",
    path: "/robokid",
    imageUrl: "/images/robol1.png",
    imageAlt: "ROBOL – Kids Programmable Robot (“RORA”)",
    description:
      "A screen-free programmable robot designed to teach children the fundamentals of programming and logic through hands-on interaction.",
    status: "Prototype Completed",
    team: [
      {
        img: "/images/raju.jpeg",
        linkedin: "https://www.linkedin.com/in/raju-chaluva",
      },
      {
        img: "/images/ayesha.jpeg",
        linkedin: "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      
    ],
  },

  {
    id: 7,
    title: "Industrial Water / Chemical Level Monitor & Controller",
    path: "/industrialmonitor",
    imageUrl: "/images/industrialmonitor.jpg",
    imageAlt: "Industrial Water / Chemical Level Monitor & Controller",
    description:
      "A reliable, intelligent system designed to monitor and control water or chemical levels in tanks and reservoirs automatically.",
    status: "Completed",
    team: [
      {
        img: "/images/prithviraj.jpeg",
        linkedin: "https://www.linkedin.com/in/prithviraj-mh-40020889?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/varsha.jpeg",
        linkedin: "https://www.linkedin.com/in/varsha-shetty-b46ba1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/hemanth.jpeg",
        linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },

  {
    id: 8,
    title: "Contactless Water Level Indicator / Controller",
    path: "/contactless",
    imageUrl: "/images/contactless.jpg",
    imageAlt: "Contactless Water Level Indicator / Controller",
    description:
      "A reliable, intelligent system designed to monitor and control water or chemical levels in tanks and reservoirs automatically.",
    status: "Testing Phase",
    team: [
      {
        img: "/images/prithviraj.jpeg",
        linkedin: "https://www.linkedin.com/in/prithviraj-mh-40020889?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/varsha.jpeg",
        linkedin: "https://www.linkedin.com/in/varsha-shetty-b46ba1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/hemanth.jpeg",
        linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },

  {
    id: 9,
    title: "Prostir – Smart Laboratory Stirrer",
    path: "/prostir",
    imageUrl: "/images/prostir.jpg",
    imageAlt: "Prostir – Smart Laboratory Stirrer",
    description:
      "A microcontroller-based lab stirrer that uses a BLDC motor and Anders Smart Rotary Knob for precise, real-time speed control.It ensures stable and vibration-free liquid mixing .",
    status: "Prototype Completed",
    team: [
     {
        img: "/images/prithviraj.jpeg",
        linkedin: "https://www.linkedin.com/in/prithviraj-mh-40020889?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/varsha.jpeg",
        linkedin: "https://www.linkedin.com/in/varsha-shetty-b46ba1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: "/images/hemanth.jpeg",
        linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },

];


// Tools & Technology data (names + pastel backgrounds)
const toolsData = {
  tools: [
    {
      label: "STM32CubeIDE",
      img: "/images/stm32.png",
      description: "An IDE from STMicroelectronics for STM32 development with integrated tools.",
    },
    {
      label: "Keil uVision",
      img: "/images/keil.jpg",
      description: "Industry-standard IDE for ARM microcontroller programming and debugging.",
    },
    {
      label: "ESP-IDF",
      img: "/images/espidf.jpg",
      description: "Espressif’s official development framework for ESP32 boards and projects.",
    },
    {
      label: "FreeRTOS",
      img: "/images/freertos.png",
      description: "A real-time operating system kernel for embedded devices with scheduling.",
    },
    {
      label: "Git & GitHub",
      img: "/images/github.jpg",
      description: "Version control and collaboration platform for modern development teams.",
    },
  ],
  hardware: [
    {
      label: "STM32 Dev Boards",
      img: "/images/stm32board.jpg",
      description: "Development boards for STM32 MCUs, perfect for prototyping and projects.",
    },
    {
      label: "ESP32 Kits",
      img: "/images/esp32.jpg",
      description: "Versatile microcontroller kits with WiFi and Bluetooth for IoT applications.",
    },
    {
      label: "Sensors",
      img: "/images/sensors.jpg",
      description: "Various sensors for environmental monitoring, robotics, and automation.",
    },
    {
      label: "Motors",
      img: "/images/motor.jpg",
      description: "Actuators for robotics and embedded systems projects requiring motion.",
    },
    {
      label: "Display",
      img: "/images/display.jpg",
      description: "LCDs and OLED displays for interfacing embedded devices with users.",
    },
  ],
  technology: [
    {
      label: "RTOS",
      img: "/images/rtos.png",
      description: "Real-time operating system for scheduling, multitasking, and efficiency.",
    },
    {
      label: "Communication",
      img: "/images/communication.jpg",
      description: "Protocols and buses like UART, SPI, CAN, and I2C for data transfer.",
    },
    {
      label: "Wireless",
      img: "/images/wireless.jpg",
      description: "Wireless communication like WiFi, Bluetooth, and LoRa for IoT systems.",
    },
    {
      label: "Low-power Design",
      img: "/images/lowpower.jpg",
      description: "Techniques to optimize energy consumption in battery-powered devices.",
    },
  ],
};



// Workshops data
const workshops = [
  {
    title: "Embedded Software Development Workshop",
    instructor: "Jane Smith",
    date: "To be Announced",
    buttonText: "Register for Workshop",
    link: "https://forms.gle/N9DzVYYzAikUHHDM8",
    image: "/images/workshop.png",
  },
  {
    title: "STM32 Embedded Bootcamp",
    instructor: "Alice Johnson",
    date: "To be Announced",
    buttonText: "Coming Soon",
    image: "/images/stm32.png",
  },
  {
    title: "Automotive Protocols in Action",
    instructor: "John Doe",
    date: "To be Announced",
    buttonText: "Coming Soon",
    image: "/images/auto.png",
  },
  {
    title: "FreeRTOS for Beginners",
    instructor: "Sarah Lee",
    date: "10-10-2025",
    buttonText: "Completed",
    image: "/images/freertos.png",
  },
  {
    title: "Debugging with Logic Analyzers",
    instructor: "Mark Davis",
    date: "22-09-2025",
    buttonText: "Completed",
    image: "/images/debuglogic.png",
  },
  
];


// Community data
const communityData = [
  {
    icon: "👥", // replace with actual SVG/icon if you want
    title: "Collaborative Learning",
    description:
      "Engage with peers on projects, discuss challenges, and share insights in a supportive, collaborative environment.",
  },
  {
    icon: "🎓",
    title: "Alumni Network",
    description:
      "Gain access to a powerful network of Duxes Academy graduates working at leading companies worldwide.",
  },
  {
    icon: "📢",
    title: "Exclusive Events",
    description:
      "Participate in webinars, workshops, and networking events with industry leaders and recruiters.",
  },
];


// Workflow Steps Data
const workflowSteps = [
  {
    icon: "🌐",
    title: "Choose Your Track",
    description:
      "Select from our specialized learning paths: IoT, Automotive, Robotics, or custom project ideation.",
  },
  {
    icon: "🛠️",
    title: "Get Started with Tools",
    description:
      "Access our comprehensive toolkit and environment setup for immediate hands-on experience.",
  },
  {
    icon: "📚",
    title: "Learn Through Projects",
    description:
      "Immerse yourself in real hardware projects, gaining practical skills and invaluable insights.",
  },
  {
    icon: "👨‍🏫",
    title: "Mentor Support",
    description:
      "Receive personalized feedback and guidance from industry experts dedicated to your growth.",
  },
  {
    icon: "🚀",
    title: "Showcase Your Work",
    description:
      "Build a public portfolio with your completed projects to impress potential employers.",
  },
  {
    icon: "🎯",
    title: "Start Your Journey",
    description:
      "Transition confidently into a job, freelance career, or launch your own startup with Duxes Academy.",
  },
];

const careerPaths = [
  {
    title: "Job Placement",
    description:
      "Secure your dream embedded engineering role with confidence and a strong portfolio.",
    btnColor: "bg-[#DE5769]",
  },
  {
    title: "Freelance Carrer",
    description:
      "Build a thriving independent career, taking on high-value embedded systems contracts.",
    btnColor: "bg-[#DE5769]",
  },
  {
    title: "Start a Startup ",
    description:
      "Translate your innovative ideas into real products and launch your own tech venture.",
    btnColor: "bg-[#DE5769]",
  },
];


const testimonials = [
  { id: 1, name: 'Alice Johnson', quote: 'This platform transformed my career! The courses are practical and engaging.', rating: 5, imageAlt: 'Smiling student Alice', imageDesc: 'Portrait of a happy student with a laptop' },
  { id: 2, name: 'Bob Williams', quote: 'Excellent instructors and a supportive community. Highly recommended!', rating: 5, imageAlt: 'Student Bob giving thumbs up', imageDesc: 'Student wearing headphones and smiling at the camera' },
  { id: 3, name: 'Charlie Brown', quote: 'I learned so much in a short time. The flexibility is perfect for my schedule.', rating: 4, imageAlt: 'Student Charlie studying', imageDesc: 'Focused student writing notes in a notebook' },
];


const HomePage = () => {
  const [activeTab, setActiveTab] = useState("tools");
  const [currentImage, setCurrentImage] = useState(0);

  // ---- Image rotation setup ----
  const images = [
    "/images/heroimgnew.jpg", // add your 1st image path
     "/images/heroimg2.svg", // add your 2nd image path
    "/images/internship.jpeg", // add your 3rd image path
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-mt-6 space-y-16 md:space-y-24 fade-in  font-['Roboto']">
      {/*  overflow-x-hidden    */}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-16 md:py-24 "
      >
        {/* --- For First Image (Text + Image layout) --- */}
        {currentImage === 0 && (
  /* --------------------------------------------- */
  /*                SLIDE 1 Layout                 */
  /* --------------------------------------------- */
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
    {/* Left Text Section */}
    <div className="-mt-10 md:-mt-[160px] md:w-1/2 text-center md:text-left">
      <div className="md:mt-20">
        <h1
          className="-mb-2 text-4xl md:text-5xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <span className="block text-[#10899A]">
            Embedded Software{" "}
          </span>
          <span className="block text-[#DE5769]">Development</span>
          <span className="block text-[#DE5769]">Workshop</span>
        </h1>

        <p
          className="text-sm md:text-2xl text-[#10899A] max-w-[600px] mx-auto md:mx-0 mb-2"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Learn to build, program, and launch real embedded products.
          {/* Job-Ready || Freelance-Ready || Startup-Ready */}
        </p>

        <p
          className="text-[#000000] text-base md:text-base max-w-[530px] mx-auto md:mx-0 mb-12"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Join our hands-on workshop and master embedded development
          through real hardware projects, guided mentorship, and live
          demos.
        </p>
      </div>

      <div className="md:-mt-6 -mt-6">
        <motion.div className="md:mt-10">
          <Button
            size="lg"
            asChild
            className="bg-[#DE5769] hover:bg-[#007080] text-white text-lg shadow-md px-5 py-2 rounded-md"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <Link to="https://forms.gle/N9DzVYYzAikUHHDM8">
              Register for Workshop
            </Link>

            {/*Old "Join Now" button Google Form link<Link to="https://forms.gle/wR776MZgv63c58mWA">Join now</Link>*/}
          </Button>
          <p className="text-sm ">
            <i>*Limited seats – starting soon!</i>
          </p>

          {/* 
            <Button
              size="lg"
              asChild
              className="bg-[#DE5769] hover:bg-[#007080] text-white shadow-md px-6 py-2 rounded-md ml-4"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <Link to="https://forms.gle/DME3kx2Waq8krSom9">Hire Our Talent</Link>
            </Button>
          */}
        </motion.div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative md:-mt-24 md:w-1/2 flex justify-center items-center overflow-hidden">

      {/* Top-left Solid Circle 
      <AnimatePresence>
        {currentImage === 0 && (
          <motion.div
            key="circle-top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] bg-[#A5D6E9] rounded-full md:top-14 top-0 left-6 md:left-24 z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Bottom-right Solid Circle   
      <AnimatePresence>
        {currentImage === 0 && (
          <motion.div
            key="circle-bottom-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] bg-[#A5D6E9] rounded-full md:bottom-14 bottom-4 right-0 md:right-[80px] z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Dashed Swirl  
      <AnimatePresence>
        {currentImage === 0 && (
          <motion.svg
            key="swirl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute -top-[45px] md:top-[-40px] -right-[40px] md:right-[-40px] md:w-[300px] h-[200px] md:h-[300px] z-0"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270 30C250 80 150 100 190 180C220 240 100 240 60 180"
              stroke="#A5D6E9"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      */}

      {/* Main Image (Slide 1) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[0]}
          src={images[0]}
          alt="Workshop slide 1 image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:w-full md:h-[400px] w-[450px] h-[250px] rounded-sm object-contain"
        />
      </AnimatePresence>

    </div>
  </div>
)}



{currentImage === 1 && (
  /* --------------------------------------------- */
  /*                SLIDE 2 Layout                 */
  /* --------------------------------------------- */
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
    {/* Left Text Section */}
    <div className="-mt-10 md:-mt-[160px] md:w-1/2 text-center md:text-left">
      <div className="md:mt-20">
        <h1
          className="-mb-2 text-4xl md:text-5xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <span className="block text-[#10899A]">
            Embedded System{" "}
          </span>
          <span className="block text-[#DE5769]">Development</span>
          <span className="block text-[#DE5769]">Course</span>
        </h1>

        <p
          className="text-sm md:text-2xl text-[#10899A] max-w-[600px] mx-auto md:mx-0 mb-2"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Learn to build, program, and launch real embedded products.
          {/* Job-Ready || Freelance-Ready || Startup-Ready */}
        </p>

        <p
          className="text-[#000000] text-base md:text-base max-w-[530px] mx-auto md:mx-0 mb-12"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          A practical project-driven introduction to embedded systems: microcontrollers, peripherals, low-level C & embedded software workflow.
        </p>
      </div>

      <div className="md:-mt-6 -mt-6">
        <motion.div className="md:mt-10">
          <Button
            size="lg"
            asChild
            className="bg-[#DE5769] hover:bg-[#007080] text-white text-lg shadow-md px-5 py-2 rounded-md"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <Link to="https://forms.gle/N9DzVYYzAikUHHDM8">
              Register for Course
            </Link>

            {/*Old "Join Now" button Google Form link<Link to="https://forms.gle/wR776MZgv63c58mWA">Join now</Link>*/}
          </Button>
          <p className="text-sm ">
            <i>*Limited seats – starting soon!</i>
          </p>
        </motion.div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative md:-mt-24 md:w-1/2 flex justify-center items-center overflow-hidden">

      {/* Top-left Solid Circle 
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.div
            key="circle-top-left-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] bg-[#A5D6E9] rounded-full md:top-14 top-0 left-6 md:left-24 z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Bottom-right Solid Circle   
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.div
            key="circle-bottom-right-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] bg-[#A5D6E9] rounded-full md:bottom-14 bottom-4 right-0 md:right-[80px] z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Dashed Swirl  
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.svg
            key="swirl-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute -top-[45px] md:top-[-40px] -right-[40px] md:right-[-40px] md:w-[300px] h-[200px] md:h-[300px] z-0"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270 30C250 80 150 100 190 180C220 240 100 240 60 180"
              stroke="#A5D6E9"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      */}

      {/* Main Image (Slide 2) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[1]}
          src={images[1]}
          alt="Workshop slide 2 image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:w-full md:h-[400px] w-[450px] h-[250px] rounded-sm object-contain"
        />
      </AnimatePresence>

    </div>
  </div>
)}



{currentImage === 2 && (
  /* --------------------------------------------- */
  /*                SLIDE 3 Layout                 */
  /* --------------------------------------------- */
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
    {/* Left Text Section */}
    <div className="-mt-10 md:-mt-[160px] md:w-1/2 text-center md:text-left">
      <div className="md:mt-20">
        <h1
          className="-mb-2 text-4xl md:text-5xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <span className="block text-[#10899A]">
            Embedded Systems{" "}
          </span>
          <span className="block text-[#DE5769]">Internship</span>
         <span className="block text-[#DE5769]">Program</span> 
        </h1>

        <p
          className="text-sm md:text-2xl text-[#10899A] max-w-[600px] mx-auto md:mx-0 mb-2"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Experience, Learn, Grow: Intern with Us!
          {/* Job-Ready || Freelance-Ready || Startup-Ready */}
        </p>

        <p
          className="text-[#000000] text-base md:text-base max-w-[530px] mx-auto md:mx-0 mb-12"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
           A practical, project-driven embedded systems internship covering microcontrollers, peripherals, low-level C programming, debugging, and real-world embedded software workflows.
        </p>
      </div>

      <div className="md:-mt-6 -mt-6">
        <motion.div className="md:mt-10">
          <Button
            size="lg"
            asChild
            className="bg-[#DE5769] hover:bg-[#007080] text-white text-lg shadow-md px-5 py-2 rounded-md"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <Link to="https://forms.gle/N9DzVYYzAikUHHDM8">
              Register for Internship
            </Link>

            {/*Old "Join Now" button Google Form link<Link to="https://forms.gle/wR776MZgv63c58mWA">Join now</Link>*/}
          </Button>
          <p className="text-sm ">
            <i>*Limited seats – starting soon!</i>
          </p>
        </motion.div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative md:-mt-24 md:w-1/2 flex justify-center items-center overflow-hidden">

      {/* Top-left Solid Circle 
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.div
            key="circle-top-left-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] bg-[#A5D6E9] rounded-full md:top-14 top-0 left-6 md:left-24 z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Bottom-right Solid Circle   
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.div
            key="circle-bottom-right-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] bg-[#A5D6E9] rounded-full md:bottom-14 bottom-4 right-0 md:right-[80px] z-0"
          ></motion.div>
        )}
      </AnimatePresence>
      */}

      {/* Dashed Swirl  
      <AnimatePresence>
        {currentImage === 1 && (
          <motion.svg
            key="swirl-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute -top-[45px] md:top-[-40px] -right-[40px] md:right-[-40px] md:w-[300px] h-[200px] md:h-[300px] z-0"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270 30C250 80 150 100 190 180C220 240 100 240 60 180"
              stroke="#A5D6E9"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      */}

      {/* Main Image (Slide 2) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[2]}
          src={images[2]}
          alt="Workshop slide 2 image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:w-full md:h-[400px] w-[450px] h-[250px] rounded-sm object-contain"
        />
      </AnimatePresence>

    </div>
  </div>
)}



{/* --- Dot Indicators --- */}
<div className="absolute md:bottom-44 bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
  {images.map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        currentImage === index
          ? "bg-[#DE5769] scale-110"
          : "bg-gray-300"
      }`}
    ></div>
  ))}
</div>

        
      <br /> <br />
         <div className="md:mt-12 mt-2 bg-[#10899A] py-2 md:py-2 w-full">
        <div className="flex justify-center items-center md:gap-80 gap-4 flex-wrap md:text-lg font-semibold -mt-2">
        </div>
        </div>
      </motion.section>



      {/* COURSES SECTION */}
      <section
      id="courses"
      className="w-full py-16 slide-in-up scroll-mt-40 md:scroll-mt-64">
      <div className="-mt-52 bg-[#FAFAFA] py-10 md:py-26 md:h-[2150px] container">
        {/* STATE */}
        {/*
          Modal state must live inside section
        */}
        {(() => {
          // Modal and form states
          const [isFormOpen, setIsFormOpen] = useState(false);
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [copied, setCopied] = useState(false);
          const [selectedCourse, setSelectedCourse] = useState(null);

          // Form fields & validation
          const [name, setName] = useState("");
          const [phone, setPhone] = useState("");
          const [email, setEmail] = useState("");
          const [formError, setFormError] = useState("");
          const [submitting, setSubmitting] = useState(false);

       
          const SHEET_ENDPOINT =
            "https://script.google.com/macros/s/AKfycbwvrIFyxt30ZUp1dZCEgT_dbgYdqJerlk5-vAkrd7oLboi6BX5wEG_BMomoLcTkhtu8/exec";

          // If you set a SECRET_TOKEN in the Apps Script, put the same value here.
          // If you didn't set one, leave as an empty string.
          const SHEET_SECRET = ""; // e.g. "my-client-secret" or ""

          const upiId = "duxeslabsprivatelimited.9535910144.ibz@icici";
          const whatsappNumber = "916363672060";

          const copyUpi = () => {
            try {
              navigator.clipboard.writeText(upiId);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch (err) {
              console.error("Clipboard copy failed", err);
            }
          };

          const validateEmail = (value) => {
            return /^\S+@\S+\.\S+$/.test(value);
          };

          const handleRegisterClick = (course) => {
            setSelectedCourse(course);
            // Open the info-collection form first (not the payment modal)
            setIsFormOpen(true);
            setFormError("");
            setName("");
            setPhone("");
            setEmail("");
          };

          const handleFormSubmit = async (e) => {
            e && e.preventDefault();
            setFormError("");

            // Basic validation
            if (!name.trim()) {
              setFormError("Please enter your name.");
              return;
            }
            if (!phone.trim()) {
              setFormError("Please enter your phone number.");
              return;
            }
            if (!email.trim() || !validateEmail(email.trim())) {
              setFormError("Please enter a valid e-mail address.");
              return;
            }
            if (!selectedCourse) {
              setFormError("No course selected. Please try registering again.");
              return;
            }

            setSubmitting(true);

            try {
              // Important CORS fix:
              // Make the POST a "simple request" so the browser won't send a preflight OPTIONS.
              // To do that, send form-encoded data (application/x-www-form-urlencoded) and DO NOT set custom headers.
              // Apps Script doPost will receive form data in e.parameter.
              const params = new URLSearchParams();
              params.append("name", name.trim());
              params.append("phone", phone.trim());
              params.append("email", email.trim());
              params.append("courseId", selectedCourse.id ?? "");
              params.append("courseTitle", selectedCourse.title ?? "");
              params.append("timestamp", new Date().toISOString());
              if (SHEET_SECRET) params.append("secret", SHEET_SECRET);

              // Do not set 'Content-Type' header here. Fetch will set it to
              // application/x-www-form-urlencoded which qualifies as a simple request (no preflight).
              const res = await fetch(SHEET_ENDPOINT, {
                method: "POST",
                body: params,
                // mode: "cors" is default; no custom headers allowed for simple request
              });

              // Note: when sending a simple request to Apps Script exec URL (Anyone, even anonymous),
              // the response will generally be OK. Apps Script web apps don't allow custom response headers,
              // but a simple POST avoids the preflight and will succeed.
              if (!res.ok) {
                // Attempt to read response text for more info
                const text = await res.text().catch(() => "");
                throw new Error(
                  `Submission failed: ${res.status} ${res.statusText} ${text}`
                );
              }

              // On success: close form and show existing payment modal unchanged
              setIsFormOpen(false);
              setIsModalOpen(true);
            } catch (err) {
              console.error("Error submitting form to sheet endpoint:", err);
              setFormError(
                "Failed to submit details. Please try again or contact support."
              );
            } finally {
              setSubmitting(false);
            }
          };

          return (
            <>
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                Courses Offered by Duxes Academy
              </h2>
              <p className="text-center text-sm md:text-base text-[#000000] mb-12">
                Empowering learners with industry-focused, practical courses designed to build strong skills and advance professional growth
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-center"
                  >
                    <Card className="w-[360px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200">
                      {/* IMAGE */}
                      <img
                        className="w-full h-[310px] object-fill"
                        alt={course.imageAlt}
                        src={course.imageUrl}
                      />

                      {/* CONTENT */}
                      <div className="px-5 py-4">
                        {/* REVIEWS */}
                        <div className="flex items-center text-[#f39c12] text-sm mb-2">
                          <span className="text-lg">★★★★★</span>
                          <span className="text-gray-600 ml-2">
                            ({course.reviews ?? "180 Reviews"})
                          </span>
                        </div>

                        {/* TITLE */}
                        <h3 className="text-[20px] font-bold mb-2">
                          {course.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-gray-700 mb-5">
                          {course.description}
                        </p>

                        {/* PRICE */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[20px] font-bold">
                              ₹{course.price ?? "15000"}
                            </span>
                            <span className="text-gray-400 line-through ml-2">
                              ₹{course.originalPrice ?? "30000"}
                            </span>
                          </div>

                          <Link
                            to={course.path}
                            className="text-[#DE5769] hover:text-[#10899A] text-sm font-semibold"
                          >
                            Learn More →
                          </Link>
                        </div>

                        {/* REGISTER BUTTON */}
                        <div className="flex justify-center mt-4">
                          <button
                            onClick={() => handleRegisterClick(course)}
                            className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* FORM MODAL (shown BEFORE payment modal) */}
              {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                  <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
                    {/* CLOSE */}
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                    >
                      ✕
                    </button>

                    <h3 className="text-xl font-bold text-center mb-4">
                      Tell us about yourself
                    </h3>

                    <p className="text-sm text-center text-gray-600 mb-4">
                      Please provide your details so we can confirm your registration before payment.
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <input
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="Phone number"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">E-mail</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      {formError && (
                        <p className="text-red-600 text-xs text-center">{formError}</p>
                      )}

                      <div className="flex justify-center mt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
                        >
                          {submitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* MODAL (payment modal — unchanged layout & structure) */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                  <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
                    {/* CLOSE */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                    >
                      ✕
                    </button>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-center mb-4">
                      Complete Your Registration
                    </h3>

                    {/* QR CODE */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/upiqr.jpeg"
                        alt="UPI QR Code"
                        className="w-40 h-40 object-contain"
                      />
                    </div>

                    {/* UPI ID */}
                    <div
                      onClick={copyUpi}
                      className="bg-gray-100 cursor-pointer flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium mb-2 hover:bg-gray-200"
                    >
                      <span>{upiId}</span>

                      <FiCopy
                        className="text-gray-500 text-lg hover:text-black"
                        title="Copy UPI ID"
                      />

                      {/* If using MdContentCopy instead */}
                      {/*
                      <MdContentCopy
                        className="text-gray-500 text-lg hover:text-black"
                        title="Copy UPI ID"
                      />
                      */}
                    </div>

                    {copied && (
                      <p className="text-green-600 text-xs text-center mb-3">
                        UPI ID copied to clipboard
                      </p>
                    )}

                    {/* SHARE PAYMENT */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello Duxes Academy 👋

I would like to register for the course:
📘 *${selectedCourse?.title}*

I have completed the payment via UPI.
Please guide me with the next steps.

Thank you.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-[#10899A]  text-white py-2 rounded-lg font-semibold transition-all"
                    >
                      Share Payment Details
                    </a>
                  </div>
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>


{/* INTERNSHIP SECTION --- */}
<section
      id="internship"
      className="w-full py-16 slide-in-up scroll-mt-40 md:scroll-mt-64">
      <div className="-mt-52  py-10 md:py-26 container">
        {/* STATE */}
        {/*
          Modal state must live inside section
        */}
        {(() => {
          // Modal and form states
          const [isFormOpen, setIsFormOpen] = useState(false);
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [copied, setCopied] = useState(false);
          const [selectedCourse, setSelectedCourse] = useState(null);

          // Form fields & validation
          const [name, setName] = useState("");
          const [phone, setPhone] = useState("");
          const [email, setEmail] = useState("");
          const [formError, setFormError] = useState("");
          const [submitting, setSubmitting] = useState(false);

       
          const SHEET_ENDPOINT =
            "https://script.google.com/macros/s/AKfycbwvrIFyxt30ZUp1dZCEgT_dbgYdqJerlk5-vAkrd7oLboi6BX5wEG_BMomoLcTkhtu8/exec";

          // If you set a SECRET_TOKEN in the Apps Script, put the same value here.
          // If you didn't set one, leave as an empty string.
          const SHEET_SECRET = ""; // e.g. "my-client-secret" or ""

          const upiId = "duxeslabsprivatelimited.9535910144.ibz@icici";
          const whatsappNumber = "916363672060";

          const copyUpi = () => {
            try {
              navigator.clipboard.writeText(upiId);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch (err) {
              console.error("Clipboard copy failed", err);
            }
          };

          const validateEmail = (value) => {
            return /^\S+@\S+\.\S+$/.test(value);
          };

          const handleRegisterClick = (course) => {
            setSelectedCourse(course);
            // Open the info-collection form first (not the payment modal)
            setIsFormOpen(true);
            setFormError("");
            setName("");
            setPhone("");
            setEmail("");
          };

          const handleFormSubmit = async (e) => {
            e && e.preventDefault();
            setFormError("");

            // Basic validation
            if (!name.trim()) {
              setFormError("Please enter your name.");
              return;
            }
            if (!phone.trim()) {
              setFormError("Please enter your phone number.");
              return;
            }
            if (!email.trim() || !validateEmail(email.trim())) {
              setFormError("Please enter a valid e-mail address.");
              return;
            }
            if (!selectedCourse) {
              setFormError("No course selected. Please try registering again.");
              return;
            }

            setSubmitting(true);

            try {
              // Important CORS fix:
              // Make the POST a "simple request" so the browser won't send a preflight OPTIONS.
              // To do that, send form-encoded data (application/x-www-form-urlencoded) and DO NOT set custom headers.
              // Apps Script doPost will receive form data in e.parameter.
              const params = new URLSearchParams();
              params.append("name", name.trim());
              params.append("phone", phone.trim());
              params.append("email", email.trim());
              params.append("courseId", selectedCourse.id ?? "");
              params.append("courseTitle", selectedCourse.title ?? "");
              params.append("timestamp", new Date().toISOString());
              if (SHEET_SECRET) params.append("secret", SHEET_SECRET);

              // Do not set 'Content-Type' header here. Fetch will set it to
              // application/x-www-form-urlencoded which qualifies as a simple request (no preflight).
              const res = await fetch(SHEET_ENDPOINT, {
                method: "POST",
                body: params,
                // mode: "cors" is default; no custom headers allowed for simple request
              });

              // Note: when sending a simple request to Apps Script exec URL (Anyone, even anonymous),
              // the response will generally be OK. Apps Script web apps don't allow custom response headers,
              // but a simple POST avoids the preflight and will succeed.
              if (!res.ok) {
                // Attempt to read response text for more info
                const text = await res.text().catch(() => "");
                throw new Error(
                  `Submission failed: ${res.status} ${res.statusText} ${text}`
                );
              }

              // On success: close form and show existing payment modal unchanged
              setIsFormOpen(false);
              setIsModalOpen(true);
            } catch (err) {
              console.error("Error submitting form to sheet endpoint:", err);
              setFormError(
                "Failed to submit details. Please try again or contact support."
              );
            } finally {
              setSubmitting(false);
            }
          };

          return (
            <>
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
         Internship Offered by Duxes Academy
              </h2>
              <p className="text-center text-sm md:text-base text-[#000000] mb-12">
                Equipping learners through industry-focused internships and hands-on courses that build job-ready skills and advance professional growth.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {internships.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-center"
                  >
                    <Card className="w-[360px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200">
                      {/* IMAGE */}
                      <img
                        className="w-full h-[380px] object-contain"
                        alt={course.imageAlt}
                        src={course.imageUrl}
                      />

                      {/* CONTENT */}
                      <div className="px-5 py-4">
                        {/* REVIEWS 
                        <div className="flex items-center text-[#f39c12] text-sm mb-2">
                          <span className="text-lg">★★★★★</span>
                          <span className="text-gray-600 ml-2">
                            ({course.reviews ?? "180 Reviews"})
                          </span>
                        </div> */}

                        {/* TITLE */}
                        <h3 className="text-[20px] font-bold mb-2">
                          {course.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-gray-700 mb-5">
                          {course.description}
                        </p>

                        {/* PRICE */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[20px] font-bold">
                              ₹{course.price ?? "15000"}
                            </span>
                            <span className="text-gray-400 line-through ml-2">
                              ₹{course.originalPrice ?? "30000"}
                            </span>
                          </div>

                          <Link
                            to={course.path}
                            className="text-[#DE5769] hover:text-[#10899A] text-sm font-semibold"
                          >
                            Learn More →
                          </Link>
                        </div>

                        {/* REGISTER BUTTON */}
                        <div className="flex justify-center mt-4">
                          <button
                            // onClick={() => handleRegisterClick(course)}
                            className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
                          >
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGedLLa1T8Jdmi3EOEBP-MaTBUJHanTimsafRuUMX4Pova1A/viewform">Register</a>
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* FORM MODAL (shown BEFORE payment modal) */}
              {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                  <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
                    {/* CLOSE */}
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                    >
                      ✕
                    </button>

                    <h3 className="text-xl font-bold text-center mb-4">
                      Tell us about yourself
                    </h3>

                    <p className="text-sm text-center text-gray-600 mb-4">
                      Please provide your details so we can confirm your registration before payment.
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <input
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="Phone number"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">E-mail</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      {formError && (
                        <p className="text-red-600 text-xs text-center">{formError}</p>
                      )}

                      <div className="flex justify-center mt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
                        >
                          {submitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* MODAL (payment modal — unchanged layout & structure) */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                  <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
                    {/* CLOSE */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                    >
                      ✕
                    </button>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-center mb-4">
                      Complete Your Registration
                    </h3>

                    {/* QR CODE */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/upiqr.jpeg"
                        alt="UPI QR Code"
                        className="w-40 h-40 object-contain"
                      />
                    </div>

                    {/* UPI ID */}
                    <div
                      onClick={copyUpi}
                      className="bg-gray-100 cursor-pointer flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium mb-2 hover:bg-gray-200"
                    >
                      <span>{upiId}</span>

                      <FiCopy
                        className="text-gray-500 text-lg hover:text-black"
                        title="Copy UPI ID"
                      />

                      {/* If using MdContentCopy instead */}
                      {/*
                      <MdContentCopy
                        className="text-gray-500 text-lg hover:text-black"
                        title="Copy UPI ID"
                      />
                      */}
                    </div>

                    {copied && (
                      <p className="text-green-600 text-xs text-center mb-3">
                        UPI ID copied to clipboard
                      </p>
                    )}

                    {/* SHARE PAYMENT */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello Duxes Academy 👋

I would like to register for the course:
📘 *${selectedCourse?.title}*

I have completed the payment via UPI.
Please guide me with the next steps.

Thank you.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-[#10899A]  text-white py-2 rounded-lg font-semibold transition-all"
                    >
                      Share Payment Details
                    </a>
                  </div>
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>


{/* Workshops Section */}
      <section
      id="workshop"
       className="w-full font-['Roboto'] scroll-mt-20 md:scroll-mt-20">
  <div className="md:-mt-40 -mt-32 py-10 md:py-20 md:h-[930px] max-w-7xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Upcoming & Popular Workshops
      </h2>
      <p className="mt-3 text-base md:text-base">
        Enhance your skills with our intensive, hands-on workshops covering
        the latest technologies and industry best practices.
      </p>
    </div>

    {/* Workshop Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {workshops.map((workshop, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="h-40 w-full overflow-hidden">
            <img
              src={workshop.image}
              alt={workshop.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg text-center font-semibold text-gray-900">
              {workshop.title}
            </h3>
            <p className="text-sm text-center text-gray-600 mt-1">
              Date: <span className="font-medium">{workshop.date}</span>
            </p>

            {/* Button */}
            <div className="mt-auto pt-4">
              {workshop.link ? (
                <a
                  href={workshop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                >
                  {workshop.buttonText}
                </a>
              ) : (
                <button className="w-full border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
                  {workshop.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      

      {/* Ongoing Projects Section */}
      <section
      id="running-project"
      className="w-full py-28 slide-in-up scroll-mt-20 md:scroll-mt-40"
     >
      <div className="-mt-48 bg-[#FAFAFA] py-10 md:py-14 md:h-[2150px] container">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Ongoing Projects by Duxes Learners
        </h2>
        <p className="text-center text-sm md:text-base text-[#000000] mb-12">
          See the innovation in action. Our students are building real-world
          solutions every day.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Card className="w-[370px]  bg-white rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                {/* Image */}
                <div className="relative">
                  <img
                    className="w-full h-[280px] object-fill"
                    alt={course.imageAlt}
                    src={course.imageUrl}
                  />
                </div>

                {/* Content */}
                <CardHeader className="px-5 pt-4 pb-2">
                  <CardTitle className="text-lg font-semibold leading-tight text-[#000000]">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-5 pb-6 flex-grow flex flex-col">
                  {/* Status */}
                  <p className="text-sm text-[#E53935] font-medium mb-2">
                    Status:{" "}
                    <span className="text-[#10899A]">{course.status}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#000000] mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* View Details Button */}
                  <div className="flex justify-center mb-6">
                    <Button
                      asChild
                      className="bg-[#DE5769] hover:bg-[#007080] text-white text-sm font-medium px-4 py-2 rounded-md"
                    >
                        <Link to={course.path}>View Details</Link>
                    </Button>
                  </div>

                  {/* Working By */}
                  <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold text-[#000000] whitespace-nowrap">
                   Developing by:
                  </p>
                  <div className="flex -space-x-1">
                    {course.team.map((member, i) => (
                      <a
                        key={i}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={member.img}
                          alt="Team member"
                          className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom description */}
        <p className="text-center text-xs md:text-sm text-[#000000] mt-16 max-w-4xl mx-auto">
          Track progress, inspire innovation, and explore the future of embedded
          systems. Find your next project idea with Duxes Academy.
        </p>
      </div>
    </section>


   
      {/* Workflow Section*/}
     <section id="workflow"
     className="w-full py-20 bg-white font-['Roboto'] scroll-mt-40 md:scroll-mt-64">
      <div className="md:-mt-80 -mt-48 py-10 md:py-36  container  mx-auto px-4 text-center">
        {/* bg-[#FAFAFA] */}

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
          Your Journey at Duxes Academy
        </h2>
        <p className="text-black mt-3 max-w-2xl mx-auto text-sm md:text-base">
          From foundational concepts to career launch, here's how we empower
          your transformation into a skilled embedded systems engineer.
        </p>

        {/* Workflow Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon Placeholder (replace with svg if needed) */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E8F9FA] text-2xl">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#0A0A0A] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Career Paths */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {careerPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#10899A] text-left mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-left mb-4">
                {path.description}
              </p>
              <div className="flex justify-start">
                <button
                className={`${path.btnColor} text-white font-medium text-sm px-3 py-2 rounded-md  hover:opacity-90 transition`}
                >
              <a href="https://forms.gle/wR776MZgv63c58mWA">Get This Plan</a>
            </button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     
       
     {/* Why Duxes Academy is Different Section */}
    <section id="why-us"
    className="w-full py-16 md:py-1 slide-in-up scroll-mt-40 md:scroll-mt-80">
      <div className="md:-mt-60 -mt-48 bg-[#EFFDFE] md:h-[570px] py-10 md:py-16 container mx-auto px-4 text-center font-['Roboto']">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">
          Why Duxes Academy is Different
        </h2>
        <p className="text-sm md:text-sm text-[#000000] mb-2">
          We go beyond traditional education to equip you with real-world skills and connections
        </p>
        <p className="text-[#10899A] text-sm md:text-base font-medium mb-10 ">
          With Duxes, you gain skills, build a portfolio, and connect directly with hiring partners.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FFFFFF]">
                <th className="text-center py-3 px-4 text-[#10899A] font-semibold text-base md:text-lg">
                  Features
                </th>
                <th className="text-center py-3 px-4 text-[#10899A] font-semibold text-base md:text-lg">
                  Duxes Academy
                </th>
                <th className="text-center py-3 px-4 text-[#10899A] font-semibold text-base md:text-lg">
                  Others
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4 px-4 font-semibold text-sm md:text-base text-gray-800 text-center">
                  Learning Approach
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Project-based, Practical
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Theory-heavy, less hands-on
                </td>
              </tr>
              <tr className="bg-[#FFFFFF]">
                <td className="py-4 px-4 font-semibold text-sm md:text-base text-[#000000] text-center">
                  Mentorship
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  1:1 Industry Expert Guidance
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Limited, General-Support
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-sm md:text-base text-[#000000] text-center">
                  Portfolio Building
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Public Project Showcase
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Internal Project only
                </td>
              </tr>
              <tr className="bg-[#FFFFFF]">
                <td className="py-4 px-4 font-semibold text-sm md:text-base text-[#000000] text-center">
                  Career Readiness
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Job, Freelance, Startup-ready
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Basic Skill acquisition
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-sm md:text-base text-[#000000]text-center">
                  Community
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Active, Supportive network
                </td>
                <td className="py-4 px-4 text-sm md:text-base text-[#000000] text-center">
                  Passive, Less engagement
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


      

    
      {/* Community Section */}
      <section id="community"
      className="w-full py-0 bg-white font-['Roboto'] scroll-mt-20 md:scroll-mt-58">
       <div className="-mt-24 bg-[#FAFAFA] h-[530px] py-10 md:py-20 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Thriving Community
        </h2>
        <p className="text-[#000000] mb-12 text-base md:text-base">
          Beyond the classroom, Duxes Academy offers a supportive and engaging
          community where you can connect, learn, and grow.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg shadow-sm p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-[#0097A7]">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#000] text-sm md:text-base mb-6">
                {item.description}
              </p>

              {/* Learn More */}
              <a
                href=""
                className="text-[#000000] font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>



      {/* Tools & Technology Section */}
    <section
  id="tools-tech"
  className="w-full py-36 bg-white -scroll-mt-[520px] md:scroll-mt-52"
>
  <div className="md:-mt-44 mt-[440px] container mx-auto px-4 font-['Roboto']">
    {/* Heading + sub text */}
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Tools & Technology
    </h2>
    <p className="text-center text-sm md:text-base text-[#000] mt-2">
      Master the Embedded Technology Stack with professional-grade tools
    </p>

    {/* Tabs */}
    <div className="mt-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 md:gap-24 items-center text-center">
        {[
          { key: "tools", label: "Tools" },
          { key: "hardware", label: "Hardware" },
          { key: "technology", label: "Technology Stack" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={[
              "py-5 px-2 text-sm md:text-2xl font-semibold transition border-b-4",
              activeTab === t.key
                ? "border-[#10899A] "
                : "border-transparent",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* thin divider under tabs */}
      <div className="absolute left-0 right-0 -bottom-0 border-b border-[#10899A]" />
    </div>

    {/* Cards Grid */}
    <div className="md:mt-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {toolsData[activeTab].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {/* Slightly smaller image */}
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-44 md:h-52 object-contain"
          />
          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-[#0A0A0A] mb-2">
              {item.label}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  
      {/* Testimonials Section 
      <section className="container slide-in-up">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="w-full sm:basis-full md:basis-1/3 min-w-0"
              >
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/10 border-border/50">
                    <CardContent className="pt-6 flex flex-col items-center text-center flex-grow">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                        <img
                          className="w-full h-full object-cover"
                          alt={testimonial.imageAlt}
                          src="https://images.unsplash.com/photo-1677696795873-ca21e7d76a51"
                        />
                      </div>
                      <p className="italic text-muted-foreground mb-4 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-muted text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </section>
      */}
    </div>
  );
};

export default HomePage;
