import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ShareButton from "../components/ShareButton";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogContent = {

    /* ===== Blog 1: Virtual Labs ===== */

    "virtual-labs": {
      title: "How Virtual Labs Are Transforming Embedded Systems Education",
      description: "Discover how Virtual Labs enable remote firmware execution, real hardware access, and scalable embedded systems education.",
      image: "https://duxesacademy.com/images/blog1-2.jpeg",
      content: (
        <>
          {/* Introduction */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Introduction
          </h2>

          <p className="mb-8 leading-relaxed">
            Traditional embedded systems education often struggles with hardware availability,
            infrastructure cost, and remote accessibility. Students learn theory but rarely
            experience real firmware-to-hardware execution.
            <br /><br />
            Virtual Labs solve this gap.
            At Duxes Academy, our Virtual Lab platform enables students to compile firmware,
            map pins, connect sensors, and monitor boards remotely — creating a scalable,
            hardware-backed learning environment.
          </p>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <img
              src="/images/blog1-1.jpeg"
              alt="Virtual Lab Interface"
              className="w-[400px] h-[293px] object-cover rounded-md"
            />
            <img
              src="/images/blog1-2.jpeg"
              alt="Remote Device Dashboard"
              className="w-auto h-[293px] object-cover rounded-lg"
            />
          </div>

          {/* Traditional Problem */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            The Traditional Problem
          </h2>

          <p className="mb-4">
            Embedded systems education usually requires:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Physical boards</li>
            <li>Lab space</li>
            <li>Instructor supervision</li>
            <li>Limited access time</li>
          </ul>

          <p className="mb-4">This leads to:</p>

          <ul className="list-disc ml-6 mb-10 space-y-1">
            <li>Resource bottlenecks</li>
            <li>Inconsistent learning experiences</li>
            <li>Limited experimentation</li>
          </ul>

          {/* What is Virtual Lab */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is a Virtual Lab?
          </h2>

          <p className="mb-4">
            A Virtual Lab is a remotely accessible embedded infrastructure that allows students to:
          </p>

          <ul className="list-disc ml-6 mb-10 space-y-1">
            <li>Write firmware (C / Python)</li>
            <li>Compile and upload code</li>
            <li>Map GPIO pins dynamically</li>
            <li>Access hardware sensors</li>
            <li>Monitor serial output</li>
            <li>Stream camera data</li>
            <li>Analyze logs</li>
          </ul>

          <p className="mb-12">All from a browser.</p>

          {/* How it Works */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            How it Works?
          </h2>

          <p className="mb-4">
            The Virtual Lab architecture includes:
          </p>

          <ul className="list-disc ml-6 mb-8 space-y-1">
            <li>Backend orchestration engine</li>
            <li>Firmware compiler pipeline</li>
            <li>Hardware abstraction layer</li>
            <li>Remote board control</li>
            <li>Sensor and camera integration</li>
            <li>Real-time monitoring dashboard</li>
          </ul>

          <p className="mb-10">
            This architecture enables real hardware virtualization without simulation-only limitations.
          </p>

          {/* 🎥 Modern Responsive Video (Smaller & Centered) */}
          <div className="flex justify-center mb-16">
            <video
              controls
              className="w-full md:w-[45%] rounded-lg shadow-md"
            >
              <source src="/videos/blog1-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Benefits */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Benefits for Institutions
          </h2>

          <ul className="list-disc ml-6 mb-10 space-y-1">
            <li>No hardware sharing conflicts</li>
            <li>Scalable to multiple students</li>
            <li>Secure firmware execution</li>
            <li>Controlled pin mapping</li>
            <li>Industry-grade exposure</li>
          </ul>

          {/* Why it Matters */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Why It Matters?
          </h2>

          <p className="mb-12">
            Industry does not hire students who only understand theory.
            Industry hires engineers who understand systems.
            Virtual Labs create system thinkers.
          </p>

          {/* Conclusion */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Conclusion
          </h2>

          <p>
            The future of engineering education is infrastructure-driven, scalable,
            and hardware-connected.
            Duxes Academy’s Virtual Lab initiative represents the next evolution
            of embedded learning — where software meets real hardware, remotely and intelligently.
          </p>
        </>
      )
    },

    /* ===== Blog 2: Embedded Systems ===== */

    "embedded-system": {
      title: "What is an Embedded System? A Beginner’s Guide",
      description: "Learn the fundamentals of embedded systems including microcontrollers, sensors, firmware, and real-world applications.",
      image: "https://duxesacademy.com/images/blog2-3.png",
      content: (
        <>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Introduction
          </h2>

          <p className="mb-6 leading-relaxed">
            We interact with embedded systems every day – often without realizing it.
            From washing machines and traffic signals to aircraft safety systems and medical devices,
            embedded systems quietly power the modern world.
            <br /><br />
            But what exactly is an embedded system?
            <br />
            At Duxes Academy, we believe understanding this foundation is the first step toward becoming a systems engineer.
          </p>

          {/* Two Images Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img src="/images/blog2-1.jpg" alt="Embedded Board" className="w-[400px] mx-auto rounded-md" />
            <img src="/images/blog2-3.png" alt="Embedded Breadboard" className="w-[400px] mx-auto rounded-md" />
          </div>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is an Embedded System?
          </h2>

          <p className="mb-4 leading-relaxed">
            An embedded system is a specialised computing system designed to perform a specific task.
            Unlike a laptop or smartphone that runs many applications, an embedded system is built to perform one dedicated function efficiently and reliably.
          </p>

          <p className="mb-6">
            <strong>Simple Definition:</strong> An embedded system is a combination of hardware and firmware designed to control or monitor a device.
          </p>

          {/* Block Diagram Image */}
          <div className="flex justify-center mb-8">
            <img src="/images/blog2-2.png" alt="Embedded System Diagram" className="w-[500px] mx-auto rounded-md" />
          </div>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Core Components of an Embedded System
          </h2>

          <p className="mb-4">Every embedded system typically includes:</p>

          <p className="mb-2"><strong>1. Microcontroller (The Brain)</strong></p>
          <p className="mb-4">This small chip processes instructions and controls operations.</p>

          <p className="mb-2"><strong>2. Sensors (Input)</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Temperature</li>
            <li>Light</li>
            <li>Smoke</li>
            <li>Weight</li>
            <li>Motion</li>
          </ul>

          <p className="mb-2"><strong>3. Actuators (Output)</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Turning on a motor</li>
            <li>Activating a relay</li>
            <li>Lighting an LED</li>
            <li>Sounding an alarm</li>
          </ul>

          <p className="mb-2"><strong>4. Firmware</strong></p>
          <p className="mb-6">
            Firmware is the software written in languages like C or Python that tells the hardware what to do.
          </p>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Real-World Examples
          </h2>

          <ul className="list-disc ml-6 mb-6">
            <li>Washing machine controller</li>
            <li>Car dashboard system</li>
            <li>Smart thermostat</li>
            <li>Smoke detector</li>
            <li>Elevator control system</li>
          </ul>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Why Embedded Systems Matter
          </h2>

          <ul className="list-disc ml-6 mb-6">
            <li>Automotive</li>
            <li>Aviation</li>
            <li>Healthcare</li>
            <li>Industrial automation</li>
            <li>Consumer electronics</li>
          </ul>

          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Final Thoughts
          </h2>

          <p>
            Understanding embedded systems is the first step toward building intelligent devices.
            In upcoming articles, we will explore microcontrollers, sensors, firmware, and real-time systems in more detail.
            At Duxes Academy, we focus on helping students move from theory to real hardware experience.
          </p>
        </>
      )
    },

    /* ===== Blog 3: microcontroller-vs-microprocessor ===== */

    "microcontroller-vs-microprocessor": {
      title: "Microcontroller vs Microprocessor: Understanding the Difference",
      description: "Understand the key architectural and functional differences between microcontrollers and microprocessors in embedded systems.",
      image: "https://duxesacademy.com/images/blog3-2.jpg",
      content: (
        <>
          {/* Introduction */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Introduction
          </h2>

          <p className="mb-6 leading-relaxed">
            Many beginners confuse microcontrollers and microprocessors.
            Both process data, but they are designed for very different purposes.
            Understanding this difference is crucial in embedded systems education.
          </p>

          {/* Processor vs Microcontroller Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <img
              src="/images/blog3-1.jpg"
              alt="Microprocessor Chip"
              className="w-[450px] h-[230px] object-cover rounded-md"
            />
            <img
              src="/images/blog3-2.jpg"
              alt="Microcontroller Chip"
              className="w-[450px] h-[230px] object-cover rounded-md"
            />
          </div>
          {/* Microprocessor Section */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is a Microprocessor?
          </h2>

          <p className="mb-4">
            A microprocessor is the central processing unit (CPU) of a computer.
          </p>

          <p className="mb-2 font-semibold">Examples:</p>
          <ul className="list-disc ml-6 mb-4 space-y-1">
            <li>Desktop CPUs</li>
            <li>Laptop processors</li>
            <li>Smartphone processors</li>
          </ul>

          <p className="mb-4">
            Microprocessors require external components like:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>RAM</li>
            <li>Storage</li>
            <li>Input/output controllers</li>
          </ul>

          <p className="mb-6">
            They are used in general-purpose computing.
          </p>

          {/* Microcontroller Section */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is a Microcontroller?
          </h2>

          <p className="mb-4">
            A microcontroller is a compact integrated system that includes:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>CPU</li>
            <li>RAM</li>
            <li>Flash memory</li>
            <li>Input/output ports</li>
            <li>Timers</li>
            <li>Communication interfaces</li>
          </ul>

          <p className="mb-6">
            All in one chip. Microcontrollers are designed for dedicated tasks.
          </p>

          {/* Block Diagram Comparison */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog3-3.png"
              alt="Block Diagram Comparison"
              className="w-full md:w-[70%] max-h-[350px] object-contain rounded-md"
            />
          </div>

          {/* Key Differences Table */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-4">
            Key Differences
          </h2>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">Feature</th>
                  <th className="border p-2 text-left">Microprocessor</th>
                  <th className="border p-2 text-left">Microcontroller</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Purpose</td>
                  <td className="border p-2">General computing</td>
                  <td className="border p-2">Specific control tasks</td>
                </tr>
                <tr>
                  <td className="border p-2">Components</td>
                  <td className="border p-2">External required</td>
                  <td className="border p-2">Integrated on-chip</td>
                </tr>
                <tr>
                  <td className="border p-2">Power usage</td>
                  <td className="border p-2">High</td>
                  <td className="border p-2">Low</td>
                </tr>
                <tr>
                  <td className="border p-2">Cost</td>
                  <td className="border p-2">Expensive</td>
                  <td className="border p-2">Affordable</td>
                </tr>
                <tr>
                  <td className="border p-2">Applications</td>
                  <td className="border p-2">PCs, smartphones</td>
                  <td className="border p-2">Embedded devices</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Architecture Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog3-4.png"
              alt="Architecture Diagram"
              className="w-full md:w-[70%] max-h-[350px] object-contain rounded-md"
            />
          </div>

          {/* When to Use */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            When to Use a Microcontroller
          </h2>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>IoT devices</li>
            <li>Industrial controllers</li>
            <li>Robotics</li>
            <li>Smart appliances</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Conclusion
          </h2>

          <p>
            Microcontrollers power embedded systems because they are efficient,
            cost-effective, and purpose-built.
            In the next blog, we’ll explore how sensors interact with microcontrollers.
          </p>
        </>
      )
    },

    /* ===== Blog 4: How Sensors Work ===== */

    "how-sensors-work": {
      title: "How Sensors Work in Embedded Systems",
      description: "Explore how sensors convert physical parameters into electrical signals and enable intelligent decision-making in embedded systems.",
      image: "https://duxesacademy.com/images/blog4-1.jpg",
      content: (
        <>
          {/* Introduction */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Introduction
          </h2>

          <p className="mb-6 leading-relaxed">
            Embedded systems interact with the real world using sensors.
            Sensors allow devices to measure environmental conditions and respond intelligently.
            <br /><br />
            But how do they actually work?
          </p>

          {/* Sensor Module Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog4-1.jpg"
              alt="IR Sensor Modules"
              className="w-full md:w-[75%] h-[300px] object-contain rounded-md"
            />
          </div>

          {/* What is Sensor */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is a Sensor?
          </h2>

          <p className="mb-4">
            A sensor is a device that detects physical parameters and converts them into electrical signals.
          </p>

          <p className="mb-2 font-semibold">Examples:</p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Temperature sensors</li>
            <li>Smoke sensors</li>
            <li>Load cells</li>
            <li>Light sensors</li>
            <li>Motion sensors</li>
          </ul>

          {/* Analog vs Digital */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Analog vs Digital Sensors
          </h2>

          <p className="mb-2 font-semibold">Analog Sensors</p>
          <p className="mb-4">
            Produce continuous voltage signals.
            Example: Temperature sensor.
          </p>
          <p className="mb-6">
            These require an ADC (Analog to Digital Converter).
          </p>

          <p className="mb-2 font-semibold">Digital Sensors</p>
          <p className="mb-6">
            Provide processed digital output directly.
            Example: Some humidity sensors.
          </p>

          {/* Wiring Diagram */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog4-2.png"
              alt="Sensor Wiring Diagram"
              className="w-full md:w-[75%] h-[300px] object-contain rounded-md"
            />
          </div>

          {/* How Data Flows */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            How Data Flows
          </h2>

          <ol className="list-decimal ml-6 mb-8 space-y-1">
            <li>Sensor detects change.</li>
            <li>Electrical signal is generated.</li>
            <li>Microcontroller reads the signal.</li>
            <li>Firmware processes the data.</li>
            <li>System makes a decision.</li>
          </ol>

          {/* Signal Processing */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Why Signal Processing is Important
          </h2>

          <p className="mb-4">
            Raw sensor data may contain noise.
          </p>

          <p className="mb-2">Embedded systems often use:</p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Averaging</li>
            <li>Filtering</li>
            <li>Threshold comparison</li>
          </ul>

          <p className="mb-6">
            To ensure reliable operation.
          </p>

          {/* Real World Example Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog4-3.jpg"
              alt="Environmental Sensor Module"
              className="w-full md:w-[70%] h-[280px] object-contain rounded-md"
            />
          </div>

          {/* Real World Example */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Real-World Example
          </h2>

          <p className="mb-4">
            In a smoke detection system:
          </p>

          <ul className="list-disc ml-6 mb-8 space-y-1">
            <li>Smoke particles scatter light.</li>
            <li>Sensor detects change.</li>
            <li>Microcontroller processes signal.</li>
            <li>Alarm activates if threshold is crossed.</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Conclusion
          </h2>

          <p>
            Sensors enable embedded systems to sense, analyze, and act.
            Understanding sensor behavior is essential for building intelligent systems.
          </p>
        </>
      )
    },

    /* ===== Blog 5: what-is-firmware ===== */

    "what-is-firmware": {
      title: "What is Firmware? How Software Controls Hardware",
      description: "Understand how firmware controls microcontrollers, manages hardware resources, and powers embedded system intelligence.",
      image: "https://duxesacademy.com/images/blog5-2.jpg",
      content: (
        <>
          {/* Introduction */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Introduction
          </h2>

          <p className="mb-6 leading-relaxed">
            Firmware is the invisible intelligence inside embedded systems.
            Without firmware, hardware is just electronic components.
          </p>

          {/* Arduino Board Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog5-2.jpg"
              alt="Arduino Board"
              className="w-full md:w-[70%] h-[300px] object-contain rounded-md"
            />
          </div>

          {/* What is Firmware */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What is Firmware?
          </h2>

          <p className="mb-4">
            Firmware is low-level software programmed into a microcontroller to control hardware behavior.
          </p>

          <p className="mb-2">It is typically written in:</p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>C</li>
            <li>C++</li>
            <li>Embedded Python</li>
          </ul>

          {/* Code Editor + Serial Monitor Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
            <div>
              <img
                src="/images/blog5-1.png"
                alt="Firmware Code Example"
                className="w-full h-[320px] object-contain rounded-lg"
              />
            </div>

            <div>
              <img
                src="/images/blog5-4.png"
                alt="Serial Monitor Output"
                className="w-full h-[320px] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* What Firmware Does */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            What Does Firmware Do?
          </h2>

          <p className="mb-4">
            Firmware controls:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>GPIO pins</li>
            <li>Sensors</li>
            <li>Communication protocols</li>
            <li>Timers</li>
            <li>Displays</li>
            <li>Motors</li>
          </ul>

          <p className="mb-8">
            It translates logic into physical action.
          </p>

          {/* Firmware Development Process */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Firmware Development Process
          </h2>

          <ol className="list-decimal ml-6 mb-10 space-y-1">
            <li>Write code.</li>
            <li>Compile using toolchain.</li>
            <li>Generate binary file.</li>
            <li>Flash into microcontroller.</li>
            <li>Test and debug.</li>
          </ol>


          {/* Tools Screenshot */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/blog5-4.png"
              alt="Arduino Serial Monitor Menu"
              className="w-full md:w-[70%] h-[260px] object-contain rounded-md"
            />
          </div>

          {/* Why Firmware is Different */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Why Firmware is Different from Regular Software
          </h2>

          <ul className="list-disc ml-6 mb-8 space-y-1">
            <li>Runs directly on hardware</li>
            <li>Has memory constraints</li>
            <li>Must handle timing precisely</li>
            <li>Often operates in real-time</li>
          </ul>

          {/* Real Example */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Real Example
          </h2>

          <p className="mb-4">
            In a smart device:
          </p>

          <p className="mb-4">
            If temperature &gt; 40°C:
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Turn on cooling fan.</li>
            <li>Send alert message.</li>
          </ul>

          <p className="mb-8">
            This decision-making logic is written in firmware.
          </p>

          {/* Conclusion */}
          <h2 className="text-[#DE5769] font-semibold text-lg mb-2">
            Conclusion
          </h2>

          <p>
            Firmware bridges the gap between logic and physical reality.
            At Duxes Academy, we emphasize hands-on firmware development because real understanding comes from interacting with hardware.
          </p>
        </>
      )
    },
  };

  const blog = blogContent[slug];

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-white font-['Roboto'] relative">
      <Helmet>
        <title>{blog.title} | Duxes Academy</title>

        <link
          rel="canonical"
          href={`https://duxesacademy.com/blogs/${slug}`}
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Duxes Academy" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta
          property="og:url"
          content={`https://duxesacademy.com/blogs/${slug}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>
      <ShareButton />

      <div className="container mx-auto px-6 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#10899A] hover:text-[#DE5769] transition font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {blog.title}
          </h1>

          <div className="text-gray-800 leading-relaxed">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;