import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
    return (
        <div className="flex items-center space-x-2 text-white p-6 rounded-3xl bg-gradient-to-t from-cyan-500 to-blue-500 text-xl">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Switch-Theme</Label>
        </div>
    )
}
