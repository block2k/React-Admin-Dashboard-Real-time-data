import {ThemedLayoutV2, ThemedTitleV2} from "@refinedev/antd";
import Header from "./header";
import {PropsWithChildren} from "react";

const Index = ({children}: PropsWithChildren) => {
    return (
        <ThemedLayoutV2 Header={Header}
                        Title={(props) => <ThemedTitleV2 {...props} text="Refine"/>}>
            {children}
        </ThemedLayoutV2>
    )
}

export default Index;