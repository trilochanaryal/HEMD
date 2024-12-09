"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { searchableContent } from "@/consts";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredContent = query
    ? searchableContent.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : searchableContent;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <>
          {/* Search Icon for smaller screens */}
          <button
            onClick={() => setOpen(true)}
            className="text-foreground p-2 rounded-md hover:bg-accent lg:hidden"
          >
            <Search className="h-6 w-6" />
          </button>

          {/* Search Box for larger screens */}
          <Button
            variant="outline"
            className="w-full md:w-[260px] justify-start text-muted-foreground hidden lg:flex"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search...
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search META Research</DialogTitle>
        </DialogHeader>
        <Command className="rounded-lg border shadow-md">
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder="Search everything... press esc to exit"
            className="h-11 px-4 w-full"
          />
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            {filteredContent.map((item) => (
              <Command.Item
                key={item.title}
                onSelect={() => {
                  window.location.href = item.href;
                  setOpen(false);
                }}
                className="flex items-center px-2 py-1.5 rounded-md hover:bg-accent cursor-pointer"
              >
                <span className="flex-1">{item.title}</span>
                <span className="text-sm text-muted-foreground">{item.type}</span>
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}