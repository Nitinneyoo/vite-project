import { SwitchDemo } from '@/components/Switch'


export const Header = () => {
    const menu = [

        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Academic' },
        { id: 4, name: 'Facility' },
        { id: 5, name: 'Contact' },
    ]
    return (
        <div className='flex items-center justify-between mt-2 ml-2 border-b-2 border-black'>
            <div className='p-6 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500'>
                <h2 className='text-white text-2xl'>Model Middle Schhol</h2>

            </div>
            <div className='flex gap-14 text-white p-6 rounded-3xl bg-gradient-to-t from-cyan-500 to-blue-500'>
                {menu.map((item) => (
                    <div key={item.id} className='cursor-pointer'>
                        <h2 className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-all text-xl'>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div >
                <SwitchDemo />
            </div>
        </div>
    )
}
