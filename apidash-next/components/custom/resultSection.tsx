import { AppWindowIcon, CodeIcon } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export default function ResultSection() {
    return (
        <div className="min-h-0 flex-1 px-5 pb-5">
            <ResizablePanelGroup
                orientation="horizontal"
                className="rounded-base h-full border-2 border-border text-foreground shadow-shadow"
            >
                <ResizablePanel defaultSize={30}>
                    <div className="flex h-full justify-center bg-background p-6">
                        <span className="font-base">
                            <Tabs defaultValue="PARAMS" className="w-fit">
                                <TabsList>
                                    <TabsTrigger value="params">
                                        <AppWindowIcon />
                                        PARAMS
                                    </TabsTrigger>
                                    <TabsTrigger value="headers">
                                        <CodeIcon />
                                        HEADERS
                                    </TabsTrigger>
                                    <TabsTrigger value="body">
                                        <CodeIcon />
                                        BODY
                                    </TabsTrigger>
                                    <TabsTrigger value="auth">
                                        <CodeIcon />
                                        AUTH
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </span>
                    </div>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel defaultSize={35}>
                    <div className="flex h-full justify-center bg-background p-6">
                        <span className="font-base">STATUS</span>
                    </div>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel defaultSize={30}>
                    <div className="flex h-full  justify-between bg-background p-6">
                        <span className="font-base">
                            HISTORY
                        </span>
                        <Button > Clear</Button>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}