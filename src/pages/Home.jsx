
import Header from '../components/Header';

import OutputMacros from '../components/header_components/OutputMacros';
import Kanban from '../components/body_components/kanban/Kanban';

const Home = () => {
    return (
        <div>
            <Header />
            <Kanban/>
            
            <OutputMacros />
            
        </div>
    )
}

export default Home
