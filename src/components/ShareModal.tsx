"use client"
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ShareChart } from '@/components/ShareChart'
import { useAppKitAccount } from '@reown/appkit/react';
import { useToast } from '@/components/ui/use-toast'

interface ShareModalProps {
    totalShare: number
    yourShare?: number
}

export function ShareModal({ totalShare, yourShare }: ShareModalProps) {
    const [openModal, setOpenModal] = useState(false)
    const { toast } = useToast()
    const [shareValue, setShareValue] = useState(0)
    const { isConnected } = useAppKitAccount();

    const handleSliderChange = (value: number[]) => {
        setShareValue(value[0])
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value)
        if (value >= 0 && value <= totalShare) {
            setShareValue(value)
        }
    }

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            {isConnected ? <DialogTrigger asChild={isConnected}>
                <Button className='poppins-regular border-white border-solid border'>Own A Share</Button>
            </DialogTrigger> : <Button onClick={() => {
                if (!isConnected) {
                    toast({
                        title: "Wallet connect error!",
                        description: "Ensure your wallet is connected",
                    })
                }
            }} className='poppins-regular border-white border-solid border'>Own A Share</Button>}
            <div className='w-full text-center text-gray-400'>(connect your wallet to see your shares)</div>
            <w3m-button />
            <DialogContent className="sm:max-w-[425px] custom-scrollbar overflow-y-auto h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Buy Your Share</DialogTitle>
                    <DialogDescription className='poppins-regular'>
                        Move the slider or enter a value to adjust the amount of share you want to buy. You could also buy fractions of a share. Like 0.01, 0.001, etc.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                    <div>
                        <Input
                            id="share"
                            type="number"
                            value={shareValue}
                            onChange={handleInputChange}
                            className="col-span-3 mb-5"
                        />
                    </div>
                    <Slider
                        max={totalShare}
                        step={1}
                        value={[shareValue]}
                        onValueChange={handleSliderChange}
                        className="col-span-3"
                    />
                    <ShareChart totalShare={totalShare} yourShare={shareValue} />
                </div>
                <div className="w-full mx-auto max-w-md">
                    <Label htmlFor="crypto-holdings" className="text-base poppins-regular text-center font-medium mb-2 block">
                        Choose your holdings
                    </Label>
                    <RadioGroup id="crypto-holdings" defaultValue="usdt" className="flex mx-auto justify-center flex-row space-x-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="usdt" id="usdt" />
                            <Label htmlFor="usdt">USDT</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="usdc" id="usdc" />
                            <Label className='poppins-regular' htmlFor="usdc">USDC</Label>
                        </div>
                    </RadioGroup>
                </div>
            </DialogContent>
        </Dialog>
    )
}