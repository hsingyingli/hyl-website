import React, { Fragment } from 'react'
import { useRouter } from "next/router"
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import useTheme from '../../hooks/useTheme'
import useNotes from '../../hooks/useNotes'
import { Note } from '../../utils/types/note'


const PopoverMenu: React.FC = () => {
  const { theme } = useTheme()
  const router = useRouter()
  const { category, selectedNoteId, handleSelectNote } = useNotes()

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className='group inline-flex items-center rounded-md bg-teal-500 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
            >
              <span>Notes</span>
              {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-full max-w-sm transform ">
                <div className="bg-white dark:bg-black dark:text-gray-100 border-[1px] overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-5 max-h-[70vh] overflow-y-scroll">
                  {Object.entries(category).map((data) => {
                    const key = data[0]
                    const noteList = data[1] as Array<Note>
                    return (
                      <Disclosure key={key} defaultOpen={false}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-teal-100 px-4 py-2 my-2 text-left text-sm font-medium text-gray-900 hover:bg-teal-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span>{key}</span>
                              <div className='text-lg'>
                                {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                              </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              <ul>
                                {noteList.map((note) => {
                                  const isActive = note.id === selectedNoteId
                                  const textColor = theme === 'dark' ? 'white' : 'rgb(156, 163, 175)'
                                  return (
                                    <Popover.Button
                                      onClick={() => {
                                        handleSelectNote(note.id)
                                        router.push(`/notes/${note.id}`)
                                      }}
                                      as={"li"}
                                      key={note.id}
                                      style={{ color: isActive ? textColor : '' }}
                                      className='cursor-pointer mb-3 hover:text-gray-400 dark:text-gray-400 dark:hover:text-white'>
                                      {note.title}
                                    </Popover.Button>)
                                })}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default PopoverMenu
