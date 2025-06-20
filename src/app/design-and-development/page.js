import TextandDesign from "@/components/designDevlopment/textandDesign";
import OurBranding from "@/components/designDevlopment/ourBranding";
import Connect from "@/components/global/connect";
import OurExecution from "@/components/designDevlopment/ourExecution";
import ToolsWeUse from "@/components/designDevlopment/toolsWeUse";
import Faqs from "@/components/designDevlopment/faqs";
import CompleteProject from "@/components/designDevlopment/completeProject";

export default function Home() {
    return (
        <>
           <TextandDesign/>
            <OurBranding/>
            <Connect/>
            <OurExecution/>
            <ToolsWeUse/>
            <Faqs/>
            <CompleteProject/>
        </>
    );
}
