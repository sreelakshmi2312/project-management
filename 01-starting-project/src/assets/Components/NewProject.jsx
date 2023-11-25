import {useRef} from 'react';
import Input from './Input';

export default function NewProject(){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end"> 
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input ref={title}/>
            <Input ref={description} textarea/>
            <Input ref={dueDate} />
        </div>
    </div>
}