import React from 'react';

import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JS from '../Assets/javascript.png';
import Node from '../Assets/node.png';
import Rct from '../Assets/react.png';
import Mongo from '../Assets/mongo.png';
import GitHub from '../Assets/github.png';
import Tailwind from '../Assets/tailwind.png';
import JAVA from '../Assets/java.png';
import Python from '../Assets/python.png';
import SQL from '../Assets/SQL-logo.png';
import C from '../Assets/C.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills..</p>
                    <p className='py-4'>Fundamental Understanding of Programming Languages..</p>
                </div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JAVA} alt='JAVA icon' />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={C} alt='C Language icon' />
                        <p className='my-4'>C</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JS} alt='JS icon' />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Rct} alt='React icon' />
                        <p className='my-4'>React.Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt='Node icon' />
                        <p className='my-4'>Node.Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt='Github icon' />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQL} alt='SQL icon' />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt='HTML icon' />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind.css icon' />
                        <p className='my-4'>TailwindCSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills