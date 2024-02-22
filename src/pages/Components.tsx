import HighlightedTitle from "../Components/Texts/HighlightedTitle";
import Title from "../Components/Texts/Title";
import FlexBox from "../Components/layout/FlexBox";
export const Components = () => {
    return (
        <FlexBox className={" w-full items-start border-2  "}>
            <div className=" w-[15%] sticky top-10 bg-secondary">
                <Title>Somethign again</Title>
            </div>
            <FlexBox  className=" w-[65%] h-full p-7 gap-5 flex-col justify-start">
                <FlexBox className={" w-full items-start  flex-col"}>
                    <h1 className="text-center text-text tracking-tighter text-[2.3rem] font-[800]">
                        Components - Quickstart
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, voluptatem. Officiis esse quae molestias et
                        dolorum maxime dolor nobis voluptatibus!
                    </p>
                </FlexBox>

                <FlexBox
                    className={
                        "w-full items-start justify-start flex-col gap-3 mt-10"
                    }
                >
                    <HighlightedTitle>👲What is a Component?</HighlightedTitle>
                    <p className="para">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Commodi libero obcaecati, consequatur, enim eaque
                        amet aut veritatis cumque, rem adipisci inventore!
                        Deleniti dolor provident corporis aliquam, nostrum
                        explicabo modi consequuntur.
                    </p>
                </FlexBox>


                <FlexBox className={'flex-col justify-start gap-2'}>
                    <Title>Lorem, ipsum.</Title>
                </FlexBox>
            </FlexBox>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="w-[20%] h-full test"
            >
                <Title>SOmething</Title>
            </div>
        </FlexBox>
    );
};
