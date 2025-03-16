import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CardCarousel.css"; // Custom styles
import { useNavigate } from 'react-router-dom';

const roleBasedCourses = [
  {
    title: 'RTL Design Engineer',
    description: 'Comprehensive training for RTL Design Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (1).avif',
    buttonText: 'Learn more →',
    link: '/rtl-design-engineer-roadmap'
  },
  {
    title: 'Verification Engineer',
    description: 'Comprehensive training for Verification Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (2).avif',
    buttonText: 'Learn more →',
    link: '/verification-engineer-roadmap'
  },
  {
    title: 'DFT Engineer',
    description: 'Comprehensive training for DFT Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (3).avif',
    buttonText: 'Learn more →',
    link: '/dft-engineer-roadmap'
  },
  {
    title: 'Synthesis and STA Engineer',
    description: 'Comprehensive training for Synthesis and STA Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (4).avif',
    buttonText: 'Learn more →',
    link: '/synthesis-and-sta-engineer-roadmap'
  },
  {
    title: 'PD Engineer',
    description: 'Comprehensive training for PD Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (5).avif',
    buttonText: 'Learn more →',
    link: '/pd-engineer-roadmap'
  },
  {
    title: 'PV Engineer',
    description: 'Comprehensive training for PV Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (6).avif',
    buttonText: 'Learn more →',
    link: '/pv-engineer-roadmap'
  },
  {
    title: 'Analog Design Engineer',
    description: 'Comprehensive training for Analog Design Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (7).avif',
    buttonText: 'Learn more →',
    link: '/analog-design-engineer-roadmap'
  },
  {
    title: 'Architect',
    description: 'Comprehensive training for Architect roles in the semiconductor industry.',
    image: '/images/course-cards/course (8).avif',
    buttonText: 'Learn more →',
    link: '/architect-roadmap'
  },
  {
    title: 'Safety and Security HW Engineer',
    description: 'Comprehensive training for Safety and Security HW Engineer roles in the semiconductor industry.',
    image: '/images/course-cards/course (9).avif',
    buttonText: 'Learn more →',
    link: '/safety-and-security-hw-engineer-roadmap'
  }
];

const languageCourses = [
  {
    title: 'Verilog for Design',
    description: 'Master hardware description language for digital circuit design.',
    image: '/images/course-cards/course (10).avif',
    buttonText: 'Explore course →',
    link: '/verilog-for-design-roadmap'
  },
  {
    title: 'SystemVerilog for Verification',
    description: 'Learn advanced verification techniques with SystemVerilog.',
    image: '/images/course-cards/course (1).avif',
    buttonText: 'Explore course →',
    link: '/systemverilog-for-verification-roadmap'
  },
  {
    title: 'SV-UVM for Verification',
    description: 'Universal Verification Methodology with SystemVerilog.',
    image: '/images/course-cards/course (2).avif',
    buttonText: 'Explore course →',
    link: '/sv-uvm-for-verification-roadmap'
  },
  {
    title: 'SystemC for Modeling',
    description: 'C++ library for system-level modeling and simulation.',
    image: '/images/course-cards/course (3).avif',
    buttonText: 'Explore course →',
    link: '/systemc-for-modeling-roadmap'
  },
  {
    title: 'Python for Flow Automation',
    description: 'Automate VLSI design flows with Python scripting.',
    image: '/images/course-cards/course (4).avif',
    buttonText: 'Explore course →',
    link: '/python-for-flow-automation-roadmap'
  }
];

const protocolCourses = [
  {
    title: 'AMBA AXI4',
    description: 'Advanced eXtensible Interface 4 protocol for high-performance, high-frequency system designs.',
    image: '/images/course-cards/course (5).avif',
    buttonText: 'Learn more →',
    link: '/amba-axi4-roadmap'
  },
  {
    title: 'UART, SPI, I2C',
    description: 'Essential communication protocols for embedded systems.',
    image: '/images/course-cards/course (6).avif',
    buttonText: 'Learn more →',
    link: '/uart-spi-can-roadmap'
  },
  {
    title: 'PCIe Gen5',
    description: 'PCI Express Generation 5.0 with 32GT/s data transfer rates.',
    image: '/images/course-cards/course (7).avif',
    buttonText: 'Learn more →',
    link: '/pcie-gen5-roadmap'
  },
  {
    title: 'CxL 2.0',
    description: 'Compute Express Link 2.0, an open industry standard for high-speed CPU-to-device and CPU-to-memory connections.',
    image: '/images/course-cards/course (8).avif',
    buttonText: 'Learn more →',
    link: '/cxl2-roadmap'
  },
  {
    title: 'Automotive Protocols (CAN, LIN, FLEXRAY)',
    description: 'Specialized communication protocols for automotive applications.',
    image: '/images/course-cards/course (9).avif',
    buttonText: 'Learn more →',
    link: '/automotive-protocols-roadmap'
  }
];

const Courses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      <section id="role-based-courses" className="pt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Role-Based Courses</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {roleBasedCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg" style={{ height: '25rem' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm opacity-80 my-2">{course.description}</p>
                  <button
                    className="mt-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    onClick={() => {
                      if (course.link) {
                        navigate(course.link);
                      }
                    }}
                  >
                    {course.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="language-courses" className="pt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Language Courses</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {languageCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg" style={{ height: '25rem' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm opacity-80 my-2">{course.description}</p>
                  <button
                    className="mt-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    onClick={() => {
                      if (course.link) {
                        navigate(course.link);
                      }
                    }}
                  >
                    {course.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="protocol-courses" className="pt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Protocol Courses</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {protocolCourses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg" style={{ height: '25rem' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm opacity-80 my-2">{course.description}</p>
                  <button
                    className="mt-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    onClick={() => {
                      if (course.link) {
                        navigate(course.link);
                      }
                    }}
                  >
                    {course.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Courses;