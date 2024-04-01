import React from "react";

function Skills() {
  return (
    <div>

      <div id="skills" className="relative w-screen h-[100px] flex justify-center items-end">

        <div className="absolute bottom-0">
          <h1 className="text-green-500 text-6xl font-extrabold opacity-30 pb-4
          bg-gradient-to-b from-zinc-900 to-zinc-200 bg-clip-text text-transparent">My Skills</h1>
        </div>

        <div className="relative z-10">
          <h1 className="text-[#212121] font-bold mb-2">My Skills</h1>
        </div>
      </div>

      <div className="flex w-screen">
        <div className="w-screen h-auto">
          <div className="bg-[#F9F9F9] w-[750px] mx-auto py-[50px] my-10 rounded-xl shadow-xl">
            <div className="flex justify-center items-center">
              <h3 className="place-content-center w-[500px] text-center font-medium">These are some tools and tech stack that I've learned and used throughout my career.</h3>
            </div>
        
            {/* SECTION BOX KECIL 1*/}
            <div className="flex space-between mt-5 justify-center">
              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/figma.svg" className="h-[48px] w-[48px] px-1" alt="figma" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Figma</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/ai.svg" className="h-[48px] w-[48px] px-1" alt="Illustrator" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Illustrator</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/ps.svg" className="h-[48px] w-[48px] px-1" alt="photoshop" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Photoshop</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/vscode.svg" className="h-[48px] w-[48px] px-1" alt="vscode" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">VSCode</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/github.svg" className="h-[48px] w-[48px] px-1" alt="github" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Github</h4>
              </div>
            </div>
        
            {/* SECTION BOX KECIL 2*/}
            <div className="flex space-between justify-center">
              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/html.svg" className="h-[48px] w-[48px] px-1" alt="html" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">HTML</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/css.svg" className="h-[48px] w-[48px] px-1" alt="css" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">CSS</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/js.svg" className="h-[48px] w-[48px] px-1" alt="js" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Javascript</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/react.svg" className="h-[48px] w-[48px] px-1" alt="react" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">React JS</h4>
              </div>

              <div className="wrapper-kecil flex flex-col items-center w-[132px] h-[148px]  justify-center">
                <div className="w-[64px] h-[64px] bg-[#F9F9F9] rounded-xl flex justify-center items-center flex-col shadow-md
                transition ease-in-out hover:delay-50 hover:shadow-lg hover:-translate-y-3 duration-300">
                  <img src="./src/assets/svg/tailwind.svg" className="h-[48px] w-[48px] px-1" alt="html" />
                </div>
                <h4 className="font-bold text-center mt-3 text-[#212121]">Tailwind CSS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
