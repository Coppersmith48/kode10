import React from "react";
import logo from "./assets/SVG/logo.png";
import Image1 from "./assets/Images/IMG.jpg";
// import Image2 from "./assets/Images/IMG2.jpg";
import Image3 from "./assets/Images/IMG3.jpg";
import Image4 from "./assets/Images/IMG4.jpeg";
import Image5 from "./assets/Images/IMG5.jpeg";
import Image6 from "./assets/Images/k10x.jpg";
import Image7 from "./assets/Images/mission.jpg";
import Image8 from "./assets/Images/pmt.jpg";
// import Image9 from "./assets/Images/backend.jpg";
// import Image10 from "./assets/Images/cyber.jpg";
// import Image11 from "./assets/Images/figma.jpg";
// import Image12 from "./assets/Images/productm2.jpg";
import Svg1 from "./assets/SVG/s1.png";
import Svg2 from "./assets/SVG/s3.png";
import Svg3 from "./assets/SVG/s4.png";
import Svg4 from "./assets/SVG/s5.png";
import Svg5 from "./assets/SVG/s6.png";
import Svg6 from "./assets/SVG/s7.png";
import Svg7 from "./assets/SVG/s8.png";
import Svg8 from "./assets/SVG/s9.png";
import Svg9 from "./assets/SVG/s10.png";
import Svg10 from "./assets/SVG/s11.png";
import Svg11 from "./assets/SVG/s12.png";
import Svg12 from "./assets/SVG/s13.png";
import Svg13 from "./assets/SVG/s14.png";
import Svg14 from "./assets/SVG/s15.png";
import Svg15 from "./assets/SVG/s16.png";
import Svg16 from "./assets/SVG/s17.png";
import Svg17 from "./assets/SVG/s18.png";
import Svg18 from "./assets/SVG/s19.png";
import Svg19 from "./assets/SVG/s20.png";
import Svg20 from "./assets/SVG/s21.png";
import Image13 from "./assets/Images/CRB.jpg";
import Image14 from "./assets/Images/AGHS.jpg";
import Image15 from "./assets/Images/midview.png";
const App = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="flex justify-between w-full items-center h-[70px] shadow-md px-20 ">
        <div className="w-[30px] h-[30px] flex justify-center items-center font-bold">
          <img src={logo} alt="" />
          KODE10X
        </div>
        <div className="flex font-semibold text-lg gap-5">
          <nav className=" cursor-pointer hover:bg-yellow-400 transition-all delay-300 ease-in-out">
            Courses
          </nav>
          <nav className="cursor-pointer">Our Team</nav>
          <nav className="cursor-pointer">Gallery</nav>
          <nav className="cursor-pointer">Contact Us</nav>
          <nav className="cursor-pointer">Hire Talent</nav>
        </div>
      </div>
      <div className="bg-[#E1E9FF] w-full h-[calc(100vh-70px)] flex items-center justify-center  px-20">
        <div className="flex items-center w-full h-[100%]">
          <div className="flex justify-center  w-full h-full">
            <div className="w-[90%] flex flex-col justify-center ">
              <h1 className=" font-bold text-6xl  ">
                Unlock Your{" "}
                <span className="text-[#58AD90] bg-[#bde4d7] rounded-xl px-2">
                  {" "}
                  Path
                </span>{" "}
                to Becoming a World-Class Software Engineer
              </h1>
              <p className="text-[18px] mt-5">
                Enroll in Kode10x's exclusive training program and become highly
                sought after by both local and international companies.
              </p>
              <button className="font-bold text-[20px] mt-2 rounded-xl bg-[#58AD90] w-[150px] h-[50px] cursor-pointer text-white">
                Apply Now
              </button>
            </div>
          </div>

          <div className="  w-full h-full flex items-center justify-center">
            <div className=" w-[95%]   flex flex-wrap gap-5 items-center justify-center">
              <div className="w-[220px] h-[270px] rounded-lg">
                <img
                  src={Image1}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-[220px] h-[220px] rounded-lg   ">
                <img
                  src={Image3}
                  className=" rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-[220px] h-[220px]  rounded-lg">
                <img
                  src={Image5}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-[220px] h-[270px] rounded-lg">
                {" "}
                <img
                  src={Image4}
                  className="rounded-lg  object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-[700px] flex justify-center items-center px-20">
        <div className=" w-[100%]  flex justify-center items-center flex-col">
          <h1 className="font-bold text-[50px] text-center w-full h-[80px] mt-10">
            Why <span className="text-[#58AD90]">Kode10X</span> is the #1 choice
            for you
          </h1>
          <div className=" w-full flex justify-between mt-10 ">
            <div className="bg-[#E1E9FF] p-4 w-[360px] rounded-xl flex items-center flex-col gap-2">
              <div className="w-[320px] h-[250px]  rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={Image6}
                  alt=""
                  rounded-lg
                  object-contain
                  w-full
                  h-full
                />
              </div>
              <h3 className="font-bold text-[22px] w-[320px]">Why Kode10x</h3>
              <p className="font-normal text-[16px] w-[320px]">
                Because we believe in the limitless power of innovation and the
                boundless possibilities it brings to Africa's tomorrow.
              </p>
            </div>

            <div className="bg-[#E1E9FF] p-4 w-[360px] rounded-xl flex items-center flex-col gap-2">
              <div className="w-[320px] h-[250px]  rounded-xl flex items-center justify-center ">
                <img
                  src={Image7}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-[22px] w-[320px]">Our Mission</h3>
              <p className="font-normal text-[16px] w-[320px]">
                We empower individuals for career development transition into
                the tech space, with little or zero knowledge. We groom and
                nurture these talents with technical and non-technical skills,
                soft skills and transformational Leadership skills suited for
                industry standard.
              </p>
            </div>

            <div className="bg-[#E1E9FF] w-[360px] p-4 rounded-xl flex  items-center flex-col gap-2">
              <div className="w-[320px] h-[250px]  rounded-xl flex items-center justify-center">
                <img
                  src={Image8}
                  alt=""
                  className="rounded-lg object-cover  w-full h-full"
                />
              </div>
              <h3 className="font-bold text-[22px] w-[320px]">Our Vision</h3>
              <p className="font-normal text-[16px] w-[320px]">
                Kode10x is Africa's go to tech hub for everything talent
                management, product development and youth entrepreneurship
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E1E9FF] w-full h-[700px] justify-center font-bold px-20 mt-10">
        <div className=" w-[100%]  flex justify-center items-center flex-col">
          <h1 className="font-bold text-[50px] text-center w-full h-[80px] mt-10">
            Courses We <span className="text-[#8ED8BF]">Offer</span>
          </h1>
          <div className=" w-full flex justify-between flex-wrap mt-5  gap-5">
            <div className="bg-orange-700 w-[380px] h-[250px] rounded-lg flex items-center hover:bg-orange-500 hover:ease-in-out transition-all duration-500 bg-[url('./productm2.jpg')] bg-cover bg-center ">
              <h1 className="font-semibold text-[30px] text-white px-5">
                Frontend Development
              </h1>
            </div>
            <div className="w-[380px] h-[250px] rounded-lg flex items-center hover:bg-orange-500 hover:ease-in-out transition-all duration-500 bg-[url('./backend.jpg')] bg-cover bg-center ">
              <h1 className="font-semibold text-[30px] text-white px-5">
                Backend Development
              </h1>
            </div>
            <div className= "w-[380px] h-[250px] rounded-lg flex items-center hover:bg-orange-500 hover:ease-in-out transition-all duration-500 bg-[url('./Figma.jpg')] bg-cover bg-center  ">
              <h1 className="font-semibold text-[30px] text-white px-5">
                Product Design
              </h1>
            </div>
            <div className=" w-[380px] h-[250px] rounded-lg flex items-center hover:bg-orange-500 hover:ease-in-out transition-all duration-500  bg-[url('./productm2.jpg')] bg-cover bg-center ">
              <h1 className="font-semibold text-[30px] text-white px-5">
                Product Management
              </h1>
            </div>
            <div className=" w-[380px] h-[250px] rounded-lg flex items-center bg-[url('./cyber.jpg')] bg-cover bg-center hover:bg-black hover:ease-in-out transition-all duration-500 ">
              <h1 className="font-semibold text-[30px] text-white px-5">
                CyberSecurity
              </h1>
            </div>
            <div className="w-[380px] h-[250px] rounded-lg flex items-center bg-[url('./pmt.jpg')] bg-cover bg-center hover:bg-black hover:ease-in-out transition-all duration-500">
              <h1 className="font-semibold text-[30px] text-white px-5">
                Project Management
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[600px] flex justify-center items-center px-20">
        <div className="  w-full h-full flex  items-center flex-col ">
          <h1 className="font-bold text-[50px] text-center w-full h-[80px] mt-10">
            Our <span className="text-[#58AD90]">Testimonial</span>
          </h1>
          <p className="text-[18px]  font-semibold text-center">
            What people say about us...
          </p>
          <div className=" w-[80%] h-[500px] flex items-center justify-center  ">
            <div className=" w-full h-full flex items-center justify-center ">
              <div className=" bg-black w-[60%] h-[60%] rounded-[100%] border-4 border-green-600">
                <img src="" alt="" className="object-contain " />
              </div>
            </div>
            <div className=" w-full h-full flex items-center justify-center">
              <div className="w-full flex items-center justify-center  p-4 flex-col">
                <h1 className="font-extrabold text-center text-[35px] ">
                  Linda Ogbotobo
                </h1>
                <p className="font-semibold text-center text-[26px]">
                  <span className="text-[#58AD90]">
                    Backend Developer Kode10x
                  </span>
                </p>
                <p
                  className="font-medium text-center
               text-[20px]"
                >
                  Alumni
                </p>
                <p className="font-normal text-center text-[18px] mt-5">
                  I was not sure where to start with coding. I knew it was a
                  valuable skill, but there were just so many resources out
                  there, and I felt overwhelmed. Then I found Kode10x. Their
                  approach was fantastic. They did not just throw code at me.
                  They explained the fundamentals in a way that made sense, and
                  they provided projects that helped me apply what I learned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E1E9FF] w-full h-[400px] flex items-center justify-center px-20">
        <div className=" w-full h-full flex  items-center flex-col">
          <h1 className="font-bold text-[40px] text-center w-full h-[80px] mt-10">
            Familiarize Yourself With Some of Our Tech
            <span className="text-[#58AD90]"> Stacks</span>
          </h1>
          <div className=" w-full flex items-center flex-wrap justify-center gap-[8px] mt-5">
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg1}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg2}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg3}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg4}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg5}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg6}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg7}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg8}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg9}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg10}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg11}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg12}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg13}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg14}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg15}
                alt=""
                className="rounded-lg object-contain w-[70px] h-[70px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg16}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg17}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg18}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg19}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
            <div className="bg-white w-[100px] h-[100px] rounded-xl flex items-center justify-center">
              <img
                src={Svg20}
                alt=""
                className="rounded-lg object-contain w-[80px] h-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B163F] w-full h-[300px] flex items-center px-20">
        <div className=" w-full h-full flex items-center justify-center flex-col ">
          <h1 className="font-bold text-[50px] text-white text-center w-full h-[80px]">
            Our <span className="text-[#58AD90]">Partners</span>
          </h1>
          <div className="w-[80%] h-[200px] flex items-center justify-around">
            <div className="bg-white w-[300px] h-[150px] rounded-lg flex items-center justify-center">
              <img
                src={Image13}
                alt=""
                className="rounded-lg object-contain w-[280px] h-[130px]"
              />
            </div>
            <div className="bg-white w-[200px] h-[150px] rounded-lg flex items-center justify-center">
              <img
                src={Image14}
                alt=""
                className="rounded-xl object-contain  w-[180px] h-[130px] "
              />
            </div>
            <div className="bg-white w-[300px] h-[150px] rounded-lg flex items-center justify-center">
              <img
                src={Image15}
                className="rounded-lg object-contain w-[280px] h-[130px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-[400px] flex items-center justify-center px-20">
        <div className=" w-full h-full flex items-center justify-between">
          <div className="bg-[#999999] w-[580px] h-[250px] text-white rounded-lg px-10 ">
            <h1 className="font-bold text-[28px] w-[240px] mt-5">
              JOIN OUR ONLINE CLASSES
            </h1>
            <p className="font-normal text-[16px] w-[450px] mt-3">
              Enroll in Kode10x's exclusive training program and become highly
              sought after by both local and international companies.
            </p>
            <button className="bg-[#58AD90] text-[white] text-[18px] font-medium w-[120px] h-[50px] rounded-lg cursor-pointer mt-5">
              Register
            </button>
          </div>
          <div className="bg-[#999999] w-[580px] h-[250px] text-white rounded-lg px-10 bg-[url('./IMG2.jpg')] bg-cover bg-center opacity-95 ">
            <h1 className="font-bold text-[28px] w-[240px] mt-5">
              JOIN OUR COMMUNITY
            </h1>
            <p className="font-normal text-[14px] w-[450px] mt-2">
              Discover the power of Kode10x's vibrant community, where
              like-minded professionals gather to unlock exclusive training
              opportunities and forge valuable connections with local and
              international industry leaders.
            </p>
            <button className="bg-[#58AD90] text-[white] text-[18px] font-medium w-[150px] h-[50px] rounded-lg cursor-pointer mt-3">
              Be a member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
