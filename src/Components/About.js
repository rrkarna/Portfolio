import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='
            max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right
                 pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Ritu Raj, Nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>I am an avid problem solver and enjoy tackling complex challenges. In my free time, I often engage in competitive programming on platforms like LeetCode,CodeChef and HackerRank to continuously enhance my coding skills. Additionally, I have a keen interest in exploring new technologies and keeping up with industry Trends. Outside of the Tech persue, I enjoy playing cricket, playing badminton and go on a bike ride in my free time, which helps me maintain a balanced and creative mindset.</p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>Academic Journey</p>
                    </div>
                    <div>
                        <p>I recently graduated with a BTech degree in Electronics and Communication from Bengal College of Engineering and Technology, achieving a CGPA of 8.27. My academic journey includes intermediate and matriculation under the CBSE Board.</p>
                    </div>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>Work Experience</p>
                    </div>
                    <div>
                        <p>I gained practical experience during a two-months web development training conducted by AICT, focusing on modern web applications using the MERN stack.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About