// import { AnimatedShinyTextDemo } from '@/components/Animated'
import { GradualSpacingDemo } from '@/components/Gradual';
import { SwitchDemo } from '@/components/Switch'

// const words = ["Model Middle School"];

export const Header = () => {
    const menu = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Academic' },
        { id: 4, name: 'Facility' },
        { id: 5, name: 'Faculty' },
        { id: 6, name: 'Contact' },
    ];

    return (
        <div className='flex items-center justify-between mt-2 ml-2 border-b-2 border-black'>
            <div className='flex gap-14 text-white p-6 '>
                {menu.map((item) => (
                    <div key={item.id} className='cursor-pointer'>
                        <h2 className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-all text-xl'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
            <div className='p-6'>
                <h2 className='text-white text-2xl'><span>
                    <GradualSpacingDemo />
                </span>
                </h2>
            </div>
            <div>
                <SwitchDemo />
            </div>
        </div>
    )
}
