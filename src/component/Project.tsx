import '../component/styles/styles.css';
import Chatapp from '../assets/Project/Chatapp.svg'
import Edufu from '../assets/Project/Edufu.svg'
import Blesspower from '../assets/Project/Blesspower.svg'
import Blessadmin from '../assets/Project/BlesspoerAdmin.svg'
function Projects() {
    return (
        <div className='Project-container mt-12'>
            <h1 >Projects</h1>

            <div className="project-content mt-6">
                <section className="w-full bg-black text-white py-20 px-8 md:px-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-400 font-medium tracking-wide">Featured Project</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#d4d4f9]">
                                Chat App
                            </h2>

                            <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-lg">
                                A web App for connect all your social accounts into one special features
                                you don’t need to download all apps just Authorize your favourite app
                                into chat app and load your all chat.
                            </p>

                            <div className="flex gap-6 mt-10">
                                <span className="text-2xl">❉</span>
                                <span className="text-2xl">❉</span>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end relative">
                            <img
                                src={Chatapp}
                                alt="Chat App Preview"
                                className="rounded-[2vw] shadow-2xl max-w-full br "
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full bg-black text-white py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <img
                                src={Edufu}
                                alt="Project Preview"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col  md:items-end text-right space-y-4">

                                <span className="text-purple-400 font-medium tracking-wide">
                                    Featured Project
                                </span>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#d4d4f9]">
                                    Edufu
                                </h2>

                                <div className="w-100 bg-gradient-to-r from-gray-800/60 to-gray-900/80 
                    p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md 
                    max-w-md md:max-w-lg ">
                                    <p className="text-gray-200 text-left leading-relaxed text-[15px] ">
                                        Website to connect with students, universities,and tech companies.<br></br>
                                        Top students, top companies & higher universities give you admission.
                                        Everything at one place — no need to scroll LinkedIn and face 100+
                                        rejections. Just sign in, add resume & go.
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4 mt-6 justify-end text-right">
                                <span className="text-2xl">❉</span>
                                <span className="text-2xl">❉</span>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="w-full bg-black text-white py-20 px-8 md:px-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-400 font-medium tracking-wide">Featured Project</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#d4d4f9]">
                                Blesspower
                            </h2>

                            <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-lg">
                                commercial project for Blesspower company.
                                frontend and did some backend logic to make it
                                perfect look and it is my first client project
                            </p>

                            <div className="flex gap-6 mt-10">
                               <span className="text-2xl">❉</span>
                                <span className="text-2xl">❉</span>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end relative">
                            <img
                                src={Blesspower}
                                alt="Chat App Preview"
                                className="rounded-[2vw] shadow-2xl max-w-full br "
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-black text-white py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <img
                                src={Blessadmin}
                                alt="Project Preview"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col  md:items-end text-right space-y-4">

                                <span className="text-purple-400 font-medium tracking-wide">
                                    Featured Project
                                </span>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#d4d4f9]">
                                    BlessPower Admin
                                </h2>

                                <div className="w-100 bg-gradient-to-r from-gray-800/60 to-gray-900/80 
                    p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md 
                    max-w-md md:max-w-lg ">
                                    <p className="text-gray-200 text-left leading-relaxed text-[15px] ">
                                        commercial project for Blesspower company. frontend and did some backend logic to make it perfect look and it is my first client project
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-4 mt-6 justify-end text-right">
                                <span className="text-2xl">❉</span>
                                <span className="text-2xl">❉</span>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;