import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Footer from "../Footer";
import {dataExp} from "../contents/experience";
import {dataProj} from "../contents/project";

const RightSection = ({onInitial}) => {
    return (
        <div className="grid gap-y-40 px-5">
            <About 
            title="About"
            onInitial={onInitial}/>
            <ContentContainer
            onInitial={onInitial}
            title="Experience" data={dataExp}/>
            <ContentContainer
            onInitial={onInitial}
            title="Project" data={dataProj}/>
            {/* <ContentContainer title="Article" data={data}/> */}
            <Footer />
        </div>
    );
}

export default RightSection;