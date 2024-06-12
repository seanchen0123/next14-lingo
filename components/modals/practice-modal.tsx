'use client'

import { usePracticeModal } from '@/store/use-practice-modal'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import Image from 'next/image'
import { Button } from '../ui/button'

type Props = {}

export const PracticeModal = (props: Props) => {
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = usePracticeModal()

  useEffect(() => setIsClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className=" max-w-md">
        <DialogHeader>
          <div className=" flex items-center w-full justify-center mb-5">
            <Image
              src={'/heart.svg'}
              alt="Heart"
              width={100}
              height={100}
            />
          </div>
          <DialogTitle className=" text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className=" text-base text-center">
            Use practice lessons to regain hearts and points. You cannot loose hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className=" mb-4">
          <div className=" flex flex-col gap-y-4 w-full">
            <Button
              variant={'primary'}
              className=" w-full"
              size={'lg'}
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
