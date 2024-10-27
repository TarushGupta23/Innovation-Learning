import OptionBox from '../home/OptionBox';
import {useNavigate} from 'react-router-dom';

export default function TutorialSelect({ setPage }) {
    const navigate = useNavigate();
    return <ul className="flex items-center justify-center flex-col gap-4 h-full bg-slate-900">
        <OptionBox option="Game Play" func={() => {}}/>
        <OptionBox option="All Items" func={() => setPage('items')}/>
        <OptionBox option="Indian Standards" func={() => navigate('https://standardsbis.bsbedge.com')}/>
    </ul>
}