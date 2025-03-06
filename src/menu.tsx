import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
  } from '@heroicons/react/16/solid'
const Menues = () => {
    return (
        <div className="relative text-right ">
          <Menu>
            <MenuButton className="inline-flex items-center lg:gap-2 gap-1 rounded-md bg-gray-800 py-1 px-2 text-xs font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700  focus:outline-4 focus:outline-green-500 outline-offset-2 focus:outline-dotted">
              Options
              <ChevronDownIcon className="size-4 fill-white/60" />
            </MenuButton>
    
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/85 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <PencilIcon className="size-4 fill-white/30" />
                  Edit
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <Square2StackIcon className="size-4 fill-white/30" />
                  Duplicate
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                </button>
              </MenuItem>
              <div className="h-px my-1 bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                  Archive
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <TrashIcon className="size-4 fill-white/30" />
                  Delete
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      )
}

export default Menues