import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PlacementPage = () => {
  const logoUrls = [
    "https://media.licdn.com/dms/image/v2/C561BAQFjkxEHUPjwiQ/company-background_10000/company-background_10000/0/1637823583709/duxes_labs_pvt_ltd_cover?e=2147483647&v=beta&t=ZDLlO5iqaoh7QNO3_3fDGchGxxQuWE29pYHzZzaRyt4",
    "https://mms.businesswire.com/media/20250122682293/en/790547/22/tt_logo_color_rgb.jpg",
    "https://equitybulls.com/equitybullsadmin/uploads/HCL%20Technologies%20Limited.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpV-HC44qCfJ-GoeoRzlJ0bZbkYltQUzckyg&s",
    "https://1000logos.net/wp-content/uploads/2021/11/Siemens-logo.png",
    "https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFzptQOZyaIEhi15BkLR1IayO9l8eueIulA&s",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="px-6 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Embedded Systems Placements at Duxes Academy
      </h1>

      <p className="max-w-4xl mx-auto text-center text-lg text-gray-600 mb-12">
        Welcome to the best Embedded training institute in Bangalore with placements reviews ratings page. Our placement cell has tied up with companies for placements. They can be categorized as Embedded design service companies, MNC R&D centers, Small and Medium sized companies and Start-ups.
        <br /><br />
        Organizations hire our students on a regular basis as our students are readily deployable for their projects as they bring ramp-up time at least by 50%. To get regular updates on our institute’s embedded systems placements request you to check sections given below or our social media channels.
      </p>

      {/* Three Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Placement Record */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all text-center">
          <img
            src="https://img.icons8.com/fluency/96/000000/statistics.png"
            alt="Placement Record"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-xl font-bold text-gray-700 mb-4">Placement Record</h2>
          <p className="text-gray-600">
            Duxes academy has built a strong reputation as a reliable partner for more than 1500 companies seeking talented hires from our student pool.
          </p>
        </div>

        {/* Placement Process */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all text-center">
          <img
            src="https://img.icons8.com/color/96/000000/process.png"
            alt="Placement Process"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-xl font-bold text-gray-700 mb-4">Placement Process</h2>
          <p className="text-gray-600">
            Duxes Academy Embedded Systems placements follow a clear and transparent process, fostering a mutually beneficial outcome for our students and hiring companies.
          </p>
        </div>

        {/* Career Coaching */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all text-center">
          <img
            src="https://img.icons8.com/color/96/000000/classroom.png"
            alt="Career Coaching"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-xl font-bold text-gray-700 mb-4">Career Coaching</h2>
          <p className="text-gray-600">
            Duxes Academy focuses on equipping students for lasting careers in the Embedded Systems industry. Our comprehensive approach integrates the necessary technology, experienced mentors, and effective processes to support their long-term professional growth.
          </p>
        </div>
      </div>

      {/* Placement Clients Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Duxes Academy Placement Clients
      </h2>

      <p className="max-w-4xl mx-auto text-center text-lg text-gray-600 mb-10">
        Duxes Academy has cultivated robust placement partnerships spanning a diverse range of organizations, from innovative startups and mid-sized companies to multinational R&D centers. This extensive network solidifies our reputation as a leading Embedded training institute in Bangalore for placements. Below is a glimpse of our expanding list of hiring partners.
      </p>

      {/* Company Logos Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {logoUrls.map((logo, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlacementPage;
