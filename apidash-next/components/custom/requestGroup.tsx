import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectGroup, SelectItem, SelectContent } from "@/components/ui/select"
import { SendIcon } from "lucide-react"

type RequestOption = {
    value: string;
    label: string;
}

type RequestBarProps = {
    request: RequestOption[],
    method?: string;
    url?: string;
    onMethodChange?: (method: string) => void;
    onUrlChange: (url: string) => void;
    onSend: (method: string, url: string) => void;
}

export default function RequestBar({
    request,
    method = "GET",
    url = "",
    onMethodChange,
    onUrlChange,
    onSend,
}: RequestBarProps) {
    return (
        <div className="mt-2 mb-2 flex max-w-full items-center space-x-2 p-5">
            <Select value={method} onValueChange={onMethodChange} >
                <SelectTrigger className="max-w-30">
                    <SelectValue placeholder="Select a Request" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {request.map((request) => (
                            <SelectItem key={request.value} value={request.value}>
                                {request.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input
                type="text"
                placeholder="URL"
                value={url}
                onChange={(e) => onUrlChange?.(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSend?.();
                    }
                }}
            />
            <Button
                variant="default"
                type="button"
                onClick={onSend}
            >
                <SendIcon /> Send
            </Button>
        </div>
    )
}

