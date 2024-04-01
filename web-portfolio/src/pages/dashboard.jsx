import React from "react";
import "./styles.css";

function Dashboard() {
  return (
    <>
      <div id='about' className="flex w-screen place-content-center pt-[150px] h-1/2 mb-12">
        <div className="w-auto h-auto pr-[50px] ml-[50px]">
          <img
            src="/fotodidu2.jpg"
            className="h-[500px] w-[500px] blob-mask transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            alt="Logo Alif"
          />
        </div>
        <div className="w-[600px] h-auto ml-[80px]">
          <div>
            <p className="text-[#212121] font-bold mb-2">👋 Well Hello There..</p>
            <h1 className="text-[#212121] font-bold mb-2">I'm Alif Akbar Grafidi</h1>
            <div>
              <p className="text-[#212121] text-2xl font-medium w-[500px] text-justify mb-4 mt-4">
                A
                <span class="text-[#0F8B55] font-bold"> UI/UX Designer</span> based in <span class="text-[#0F8B55] font-bold"> South Tangerang</span>
              </p>
            </div>

            <div>
              <p className="text-[#212121] font-medium w-[500px] text-justify mb-6">
                Hey Peeps! You can call me
                <span class="text-[#0F8B55] font-bold"> Alif</span> or <span class="text-[#0F8B55] font-bold"> Didu</span> I'm a 3rd year Computer Engineering student at the University of Brawijaya. Alongside my academic activities, I am dedicated to mastering UI/UX design for mobile and Web design. During my time in college I have contributed to several projects.
              </p>
            </div>

          </div>
          <div className="border border-[#212121] w-[500px]"></div>

          {/* BOX KECIL */}
          <div className="flex space-x-5 mt-8">
            <div className="w-[152px] h-[152px] bg-[#F9F9F9] shadow-lg rounded-xl flex justify-center items-center flex-col px-2 transition ease-in-out hover:delay-150 hover:-translate-y-4 duration-300 hover:outline hover:outline-[#0F8B55]/50 hover:outline-2 hover:cursor-pointer">

              <h1 className="font-bold text-[#0F8B55] drop-shadow-md text-center mb-3">7+</h1>
              <h4 className="text-center font-medium text-[#212121] drop-shadow-sm">Organizational Experiences</h4>
            </div>
            <div className="w-[152px] h-[152px] bg-[#F9F9F9] shadow-lg rounded-xl flex justify-center items-center flex-col px-2 transition ease-in-out hover:delay-150 hover:-translate-y-4 duration-300 hover:outline hover:outline-[#0F8B55]/50 hover:outline-2 hover:cursor-pointer">
              <h1 className="font-bold text-[#0F8B55] drop-shadow-md text-center mb-3">4+</h1>
              <h4 className="text-center font-medium text-[#212121] drop-shadow-sm">Framework & Tools Used</h4>
            </div>
            <div className="w-[152px] h-[152px] bg-[#F9F9F9] shadow-lg rounded-xl flex justify-center items-center flex-col px-2 transition ease-in-out hover:delay-150 hover:-translate-y-4 duration-300 hover:outline hover:outline-[#0F8B55]/50 hover:outline-2 hover:cursor-pointer">
              <h1 className="font-bold text-[#0F8B55] drop-shadow-md text-center mb-3">4+</h1>
              <h4 className="text-center font-medium text-[#212121] drop-shadow-sm">Successful Projects</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;