import { StarFill } from 'react-bootstrap-icons';

const Star=({number})=>{
    const icons=[]
    for(let i =0; i<number;i++){
        icons.push(<StarFill key ={i} className="text-yellow-200"/>)
    }
    for(let i =0; i<5-number;i++){
        icons.push(<StarFill key ={i} className="text-gray-300"/>)
    }

    return <div className='flex gap-2'>{icons}</div>
}

export default Star