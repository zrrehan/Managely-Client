import Banner from "../Components/Home/Banner";
import Comments from "../Components/Home/Comments";
import Counter from "../Components/Home/Counter";
import FAQ from "../Components/Home/FAQ";
import Services from "../Components/Home/Services";

function Home() {
    return(
        <div className="">
            <Banner></Banner>
            <Services></Services>
            <Comments></Comments>
            <Counter></Counter>
            <FAQ></FAQ>
        </div>
    )
}

export default Home;