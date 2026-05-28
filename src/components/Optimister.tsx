'use client'


import Image from 'next/image';
import Image01 from '../../public/images/DSCF3033.jpg';
import Image02 from '../../public/images/DSCF3036.jpg'
import Image03 from '../../public/images/DSCF3017.jpg'


interface OptimisterProps {
    title:string;
    text:string;
}

const Optimister = ({title,text}:OptimisterProps) => {
    const images = [Image01, Image02,Image03];
    return (
        <div className='w-full bg-bg-blue pb-13.25'>
            <div className='flex flex-col gap-2 p-4'>
                <h2 className='text-big-body font-albert text-primary'>{title}</h2>
                <p className='text-body font-albert'>{text}</p>
            </div>
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory snap-center scrollbar-none flex flex-row gap-2 justify-center 
            before:content-[''] before:shrink-0 before:w-[15vw]
            after:content-[''] after:shrink-0 after:w-[15vw]">
                {images.map((imgbox:any, index:number) =>(
                <div 
                    key={index}
                    className='w-[70vw] h-44 snap-center shrink-0 relative overflow-hidden rounded-2xl ' 
                >
                    <Image
                        src={imgbox}
                        alt={"images"}
                        fill
                        className="object-cover" 
                        
                    />
                </div>
            ))}</div>
        </div>
    )
}

export default Optimister