import { Link } from "react-router-dom"
import BorderButton from "../Components/Buttons/BorderButton"
import Button from "../Components/Buttons/Button"
import FlexBox from "../Components/layout/FlexBox"


const LandingPage = () => {
  return (
    <FlexBox className={" w-3/4 flex-1 flex-col  z-10 "}>
        <h1 className=' w-[70%] text-center text-[3.7rem] font-[800] drop-shadow-xl'>WebCraftsman: Elevate Your Site with Custom Components</h1>
        <p className=" s">WebCraftsman: Custom feature components for enhanced website functionality and aesthetics. Elevate your online presence effortlessly.</p>
        <FlexBox className={"gap-5 mt-10"}>
            <BorderButton className={""}>Learn more</BorderButton>
            <Link to={'components'} className={"px-3 py-2 rounded-lg bg-yellow-400 hover:shadow-lg  duration-200 font-semibold drop-shadow-2xl"}>Go to Components</Link>
        </FlexBox>
    </FlexBox>
  )
}

export default LandingPage 