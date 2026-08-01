import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar({ value, onChange, placeholder = "Buscar..." }) {
    return (
        <div className="relative w-full max-w-md mb-8 group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
                <Search className="h-4 w-4" />
            </div>
            <Input
                aria-label={placeholder}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border-border-default bg-surface py-6 pl-10 pr-4 text-text-primary shadow-sm transition-all placeholder:text-text-muted hover:border-border-strong focus-visible:border-border-focus focus-visible:ring-2 focus-visible:ring-primary/30"
            />
        </div>
    );
}
