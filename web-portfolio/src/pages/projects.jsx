import React from "react";

function Projects() {
  return (
    <>
      <div id="projects" className="relative w-screen h-[100px] flex justify-center items-end mb-12">

        <div className="absolute bottom-0">
          <h1 className="text-green-500 text-6xl font-extrabold opacity-30 pb-4
          bg-gradient-to-b from-zinc-900 to-zinc-200 bg-clip-text text-transparent">Projects</h1>
        </div>

        <div className="relative z-10">
          <h1 className="text-[#212121] font-bold mb-2">Projects</h1>
        </div>
      </div>


      <div className="flex flex-col h-auto">
        
        {/* Section 1 */}
        <section className="w-auto h-auto flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 items-center bg-[#F9F9F9] px-12 py-4 mb-8 rounded-xl shadow-xl">
            <div className="container">
              <img src="./src/assets/svg/arko.svg" className="h-[300px] w-[300px] justify-self-end
              transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" 
              alt="arko" />
            </div>

            <div>
              <h2 className="text-xxl font-bold mb-4">Arko</h2>
              <p className="text-gray-700 w-[400px] text-justify">Arko is an app that simplifies architectural consultations in Indonesia, providing easy access to architects for online/offline sessions, cost analysis, and a detailed architect directory. It aims to democratize architectural services, promote eco-friendly building concepts, and foster job creation in the architectural sector.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-auto h-auto flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 items-center bg-[#F9F9F9] px-12 py-4 mb-8 rounded-xl shadow-xl">
            <div>
              <h2 className="text-xxl font-bold mb-4">ResQMeal</h2>
              <p className="text-gray-700 w-[400px] text-justify">ResQMeal is an app that allows users to share surplus meals, connecting those with extra food to spare with those who could benefit from it. Users can upload details about available meals, interact with recipients, leave reviews, and access tips to minimize food waste. Its mission? Encourage meal sharing, facilitate support, and ultimately reduce food waste.
              </p>
            </div>
            <div className="container">
              <img src="./src/assets/svg/resqmeal.png" className="h-[300px] w-[300px] ml-[100px] py-8
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" 
              alt="resqmeal" />
            </div>
          </div>
        </section>

          {/* Section 3 */}
          <section className="w-auto h-auto flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 items-center bg-[#F9F9F9] px-12 py-4 mb-8 rounded-xl shadow-xl">
            <div className="container">
              <img src="./src/assets/svg/mycuan.svg" className="h-[300px] w-[300px] justify-self-end\
              transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
              alt="mycuan" />
            </div>

            <div>
              <h2 className="text-xxl font-bold mb-4">MyCuan</h2>
              <p className="text-gray-700 w-[400px] text-justify">My Cuan is a freelance application that provides a platform for freelancers and clients to interact and conduct transactions online. This application aims to facilitate freelancers in finding jobs that match their skills and interests, as well as giving clients the opportunity to find the right freelancer to complete their projects.
              </p>
            </div>
          </div>        
        </section>

        {/* Section 2 */}
        <section className="w-auto h-auto flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 items-center bg-[#F9F9F9] px-12 py-4 mb-8 rounded-xl shadow-xl">
            <div>
              <h2 className="text-xxl font-bold mb-4">Career Compass</h2>
              <p className="text-gray-700 w-[400px] text-justify">Career Compass is a comprehensive job listing website that showcases detailed company information, including names, locations, salaries, qualifications, and more. Implementing the REST API concept, it aims to provide thorough job listings.
              </p>
            </div>
            <div className="container">
              <img src="./src/assets/svg/careercompass.svg" className="h-[300px] w-[300px] ml-[100px]
              transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" 
              alt="career compass" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Projects;
